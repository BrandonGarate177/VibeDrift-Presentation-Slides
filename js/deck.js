/* ==========================================================================
   deck.js — navigation, progress rail, theme.
   No dependencies, no build step. Loaded with `defer`.
   ========================================================================== */

(() => {
  "use strict";

  const slides = Array.from(document.querySelectorAll(".slide"));
  if (slides.length === 0) return;

  const rail = document.querySelector(".rail");
  const counterNow = document.querySelector("[data-counter-now]");
  const counterTotal = document.querySelector("[data-counter-total]");
  const live = document.querySelector("[data-live]");

  let current = -1;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const pad = (n) => String(n).padStart(2, "0");

  /* --- Give every slide a stable id so deep links survive a reorder ------- */
  slides.forEach((slide, i) => {
    if (!slide.id) slide.id = `slide-${i + 1}`;
  });

  /* --- Build the progress rail ------------------------------------------- */
  if (rail) {
    slides.forEach((slide, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "rail__dot";
      dot.dataset.index = String(i);
      const title = slide.dataset.title || slide.querySelector("h1, h2, .display, .h1, .h2")?.textContent?.trim();
      dot.setAttribute("aria-label", title ? `Slide ${i + 1}: ${title}` : `Slide ${i + 1}`);
      rail.appendChild(dot);
    });

    rail.addEventListener("click", (e) => {
      const dot = e.target.closest(".rail__dot");
      if (dot) go(Number(dot.dataset.index));
    });
  }

  if (counterTotal) counterTotal.textContent = pad(slides.length);

  /* --- Navigation --------------------------------------------------------- */

  function go(index) {
    const i = Math.max(0, Math.min(slides.length - 1, index));
    slides[i].scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  }

  function setCurrent(index) {
    if (index === current) return;
    current = index;

    if (rail) {
      rail.querySelectorAll(".rail__dot").forEach((dot, i) => {
        dot.setAttribute("aria-current", i === index ? "true" : "false");
      });
    }
    // The rail and counter are fixed, so they sit on top of whatever the
    // current slide's background happens to be. Tell them which it is.
    const slide = slides[index];
    document.body.dataset.context = slide.classList.contains("slide--accent")
      ? "accent"
      : slide.classList.contains("slide--invert")
        ? "invert"
        : "default";

    // Only the current slide's recording plays; the rest sit on their poster.
    document.querySelectorAll("video[data-autoplay]").forEach((v) => {
      if (slide.contains(v)) v.play().catch(() => {});
      else v.pause();
    });

    if (counterNow) counterNow.textContent = pad(index + 1);
    if (live) live.textContent = `Slide ${index + 1} of ${slides.length}`;

    const hash = `#${slides[index].id}`;
    if (location.hash !== hash) {
      history.replaceState(null, "", hash);
    }
  }

  /* --- Track the slide filling most of the viewport ----------------------- */

  const observer = new IntersectionObserver(
    (entries) => {
      let best = null;
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        if (!best || entry.intersectionRatio > best.intersectionRatio) best = entry;
      }
      if (best) setCurrent(slides.indexOf(best.target));
    },
    { threshold: [0.25, 0.5, 0.75, 0.95] }
  );
  slides.forEach((slide) => observer.observe(slide));

  /* --- Keyboard ----------------------------------------------------------- */

  const NEXT = new Set(["ArrowDown", "ArrowRight", "PageDown", " ", "Spacebar"]);
  const PREV = new Set(["ArrowUp", "ArrowLeft", "PageUp"]);

  document.addEventListener("keydown", (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const tag = document.activeElement?.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA") return;
    // A focused button (rail dot, copy) owns Space and Enter; arrows still navigate.
    if (tag === "BUTTON" && (e.key === " " || e.key === "Spacebar" || e.key === "Enter")) return;

    if (NEXT.has(e.key)) {
      e.preventDefault();
      go(current + 1);
    } else if (PREV.has(e.key)) {
      e.preventDefault();
      go(current - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      go(0);
    } else if (e.key === "End") {
      e.preventDefault();
      go(slides.length - 1);
    } else if (e.key === "t" || e.key === "T") {
      toggleTheme();
    } else if (e.key === "f" || e.key === "F") {
      toggleFullscreen();
    }
  });

  /* --- Theme -------------------------------------------------------------- */

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("deck-theme", theme);
    } catch {
      /* private window or blocked storage; the toggle still works this session */
    }
  }

  function toggleTheme() {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
  }

  try {
    const saved = localStorage.getItem("deck-theme");
    if (saved === "dark" || saved === "light") applyTheme(saved);
  } catch {
    /* no stored preference available; fall through to the default light theme */
  }

  document.querySelector("[data-theme-toggle]")?.addEventListener("click", toggleTheme);

  /* --- Fullscreen --------------------------------------------------------- */

  function toggleFullscreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen?.();
    } else {
      document.documentElement.requestFullscreen?.().catch(() => {
        /* browser refused; presenting in a window is fine */
      });
    }
  }

  /* --- Copy buttons ------------------------------------------------------- */

  document.querySelectorAll("[data-copy]").forEach((btn) => {
    const target = document.querySelector(btn.dataset.copy);
    if (!target) return;
    btn.addEventListener("click", async () => {
      const text = target.textContent.replace(/^\$\s*/gm, "").trim();
      try {
        await navigator.clipboard.writeText(text);
        btn.textContent = "copied";
      } catch {
        btn.textContent = "select it";
      }
      setTimeout(() => { btn.textContent = "copy"; }, 1400);
    });
  });

  /* --- Land on the deep-linked slide on load ------------------------------ */

  if (location.hash) {
    const target = document.querySelector(location.hash);
    if (target && slides.includes(target)) {
      requestAnimationFrame(() => target.scrollIntoView({ behavior: "auto", block: "start" }));
    }
  }
  setCurrent(0);
})();
