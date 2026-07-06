function closeProjectImageLightbox() {
  const lightbox = document.querySelector(".project-lightbox");
  if (!lightbox) return;
  lightbox.remove();
  document.body.classList.remove("project-lightbox-open");
}

function getProjectGallery(imageButton) {
  const grid = imageButton.closest(".project-image-grid");
  const buttons = grid ? Array.from(grid.querySelectorAll(".project-image-button")) : [imageButton];
  const items = buttons.map((button) => ({
    src: button.dataset.lightboxSrc || "",
    caption: button.dataset.lightboxCaption || "",
  }));
  const index = Math.max(0, buttons.indexOf(imageButton));
  return { items, index };
}

function showProjectLightboxImage(lightbox, index) {
  const items = JSON.parse(lightbox.dataset.galleryItems || "[]");
  if (!items.length) return;
  const safeIndex = (index + items.length) % items.length;
  const item = items[safeIndex];
  const image = lightbox.querySelector(".project-lightbox-content img");
  const caption = lightbox.querySelector(".project-lightbox-content figcaption");
  const counter = lightbox.querySelector(".project-lightbox-counter");
  lightbox.dataset.galleryIndex = String(safeIndex);
  if (image) {
    image.src = item.src;
    image.alt = item.caption;
  }
  if (caption) caption.textContent = item.caption;
  if (counter) counter.textContent = `${safeIndex + 1} / ${items.length}`;
}

function moveProjectLightbox(direction) {
  const lightbox = document.querySelector(".project-lightbox");
  if (!lightbox) return;
  const current = Number(lightbox.dataset.galleryIndex || "0");
  showProjectLightboxImage(lightbox, current + direction);
}

function openProjectImageLightbox(src, caption, galleryItems = [{ src, caption }], startIndex = 0) {
  closeProjectImageLightbox();

  const lightbox = document.createElement("div");
  lightbox.className = "project-lightbox";
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.dataset.galleryItems = JSON.stringify(galleryItems);
  lightbox.dataset.galleryIndex = String(startIndex);
  const hasMultipleImages = galleryItems.length > 1;
  lightbox.innerHTML = `
    <button class="project-lightbox-close" type="button" aria-label="Close image">×</button>
    ${
      hasMultipleImages
        ? `<button class="project-lightbox-nav project-lightbox-prev" type="button" aria-label="Previous image" data-lightbox-move="-1">‹</button>
           <button class="project-lightbox-nav project-lightbox-next" type="button" aria-label="Next image" data-lightbox-move="1">›</button>`
        : ""
    }
    <figure class="project-lightbox-content">
      <img src="${escapeHtml(src)}" alt="${escapeHtml(caption)}" />
      <figcaption>${escapeHtml(caption)}</figcaption>
      ${hasMultipleImages ? `<div class="project-lightbox-counter"></div>` : ""}
    </figure>
  `;
  document.body.appendChild(lightbox);
  document.body.classList.add("project-lightbox-open");
  showProjectLightboxImage(lightbox, startIndex);
}

function initProjectImageLightbox() {
  if (document.body.dataset.projectLightboxBound === "true") return;

  document.addEventListener("click", (event) => {
    const imageButton = event.target.closest(".project-image-button");
    if (imageButton) {
      const gallery = getProjectGallery(imageButton);
      const item = gallery.items[gallery.index] || {};
      openProjectImageLightbox(item.src, item.caption, gallery.items, gallery.index);
      return;
    }

    if (event.target.closest(".project-lightbox-close")) {
      closeProjectImageLightbox();
      return;
    }

    const navButton = event.target.closest(".project-lightbox-nav");
    if (navButton) {
      moveProjectLightbox(Number(navButton.dataset.lightboxMove || "0"));
      return;
    }

    const lightbox = event.target.closest(".project-lightbox");
    if (!lightbox) return;

    const clickedMedia = event.target.closest(
      ".project-lightbox-content img, .project-lightbox-content figcaption, .project-lightbox-counter",
    );
    if (!clickedMedia) {
      closeProjectImageLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeProjectImageLightbox();
    } else if (event.key === "ArrowLeft") {
      moveProjectLightbox(-1);
    } else if (event.key === "ArrowRight") {
      moveProjectLightbox(1);
    }
  });

  document.body.dataset.projectLightboxBound = "true";
}
