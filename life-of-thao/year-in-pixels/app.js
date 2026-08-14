(() => {
  "use strict";

  const data = window.PIXEL_DATA;
  const yearsContainer = document.querySelector("#years");
  const card = document.querySelector("#day-card");
  const switcher = document.querySelector("#view-switch");
  const formatter = new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" });
  const monthFormatter = new Intl.DateTimeFormat("en", { month: "short" });
  const today = new Date();
  const todayKey = dateKey(today.getFullYear(), today.getMonth(), today.getDate());

  // Support the multi-view shape, but still render a flat {days, ...} config.
  const views = data.views || [{
    id: "days",
    label: "Days",
    days: data.days,
    loggingPeriods: data.loggingPeriods,
    yearNotes: data.yearNotes
  }];

  const configuredYears = Array.isArray(data.years) ? data.years : (data.year ? [data.year] : []);
  const yearsFromViews = views.flatMap((view) => Object.keys(view.days || {})).map((key) => Number(key.slice(0, 4)));
  const years = [...new Set([...configuredYears, ...yearsFromViews].filter(Number.isFinite))].sort((a, b) => b - a);

  document.querySelector("#title").textContent = years.length === 1 ? `${years[0]}-in-pixels` : "years-in-pixels";

  function dateKey(year, month, day) {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  }

  function isInLoggingPeriod(view, key) {
    return (view.loggingPeriods || []).some(({ start, end }) => key >= start && (!end || key <= end));
  }

  // Only render the years a view actually has data for (fall back to this year).
  function viewYears(view) {
    const present = new Set(Object.keys(view.days || {}).map((key) => Number(key.slice(0, 4))));
    const list = years.filter((year) => present.has(year));
    return list.length ? list : [today.getFullYear()];
  }

  function renderYear(view, year) {
    const section = document.createElement("section");
    section.className = "year";
    const heading = document.createElement("h2");
    heading.textContent = `${year}${data.yearEmojis?.[year] ? ` ${data.yearEmojis[year]}` : ""}`;

    const firstDate = new Date(year, 0, 1);
    const daysInYear = Math.round((new Date(year + 1, 0, 1) - firstDate) / 86400000);
    const leadingDays = firstDate.getDay();
    const weekCount = Math.ceil((leadingDays + daysInYear) / 7);

    const calendar = document.createElement("div");
    calendar.className = "calendar";
    const monthLabels = document.createElement("div");
    monthLabels.className = "month-labels";
    monthLabels.style.setProperty("--weeks", weekCount);

    for (let month = 0; month < 12; month += 1) {
      const label = document.createElement("span");
      const firstOfMonth = new Date(year, month, 1);
      const elapsedDays = Math.round((firstOfMonth - firstDate) / 86400000);
      label.textContent = monthFormatter.format(firstOfMonth);
      label.style.gridColumn = String(Math.floor((leadingDays + elapsedDays) / 7) + 1);
      monthLabels.appendChild(label);
    }

    const weekdayLabels = document.createElement("div");
    weekdayLabels.className = "weekday-labels";
    weekdayLabels.innerHTML = "<span></span><span>Mon</span><span></span><span>Wed</span><span></span><span>Fri</span><span></span>";
    const grid = document.createElement("div");
    grid.className = "days";
    grid.style.setProperty("--weeks", weekCount);

    for (let blank = 0; blank < leadingDays; blank += 1) {
      const empty = document.createElement("span");
      empty.className = "day outside-year";
      grid.appendChild(empty);
    }

    for (let offset = 0; offset < daysInYear; offset += 1) {
      const date = new Date(year, 0, offset + 1);
      const month = date.getMonth();
      const day = date.getDate();
      const key = dateKey(year, month, day);
      const entry = view.days[key];
      const pixel = document.createElement(entry ? "button" : "span");
      const isToday = key === todayKey;
      pixel.className = "day";
      pixel.title = formatter.format(date);

      if (entry) {
        pixel.type = "button";
        pixel.classList.add("colored");
        pixel.style.setProperty("--day-color", entry.color);
        pixel.setAttribute("aria-label", `${pixel.title}: ${entry.label || "colored day"}`);
        pixel.addEventListener("click", (event) => showCard(event.currentTarget, key, entry));
      } else {
        if (!isInLoggingPeriod(view, key) || key > todayKey) pixel.classList.add("ghost");
        if (isToday) pixel.setAttribute("aria-label", `Today: ${pixel.title}`);
        else pixel.setAttribute("aria-hidden", "true");
      }

      if (isToday) {
        pixel.classList.add("current");
        const now = document.createElement("span");
        now.className = "now-label";
        now.setAttribute("aria-hidden", "true");
        now.innerHTML = '<span class="now-spark">✦</span> Now';
        pixel.appendChild(now);
      }
      grid.appendChild(pixel);
    }

    const trailingDays = weekCount * 7 - leadingDays - daysInYear;
    for (let blank = 0; blank < trailingDays; blank += 1) {
      const empty = document.createElement("span");
      empty.className = "day outside-year";
      grid.appendChild(empty);
    }

    const gridRow = document.createElement("div");
    gridRow.className = "grid-row";
    gridRow.append(weekdayLabels, grid);
    calendar.append(monthLabels, gridRow);
    section.append(heading, calendar);
    // The color key sits below each year's grid; any year note goes under it.
    if (view.legend?.length) {
      section.appendChild(buildLegend(view.legend));
    }
    if (view.yearNotes?.[year]) {
      const note = document.createElement("p");
      note.className = "year-note";
      note.textContent = view.yearNotes[year];
      section.appendChild(note);
    }
    yearsContainer.appendChild(section);
  }

  function buildLegend(legend) {
    const wrap = document.createElement("div");
    wrap.className = "pixel-legend";
    legend.forEach((item) => {
      const key = document.createElement("span");
      key.className = "legend-key";
      const swatch = document.createElement("span");
      swatch.className = "legend-swatch";
      if (item.empty) {
        swatch.classList.add("empty");
      } else {
        swatch.style.setProperty("--swatch", item.color);
      }
      swatch.setAttribute("aria-hidden", "true");
      key.append(swatch, `${item.emoji ? `${item.emoji} ` : ""}${item.label || item.id}`);
      wrap.appendChild(key);
    });
    return wrap;
  }

  function renderView(view) {
    card.hidden = true;
    yearsContainer.replaceChildren();
    viewYears(view).forEach((year) => renderYear(view, year));

    switcher.querySelectorAll("[data-view]").forEach((button) => {
      const active = button.dataset.view === view.id;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function buildTabs() {
    if (views.length < 2) {
      switcher.hidden = true;
      return;
    }
    views.forEach((view) => {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.view = view.id;
      button.textContent = view.label;
      button.setAttribute("aria-pressed", "false");
      button.addEventListener("click", () => renderView(view));
      switcher.appendChild(button);
    });
    switcher.hidden = false;
  }

  function showCard(anchor, key, entry) {
    const [year, month, day] = key.split("-").map(Number);
    card.replaceChildren();
    const date = document.createElement("small");
    date.textContent = formatter.format(new Date(year, month - 1, day));
    const title = document.createElement("strong");
    title.textContent = entry.label || "A colored day";
    card.append(date, title);
    if (entry.description) {
      const description = document.createElement("p");
      description.textContent = entry.description;
      card.appendChild(description);
    }
    card.hidden = false;
    const rect = anchor.getBoundingClientRect();
    card.style.left = `${Math.min(rect.right + 8, window.innerWidth - card.offsetWidth - 12)}px`;
    card.style.top = `${Math.min(rect.top, window.innerHeight - card.offsetHeight - 12)}px`;
  }

  document.addEventListener("pointerdown", (event) => {
    if (!event.target.closest(".colored") && !event.target.closest("#day-card")) card.hidden = true;
  });

  buildTabs();
  renderView(views[0]);
})();
