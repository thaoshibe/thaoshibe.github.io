/*
 * Workday pixels imported from notes/personal/{2023,2024,2025,2026}.md.
 * The recurring emoji for each year marks a day Thao went to work.
 * Add one-off days after the workday loop, or extend a year's list below.
 */
(() => {
  "use strict";

  const workdayStyles = {
    2023: { emoji: "🌱", color: "#7fa875" },
    2024: { emoji: "🌸", color: "#df91a9" },
    2025: { emoji: "✨", color: "#deb85c" },
    2026: { emoji: "🌈", color: "#839ed7" }
  };

  const workdays = {
    2023: `
      05-30 05-31
      06-01 06-02 06-05 06-06 06-07 06-08 06-09 06-12 06-13 06-14 06-15 06-16 06-19 06-20 06-21 06-22 06-23 06-26 06-27 06-28 06-29 06-30
      07-02 07-03 07-04 07-05 07-06 07-10 07-11 07-12 07-13 07-14 07-17 07-18 07-24 07-25 07-27 07-28 07-31
      08-01 08-02 08-03 08-04 08-14 08-15 08-16 08-17 08-18 08-28 08-29
      09-06 09-07 09-08 09-11 09-12 09-13 09-14 09-15 09-16 09-18 09-19 09-20 09-21 09-22 09-25 09-26 09-27 09-28 09-29
      10-02 10-03 10-04 10-05 10-06 10-08 10-09 10-10 10-11 10-12 10-13 10-15 10-16 10-17 10-18 10-19 10-20 10-21 10-23 10-24 10-25 10-26 10-27 10-30 10-31
      11-01 11-02 11-03 11-04 11-05 11-06 11-07 11-11 11-12 11-13 11-14 11-15 11-16 11-17 11-18 11-21 11-22 11-23 11-24 11-27 11-28 11-29 11-30
      12-01 12-04 12-05 12-06 12-11 12-12 12-19 12-20 12-21 12-23 12-25
    `,
    2024: `
      01-03 01-04 01-05 01-08 01-09 01-10 01-11 01-16 01-17 01-18 01-19 01-22 01-23 01-24 01-25 01-26 01-27 01-29 01-30 01-31
      02-01 02-02 02-04 02-05 02-06 02-07 02-08 02-09 02-12 02-13 02-14 02-15 02-16 02-17 02-18 02-19 02-20 02-21 02-22 02-23 02-25 02-26 02-27 02-28 02-29
      03-01 03-03 03-04 03-05 03-06 03-07 03-08 03-10 03-11 03-12 03-13 03-14 03-15 03-18 03-19 03-20 03-21 03-22 03-23 03-24 03-25 03-26 03-27 03-30
      04-01 04-02 04-03 04-04 04-05 04-07 04-08 04-09 04-10 04-11 04-12 04-13 04-14 04-15 04-16 04-17 04-18 04-19 04-20 04-21 04-22 04-23 04-24 04-25 04-26 04-27 04-29 04-30
      05-01 05-03 05-04 05-05 05-06 05-07 05-09 05-10 05-12 05-13 05-14 05-15 05-16 05-17 05-18 05-19 05-20 05-21 05-28 05-30 05-31
      06-03 06-04 06-05 06-06 06-07 06-10 06-11 06-12 06-13 06-14 06-24 06-25 06-26 06-27 06-28 06-29
      07-04 07-05 07-06 07-08 07-09 07-10 07-11 07-12 07-13 07-15 07-16 07-17 07-18 07-19 07-22 07-23 07-24 07-25 07-26 07-29 07-30 07-31
      08-01 08-02 08-03 08-05 08-06 08-07 08-08 08-09 08-10 08-12 08-13 08-14 08-15 08-16 08-17 08-19 08-20 08-21 08-22 08-23 08-24 08-25 08-26 08-27 08-28 08-29 08-30
      09-06 09-08 09-09 09-10 09-11 09-12 09-13 09-16 09-17 09-18 09-19 09-20 09-21 09-22 09-23 09-24 09-25 09-26 09-27 09-29 09-30
      10-01 10-02 10-03 10-04 10-06 10-07 10-08 10-09 10-10 10-11 10-12 10-13 10-14 10-15 10-16 10-17 10-18 10-19 10-21 10-22 10-23 10-24 10-25 10-26 10-27 10-28 10-29 10-30 10-31
      11-01 11-02 11-03 11-04 11-05 11-06 11-07 11-08 11-09 11-10 11-11 11-12 11-13 11-14 11-18 11-19 11-20 11-21 11-22 11-25 11-26 11-27
      12-02 12-03 12-04 12-05 12-06 12-07 12-21 12-22 12-26 12-27 12-28 12-29
    `,
    2025: `
      01-06 01-07 01-08 01-09 01-10 01-13 01-14 01-16 01-17 01-18 01-19 01-23 01-26 01-27 01-29 01-30 01-31
      02-01 02-03 02-04 02-05 02-06 02-07 02-09 02-10 02-11 02-12 02-13 02-14 02-15 02-16 02-17 02-18 02-19 02-20 02-21 02-24 02-25 02-26 02-27
      03-01 03-02 03-03 03-04 03-05 03-06 03-07 03-10 03-11 03-12 03-13 03-14 03-15 03-17 03-18 03-19 03-20 03-21 03-23 03-24 03-26 03-27 03-28 03-29 03-31
      04-01 04-02 04-03 04-04 04-07 04-08 04-09 04-10 04-11 04-12 04-13 04-14 04-15 04-16 04-17 04-18 04-20 04-21 04-22 04-23 04-24 04-25 04-26 04-27 04-28 04-29 04-30
      05-01 05-02 05-03 05-04 05-05 05-06 05-07 05-08 05-09 05-10 05-11 05-12 05-13 05-14 05-15 05-16 05-27 05-28 05-29 05-30 05-31
      06-02 06-03 06-04 06-05 06-06 06-07 06-08 06-09 06-17 06-18 06-19 06-20 06-21 06-22 06-23 06-24 06-25 06-26
      07-05 07-06 07-07 07-08 07-09 07-10 07-14 07-15 07-16
    `,
    2026: `
      06-23 06-24 06-25 06-26 06-27 06-28 06-29
      07-04 07-06 07-07 07-08 07-09 07-10 07-11 07-12 07-13 07-14 07-15 07-16 07-17 07-20 07-21 07-22 07-23 07-24 07-25 07-26 07-27 07-28 07-29 07-30
      08-01 08-03 08-04 08-05 08-06 08-07 08-08 08-10 08-11 08-12 08-13 08-14 08-15 08-17 08-18 08-19 08-20 08-21 08-22 08-23 08-24 08-25 08-26 08-27 08-28 08-29 08-31
    `
  };

  // Public contribution counts from github.com/thaoshibe, imported August 13, 2026.
  const githubActivity = `
    2025-07-22:3 2025-07-23:3 2025-07-28:3 2025-07-30:3 2025-07-31:2
    2025-08-07:1 2025-08-12:3 2025-08-13:2 2025-08-14:1 2025-08-18:4 2025-08-19:1 2025-08-22:1 2025-08-23:1 2025-08-29:2
    2025-09-05:3 2025-09-06:1 2025-09-08:3 2025-09-13:1 2025-09-18:1 2025-09-19:6 2025-09-25:1 2025-09-27:1 2025-09-29:3
    2025-10-03:4 2025-10-05:1 2025-10-06:1 2025-10-09:1 2025-10-14:3 2025-10-22:2 2025-10-28:2 2025-10-31:1
    2025-11-01:6 2025-11-02:1 2025-11-08:1 2025-11-11:5 2025-11-12:2 2025-11-13:5 2025-11-15:1 2025-11-17:1 2025-11-18:2 2025-11-22:6 2025-11-23:2 2025-11-24:5 2025-11-25:8 2025-11-26:5 2025-11-27:3
    2025-12-01:4 2025-12-02:3 2025-12-03:5 2025-12-04:2 2025-12-05:4 2025-12-06:7 2025-12-08:4 2025-12-09:1 2025-12-10:6 2025-12-11:1 2025-12-13:3 2025-12-15:1 2025-12-17:3
    2026-01-02:2 2026-01-07:2 2026-01-08:1 2026-01-09:3 2026-01-12:4 2026-01-15:1 2026-01-18:7 2026-01-21:2 2026-01-23:1
    2026-02-04:5 2026-02-05:1 2026-02-06:1 2026-02-09:1 2026-02-10:1 2026-02-13:1 2026-02-17:2 2026-02-20:4 2026-02-21:3 2026-02-22:1 2026-02-23:6 2026-02-24:1
    2026-03-01:1 2026-03-03:2 2026-03-04:6 2026-03-07:7 2026-03-10:2 2026-03-11:1 2026-03-20:1 2026-03-24:1 2026-03-26:5
    2026-04-08:3 2026-04-09:1 2026-04-10:3 2026-04-11:2 2026-04-12:1 2026-04-13:1 2026-04-20:3 2026-04-22:3 2026-04-23:7 2026-04-28:1
    2026-05-01:1 2026-05-07:1 2026-05-11:3 2026-05-12:4 2026-05-13:2 2026-05-15:2 2026-05-16:4 2026-05-18:4 2026-05-19:1 2026-05-20:1 2026-05-29:3
    2026-06-02:1 2026-06-03:1 2026-06-04:2 2026-06-06:1 2026-06-08:6 2026-06-09:10 2026-06-10:3 2026-06-11:1 2026-06-12:1 2026-06-13:2 2026-06-15:1 2026-06-16:1 2026-06-17:1 2026-06-18:2
  `;

  // Pomodoro sessions logged via Pomello on a Trello board, recovered from the
  // "2022 ✨" and "2023" board exports. Counts are focus sessions started that day.
  // 2022 coverage begins 08-08-2022 — Thao's first day in the US to start the PhD.
  // 2023 fills the stretch before manual 🌱 logging began on 05-30-2023; days
  // already marked as workdays are left untouched (the loop only fills blanks).
  const pomelloActivity = `
    2022-08-15:2 2022-08-16:2 2022-08-17:3 2022-08-19:5 2022-08-27:1 2022-08-28:2 2022-08-29:3 2022-08-30:1 2022-08-31:1
    2022-09-02:1 2022-09-05:2 2022-09-06:6 2022-09-13:3 2022-09-14:6 2022-09-15:4 2022-09-19:3 2022-09-20:1 2022-09-22:7 2022-09-23:2 2022-09-24:3 2022-09-25:9
    2022-10-07:4 2022-10-08:1 2022-10-09:1 2022-10-10:5 2022-10-11:7 2022-10-12:3 2022-10-13:5 2022-10-14:2 2022-10-15:3 2022-10-16:3 2022-10-17:4 2022-10-18:6 2022-10-19:2 2022-10-20:5 2022-10-21:3 2022-10-23:2 2022-10-24:8 2022-10-25:5 2022-10-26:2 2022-10-27:2 2022-10-31:4
    2022-11-01:7 2022-11-03:1 2022-11-04:3 2022-11-05:4 2022-11-09:6 2022-11-14:3 2022-11-15:2 2022-11-16:4 2022-11-19:4 2022-11-20:1 2022-11-21:1 2022-11-24:2 2022-11-26:3 2022-11-29:3 2022-11-30:4
    2022-12-01:3 2022-12-02:2 2022-12-05:2 2022-12-06:2 2022-12-07:4 2022-12-08:4 2022-12-10:9 2022-12-12:4 2022-12-14:2 2022-12-16:2 2022-12-18:2 2022-12-19:6 2022-12-22:1 2022-12-23:1 2022-12-26:3
    2023-01-02:2 2023-01-03:6 2023-01-04:6 2023-01-05:1 2023-01-06:2 2023-01-11:3 2023-01-13:3 2023-01-14:4 2023-01-17:3 2023-01-18:6 2023-01-19:1 2023-01-26:7 2023-01-30:2 2023-01-31:2
    2023-02-01:5 2023-02-03:1 2023-02-05:4 2023-02-06:6 2023-02-07:1 2023-02-08:9 2023-02-09:7 2023-02-10:5 2023-02-12:7 2023-02-13:1 2023-02-15:1 2023-02-16:5 2023-02-17:2 2023-02-19:3 2023-02-20:1 2023-02-21:7 2023-02-22:3 2023-02-23:7 2023-02-24:1 2023-02-25:5 2023-02-26:7 2023-02-27:9 2023-02-28:10
    2023-03-01:7 2023-03-02:6 2023-03-03:1 2023-03-05:3 2023-03-07:18 2023-03-13:1 2023-03-16:1 2023-03-19:2 2023-03-20:4 2023-03-22:1 2023-03-26:1 2023-03-28:1
    2023-04-01:1 2023-04-02:1 2023-04-04:4 2023-04-05:1 2023-04-06:2 2023-04-10:1 2023-04-12:3 2023-04-21:1 2023-04-23:3 2023-04-24:3 2023-04-25:2 2023-04-28:2 2023-04-29:7
    2023-05-01:1 2023-05-03:1 2023-05-04:1 2023-05-05:5 2023-05-06:1 2023-05-07:2 2023-05-09:3 2023-05-10:3 2023-05-16:1 2023-05-18:1 2023-05-26:3 2023-05-27:2 2023-05-29:1 2023-05-30:3
    2023-06-02:5 2023-06-08:1 2023-06-09:1 2023-06-11:1 2023-06-13:2 2023-06-14:1 2023-06-16:2 2023-06-20:2 2023-06-26:1 2023-06-29:1
    2023-07-14:2 2023-07-17:2 2023-07-25:2 2023-07-27:1 2023-07-28:1 2023-07-31:3
    2023-08-01:1 2023-08-03:3 2023-08-14:1 2023-08-15:1 2023-08-18:1 2023-08-22:5 2023-08-24:1 2023-08-28:4 2023-08-29:1 2023-08-31:3
    2023-09-01:3 2023-09-03:1 2023-09-05:3 2023-09-06:1 2023-09-08:2 2023-09-11:1 2023-09-13:2 2023-09-15:1 2023-09-16:2 2023-09-18:1 2023-09-19:1 2023-09-20:2 2023-09-21:1 2023-09-22:1 2023-09-24:1 2023-09-25:2 2023-09-27:1 2023-09-28:2 2023-09-29:1 2023-09-30:1
    2023-10-02:1
  `;

  const notes = {
    "2023-09-06": "academic year started",
    "2023-09-21": "my first PhD paper :D",
    "2023-10-10": "Going home early at 11AM due to COVID & flu shot side effects",
    "2023-11-01": "Have a fck awesome week, Shibe",
    "2023-11-17": "CVPR submitted",
    "2023-11-23": "happy thansgiving!",
    "2023-12-11": "NeurIPS",
    "2023-12-12": "NeurIPS",
    "2026-08-18": "went to work, cried like a baby at 9pm — I miss Bơ so much",
    "2024-02-05": "I got my permit!",
    "2024-02-26": "#8831 got in CVPR!",
    "2024-03-04": "79 days to NeurIPS 2024, Shibe",
    "2024-03-11": "I got my driving license!",
    "2024-03-22": "MyVLM comes out",
    "2024-05-28": "hi Adobe!",
    "2024-06-05": "1st day of office with mentor Y!",
    "2024-07-12": "review NeurIPS",
    "2024-07-13": "review NeurIPS",
    "2024-07-30": "NeurIPS review are out!",
    "2024-09-16": "Midwest CV workshop",
    "2024-09-17": "Midwest CV workshop",
    "2024-09-20": "new room!",
    "2024-09-21": "not so productive day",
    "2024-09-22": "rainy day in Madison!",
    "2024-09-24": "mentor Y @ Madison",
    "2024-09-25": "Yo'LLaVA will appear in NeurIPS 2024!",
    "2024-10-07": "at Madison Public Library",
    "2024-10-11": "Milwaukee trip",
    "2024-10-21": "aaa, it's very close to CVPR, Shibe -- we got this",
    "2024-11-01": "Hi November",
    "2024-11-21": "2878, good luck!",
    "2024-12-26": "a bit",
    "2024-12-27": "a bit",
    "2024-12-28": "a bit",
    "2025-01-26": "CVPR rebuttal",
    "2025-01-27": "CVPR rebuttal",
    "2025-02-26": "yep, Yo'Chameleon got in CVPR!",
    "2025-03-07": "1796, good luck!",
    "2025-03-15": "hi Y",
    "2025-04-14": "hpbd, shibe!",
    "2025-04-16": "qualified Shibe!",
    "2025-05-09": "LitePotrait",
    "2025-05-10": "LitePotrait",
    "2025-05-11": "LitePotrait",
    "2025-05-12": "LitePotrait",
    "2025-05-13": "LitePotrait",
    "2025-05-14": "LitePotrait",
    "2025-05-15": "LitePotrait",
    "2025-05-16": "LitePotrait",
    "2025-05-27": "1st day Adobe",
    "2025-06-17": "ytube with Nam",
    "2026-07-24": "neurips rebuttal",
    "2026-07-25": "neurips rebuttal",
    "2026-07-26": "neurips rebutall",
    "2026-07-27": "sfo"
  };

  /* ───────────────────────────────────────────────────────────────────────
   * EMOTIONS — the easy part to maintain.
   *   1. Palette below maps a mood name → color + emoji + label. Extend freely.
   *   2. Log ONE line per day in emotionLog:  "YYYY-MM-DD": "good"
   *      Need a note too?  "YYYY-MM-DD": { mood: "good", note: "shipped it!" }
   * That's it — the Emotions tab builds itself from these two blocks.
   * ─────────────────────────────────────────────────────────────────────── */
  const emotionStyles = {
    neutral:       { color: "#c4c0b8", label: "neutral" },
    good:          { color: "#f7d774", label: "good" },
    "really-good": { color: "#f2b705", label: "really good" },
    "ok-ish":      { color: "#a7cfa0", label: "ok-ish" },
    "hard-working": { color: "#6a9e63", label: "hard-working" },
    sad:           { color: "#9db8e3", label: "sad" },
    "really-sad":  { color: "#5b7fb5", label: "really sad" },
    lazy:          { color: "#df91a9", label: "lazy" },
    tired:         { color: "#9c7a54", label: "tired" },
    stressed:      { color: "#ef8354", label: "stressed" },
    terrible:      { color: "#d4614e", label: "terrible" }
  };

  const emotionLog = {
    "2026-08-13": "ok-ish",
    "2026-08-14": "neutral",
    "2026-08-15": "ok-ish",
    "2026-08-16": "ok-ish",
    "2026-08-17": "ok-ish",
    "2026-08-18": { mood: "really-sad", note: "i miss Bơ so much, cried like a baby at 9pm" },
    "2026-08-19": "ok-ish",
    "2026-08-20": "hard-working",
    "2026-08-21": "hard-working",
    "2026-08-22": "hard-working",
    "2026-08-23": "hard-working",
    "2026-08-24": "hard-working",
    "2026-08-25": "hard-working",
    "2026-08-26": "hard-working",
    "2026-08-27": "hard-working",
    "2026-08-28": "hard-working",
    "2026-08-29": "hard-working",
    "2026-08-30": "lazy",
    "2026-08-31": "hard-working"
    // add a new line each day, e.g. "2026-08-16": "really-good",
  };

  const emotionDays = {};
  for (const [key, value] of Object.entries(emotionLog)) {
    const mood = typeof value === "string" ? value : value.mood;
    const style = emotionStyles[mood];
    if (!style) continue;
    const note = typeof value === "string" ? "" : value.note;
    emotionDays[key] = {
      color: style.color,
      label: style.label,
      ...(note && { description: note })
    };
  }

  // Legend order follows emotionStyles; "no log" leads the first column.
  const emotionLegend = Object.entries(emotionStyles).map(([id, style]) => ({ id, ...style }));
  emotionLegend.splice(0, 0, { id: "no-log", label: "no log", empty: true });

  const days = {};
  for (const [year, dates] of Object.entries(workdays)) {
    const style = workdayStyles[year];
    for (const monthAndDay of dates.trim().split(/\s+/)) {
      const key = `${year}-${monthAndDay}`;
      days[key] = {
        color: style.color,
        label: `Went to work ${style.emoji}`,
        ...(notes[key] && { description: notes[key] })
      };
    }
  }

  for (const activity of githubActivity.trim().split(/\s+/)) {
    const [key] = activity.split(":");
    if (!days[key]) {
      days[key] = {
        color: "var(--github-pixel)",
        label: "Recovered from GitHub"
      };
    }
  }

  for (const activity of pomelloActivity.trim().split(/\s+/)) {
    const [key] = activity.split(":");
    if (!days[key]) {
      days[key] = {
        color: "var(--github-pixel)",
        pattern: "grid",
        label: "Recovered from Pomello + Trello"
      };
    }
  }

  days["2023-05-30"].description = "Started this website and the 🌱 workday notes.";
  days["2025-06-17"].description = "Last commit to the notes repo before the long pause.";
  days["2025-07-16"].description = "Last emoji-marked workday in the old calendar before the long pause.";

  days["2026-05-24"] = {
    color: "#d49a70",
    label: "Bơ went to Rainbow Bridge 🐶",
    description: "Bơ, you are, and always will be my first child. I love you 🧡"
  };

  days["2026-06-23"].description = "Started noting again after more than a year — one month after Bơ went to Rainbow Bridge.";

  days["2026-08-13"] = {
    color: workdayStyles[2026].color,
    label: `Went to work ${workdayStyles[2026].emoji}`,
    description: "Started life-of-thao — the first colored pixel."
  };

  days["2022-08-08"] = {
    color: "#b22234",
    label: "First day in the US 🇺🇸",
    description: "Landed in the US to start my PhD — day one. ✉️"
  };

  window.PIXEL_DATA = {
    years: [2026, 2025, 2024, 2023, 2022],
    yearEmojis: {
      2022: "✉️",
      2023: "🌱",
      2024: "🌸",
      2025: "✨",
      2026: "🌈"
    },
    views: [
      {
        id: "work",
        label: "Work",
        days,
        loggingPeriods: [
          { start: "2023-05-30", end: "2025-06-17" },
          { start: "2026-06-23" }
        ],
        yearNotes: {
          2022: "Aug 8 2022 — First day in the US to start my PhD. Haven't started logging yet — gridded gray pixels come from Trello + Pomello.",
          2023: "May 30 2023 — Started logging 🌱. Gridded gray pixels are recovered Trello + Pomello focus sessions, mostly before this date.",
          2025: "Jun 17 2025 — Stopped logging · gray pixels after this date come from GitHub activity.",
          2026: "Jun 23 2026 — Resumed logging · gray pixels before this date come from GitHub activity."
        }
      },
      {
        id: "emotions",
        label: "Emotions",
        days: emotionDays,
        loggingPeriods: [{ start: "2026-08-13" }],
        yearNotes: {
          2026: "Aug 13 2026 — Started logging emotions."
        },
        legend: emotionLegend
      }
    ]
  };
})();
