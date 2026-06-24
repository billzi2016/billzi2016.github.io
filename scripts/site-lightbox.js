function closeProjectImageLightbox() {
  const lightbox = document.querySelector(".project-lightbox");
  if (!lightbox) return;
  lightbox.remove();
  document.body.classList.remove("project-lightbox-open");
}

function openProjectImageLightbox(src, caption) {
  closeProjectImageLightbox();

  const lightbox = document.createElement("div");
  lightbox.className = "project-lightbox";
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.style.cssText =
    "position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;padding:56px 24px 24px;background:rgba(10,14,18,0.9);cursor:zoom-out;overflow:hidden;";
  lightbox.innerHTML = `
    <button class="project-lightbox-close" type="button" aria-label="Close image" style="position:fixed;top:16px;right:16px;z-index:2147483647;width:64px;height:64px;border:1px solid rgba(255,255,255,0.48);border-radius:999px;color:#fff;background:rgba(0,0,0,0.42);font-size:3rem;line-height:1;cursor:pointer;">×</button>
    <figure class="project-lightbox-content" style="display:flex;flex-direction:column;align-items:center;justify-content:center;width:calc(100vw - 48px);max-height:calc(100vh - 80px);margin:0;cursor:auto;">
      <img src="${escapeHtml(src)}" alt="${escapeHtml(caption)}" style="display:block;width:auto;height:auto;max-width:100%;max-height:calc(100vh - 112px);object-fit:contain;border-radius:8px;background:rgba(255,255,255,0.95);" />
      <figcaption style="display:block;flex:0 0 auto;max-width:100%;margin-top:12px;color:#fff;font-size:1rem;line-height:1.4;text-align:center;overflow-wrap:anywhere;">${escapeHtml(caption)}</figcaption>
    </figure>
  `;
  document.body.appendChild(lightbox);
  document.body.classList.add("project-lightbox-open");
}

function initProjectImageLightbox() {
  if (document.body.dataset.projectLightboxBound === "true") return;

  document.addEventListener("click", (event) => {
    const imageButton = event.target.closest(".project-image-button");
    if (imageButton) {
      openProjectImageLightbox(imageButton.dataset.lightboxSrc, imageButton.dataset.lightboxCaption);
      return;
    }

    if (event.target.closest(".project-lightbox-close")) {
      closeProjectImageLightbox();
      return;
    }

    const lightbox = event.target.closest(".project-lightbox");
    if (!lightbox) return;

    const clickedMedia = event.target.closest(".project-lightbox-content img, .project-lightbox-content figcaption");
    if (!clickedMedia) {
      closeProjectImageLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeProjectImageLightbox();
    }
  });

  document.body.dataset.projectLightboxBound = "true";
}
