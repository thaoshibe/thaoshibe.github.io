(() => {
  "use strict";

  // Three sky modes. Each maps to a COLOR scheme (data-theme: light/dark) and a
  // SKY image (data-sky). Sunset and Night share the dark color scheme (their
  // skies are dark), so all existing dark-mode CSS applies to both; only the
  // background image differs.
  const modes = ["midday", "night"];
  const config = {
    midday: { theme: "light", sky: "day", label: "☀ Day" },
    night: { theme: "dark", sky: "night", label: "☾ Night" }
  };

  const storageKey = "life-of-thao-theme";

  function applyMode(mode) {
    const c = config[mode] || config.midday;
    const el = document.documentElement;
    el.dataset.theme = c.theme;
    el.dataset.sky = c.sky;
    el.dataset.mode = mode;
  }

  const savedMode = localStorage.getItem(storageKey);
  const preferredMode = window.matchMedia("(prefers-color-scheme: dark)").matches ? "night" : "midday";
  applyMode(modes.includes(savedMode) ? savedMode : preferredMode);

  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector("#theme-toggle");
    if (!toggle) return;

    // Replace the single button with a segmented control showing all options.
    const group = document.createElement("div");
    group.className = "theme-switch";
    group.setAttribute("role", "group");
    group.setAttribute("aria-label", "Theme");

    const label = document.createElement("span");
    label.className = "theme-switch-label";
    label.textContent = "Theme:";
    group.appendChild(label);

    const buttons = modes.map((mode, index) => {
      if (index > 0) group.appendChild(document.createTextNode(", "));
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.themeValue = mode;
      button.textContent = config[mode].label;
      button.addEventListener("click", () => {
        applyMode(mode);
        localStorage.setItem(storageKey, mode);
        update();
      });
      group.appendChild(button);
      return button;
    });

    function update() {
      const current = document.documentElement.dataset.mode;
      buttons.forEach((button) => {
        button.setAttribute("aria-pressed", button.dataset.themeValue === current ? "true" : "false");
      });
    }

    toggle.replaceWith(group);
    update();
  });
})();
