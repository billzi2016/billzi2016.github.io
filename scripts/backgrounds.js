// 背景效果分为两套：浅色主题用粒子网络，深色主题用极浅的矩阵雨。
(function () {
  let particlesReady = false;
  let particleMagnetAnimation = 0;
  let matrixContext = null;
  let matrixAnimation = 0;
  let matrixColumns = [];
  const mobileBackgroundMedia = window.matchMedia(
    "(max-width: 760px), (hover: none) and (pointer: coarse)",
  );
  const pointerState = {
    x: 0,
    y: 0,
    active: false,
  };

  function shouldDisableBackgrounds() {
    return mobileBackgroundMedia.matches;
  }

  function clearParticles() {
    if (!particlesReady) return;

    const particleSystem = window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS;
    if (particleSystem?.fn?.vendors?.destroypJS) {
      particleSystem.fn.vendors.destroypJS();
    }
    const host = document.getElementById("light-particles");
    if (host) host.innerHTML = "";
    particlesReady = false;
  }

  function clearMatrix() {
    const canvas = document.getElementById("dark-matrix");
    if (matrixContext && canvas) {
      matrixContext.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }
    matrixContext = null;
    matrixColumns = [];
  }

  function animateParticleMagnet() {
    if (shouldDisableBackgrounds()) {
      particleMagnetAnimation = 0;
      return;
    }

    const particleSystem = window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS;
    if (
      particleSystem &&
      pointerState.active &&
      !document.body.classList.contains("dark-theme")
    ) {
      const particles = particleSystem.particles.array || [];
      const radius = 220;
      const innerRadius = 26;

      particles.forEach((particle) => {
        const dx = pointerState.x - particle.x;
        const dy = pointerState.y - particle.y;
        const distanceSq = dx * dx + dy * dy;

        if (distanceSq >= radius * radius || distanceSq <= innerRadius * innerRadius) {
          return;
        }

        const distance = Math.sqrt(distanceSq);
        const pull = (1 - distance / radius) * 0.035;
        particle.x += dx * pull;
        particle.y += dy * pull;
      });
    }

    particleMagnetAnimation = window.requestAnimationFrame(animateParticleMagnet);
  }

  function buildParticles() {
    if (shouldDisableBackgrounds()) return;
    if (particlesReady || typeof window.particlesJS !== "function") return;
    const host = document.getElementById("light-particles");
    if (!host) return;
    window.particlesJS("light-particles", {
      particles: {
        number: {
          value: 96,
          density: { enable: true, value_area: 900 },
        },
        color: { value: "#415b76" },
        shape: { type: "circle" },
        opacity: {
          value: 0.46,
          random: true,
        },
        size: {
          value: 3.1,
          random: true,
        },
        line_linked: {
          enable: true,
          distance: 176,
          color: "#5b7894",
          opacity: 0.42,
          width: 1.2,
        },
        move: {
          enable: true,
          speed: 1.55,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: true,
            rotateX: 900,
            rotateY: 1400,
          },
        },
      },
      interactivity: {
        detect_on: "window",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: false, mode: "push" },
          resize: true,
        },
        modes: {
          grab: {
            distance: 240,
            line_linked: { opacity: 0.58 },
          },
        },
      },
      retina_detect: true,
    });
    particlesReady = true;
    if (!particleMagnetAnimation) {
      animateParticleMagnet();
    }
  }

  function resizeMatrix() {
    if (shouldDisableBackgrounds()) return;
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
    if (shouldDisableBackgrounds()) {
      stopMatrix();
      clearMatrix();
      return;
    }

    const canvas = document.getElementById("dark-matrix");
    if (!canvas || !matrixContext) return;
    // 加重每帧的淡出覆盖，缩短残影停留时间，避免积出明显竖条。
    matrixContext.fillStyle = "rgba(13, 20, 27, 0.12)";
    matrixContext.fillRect(0, 0, window.innerWidth, window.innerHeight);
    matrixContext.font = "13px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
    matrixContext.fillStyle = "rgba(122, 255, 158, 0.44)";
    const glyphs =
      "intvoidclassconststructreturnautoforifwhileswitchtemplatepublicprivatestaticnullptrusinginclude0123456789<>{}();:*&#_";
    matrixColumns = matrixColumns.map((y, index) => {
      const x = index * 18;
      const glyph = glyphs[Math.floor(Math.random() * glyphs.length)];
      matrixContext.fillText(glyph, x, y);
      if (y > window.innerHeight + Math.random() * 220) {
        return Math.random() * -140;
      }
      // 放慢下落速度，让背景更稳一点，不会显得太躁。
      return y + 5 + Math.random() * 1.2;
    });
    matrixAnimation = window.requestAnimationFrame(drawMatrix);
  }

  function startMatrix() {
    if (shouldDisableBackgrounds()) return;
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
    if (shouldDisableBackgrounds()) {
      stopMatrix();
      clearMatrix();
      clearParticles();
      return;
    }

    const dark = document.body.classList.contains("dark-theme");
    buildParticles();
    if (dark) {
      startMatrix();
    } else {
      stopMatrix();
    }
  }

  window.addEventListener("resize", () => {
    if (shouldDisableBackgrounds()) {
      syncBackgrounds();
      return;
    }

    if (document.body.classList.contains("dark-theme")) {
      resizeMatrix();
    }
  });

  window.addEventListener("pointermove", (event) => {
    if (shouldDisableBackgrounds()) return;
    pointerState.x = event.clientX;
    pointerState.y = event.clientY;
    pointerState.active = true;
  });

  mobileBackgroundMedia.addEventListener("change", syncBackgrounds);

  window.addEventListener("mouseout", (event) => {
    if (!event.relatedTarget) {
      pointerState.active = false;
    }
  });

  window.SiteBackgrounds = {
    syncBackgrounds,
  };
})();
