// 背景效果分为两套：浅色主题用粒子网络，深色主题用极浅的矩阵雨。
(function () {
  let particlesReady = false;
  let matrixContext = null;
  let matrixAnimation = 0;
  let matrixColumns = [];

  function buildParticles() {
    if (particlesReady || typeof window.particlesJS !== "function") return;
    const host = document.getElementById("light-particles");
    if (!host) return;
    window.particlesJS("light-particles", {
      particles: {
        number: {
          value: 52,
          density: { enable: true, value_area: 1100 },
        },
        color: { value: "#556779" },
        shape: { type: "circle" },
        opacity: {
          value: 0.22,
          random: true,
        },
        size: {
          value: 2.4,
          random: true,
        },
        line_linked: {
          enable: true,
          distance: 134,
          color: "#70849a",
          opacity: 0.18,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1.2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: false, mode: "push" },
          resize: true,
        },
        modes: {
          grab: {
            distance: 120,
            line_linked: { opacity: 0.24 },
          },
        },
      },
      retina_detect: true,
    });
    particlesReady = true;
  }

  function resizeMatrix() {
    const canvas = document.getElementById("dark-matrix");
    if (!canvas) return;
    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = Math.floor(window.innerWidth * ratio);
    canvas.height = Math.floor(window.innerHeight * ratio);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    matrixContext = canvas.getContext("2d");
    matrixContext.setTransform(ratio, 0, 0, ratio, 0, 0);
    const columns = Math.floor(window.innerWidth / 18);
    matrixColumns = Array.from({ length: columns }, () => Math.random() * window.innerHeight);
  }

  function drawMatrix() {
    const canvas = document.getElementById("dark-matrix");
    if (!canvas || !matrixContext) return;
    matrixContext.fillStyle = "rgba(13, 20, 27, 0.065)";
    matrixContext.fillRect(0, 0, window.innerWidth, window.innerHeight);
    matrixContext.font = "13px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
    matrixContext.fillStyle = "rgba(134, 222, 168, 0.16)";
    const tokens = [
      "int",
      "void",
      "class",
      "const",
      "struct",
      "return",
      "auto",
      "for",
      "if",
      "while",
      "switch",
      "template",
      "public",
      "private",
      "static",
      "nullptr",
      "using",
      "#include",
    ];
    matrixColumns = matrixColumns.map((y, index) => {
      const x = index * 18;
      const token = tokens[Math.floor(Math.random() * tokens.length)];
      matrixContext.fillText(token, x, y);
      if (y > window.innerHeight + Math.random() * 220) {
        return Math.random() * -140;
      }
      return y + 15 + Math.random() * 4;
    });
    matrixAnimation = window.requestAnimationFrame(drawMatrix);
  }

  function startMatrix() {
    if (matrixAnimation) return;
    resizeMatrix();
    drawMatrix();
  }

  function stopMatrix() {
    if (!matrixAnimation) return;
    window.cancelAnimationFrame(matrixAnimation);
    matrixAnimation = 0;
  }

  function syncBackgrounds() {
    const dark = document.body.classList.contains("dark-theme");
    buildParticles();
    if (dark) {
      startMatrix();
    } else {
      stopMatrix();
    }
  }

  window.addEventListener("resize", () => {
    if (document.body.classList.contains("dark-theme")) {
      resizeMatrix();
    }
  });

  window.SiteBackgrounds = {
    syncBackgrounds,
  };
})();
