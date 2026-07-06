(function () {
  const pageSelector = ".page";
  let navigating = false;

  function isPlainLeftClick(event) {
    return event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey;
  }

  function getInternalPageUrl(anchor) {
    if (!anchor || anchor.target || anchor.hasAttribute("download")) return null;
    const url = new URL(anchor.href, window.location.href);
    if (url.origin !== window.location.origin) return null;
    if (!url.pathname.endsWith(".html") && url.pathname !== "/" && !url.pathname.endsWith("/")) return null;
    if (url.hash && url.pathname === window.location.pathname && url.search === window.location.search) return null;
    return url;
  }

  async function renderFetchedPage(url, pushState) {
    if (navigating) return;
    navigating = true;
    if (typeof saveMusicPlaybackState === "function") {
      saveMusicPlaybackState();
    }

    try {
      const response = await fetch(url.href, { credentials: "same-origin" });
      if (!response.ok) throw new Error(`Navigation failed: ${response.status}`);

      const html = await response.text();
      const nextDocument = new DOMParser().parseFromString(html, "text/html");
      const currentPage = document.querySelector(pageSelector);
      const nextPage = nextDocument.querySelector(pageSelector);
      if (!currentPage || !nextPage) {
        window.location.href = url.href;
        return;
      }

      const audio = document.getElementById("site-audio-player");
      if (audio && currentPage.contains(audio)) {
        audio.style.display = "none";
        document.body.appendChild(audio);
      }

      document.title = nextDocument.title;
      document.body.dataset.page = nextDocument.body.dataset.page || "";
      currentPage.replaceWith(nextPage);

      if (pushState) {
        window.history.pushState({}, "", url.href);
      }

      await window.SiteApp?.mountPage(document.body.dataset.page);
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    } catch (error) {
      console.warn("Falling back to full page navigation.", error);
      window.location.href = url.href;
    } finally {
      navigating = false;
    }
  }

  document.addEventListener("click", (event) => {
    if (!isPlainLeftClick(event)) return;
    const target = event.target;
    if (!(target instanceof Element)) return;
    const anchor = target.closest("a[href]");
    const url = getInternalPageUrl(anchor);
    if (!url) return;

    event.preventDefault();
    renderFetchedPage(url, true);
  });

  window.addEventListener("popstate", () => {
    renderFetchedPage(new URL(window.location.href), false);
  });
})();
