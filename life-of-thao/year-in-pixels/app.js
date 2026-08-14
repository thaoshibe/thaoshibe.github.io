(() => {
  "use strict";

  const data = window.PIXEL_DATA;
  const yearsContainer = document.querySelector("#years");
  const card = document.querySelector("#day-card");
  const formatter = new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" });
  const monthFormatter = new Intl.DateTimeFormat("en", { month: "short" });
  const today = new Date();
  const todayKey = dateKey(today.getFullYear(), today.getMonth(), today.getDate());

  const yearsFromDays = Object.keys(data.days || {}).map((key) => Number(key.slice(0, 4)));
  const configuredYears = Array.isArray(data.years) ? data.years : [data.year];
  const years = [...new Set([...configuredYears, ...yearsFromDays].filter(Number.isFinite))].sort((a, b) => b - a);

  document.querySelector("#title").textContent = years.length === 1 ? `${years[0]} in Pixels` : "Years in Pixels";

  function dateKey(year, month, day) {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  }

  function isInLoggingPeriod(key) {
    return (data.loggingPeriods || []).some(({ start, end }) => key >= start && (!end || key <= end));
  }

  function renderYear(year) {
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
      const entry = data.days[key];
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
        if (!isInLoggingPeriod(key) || key > todayKey) pixel.classList.add("ghost");
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
    if (data.yearNotes?.[year]) {
      const note = document.createElement("p");
      note.className = "year-note";
      note.textContent = data.yearNotes[year];
      section.appendChild(note);
    }
    yearsContainer.appendChild(section);
  }

  years.forEach(renderYear);

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
})();
