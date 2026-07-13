const projectImageSizeCache = new Map();
let activeProjectPhotoSwipe = null;
let pendingProjectPhotoSwipeClose = false;

function loadProjectImageSize(src) {
  if (projectImageSizeCache.has(src)) return projectImageSizeCache.get(src);

  const sizePromise = new Promise((resolve) => {
    const image = new Image();
    image.onload = () => {
      resolve({
        width: image.naturalWidth || 1600,
        height: image.naturalHeight || 1000,
      });
    };
    image.onerror = () => {
      resolve({ width: 1600, height: 1000 });
    };
    image.src = src;
  });

  projectImageSizeCache.set(src, sizePromise);
  return sizePromise;
}

function getProjectGallery(imageButton) {
  const grid = imageButton.closest(".project-image-grid");
  const buttons = grid ? Array.from(grid.querySelectorAll(".project-image-button")) : [imageButton];
  const items = buttons
    .map((button) => {
      const thumbnail = button.querySelector("img");
      return {
        src: button.dataset.lightboxSrc || "",
        caption: button.dataset.lightboxCaption || "",
        element: button,
        thumbSrc: thumbnail ? thumbnail.currentSrc || thumbnail.src : "",
      };
    })
    .filter((item) => item.src);
  const index = Math.max(0, buttons.indexOf(imageButton));
  return { items, index };
}

async function buildProjectPhotoSwipeItems(items) {
  return Promise.all(
    items.map(async (item) => {
      const size = await loadProjectImageSize(item.src);
      return {
        src: item.src,
        width: size.width,
        height: size.height,
        alt: item.caption,
        title: item.caption,
        msrc: item.thumbSrc || item.src,
        element: item.element,
      };
    }),
  );
}

function registerProjectCaption(pswp) {
  pswp.on("uiRegister", () => {
    pswp.ui.registerElement({
      name: "project-caption",
      className: "pswp__project-caption",
      order: 9,
      isButton: false,
      appendTo: "root",
      html: "",
      onInit: (captionElement, instance) => {
        const updateCaption = () => {
          const caption = instance.currSlide?.data?.title || "";
          captionElement.textContent = caption;
          captionElement.hidden = !caption;
        };

        instance.on("change", updateCaption);
        instance.on("afterInit", updateCaption);
        updateCaption();
      },
    });
  });
}

function requestCloseActiveProjectPhotoSwipe() {
  if (!activeProjectPhotoSwipe) return;
  pendingProjectPhotoSwipeClose = true;
  activeProjectPhotoSwipe.close();
}

async function openProjectImageLightbox(gallery) {
  if (!window.PhotoSwipe || !gallery.items.length) return;

  if (activeProjectPhotoSwipe) {
    requestCloseActiveProjectPhotoSwipe();
  }

  const dataSource = await buildProjectPhotoSwipeItems(gallery.items);
  const pswp = new window.PhotoSwipe({
    dataSource,
    index: gallery.index,
    bgOpacity: 0.92,
    wheelToZoom: true,
    mainClass: "project-photoswipe",
    showHideAnimationType: "zoom",
    paddingFn: () => ({
      top: 48,
      right: 24,
      bottom: 64,
      left: 24,
    }),
    closeTitle: "Close image",
    zoomTitle: "Zoom image",
    arrowPrevTitle: "Previous image",
    arrowNextTitle: "Next image",
    errorMsg: "The image cannot be loaded.",
  });

  activeProjectPhotoSwipe = pswp;
  pendingProjectPhotoSwipeClose = false;
  document.body.classList.add("project-lightbox-open");
  registerProjectCaption(pswp);
  pswp.on("openingAnimationEnd", () => {
    if (activeProjectPhotoSwipe === pswp && pendingProjectPhotoSwipeClose) {
      pswp.close();
    }
  });
  pswp.on("destroy", () => {
    if (activeProjectPhotoSwipe === pswp) {
      activeProjectPhotoSwipe = null;
    }
    pendingProjectPhotoSwipeClose = false;
    document.body.classList.remove("project-lightbox-open");
  });
  pswp.init();
}

function initProjectImageLightbox() {
  if (document.body.dataset.projectLightboxBound === "true") return;

  document.addEventListener("click", (event) => {
    const imageButton = event.target.closest(".project-image-button");
    if (!imageButton) return;

    event.preventDefault();
    const gallery = getProjectGallery(imageButton);
    openProjectImageLightbox(gallery).catch((error) => {
      console.warn("Project image lightbox failed to open.", error);
    });
  });

  document.addEventListener(
    "keydown",
    (event) => {
      if (event.key !== "Escape" || !activeProjectPhotoSwipe) return;
      event.preventDefault();
      requestCloseActiveProjectPhotoSwipe();
    },
    true,
  );

  document.body.dataset.projectLightboxBound = "true";
}

window.initProjectImageLightbox = initProjectImageLightbox;
