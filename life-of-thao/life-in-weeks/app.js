(() => {
  "use strict";

  const data = window.LIFE_DATA;
  const DAY_MS = 24 * 60 * 60 * 1000;
  const WEEK_MS = 7 * 24 * 60 * 60 * 1000;
  const isPreview = !data.birthDate;
  const birthDate = parseDate(data.birthDate || data.previewBirthDate);
  const today = startOfDay(new Date());
  const totalWeeks = data.yearsToShow * 52;
  const weeksLived = clamp(Math.floor((today - birthDate) / WEEK_MS), 0, totalWeeks);
  const grid = document.querySelector("#life-grid");
  const list = document.querySelector("#memory-list");
  const imageView = document.querySelector("#memory-images");
  const tooltip = document.querySelector("#tooltip");
  let pinnedAnchor = null;

  function parseDate(value) {
    const [year, month, day] = value.split("-").map(Number);
    return new Date(year, month - 1, day);
  }

  function startOfDay(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function addWeeks(date, weeks) {
    const result = new Date(date);
    result.setDate(result.getDate() + weeks * 7);
    return result;
  }

  function formatDate(date) {
    return new Intl.DateTimeFormat("en", {
      month: "short",
      day: "numeric",
      year: "numeric"
    }).format(date);
  }

  function milestoneWeek(milestone) {
    return Math.floor((parseDate(milestone.date) - birthDate) / WEEK_MS);
  }

  function milestoneMap() {
    const map = new Map();

    function addMilestone(milestone) {
      const week = milestoneWeek(milestone);
      if (week >= 0 && week < totalWeeks) {
        const existing = map.get(week) || [];
        existing.push(milestone);
        map.set(week, existing);
      }
    }

    data.milestones.forEach(addMilestone);

    // Birthdays in the compact early-life sections are timeline events,
    // separate from calendar-year markers.
    for (let age = 1; age < 20; age += 1) {
      const birthday = new Date(birthDate);
      birthday.setFullYear(birthDate.getFullYear() + age);
      const month = String(birthday.getMonth() + 1).padStart(2, "0");
      const day = String(birthday.getDate()).padStart(2, "0");
      addMilestone({
        date: `${birthday.getFullYear()}-${month}-${day}`,
        title: String(age)
      });
    }

    return map;
  }

  function renderHeader() {
    document.querySelector("#preview-note").hidden = !isPreview;
    const meta = document.querySelector("#timeline-meta");
    meta.append(`Start date: ${formatDate(parseDate(data.pageStartDate))} · Inspired by `);

    const inspiration = document.createElement("a");
    inspiration.href = "https://busterbenson.com/life-in-weeks";
    inspiration.target = "_blank";
    inspiration.rel = "noopener noreferrer";
    inspiration.textContent = "Buster Benson’s Life in Weeks ↗";
    meta.appendChild(inspiration);

    if (!isPreview) {
      document.querySelector("#intro-copy").textContent =
        `My life since ${formatDate(birthDate)}, where each week is a little square. Memories are written into the weeks when they happened.`;
    }
  }

  function createWeek(weekIndex, milestones) {
    const weekDate = addWeeks(birthDate, weekIndex);
    const memories = milestones.get(weekIndex);
    const isCurrent = weekIndex === weeksLived;
    const week = document.createElement(memories ? "button" : "span");
    week.className = "week";

    if (weekIndex < weeksLived) week.classList.add("lived");
    if (isCurrent) {
      week.classList.add("current");
    }

    if (memories) {
      week.classList.add("has-memory");
      week.type = "button";
      week.dataset.week = weekIndex;
      week.setAttribute("aria-expanded", "false");
      week.setAttribute("aria-label", memories.map((item) => item.title).join(", "));
      week.textContent = memories
        .map((item) => `${item.emoji ? `${item.emoji} ` : ""}${item.title}`)
        .join(" · ");
    } else if (isCurrent) {
      week.innerHTML = '<span class="live-spark" aria-hidden="true">✦</span> Now';
      week.setAttribute("aria-label", `Now, week of ${formatDate(weekDate)}`);
    } else {
      week.setAttribute("aria-hidden", "true");
    }

    if (isCurrent && memories) {
      const liveMarker = document.createElement("span");
      liveMarker.className = "live-marker";
      liveMarker.innerHTML = '<span class="live-spark" aria-hidden="true">✦</span> Now';
      week.append(" · ", liveMarker);
    }

    week.title = memories ? "" : `Week of ${formatDate(weekDate)}`;
    return week;
  }

  function renderTimeline() {
    const milestones = milestoneMap();
    const fragment = document.createDocumentFragment();

    for (let decade = 0; decade < data.yearsToShow; decade += 10) {
      const section = document.createElement("section");
      section.className = "decade";
      section.setAttribute("aria-labelledby", `decade-${decade}`);

      const heading = document.createElement("h2");
      heading.className = "decade-heading";
      heading.id = `decade-${decade}`;
      heading.textContent = decade === 0
        ? "My first ten years"
        : decade === 10
          ? "My teens"
          : `My ${decade}s`;
      section.appendChild(heading);

      const years = document.createElement("div");
      years.className = "years";

      if (decade === 0 || decade === 10) {
        const compactYears = document.createElement("div");
        compactYears.className = "week-row compact-years";
        compactYears.setAttribute("aria-label", `Ages ${decade} through ${decade + 9}`);

        let displayedYear = null;
        const firstWeek = decade * 52;
        const lastWeek = (decade + 10) * 52;
        for (let weekIndex = firstWeek; weekIndex < lastWeek; weekIndex += 1) {
          const calendarYear = addWeeks(birthDate, weekIndex).getFullYear();

          if (calendarYear !== displayedYear) {
            const yearMarker = document.createElement("span");
            yearMarker.className = "year-marker";
            yearMarker.textContent = calendarYear;
            compactYears.appendChild(yearMarker);
            displayedYear = calendarYear;
          }

          compactYears.appendChild(createWeek(weekIndex, milestones));
        }

        years.appendChild(compactYears);
        section.appendChild(years);
        fragment.appendChild(section);
        continue;
      }

      for (let age = decade; age < Math.min(decade + 10, data.yearsToShow); age += 1) {
        const year = document.createElement("div");
        year.className = "year-row";

        const label = document.createElement("div");
        label.className = "year-label";
        label.innerHTML = `<strong>${age}</strong><span>${birthDate.getFullYear() + age}</span>`;
        year.appendChild(label);

        const weekRow = document.createElement("div");
        weekRow.className = "week-row";
        weekRow.setAttribute("aria-label", `Age ${age}`);

        for (let weekOfYear = 0; weekOfYear < 52; weekOfYear += 1) {
          const weekIndex = age * 52 + weekOfYear;
          weekRow.appendChild(createWeek(weekIndex, milestones));
        }

        year.appendChild(weekRow);

        years.appendChild(year);
      }

      section.appendChild(years);
      fragment.appendChild(section);
    }

    const lastTimelineDate = addWeeks(birthDate, totalWeeks - 1);
    if (today >= addWeeks(birthDate, totalWeeks)) {
      const daysBeyond = Math.floor((today - lastTimelineDate) / DAY_MS);
      const beyondNow = document.createElement("p");
      beyondNow.className = "beyond-now";
      beyondNow.innerHTML = '<span class="live-spark" aria-hidden="true">✦</span> ';
      beyondNow.append(
        `Now: ${formatDate(today)} — ${daysBeyond.toLocaleString()} days from ${formatDate(lastTimelineDate)}`
      );
      fragment.appendChild(beyondNow);
    }

    grid.appendChild(fragment);

    wireMemoryInteractions(
      grid,
      ".has-memory",
      (anchor) => milestones.get(Number(anchor.dataset.week))
    );
  }

  function renderMemoryList() {
    const sortedMemories = [...data.milestones].sort(
      (a, b) => parseDate(a.date) - parseDate(b.date)
    );
    const fragment = document.createDocumentFragment();

    sortedMemories.forEach((memory, index) => {
      const row = document.createElement("button");
      row.type = "button";
      row.className = "list-memory";
      row.dataset.memoryIndex = index;
      row.setAttribute("aria-expanded", "false");

      const date = document.createElement("span");
      date.className = "list-memory-date";
      date.textContent = memory.displayDate || formatDate(parseDate(memory.date));

      const title = document.createElement("span");
      title.className = "list-memory-title";
      title.textContent = `${memory.emoji ? `${memory.emoji} ` : ""}${memory.title}`;

      row.append(date, title);
      fragment.appendChild(row);
    });

    list.appendChild(fragment);
    wireMemoryInteractions(
      list,
      ".list-memory",
      (anchor) => [sortedMemories[Number(anchor.dataset.memoryIndex)]]
    );
  }

  function wireMemoryInteractions(container, selector, getMemories) {
    container.addEventListener("click", (event) => {
      const anchor = event.target.closest(selector);
      if (!anchor) return;

      if (pinnedAnchor === anchor) {
        closeTooltip();
        return;
      }

      closeTooltip();
      pinnedAnchor = anchor;
      pinnedAnchor.setAttribute("aria-expanded", "true");
      tooltip.classList.add("pinned");
      showTooltip(anchor, getMemories(anchor));
    });

    container.addEventListener("pointerover", (event) => {
      const anchor = event.target.closest(selector);
      if (anchor && event.pointerType !== "touch" && !pinnedAnchor) {
        showTooltip(anchor, getMemories(anchor));
      }
    });

    container.addEventListener("pointerout", (event) => {
      const anchor = event.target.closest(selector);
      if (!anchor || event.pointerType === "touch" || pinnedAnchor) return;
      if (anchor.contains(event.relatedTarget)) return;
      if (event.relatedTarget?.closest?.("#tooltip")) return;
      tooltip.hidden = true;
    });
  }

  function renderImageView() {
    const imageMemories = [...data.milestones]
      .filter((memory) => memory.image)
      .sort((a, b) => parseDate(a.date) - parseDate(b.date));
    const fragment = document.createDocumentFragment();

    imageMemories.forEach((memory, index) => {
      const item = document.createElement("button");
      item.type = "button";
      item.className = "image-memory";
      item.dataset.memoryIndex = index;
      item.setAttribute("aria-expanded", "false");
      item.setAttribute(
        "aria-label",
        `${memory.displayDate || formatDate(parseDate(memory.date))}: ${memory.title}`
      );

      const image = document.createElement("img");
      image.src = memory.image;
      image.alt = memory.imageAlt || memory.title;
      image.loading = "lazy";
      item.appendChild(image);
      fragment.appendChild(item);
    });

    imageView.appendChild(fragment);
    wireMemoryInteractions(
      imageView,
      ".image-memory",
      (anchor) => [imageMemories[Number(anchor.dataset.memoryIndex)]]
    );
  }

  function setupViewSwitch() {
    const buttons = document.querySelectorAll(".view-switch [data-view]");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const view = button.dataset.view;
        closeTooltip();
        grid.hidden = view !== "weeks";
        list.hidden = view !== "list";
        imageView.hidden = view !== "images";

        buttons.forEach((item) => {
          const active = item === button;
          item.classList.toggle("active", active);
          item.setAttribute("aria-pressed", String(active));
        });
      });
    });

    document.querySelector('[data-action="jump-now"]').addEventListener("click", () => {
      const weeksButton = document.querySelector('[data-view="weeks"]');
      weeksButton.click();

      const now = grid.querySelector(".current") || grid.querySelector(".beyond-now");
      if (now) {
        now.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
      }
    });
  }

  function showTooltip(anchor, memories) {
    tooltip.replaceChildren();
    memories.forEach((memory) => {
      const item = document.createElement("div");
      const date = parseDate(memory.date);

      if (memory.image) {
        const memoryImage = document.createElement("img");
        memoryImage.className = "tooltip-image";
        memoryImage.src = memory.image;
        memoryImage.alt = memory.imageAlt || memory.title;
        memoryImage.loading = "lazy";
        item.appendChild(memoryImage);
      }

      const dateLine = document.createElement("p");
      dateLine.className = "tooltip-date";
      dateLine.textContent = memory.displayDate || formatDate(date);
      item.appendChild(dateLine);

      const title = document.createElement("p");
      title.className = "tooltip-title";
      if (memory.emoji) {
        const emoji = document.createElement("span");
        emoji.textContent = memory.emoji;
        emoji.setAttribute("aria-hidden", "true");
        title.appendChild(emoji);
      }
      title.append(memory.title);
      item.appendChild(title);

      const description = memory.description || memory.note;
      if (description) {
        const descriptionLine = document.createElement("p");
        descriptionLine.className = "tooltip-note";
        descriptionLine.textContent = description;
        item.appendChild(descriptionLine);
      }

      if (memory.link) {
        const memoryLink = document.createElement("a");
        memoryLink.className = "tooltip-link";
        memoryLink.href = memory.link;
        memoryLink.target = "_blank";
        memoryLink.rel = "noopener noreferrer";
        memoryLink.textContent = memory.linkLabel || "Open link ↗";
        item.appendChild(memoryLink);
      }

      tooltip.appendChild(item);
    });
    tooltip.hidden = false;

    positionTooltip(anchor);
  }

  function positionTooltip(anchor) {
    const gap = 10;
    const edge = 12;
    const anchorRect = anchor.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    const fitsRight = anchorRect.right + gap + tooltipRect.width <= window.innerWidth - edge;
    const fitsLeft = anchorRect.left - gap - tooltipRect.width >= edge;
    let left;
    let top;

    if (fitsRight) {
      left = anchorRect.right + gap;
      top = anchorRect.top + anchorRect.height / 2 - tooltipRect.height / 2;
      tooltip.dataset.placement = "right";
    } else if (fitsLeft) {
      left = anchorRect.left - gap - tooltipRect.width;
      top = anchorRect.top + anchorRect.height / 2 - tooltipRect.height / 2;
      tooltip.dataset.placement = "left";
    } else {
      left = anchorRect.left + anchorRect.width / 2 - tooltipRect.width / 2;
      top = anchorRect.top - gap - tooltipRect.height;
      if (top < edge) top = anchorRect.bottom + gap;
      tooltip.dataset.placement = top < anchorRect.top ? "top" : "bottom";
    }

    tooltip.style.left = `${clamp(left, edge, window.innerWidth - tooltipRect.width - edge)}px`;
    tooltip.style.top = `${clamp(top, edge, window.innerHeight - tooltipRect.height - edge)}px`;
  }

  function hideTooltip(event) {
    if (
      !event.target.closest(".has-memory") &&
      !event.target.closest(".list-memory") &&
      !event.target.closest(".image-memory") &&
      !event.target.closest("#tooltip")
    ) {
      closeTooltip();
    }
  }

  function closeTooltip() {
    if (pinnedAnchor) pinnedAnchor.setAttribute("aria-expanded", "false");
    pinnedAnchor = null;
    tooltip.classList.remove("pinned");
    tooltip.hidden = true;
  }

  document.addEventListener("pointerdown", hideTooltip);
  tooltip.addEventListener("pointerleave", () => {
    if (!pinnedAnchor) tooltip.hidden = true;
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeTooltip();
  });
  document.addEventListener("scroll", () => {
    if (pinnedAnchor) positionTooltip(pinnedAnchor);
    else tooltip.hidden = true;
  }, { passive: true });
  window.addEventListener("resize", () => {
    if (pinnedAnchor) positionTooltip(pinnedAnchor);
    else tooltip.hidden = true;
  });

  // Keep the live marker accurate if this page remains open across a week boundary.
  window.setInterval(() => {
    const currentDate = startOfDay(new Date());
    const liveWeek = clamp(Math.floor((currentDate - birthDate) / WEEK_MS), 0, totalWeeks);
    if (liveWeek !== weeksLived || currentDate > today) window.location.reload();
  }, 60 * 1000);

  renderHeader();
  renderTimeline();
  renderMemoryList();
  renderImageView();
  setupViewSwitch();
})();
