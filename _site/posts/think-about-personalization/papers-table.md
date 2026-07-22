# Personalization / memory survey — working table

Status legend: ✅ verified this session · ⏳ pending verification · — not applicable (repo/tool, no paper)

## Y-axis data: temporal span + needle (evidence needed per query)

For the two new Y-axis prototypes (needle-vs-haystack, temporal-span). Needle = personal context actually needed to answer ONE query (vs. haystack = full context in the size table below). Local-JSON values computed directly; others from paper stats.

| Benchmark | Temporal span | Needle (per query) | Needle ≈ tokens |
|---|---|---|---|
| ATM-Bench | ~4 years | 1.44 evidence emails/Q × ~101 tok | ~145 |
| DIS-Bench | ~3.4 years | 3.84 answer photos/Q × 512 | ~1,968 |
| In-house (Adobe) | not stated | 1.14 evidence items/Q | ~114 |
| Persona-MME | up to ~1 month | ~1 referenced item/Q (MCQ) | ~512 |
| photo-bench | not stated | ~1–few target images/Q (GT withheld) | ~512 |
| LOCOMO | months | not stated (multi-hop unquantified) | ~500 (est.) |
| MemoryBank | 10 days | not stated | not stated |
| PerLTQA | not stated | 2.8 memory anchors/Q | ~160 |
| LongMemEval | weeks/months (timestamped, no calendar span) | up to 6 evidence sessions/Q | ~3,000 (est.) |
| BABILong | single document (not time-based) | 1–3 supporting facts/Q | ~30 |
| ConvoMem | weeks (configurable) | 1–6 evidence messages/Q (~40% single) | ~300 (est.) |
| PrefEval | single session (turn-based) | 1 preference statement/Q | ~50 |
| PersonaMem | days/weeks (not calendar) | not stated (~1 reference point/Q) | ~512 (est.) |
| PersonaMem-v2 | days/weeks | not stated | ~512 (est.) |
| CUPID | days/multi-session | ≥1 relevant session of 8 (~922 tok) + 2.9 checklist items | ~922 |
| MMPB | static (no temporal dimension) | 1 concept / ≤2 ref images per Q | ~1,024 |
| ChildEval | not stated | 1 turn (explicit) to 6–10 turns (implicit) | ~4,000 (implicit) |
| Whose Norms? (PACT) | not stated (self-contained vignettes) | not stated | ~30 |
| Psy-Chronicle | **~16 weeks (one semester)** | not stated | not stated |
| SocialPersona | **~2 years** (200 posts, recent 2-yr window) | not stated (uses up to K=12 posts/domain) | ~6,144 (12 imgs, est.) |
| PEC-Home | not stated (session-level) | not stated (RAG top-k=3) | ~105 (est.) |
| STALE | not stated (multi-session, has Δt) | not stated | not stated |
| Personalized Benchmarking | not stated (≥25 battles/user) | not stated (profile-level) | not stated |
| Stories of Your Life as Others | not stated (single administration) | N/A (not a QA task) | not stated |
| Ego-Grounding (MyEgo) | not stated (videos avg 9.2 min; up to a week) | ~16 frames typical (8–32) | ~8,192 (16 frames) |
| PICon | not stated | not stated (≥1 web-search evidence/entity) | not stated |
| AgenticShop | not stated (≥100 reviews/user) | not stated (~20 checklist items/user, profile-level) | not stated |
| Persona2Web | **~1 year** (~2,000 entries) | not stated (retriever top-20) | ~300 (20 entries, est.) |
| EmoHarbor | not stated (single-session) | not stated | not stated |
| BESPOKE | **~3 weeks** (real Gemini/Google usage) | not stated | not stated |
| iOSWorld | not stated (across 26 apps) | not stated (4.4 apps/task, range 2–8) | not stated |
| LaMP | not-time-based (split ordering only) | k=16 retrieved (FiD) / task-tuned top-k | ~1,600 |
| LaMP-QA | not-time-based | k=10 retrieved items | ~1,000 |
| LongLaMP | not-time to months | 1–4 profile entries/output | ~400 |
| PersonalSum | not-time-based | 5 prior annotations (5-shot) | ~500 |
| Can LLM be a Personalized Judge? | not-time-based (static attributes) | 6–10 attributes/query | ~50 |
| FoCus | not-time-based | 5 persona sentences + 10 knowledge candidates | ~65 |
| PersonaChat | not-time-based (single session) | not stated (full persona = 5 sentences) | ~50 |
| VisualMem | days–months (implied) | ≈1 decisive image/fact per Q | ~512 |
| OmniQuery | ~months (mean 2.3 mo) | not stated | ~512 (est.) |
| MemoryQA | time-structured (span not stated) | ≈1 memory (single-memory dominant) | ~512 |
| PEFT-U | not-time-based | not stated (min 10 samples/user) | ~300 (est.) |
| EmoTrack | multi-session (simulated/relative) | ≈1 prior session + current | ~500 (est.) |
| PGraphRAG | not-time-based | top-K=5 (ablations 1/2/4) | ~500 |
| FileGram | time-structured (span not stated) | not stated (16 attrs, ≤50 chunks) | ~500 (est.) |
| LifeSim | weeks–months (10-event trajectory) | ~1 evidence scenario/Q | ~500 (est.) |
| MemoryCD | **years** (avg 1,552 sessions/user, Books) | not stated | ~500 (est.) |
| PERMA | **1–6 months** (~81 events/user) | not stated (top-10 chunk budget) | ~500 (est.) |
| Mem-PAL (2511.13410) | ~9.4 months | 107.5 logs + 39.3 turns/query | ~6,000 (haystack ~50K est.) |
| ALPBench — Ren et al. (2602.03056) | 3/6/12 months | full history (no single needle) | ~100,000 (needs whole history — on the diagonal) |
| GISTBench (2603.29112) | 30 days | ≥2 explicit / ≥3 implicit signals | ~150 (haystack ~5K est.) |
| camroll | ~3 years | ~1 answer photo/Q | ~512 (haystack ~322K, 630 imgs/user) |
| camroll-v2 (ours) | ~3 years | avg 4.21 answer photos/Q (1,796 Qs, max 61) | ~2,156 (haystack ~512K, 1,000 imgs/user) |

**Note:** "ALPBench (Ren et al. 2026)" = arXiv 2602.03056 (e-commerce behavior) is a **different paper** from our AlpsBench (2603.26680, WildChat) despite the near-identical name.

**Coverage note for the two new axes:** *Temporal span* is genuinely stated for only ~10–12 benchmarks (ATM ~4yr, DIS ~3.4yr, SocialPersona ~2yr, Persona2Web ~1yr, OmniQuery ~2.3mo, Psy-Chronicle ~16wk, BESPOKE ~3wk, MemoryBank 10d; VisualMem/MemoryQA/FileGram timestamped but no stated duration) — the majority are static profile/attribute datasets with no time dimension. *Needle* is almost never given as an explicit average; retrieval benchmarks state a small top-K (5–16 items), memory benchmarks converge on ~1 decisive item, many are "not stated" (estimated above). **Finding: the field measures haystack size but rarely the needle or the timespan.**

## Personal context size (ground truth, for the axis plot)

This is the actual plotting data — pulled from each benchmark's dataset-statistics section, not estimated. Convention: 1 image ≈ 512 tokens (as agreed). Still filling in the rest of the benchmark list.

| Benchmark | Context size (stated unit) | Approx. tokens | Modality | Source |
|---|---|---|---|---|
| ATM-Bench | 6,741 emails (~101 tok each) + 3,759 images + 533 videos, ~4 years, single user | ~681k (email text) + ~1.92M (images) + videos unquantified | text+image (heavy) | arXiv 2603.01990 |
| DIS-Bench | 2,000 photos/user, ~3.4 years | ~1.024M | image-only | arXiv 2602.10809 |
| Persona-MME | controlled buckets: 50/100/200/500 dialogue turns; 500-turn setting sized to fit 128k token context | 128,000 (500-turn setting) | text (dialogue turns; multimodal content within turns not confirmed) | arXiv 2604.13074 |
| PhotoBench | ~1,194 images/album (3 albums total in the eval set) | ~611,328 | image-only | arXiv 2603.01493 |
| In-house data (Adobe) | 30 users × 50 questions; corpus size per user not accessible (internal path) | not available | image+text (assumed, per earlier JSON exploration) | internal |
| Visual Haystacks | **not actually personal** — 1–10,000 generic COCO images per haystack, not tied to one individual; scale sweep, not per-user context | 512 – 5,120,000 | image-only, generic | arXiv 2407.13766 — flag for exclusion from this survey's scope |
| MemoryQA | ~11–51 images per question's search space (10-50 sampled + 1 source); per-user/session total not stated | ~5,632 – 26,112 | image-only (wearable-device photos), text queries | arXiv 2509.18436 |
| OmniQuery | 13,630 files/participant (full diary-study album); capped to 1,000 files/participant for actual evaluation | ~6,978,560 (full) / ~512,000 (eval subset) | text+image (photos, videos, screenshots, notes) | arXiv 2409.08250 |
| PersonaMem | 10/20/60 sessions, 15–30 turns/session | ~32k / ~128k / ~1M (paper states these directly) | text-only | arXiv 2504.14225 (corrected — not 2508.01674, which is CUPID) |
| CUPID | 8 prior sessions (+1 current), 6.38 turns/session | ~8,187 (prior) + ~922 (current) | text-only | arXiv 2508.01674 |
| MMPB | 5 reference images/concept (2 typically used) + short text descriptions; 0/10/100-turn dialogue settings | ~1,024–2,560 (images) + small text component; no explicit token budget stated | **text+image** — only genuinely multimodal benchmark in this batch | arXiv 2509.22820 |
| BenchPreS | ~152 profile attributes, 5 of which are preferences; single-turn (no session history) | not stated | text-only | arXiv 2603.16557 |
| LifeSim | 1–10 life events (long-horizon); single-scenario up to 20 turns | >14K tokens (long-horizon histories) | text-only (paper notes lack of multimodal signals as a limitation) | arXiv 2603.12152 |
| MemoryCD | avg. sessions/user varies by domain (e.g. Books: 1,552 avg, max 3,888) | ~272K–314K (single domain) up to ~387K (cross-domain, 5,862 sessions) | text-only (Amazon review text) | arXiv 2603.25973 |
| PERMA | 75–85 events/user (808 total across 10 profiles) | ~31K–39K/user (clean/noisy); up to ~1.165M total (extended variant) | text-only | arXiv 2603.23231 |
| PrefEval | conversation length varied, tested up to 300 turns | ~3k (10 turns) up to ~103k (300 turns); max tested 100k | text-only | arXiv 2502.09597 |
| AlpsBench | 6–249 turns/dialogue (2,500 sequences from WildChat) | not stated (no mean/token figure given) | text-only | arXiv 2603.26680 |
| PersonaMem-v2 | multi-session histories; 2–6 turns/preference interaction | ~32K (base) extended to ~128K | text-only | arXiv 2512.06688 |
| LOCOMO | 19.3 sessions/conv, 15.8 turns/session, 32.3 images/conv, 9,209 text tokens/conv | ~9,209 (text) + ~16,538 (32.3 images × 512) ≈ **~25,750** | **text+image** | arXiv 2402.17753 |
| MemoryBank | 10 days of conversation, 15 virtual users, ≥2 topics/day | not stated (no token/turn count given) | text-only | AAAI 2024 (arXiv 2305.10250) |
| PerLTQA | 4,501 events (~313 words avg.), 3,409 dialogues (25,256 utterances, ~43.7 words/utterance) | ~407 tok/event, ~57 tok/utterance (no single aggregate figure given) | text-only | arXiv 2402.16288 |
| LongMemEval | -S split: 50.2 sessions, ~103,137 tokens; -M split: 501.9 sessions, ~1,019,117 tokens | ~103k (S) / ~1.02M (M) | text-only | arXiv 2410.10813 |
| BABILong | predefined haystack lengths: 0K–128K, up to 1M/10M (eval up to 50M) | 0 – 50,000,000 (range, configurable) | text-only | arXiv 2406.10149 |
| ConvoMem | configurable 2–300 prior conversations; ~80–120 messages/conversation; e.g. 1hr/day × 4 weeks ≈ 100K tokens | ~1,000 – 3,000,000 (configurable) | text-only | arXiv 2511.10523 |

| Re-Centering Humans (in LLM Personalization) | ≥3 conversations & ≥15 turns/user (threshold, not average); ~25.7 attributes/user (77 users, 1,983 attributes) | not stated, cannot estimate | text-only | arXiv 2606.06614 |
| ChildEval | 6–10 turn implicit-preference dialogue per child persona | ~4,000–4,400 (per Table 5, 10-turn) | text-only | arXiv 2605.27805 |
| Semantic Constraint Verification eval | LaMP-derived user profile / topic-preference per simulated user (not quantified by paper) | not stated, cannot estimate | text-only | arXiv 2606.16368 |
| Whose Norms? (PACT) | ~1 preference sentence + 3 demographic attributes (country, age group, gender) per persona | ~20–40 (estimated from example length, not a paper figure) | text-only | arXiv 2606.07877 |
| Think Thrice Before You Speak | 7.79 turns/dialogue — **weak fit**: per-conversation ToM reasoning, not persistent per-user personalization | ~225 (per dialogue, not per user) | text-only | arXiv 2605.22602 — ⚠️ consider excluding, doesn't match survey's persistent-personal-context scope |
| Psy-Chronicle | ~900 dialogue units/student, ~114,500 Chinese chars/student (100 students total) | ~170,000 (est. 1.5 tok/char, not paper-stated) | text-only | arXiv 2605.22140 |
| SocialPersona | 176.81 posts/user, 130.38 images/user (171 real users, social-media timelines) | ~67,000+ (130.38 images × 512 ≈ 66,755; text posts not separately quantified, so this is a lower bound) | **text+image** | arXiv 2606.26654 |
| PEC-Home | 4 turns/persona dialogue, avg 42.08/34.54/33.88/28.43 tokens/turn (1,424 personas) | ~139/persona dialogue | text-only | arXiv 2606.18636 — medium confidence (paper frames itself around ellipsis resolution, not personalization per se) |
| APM | 2 conversation turns/user (default; ablated 1/2/4) | not stated, cannot estimate precisely | text-only | arXiv 2605.21063 |
| Personalized Deep Research | ~20-50 user profiles, output thresholds 2,000-5,000 chars; not quantified in tokens | not stated, cannot estimate | text-only | arXiv 2605.10530 (medium confidence — thin dataset stats) |
| STALE | 400 scenarios, chronological haystack of distractor sessions, up to 150K tokens | ~150,000 | text-only | arXiv 2605.06527 — ⚠️ borderline fit: general memory-validity benchmark across 100+ topics, not framed around one persistent individual persona |
| Personalized Benchmarking | 115 users, avg 59 pairwise-preference queries/user (range 25–380) | ~5,900 (est. ~100 tok/query, not paper-stated) | text-only | arXiv 2604.18943 — medium fit: about per-user preference-ranking divergence in evaluation, not personalized generation |
| KnowU-Bench | profile hidden from agent, inferred from behavior logs + GUI screenshots; 192 tasks/23 apps | not disclosed (no per-task log/screenshot count) | text+image | arXiv 2604.08455 |
| Beyond Static Personas | SPBench: 450 questions (90 situational × 5 Big-Five domains) | N/A — no per-user history concept exists | text-only | arXiv 2604.13846 — ⚠️ likely wrong category: trait-steering across situations, not per-user profile/history; recommend excluding |
| TSUBASA | **method, not a benchmark** — evaluated on LoCoMo (19.3 sessions/304.9 turns/user) and LongMemEval (47.7 sessions/493.4 turns/user) | inherits LoCoMo/LongMemEval numbers already in this table | text-only | arXiv 2604.07894 — plot under LoCoMo/LongMemEval, not as its own point |
| Stories of Your Life as Others | 290 participants, 75 profile items → ~1,000-word input persona, ~8,000-word output life story | ~1,300 (input) / ~10,400 (output) | text-only | arXiv 2604.06071 |
| Ego-Grounding Egocentric QA (MyEgo) | 541 videos (avg 9.2 min), 5,012 questions; models sample 32–128 frames | ~16,400 (32 frames) – ~65,500 (128 frames) | **text+image** (video frames) | arXiv 2604.01966 |
| PSPA-Bench | 100 personas, 12,855 instructions (~129/persona), 10 scenarios/22 apps | not convertible — screenshot/task count unspecified | text+image (GUI screenshots) | arXiv 2603.29318 |
| Mimetic Alignment / ASPECT | 20 participants, 90 days of workplace transcripts → 92-item profile | not stated (plausibly tens of thousands of tokens) | text-only | arXiv 2603.26922 |
| PICon | 70 persona agents + 63 human baseline; 50 turns/session + 10 retest turns | ~5,000–7,500 (est. ~100–150 tok/turn) | text-only | arXiv 2603.25620 |
| AgenticShop | ~19.3–20 checklist items + 1 narrative/user | ~400–650 | text-only | arXiv 2602.12315 |
| Persona2Web | ~2,000 history entries/user (1-yr span) | ~30,000 | text-only | arXiv 2602.17003 |
| EmoHarbor | persona profile + up to 15-turn simulated dialogue | ~1,300–1,450 | text-only | arXiv 2601.01530 |
| BESPOKE | avg 71.77 search sessions + 23.90 chat sessions (4.3 turns/session) | ~13,000 | text-only | arXiv 2509.21106 |
| CAPE | — | — | — | ⚠️ could not confidently identify — the only "CAPE" match found evaluates an LLM's own personality consistency, not personalizing to a user; excluded |
| LaMP-QA | ~100–160 profile items (prior Qs + narratives)/user | ~11,000–16,000 | text-only | arXiv 2506.00137 |
| CharacterBench | avg 11.22 turns/sample, 27.68 words/turn (character-profile length unquantified) | ~400 (dialogue only) | text-only | arXiv 2412.11912 (AAAI'25) — ⚠️ different axis: personalizes to a fictional *character*, not an individual end-user; consider a distinct marker if plotted |
| LongLaMP | profile size 34–120 items/user (task-dependent); paper reports context length directly | ~145–400 (Email≈191, Abstract≈145, Review≈397, Topic≈261) | text-only | arXiv 2407.11016 |
| PersonalSum | avg ~28.2 personalized summaries/user | ~2,900–3,600 | text-only | arXiv 2410.03905 (NeurIPS 2024) |
| Can LLM be a Personalized Judge? | avg 8.25 demographic profile attributes/user | ~25–50 | text-only | arXiv 2406.11657 (EMNLP 2024 Findings) |

### Methods (not benchmarks) — personal-context they operate on

| Method | Context size (stated unit) | Approx. tokens | Modality | Source |
|---|---|---|---|---|
| DreamBooth | 3–5 subject images + short class-noun text label | ~1,536–2,560 (+ ~1-2 text) | text+image | arXiv 2208.12242 |
| Yo'LLaVA | 5 images/concept (up to 10 in ablation); no text captions | ~2,560 | image-only | arXiv 2406.09400 |
| MyVLM | ~3–5 images/concept (4 in code) + 1 personalized caption each | ~2,048 + short caption | text+image | arXiv 2403.14599 |
| Camera Roll VQA (camroll) | full camera roll: mean 630 images/user (median 558; 50 users, 31,476 imgs) | ~322,560 (+ text query) | image (+ text query) | arXiv 2606.05275 |
| PRAC (personalized aesthetics) | 10-shot or 100-shot prior-rated images + text profile (age/gender/experience) | ~5,120 (10-shot) / ~51,200 (100-shot) | text+image | arXiv 2607.15752 |
| ImageGem | avg 48 images/uploader + ~3M prompts overall (~1-1.5K prompt tokens/user) | ~24,576 + ~1,000–1,500 text | text+image | arXiv 2510.18433 |
| PeKit (Personalization Toolkit) | 1–5 reference images/concept (training-free RAG) | ~512–2,560 | image-only | arXiv 2502.02452 |
| PLVM | 1 facial image/concept (Aligner compresses to 16 tokens) | ~512 | image-only | arXiv 2412.17610 |
| MC-LLaVA | 10 training images/concept + 16 concept tokens | ~5,120 | image-only | arXiv 2411.11706 |
| PVIT (Personalized Visual Instruction Tuning) | 1 reference image + name/intro per person | ~530 | text+image | arXiv 2410.07113 |
| RAP-MLLM (Retrieval-Augmented Personalization) | 1 avatar image + name + brief description per concept | ~550 | text+image | arXiv 2410.13360 |
| PEARL (streaming video) | ~1 reference frame/clip per concept (scales with #concepts) | ~512/concept | text+image (video) | arXiv 2603.20422 |
| UniCTokens | 3–10 reference images/concept | ~1,536–5,120 (mid ~2,560) | text+image | arXiv 2505.14671 |
| YoChameleon | 3–5 images/concept (n=4 standard) | ~2,000 | text+image | arXiv 2504.20998 |
| ICPT (In-context Prompt Tuning) | 1–6 images/concept (adaptive prompt length) | ~512–3,072 (mid ~1,500) | text+image | arXiv 2605.31513 |
| Personal-VCL | 4.25 context images/clips per query (avg) | ~2,176 | text+image (video) | arXiv 2605.10936 (also a benchmark) |
| Ego (Embedding-Guided) | 1–5 reference views (training-free) | ~512–2,560 | text+image (video) | arXiv 2603.09771 |
| CoViP | variable interleaved image-text (1–4 concepts/query + context imgs) | ~2,000–3,000 (rough) | text+image | arXiv 2602.03454 |
| Online-PVLM | up to 4 reference images/concept | ~2,048 | image-only | arXiv 2511.20056 |
| RePIC | max 3 reference images/query | ~1,536 | text+image | arXiv 2506.18369 |
| R2P (Retrieval/Reasoning Fingerprints) | 1 reference image + object-category text | ~512 | text+image | arXiv 2503.18623 |
| PVChat | 1 reference video/subject (8 frames sampled) | ~4,096 | image-only (video) | arXiv 2503.17069 |
| Concept-as-Tree (CaT) | 1–3 real images/concept (then synthetic expansion) | ~512–1,536 | text+image | arXiv 2503.12999 |
| Personalized Representation from Personalized Generation | 3 real reference images/instance | ~1,536 | image-only | arXiv 2412.16156 |
| PALAVRA | ~5 images/concept (PerVL) | ~2,560 | image-only | arXiv 2204.01694 |
| PRELUDE / CIPHER | user edit history over T=200 interaction rounds (stores inferred prefs) | ~10,000 (rough — 200 short edits) | text-only | arXiv 2404.15269 |
| TWIN V2 | ultra-long user behavior sequence up to ~10^6 items (compressed) | ~1,000,000 (behavior IDs, not NL tokens) | text-only (ID sequences) | arXiv 2407.16357 |
| SUM (Scaling User Modeling) | Meta ads user feature set (feature-based, not tokenizable) | N/A — not a token count | text-only (behavioral features) | arXiv 2311.09544 |

### Methods — context inherited from evaluation benchmark

For method papers without their own fixed personal corpus, the plot position is inherited from the benchmark they evaluate on. Plot tokens = that benchmark's per-user size. Methods whose benchmarks aren't personal-memory (general RAG / multi-hop QA) are flagged out-of-scope for the X-axis.

| Method | Inherits / basis | Plot tokens | Modality | Note |
|---|---|---|---|---|
| ReadAgent | QuALITY, NarrativeQA, QMSum | — | text | ⚠ out of scope — long-doc QA, no personal context |
| Self-RAG | PopQA, TriviaQA, PubHealth, ARC, ASQA | — | text | ⚠ out of scope — factuality RAG, no personal context |
| HippoRAG | MuSiQue, 2WikiMultiHop, HotpotQA | — | text | ⚠ out of scope — multi-hop QA, no personal context |
| A-MEM | LoCoMo | ~25,750 | text | inherits LoCoMo |
| LightMem | LongMemEval, LoCoMo | ~103,000 | text | inherits LongMemEval-S |
| MemVerse | LoCoMo, LongMemEval, ScienceQA, MSR-VTT | ~103,000 | text+image | multimodal memory (adds image/video) |

**Not personal / out of scope:** Visual Haystacks (see above — generic COCO images, not tied to an individual).
**Not enough data reported:** BenchPreS, AlpsBench (no token/mean figure in either paper), MemoryBank and PerLTQA (word-level stats given, no aggregate token total), Re-Centering Humans (threshold only, no average given).

## Personalized LMMs / VLMs (from thaoshibe/awesome-personalized-lmms)

Pulled from your own curated list. Not independently re-verified (source is already a maintained awesome-list). Duplicates against the rest of this table have been removed (7 rows: According to Me/ATM-Bench, PersonaMem-v2, PersonaVLM, MMPB, Know Me Respond to Me/PersonaMem, PhotoBench, DeepImageSearch — all already covered elsewhere in this document). Note: MyVLM and Yo'LLaVA were previously flagged as duplicates by mistake — they were only discussed earlier in conversation, never actually added as rows anywhere in this table, so they're kept here as genuinely new entries.

| Title | Venue | Year | Status |
|---|---|---|---|
| See, Act, Adapt (VLM-Guided Agent, cross-domain) | arXiv | 2026 | new |
| Personal AI Agent for Camera Roll VQA | arXiv | 2026 | new |
| MyPCBench | arXiv | 2026 | new |
| VisualClaw | arXiv | 2026 | new |
| iOSWorld | arXiv | 2026 | new |
| PersonaTree | arXiv | 2026 | new |
| Personal Visual Memory from Explicit/Implicit Evidence | arXiv | 2026 | new |
| PersonalHomeBench | arXiv | 2026 | new |
| OmniMem | arXiv | 2026 | new |
| PEARL (streaming video) | arXiv | 2026 | new |
| ASTRA-bench | arXiv | 2026 | new |
| LifeEval | arXiv | 2026 | new |
| PersonaAgent | arXiv | 2025 | new |
| TAMEing Long Contexts in Personalization | KDD | 2025 | new |
| UniCTokens | NeurIPS | 2025 | new |
| YoChameleon | CVPR | 2025 | new |
| Personalize LVLM w/ In-context Prompt Tuning | ECCV | 2026 | new |
| Personal Visual Context Learning in LMMs | arXiv | 2026 | new |
| Ego: Embedding-Guided Personalization of VLMs | arXiv | 2026 | new |
| Contextualized Visual Personalization (CoViP) | ICML | 2026 | new |
| Online-PVLM | arXiv | 2025 | new |
| RePIC | NeurIPS | 2025 | new |
| Training-Free Personalization via Retrieval/Reasoning on Fingerprints | arXiv | 2025 | new |
| PVChat | arXiv | 2025 | new |
| Concept-as-Tree | arXiv | 2025 | new |
| Personalization Toolkit (training-free) | arXiv | 2025 | new |
| Personalized Large Vision-Language Models | arXiv | 2024 | new |
| MC-LLaVA | arXiv | 2024 | new |
| Personalized Visual Instruction Tuning | ICLR | 2025 | new |
| Retrieval-Augmented Personalization (RAP-MLLM) | CVPR | 2025 | new |
| MyVLM | ECCV | 2024 | new (correction — not actually a duplicate) |
| Yo'LLaVA | NeurIPS | 2024 | new (correction — not actually a duplicate) |
| Evoking User Memory (Recollection-Familiarity Retrieval) | ICLR | 2026 | new |
| PersonaLens | ACL Findings | 2025 | new |
| Scaling Synthetic Data w/ 1B Personas | arXiv | 2024 | new |
| Personalized Large Language Models | ICDMw | 2024 | new |
| LaMP | ACL | 2024 | new |
| Learning to Predict Persona Information for Dialogue Personalization | ACL | 2023 | new |
| Call for Customized Conversation (FoCus) | AAAI | 2022 | new |
| A Personalized Dialogue Generator w/ Implicit Persona Detection | COLING | 2022 | new |
| Personalizing Dialogue Agents (PersonaChat) | ACL | 2018 | new |
| Personalized Representation from Personalized Generation | ICLR | 2025 | new |
| PALAVRA ("This is my unicorn, Fluffy") | ECCV | 2024 | new |

Non-paper items also in that README (frameworks/tools, not papers): mem0 (duplicate), Graphiti/getzep (likely duplicate of Zep), nanobot, OpenClaw (new, agent frameworks — not memory-specific). Datasets section: ConCon-Chi, PODS (new), plus MC-LLaVA / Yo'LLaVA / MyVLM (already listed above).

## Search/Rec/Ads crossover (from guyulongcs/Awesome-Deep-Learning-Papers-for-Search-Recommendation-Advertising)

That repo is a huge industrial recsys/ads list (CTR prediction, ranking, embeddings) — almost entirely out of scope for LLM-agent personalization and was skipped. Only genuine crossover on long-term *individual* user-history modeling is below; note these target item/ad recommendation, not conversational assistants, so they're background/precedent rather than core survey material.

| Title | Venue | Year | Why relevant | Status |
|---|---|---|---|---|
| DV365: Extremely Long User History Modeling at Instagram | KDD | 2025 | Encodes individual user history (up to 70K events) into persistent long-term representation — same paper we discussed earlier (arXiv 2506.00450) when picking the token-count axis | already known from earlier in this conversation |
| HiT-LBM: Hierarchical Tree Search-based User Lifelong Behavior Modeling on LLM | KDD | 2025 | Combines LLM + lifelong individual user behavior modeling | new |
| HLLM: Enhancing Sequential Recommendations via Hierarchical LLMs for Item and User Modeling | arXiv (ByteDance) | 2024 | Hierarchical LLMs building per-user representations from personal interaction history | new |
| Unlocking Scaling Law in Industrial Recommendation Systems with a Three-step Paradigm based Large User Model | arXiv (Alibaba) | 2025 | Explicit "Large User Model" — LLM-scale foundation model of individual users | new |
| TWIN V2: Scaling Ultra-Long User Behavior Sequence Modeling for Enhanced CTR Prediction | CIKM (Kuaishou) | 2024 | Non-LLM but key long-user-history-at-scale precedent (same lineage as DV365) | new, background/baseline only |
| SUM: Scaling User Modeling — Large-scale Online User Representations for Ads Personalization | arXiv (Meta) | 2024 | Individual persistent user representation learned online | new |

Excluded as out of scope despite touching "user modeling": E4SRec, CALRec, BERT4Rec, UserBERT, PTUM, DUPN, SIM, MUSE — generic behavioral/CTR sequence models, not persistent personal context for a conversational agent.

## Individual vs. group preference (from kbsdjames/awesome-LLM-preference-learning)

This confirms the distinction you flagged: this repo (~103 entries) is almost entirely generic RLHF/DPO/reward-modeling — "preference" meaning population-level "which response is better," not any specific person's preference over time. Only 2 entries are genuinely about an individual:

| Title | Venue | Year | Note |
|---|---|---|---|
| PRELUDE: Aligning LLM Agents by Learning Latent Preference from User Edits | NeurIPS | 2024 | Infers a per-user latent preference profile from that user's historic edits to agent output — genuinely individual/longitudinal. Worth checking it's not thematically overlapping with CUPID (implicit preference inference) already in the table | new |
| AuPEL: Automated Evaluation of Personalized Text Generation using Large Language Models | arXiv | 2023 | Not a personalization system — an *evaluation metric* for personalized generation. Secondary/tooling candidate, not core survey material | new |

The other ~101 entries (PPO, DPO, KTO, SimPO, reward modeling, LLM-as-judge, best-of-N sampling, MCTS-based data generation, MT-Bench/Chatbot-Arena-style evaluation, etc.) are population-level alignment methods, excluded as out of scope for this survey.

## Raw candidate dump (from VanillaCreamer/Awesome-Personalized-LLMs, ~155 entries)

Too large to individually verify right now — this is a **raw candidate list for you to prune**, not verified like the sections above. `G` = looks generic/group-preference or recsys rather than individual-user personalization (per your earlier flag about that distinction) — kept visible rather than silently dropped so you can double check. Repo itself claims to deprioritize generic-alignment/recsys entries, but several still slipped in per the agent that mined it.

**Removed as duplicates** (13 entries, either already elsewhere in this document or repeated across these mined sections): Personalized Generation in Large Model Era, Personalization of LLMs survey, Personalized Multimodal LLMs survey, Survey of Personalized LLMs: Progress & Future (all 4 = dupes of the Surveys section above) · PersonaVLM ×2 occurrences (dupe of the base table, plus a self-dupe within this same source repo) · AlpsBench, MemoryCD, PERMA, PrefEval (all dupes of the Benchmark sections above) · LaMP, PersonaAgent, MC-LLaVA (each a cross-dupe with the same-named entry already kept in the Personalized LMMs/VLMs section above). One correction: "Step-back Profiling" was previously flagged as a duplicate by mistake — it was only discussed in conversation earlier, never actually added as a row — kept below as genuinely new.

**Survey/Tutorial (8):** Awesome Personalization in MLLMs (site); Toward Personalized LLM-Powered Agents (arXiv/26); PersonalLLM (arXiv/24); Amulet (arXiv/24); LLMs Empowered Personalized Web Agents (arXiv/24); Personalized & Pluralistic Preference Alignment survey (arXiv/25, `G`); Two Tales of Persona in LLMs survey (EMNLP/24); Personalized Alignment – Missing Piece survey (arXiv/24)

**Benchmark/Dataset (36):** SocialPersona (arXiv/26); PEC-Home (arXiv/26); Semantic Constraint Verification eval (arXiv/26); Whose Norms? (arXiv/26); Re-Centering Humans in Personalization (arXiv/26); ChildEval (arXiv/26); Think Thrice Before You Speak (arXiv/26); Psy-Chronicle (arXiv/26); APM (arXiv/26); Personalized Deep Research (arXiv/26); STALE (arXiv/26); Personalized Benchmarking (arXiv/26); KnowU-Bench (arXiv/26); Beyond Static Personas (arXiv/26); TSUBASA (arXiv/26); Personalized RewardBench (arXiv/26, `G`); Stories of Your Life as Others (arXiv/26); Ego-Grounding Egocentric QA (arXiv/26); PSPA-Bench (arXiv/26); Mimetic Alignment/ASPECT (arXiv/26); PICon (arXiv/26); AgenticShop (arXiv/26); Persona2Web (arXiv/26); EmoHarbor (arXiv/26); Mental World of LLMs in Recommendation (arXiv/25, `G`); BESPOKE (arXiv/25); CAPE (arXiv/25); PerFairX (arXiv/25, `G`); Neuron-based Personality Trait Induction (ICLR/25, `G`); Personality Alignment of LLMs (ICLR/25, `G`); LaMP-QA (arXiv/25); CharacterBench (AAAI/25); MBTI Personality Detection Dataset (arXiv/24, `G`); LongLaMP (arXiv/24); PersonalSum (NeurIPS/24); Can LLM be a Personalized Judge? (EMNLP/24)

**Memory/Retrieval (28):** TRUSTMEM (arXiv/26); Towards Root Memories (arXiv/26); Wireless Personal Agent (arXiv/26); AtomMem (arXiv/26); Statistical Priors for Implicit Preferences (arXiv/26); MemGuard (arXiv/26); DeferMem (arXiv/26); EmoTrack (arXiv/26); CALMem (arXiv/26); Rethinking How to Remember (arXiv/26); Response-Aware User Memory Selection (arXiv/26); HingeMem (arXiv/26); SensorPersona (arXiv/26); FileGram (arXiv/26); MemMachine (arXiv/26); Orion (AAAI/26); MemRerank (arXiv/26); Multi-Step Retrieval Reasoning (arXiv/26); User Privacy in Personalized Gen (arXiv/26); User Profiles via Contextual Bandits (arXiv/26); Bi-Mem (arXiv/26); Me-Agent (arXiv/26); Inside Out/Core Memory Trees (arXiv/26); Personalized Graph-Based Retrieval (arXiv/25); SeCom (ICLR/25); Step-back Profiling (arXiv/24); Integrating Summarization & Retrieval (CIKM/23); Learning to Remember User Conversations (arXiv/24); Optimization Methods for Retrieval-Aug Personalization (SIGIR/24)

**Prompt/Vector/Decoding (27):** Continuous Behavioral Synthesis/Health Dashboards (arXiv/26); Self-supervised User Profile Gen (arXiv/26); Playing Devil's Advocate/Persona Vectors (arXiv/26); Capability Conditioned Scaffolding (arXiv/26); Tracing Persona Vectors Through Pretraining (arXiv/26); Learning Transferable Latent User Preferences (arXiv/26); CLIPer (arXiv/26); MAESTRO (arXiv/26); AdaptFuse (arXiv/26); Persona Vectors in Games (arXiv/26); Attn-GS (arXiv/26); Personalized Text Gen/Fine-Grained Linguistic Control (arXiv/24); Bring My Cup! (arXiv/25); Geometry of Persona (arXiv/25, `G`); Moral Susceptibility under Persona Role-Play (arXiv/25, `G`); MLLMs Personalized Product Search (arXiv/25); Reasoning w/ Preference Constraints/Matching Markets (arXiv/25, `G`); Context Steering (ICLR/25); Personalized LMs/Privacy-Preserving Model Merging (arXiv/25); Contrastive Activation Steering (arXiv/25); Inferring Personality from Conversations (arXiv/25); Unims-RAG (arXiv/24); Orca (arXiv/24); Imitating a Real Person's Style (arXiv/24); Dynamic Generation of Personalities (arXiv/24, `G`); Rewrite Prompts for Personalized Text Gen (WWW/24); Guided Profile Generation (EMNLP/24)

**SFT/RL/Preference Opt. (42):** ProfiLLM (arXiv/26); CFALR (arXiv/26, `G`); Mult-DPO (arXiv/26, `G`); PAFO (arXiv/26, `G`); Route LLMs via Meta-Learning (arXiv/26); Human Label Variation/Annotator Pref Opt (arXiv/26, `G`); Semantic Flow Regularization (arXiv/26); Unlocking Proactivity/Task-Oriented Dialogue (arXiv/26); One Model for All (arXiv/26, `G`); Many Preferences, Few Policies (arXiv/26, `G`); Variational Reward Factorization (arXiv/26, `G`); EpiPersona (arXiv/26); Personalized Agents from Human Feedback (arXiv/26); Synthetic Interaction Data (arXiv/26); UserLM-R1 (arXiv/26); MTA (arXiv/25); Adaptive Pref Opt/Sequential Recommendation (arXiv/25, `G`); Reflective Personalization Optimization (arXiv/25); Instant Personalized Adaptation/Hypernetwork (arXiv/25); POPI (arXiv/25); Clarifying Questions for Pref Elicitation (arXiv/25); Personas within Parameters (arXiv/25); CBP-Tuning (arXiv/25); Towards On-Device Personalization (arXiv/25); NL Feedback for Personalized QA (arXiv/25); MM-R1 (arXiv/25); End-to-End Personalization (arXiv/25, `G`); CAP-LLM (arXiv/25); Persona Vectors (arXiv/25); Contrasting Personal Preference Decoding (arXiv/25); Generative Adapter (ICLR/25); DiffPO (arXiv/25); Personalized LM w/o User Identifiers (arXiv/25); Personalizing MLLMs/Image Captioning (arXiv/24); LMLPA (arXiv/24); LLMs + Persona-Plug (arXiv/24); PEFT-U (arXiv/24); P-Tailor (arXiv/24); Online Personalizing White-box LLMs (arXiv/24); Democratizing LLMs via Personalized PEFT (EMNLP/24); Personalized Pieces (EMNLP/24); HYDRA (NeurIPS/24)

## Memory systems / tools (repos)

| Name | Link | Associated paper (if any) | Venue | Year | Status |
|---|---|---|---|---|---|
| ReadAgent | github.com/read-agent/read-agent.github.io | A Human-Inspired Reading Agent with Gist Memory of Very Long Contexts | ICML | 2024-02 | ✅ |
| Self-RAG | github.com/akariasai/self-rag | Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection | ICLR (Oral) | 2023-10 | ✅ |
| HippoRAG | github.com/osu-nlp-group/hipporag | HippoRAG: Neurobiologically Inspired Long-Term Memory for Large Language Models | NeurIPS | 2024-05 | ✅ |
| MemoryBank (SiliconFriend) | github.com/zhongwanjun/MemoryBank-SiliconFriend | MemoryBank: Enhancing Large Language Models with Long-Term Memory | AAAI | 2023-05 | ✅ |
| A-Mem | github.com/WujiangXu/A-mem | A-MEM: Agentic Memory for LLM Agents | NeurIPS | 2025-02 | ✅ |
| LightMem | github.com/zjunlp/LightMem | LightMem: Lightweight and Efficient Memory-Augmented Generation | ICLR | 2025-10 | ✅ |
| MemVerse | github.com/KnowledgeXLab/MemVerse | MemVerse: Multimodal Memory for Lifelong Learning Agents | arXiv | 2025-12 | ✅ |
| SimpleMem | github.com/aiming-lab/SimpleMem | SimpleMem: Efficient Lifelong Memory for LLM Agents | arXiv | 2026-01 | ✅ |
| TraceMem | github.com/YimingShu-teay/TraceMem | TraceMem: Weaving Narrative Memory Schemata from User Conversational Traces | arXiv | 2026-02 | ✅ |
| MAGMA | (no link given) | MAGMA: A Multi-Graph based Agentic Memory Architecture for AI Agents | ACL (main) | 2026-01 | ⚠️ medium confidence — name-based match only, no repo link given, "MAGMA" is an overloaded name |
| PersonaVLM | personavlm.github.io | PersonaVLM: Long-Term Personalized Multimodal LLMs | CVPR | 2026 | ✅ (arXiv 2604.13074, verified earlier this session) |
| Zep / Graphiti | github.com/getzep/graphiti | Zep: A Temporal Knowledge Graph Architecture for Agent Memory | arXiv | 2025-01 | ✅ |
| MemGPT / Letta | github.com/letta-ai/letta | MemGPT: Towards LLMs as Operating Systems | arXiv (not peer-venue) | 2023-10 | ✅ (project renamed Letta Sept 2024) |
| Mem0 | github.com/mem0ai/mem0 | Mem0: Building Production-Ready AI Agents with Scalable Long-Term Memory | arXiv | 2025-04-28 | ✅ |
| MemOS | github.com/MemTensor/MemOS | MemOS: An Operating System for Memory-Augmented Generation (short) / MemOS: A Memory OS for AI System (full) | arXiv | 2025-05 (short) / 2025-07 (full) | ✅ |
| MemU | github.com/NevaMind-AI/memU | none found | — | — | ⏳ no paper located; repo-only (markdown/file-based agent memory framework) |
| Cognee | github.com/topoteretes/cognee | no dedicated Cognee paper found; related: "Optimizing the Interface Between Knowledge Graphs and LLMs for Complex Reasoning" (not an official Cognee paper) | arXiv | 2025-05 | ⚠️ medium confidence, no official paper |
| mempalace | github.com/milla-jovovich/mempalace | no official paper (only a third-party critique: "Spatial Metaphors for LLM Memory: A Critical Analysis of the MemPalace Architecture") | arXiv (third-party) | 2026-04 | ✅ real project (released by Milla Jovovich + Ben Sigman), benchmark claims reportedly disputed/walked back — no official paper |
| LangChain memory | (industrial guideline) | Long-term Memory in LLM Applications (LangMem conceptual guide) | guideline, not a paper | — | ✅ confirmed as guide, not paper |

## NLP papers (general)

| Title | Venue | Year | Status |
|---|---|---|---|
| Large Language Models Are Semi-Parametric Reinforcement Learning Agents | NeurIPS | 2023-06 (arXiv 2306.07929) | ✅ |
| In Prospect and Retrospect: Reflective Memory Management for Long-term Personalized Dialogue Agents | ACL (long) | 2025-03 (arXiv 2503.08026) | ✅ |
| Evo-Memory: Benchmarking LLM Agent Test-time Learning with Self-Evolving Memory | arXiv | 2025-11 (2511.20857) | ✅ |

## NLP datasets

| Short name | Title | Venue | Year | Status |
|---|---|---|---|---|
| LoCoMo | Evaluating Very Long-Term Conversational Memory of LLM Agents | ACL (long) | 2024 (arXiv 2402.17753) | ✅ title corrected — "LoCoMo" is the dataset name, not the paper title (same paper as the benchmark-table LOCOMO entry below) |
| LongMemEval | LongMemEval: Benchmarking Chat Assistants on Long-Term Interactive Memory | ICLR | 2025 (arXiv 2410.10813) | ✅ |
| BABILong | Testing the Limits of LLMs with Long Context Reasoning-in-a-Haystack | NeurIPS (D&B track) | 2024-06 (arXiv 2406.10149) | ✅ |
| PersonaMem-v2 | PersonaMem-v2: Towards Personalized Intelligence via Learning Implicit User Personas and Agentic Memory | arXiv | 2025-12 (2512.06688) | ✅ reconciled — same paper as "PersonaMemv2" in benchmark table below; confirmed a distinct, larger follow-up to PersonaMem (COLM 2025), not just a version bump |
| — | ConvoMem Benchmark: Why Your First 150 Conversations Don't Need RAG | arXiv | 2025-11 (2511.10523) | ✅ full title + month corrected (was "Oct") |

## Surveys / lists

| Category | Title | Venue | Year | Status |
|---|---|---|---|---|
| github list | awesome-agent-memory | GitHub | — | ✅ exists (several near-identical forks: TeleAI-UAGI, AgentMemoryWorld, cxxz) |
| personalization | Personalized Generation In Large Model Era: A Survey | ACL (long) | 2025-03 (arXiv 2503.02614) | ✅ |
| personalization | Personalization of Large Language Models: A Survey | arXiv | v1: 2024-10, latest rev: 2025-07 (2411.00027) | ⚠️ corrected — original date is Oct 2024, not Jun 2025 (Jun may refer to an intermediate revision) |
| personalization | A Survey of Personalized Large Language Models: Progress and Future Directions | arXiv | v1: 2025-02, v2: 2025-09 (2502.11528) | ✅ Sept matches latest revision |
| personalization | Personalized Multimodal Large Language Models: A Survey | arXiv | 2024-12 (2412.02142) | ✅ |
| memory | A Survey on the Memory Mechanism of Large Language Model based Agents | arXiv | 2024-04 (2404.13501) | ✅ |
| memory | From Human Memory to AI Memory: A Survey on Memory Mechanisms in the Era of LLMs | arXiv | 2025-04 (2504.15965) | ✅ |
| memory | Memory in Large Language Models: Mechanisms, Evaluation and Evolution | arXiv | 2025-09 (2509.18868) | ✅ |
| memory | The AI Hippocampus: How Far are We From Human Memory? | arXiv | 2026-01 (2601.09113) | ⚠️ corrected — actually submitted Jan 2026, not Nov 2025 |
| memory | Memory in the Age of AI Agents: A Survey — Forms, Functions and Dynamics | arXiv | 2025-12 (2512.13564) | ✅ full subtitle added |

## Approach papers

| Title | Venue | Year | Status |
|---|---|---|---|
| Mem0: Building Production-Ready AI Agents with Scalable Long-Term Memory | arXiv | 2025-04-28 | ✅ |
| EverMemOS: A Self-Organizing Memory Operating System for Structured Long-Horizon Reasoning | arXiv | 2026-01 (2601.02163) | ✅ |
| According to Me: Long-Term Personalized Referential Memory QA (= ATM-Bench) | arXiv | 2026-03 (2603.01990) | ✅ verified earlier this session |
| Memory-R1: Enhancing Large Language Model Agents to Manage and Utilize Memories via Reinforcement Learning | arXiv | 2025-08 (2508.19828) | ✅ |
| O-Mem: Omni Memory System for Personalized, Long Horizon, Self-Evolving Agents | arXiv | 2025-11 (2511.13593) | ✅ |
| MemInsight: Autonomous Memory Augmentation for LLM Agents | EMNLP (also arXiv 2503.21760) | arXiv 2025-03, later accepted EMNLP 2025 | ✅ upgraded — accepted at EMNLP 2025 |
| Mem-α: Learning Memory Construction via Reinforcement Learning | arXiv | 2025-09 (2509.25911) | ✅ |
| MemR3: Memory Retrieval via Reflective Reasoning for LLM Agents | arXiv | 2025-12 (2512.20237) | ✅ |

## Benchmarks — conversational chat, clear preference/facts

| Name | Title | Venue | Year | Data type | Status |
|---|---|---|---|---|---|
| LOCOMO | Evaluating Very Long-Term Conversational Memory of LLM Agents | ACL (long) | 2024 | generated; human-verify | ✅ |
| MemoryBank | MemoryBank: Enhancing Large Language Models with Long-Term Memory | AAAI | 2024 | generated; human-annotate-QA | ✅ (same paper as the repo entry above) |
| PerLTQA | PerLTQA: A Personal Long-Term Memory Dataset for Memory Classification, Retrieval, and Fusion in QA | **SIGHAN-10 workshop** | 2024-08 | generated; human-verify | ⚠️ corrected — workshop paper, not ACL main |
| LongMemEval | LongMemEval: Benchmarking Chat Assistants on Long-Term Interactive Memory | ICLR | 2025 | generated; human-verify | ✅ |
| PersonaMem | Know Me, Respond to Me: Benchmarking LLMs for Dynamic User Profiling and Personalized Responses at Scale | COLM | 2025 | generated; AI-verify | ✅ title added |
| CUPID | CUPID: Evaluating Personalized and Contextualized Alignment of LLMs from Interactions | COLM | 2025 (arXiv 2508.01674) | generated; human-verify | ✅ |
| MMPB | MMPB: It's Time for Multi-Modal Personalization | NeurIPS | 2025 (arXiv 2509.22820) | real | ✅ |
| BenchPreS | BenchPreS: A Benchmark for Context-Aware Personalized Preference Selectivity of Persistent-Memory LLMs | arXiv (no peer venue found) | 2026-03 (2603.16557) | — | ✅ |
| LifeSim | LifeSim: Long-Horizon User Life Simulator for Personalized Assistant Evaluation | arXiv | 2026-03 (2603.12152) | | ✅ |
| MemoryCD | MemoryCD: Benchmarking Long-Context User Memory of LLM Agents for Lifelong Cross-Domain Personalization | Lifelong Agent Workshop @ ICLR (ICLRw) | 2026 (arXiv 2603.25973) | real (Amazon Review) | ✅ |
| OP-Bench | — | — | — | generated; human-verify | ❌ **not found** — no matching paper after multiple searches; likely wrong name or too obscure to index |
| PERMA | PERMA: Benchmarking Personalized Memory Agents via Event-Driven Preference and Realistic Task Environments | arXiv | 2026-03 (2603.23231) | generated | ✅ |

## Benchmarks — conversational chat, hidden preference/facts

| Name | Title | Venue | Year | Data type | Status |
|---|---|---|---|---|---|
| PrefEval | Do LLMs Recognize Your Preferences? Evaluating Personalized Preference Following in LLMs | ICLR (Oral) | 2025 (arXiv 2502.09597) | generated; human-verify | ✅ |
| AlpsBench | AlpsBench: An LLM Personalization Benchmark for Real-Dialogue Memorization and Preference Alignment | **SIGIR '26** (arXiv 2603.26680) | 2026-03 arXiv → Jul 2026 SIGIR | real (WildChat); human-verified | ✅ upgraded — since accepted at SIGIR '26, not just arXiv |
| PersonaMemv2 | PersonaMem-v2: Towards Personalized Intelligence via Learning Implicit User Personas and Agentic Memory | arXiv | 2025-12 (2512.06688) | generated; AI-verify | ✅ reconciled — same paper as "PersonaMem-v2" in NLP-datasets above; confirmed distinct follow-up to PersonaMem (COLM 2025) |
| Viet's Bench (ours) | — | — | — | generated; AI-verify | — internal, skip verification |
| PersonaVLM | PersonaVLM: Long-Term Personalized Multimodal LLMs | CVPR | 2026 (arXiv 2604.13074) | — | ✅ verified earlier this session, introduces Persona-MME benchmark |

## Benchmarks — image collections, general

| Name | Title | Venue | Year | Data type | Status |
|---|---|---|---|---|---|
| Visual Haystacks | Visual Haystacks: A Vision-Centric Needle-In-A-Haystack Benchmark | ICLR | 2025 | real | ✅ |

## Benchmarks — image collections, personal

| Name | Title | Venue | Year | Data type | Status |
|---|---|---|---|---|---|
| PhotoBench | PhotoBench: Beyond Visual Matching Towards Personalized Intent-Driven Photo Retrieval | **KDD '26** (D&B track) (arXiv 2603.01493) | 2026-03 arXiv → KDD 2026 | real (in-house / personal albums) | ✅ upgraded — since accepted at KDD '26 |
| DeepImageSearch (= DIS-Bench) | DeepImageSearch: Benchmarking Multimodal Agents for Context-Aware Image Retrieval in Visual Histories | arXiv | 2026 (arXiv 2602.10809) | real (YFCC100M) | ✅ verified earlier this session |
| ATM-Bench | According to Me: Long-Term Personalized Referential Memory QA | arXiv | 2026-03 (2603.01990) | real (first author) | ✅ verified earlier this session |
| ATM-Bench-Hard | — | — | — | | ⚠️ corrected — not a separate paper; it's a hard subset/split within ATM-Bench itself (avg 6.3 evidence items/query, SOTA <20%) |
| MemoryQA | Memory-QA: Answering Recall Questions Based on Multimodal Memories | EMNLP (main) | 2025 (arXiv 2509.18436) | real (in-house / wearable device) | ✅ |
| OmniQuery | OmniQuery: Contextually Augmenting Captured Multimodal Memory(ies) to Enable Personal Question Answering | CHI | 2025 | real (paid to collect) | ✅ |
