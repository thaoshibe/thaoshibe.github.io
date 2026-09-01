(function () {
  'use strict';

  var modes = ['midday', 'night'];
  var config = {
    midday: { theme: 'light', sky: 'day', label: '☀ Day' },
    night: { theme: 'dark', sky: 'night', label: '☾ Night' }
  };
  var storageKey = 'four-little-paws-theme';

  function applyMode(mode) {
    var setting = config[mode] || config.midday;
    document.documentElement.dataset.theme = setting.theme;
    document.documentElement.dataset.sky = setting.sky;
    document.documentElement.dataset.mode = mode;
  }

  var savedMode;
  try { savedMode = localStorage.getItem(storageKey); } catch (error) { savedMode = null; }
  var preferredMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'midday';
  applyMode(modes.indexOf(savedMode) > -1 ? savedMode : preferredMode);

  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    var group = document.createElement('div');
    group.className = 'theme-switch';
    group.setAttribute('role', 'group');
    group.setAttribute('aria-label', 'Theme');

    var label = document.createElement('span');
    label.className = 'theme-switch-label';
    label.textContent = 'Theme:';
    group.appendChild(label);

    var buttons = modes.map(function (mode, index) {
      if (index) group.appendChild(document.createTextNode(', '));
      var button = document.createElement('button');
      button.type = 'button';
      button.dataset.themeValue = mode;
      button.textContent = config[mode].label;
      button.addEventListener('click', function () {
        applyMode(mode);
        try { localStorage.setItem(storageKey, mode); } catch (error) { /* Theme still works. */ }
        update();
      });
      group.appendChild(button);
      return button;
    });

    function update() {
      var current = document.documentElement.dataset.mode;
      buttons.forEach(function (button) {
        button.setAttribute('aria-pressed', button.dataset.themeValue === current ? 'true' : 'false');
      });
    }

    toggle.replaceWith(group);
    update();
  });
}());
