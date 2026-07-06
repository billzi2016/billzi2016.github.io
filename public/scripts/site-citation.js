function bindCopyButtons(lang) {
  document.querySelectorAll(".pub-copy-btn").forEach((button) => {
    button.addEventListener("click", async () => {
      const bibtex = button.getAttribute("data-bibtex");
      if (!bibtex) return;
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(bibtex);
        } else {
          const helper = document.createElement("textarea");
          helper.value = bibtex;
          helper.setAttribute("readonly", "readonly");
          helper.style.position = "fixed";
          helper.style.opacity = "0";
          document.body.appendChild(helper);
          helper.select();
          document.execCommand("copy");
          helper.remove();
        }
        button.textContent = translations.common[lang].copied;
        button.classList.add("is-copied");
        window.setTimeout(() => {
          const currentLang = localStorage.getItem("site-lang") || "en";
          button.textContent = translations.common[currentLang].citePaper;
          button.classList.remove("is-copied");
        }, 1400);
      } catch (error) {
        console.error("Failed to copy BibTeX.", error);
      }
    });
  });
}
