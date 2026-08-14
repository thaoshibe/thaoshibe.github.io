(() => {
  "use strict";

  const storageKey = "life-of-thao-theme";
  const savedTheme = localStorage.getItem(storageKey);
  const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const initialTheme = savedTheme === "dark" || savedTheme === "light" ? savedTheme : preferredTheme;

  document.documentElement.dataset.theme = initialTheme;

  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector("#theme-toggle");
    if (!toggle) return;

    function updateToggle() {
      const isDark = document.documentElement.dataset.theme === "dark";
      toggle.textContent = isDark ? "☀ Light" : "☾ Dark";
      toggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} theme`);
    }

    toggle.addEventListener("click", () => {
      const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = nextTheme;
      localStorage.setItem(storageKey, nextTheme);
      updateToggle();
    });

    updateToggle();
  });
})();
