// ---------- Edit your content here ----------
const projects = [
  { group: "featured", brief: "A boarding house management app with billing, notifications and analytics.", banner: "★ FLAGSHIP SYSTEM ARCHITECTURE ★", kicker: "END-TO-END BOARDING HOUSE ADMINISTRATION PLATFORM", title: "Digital Kos Management System",
    paras: [
      "A full-stack boarding house (kos) management system built from an idea I developed for a Software Engineering & Mobile Programming course. I worked across all 4 sprints, building the frontend, backend, authentication, database, notifications, and analytics features.",
      "Built with Flutter using MVVM architecture, Node.js + Express, MySQL, JWT authentication, scheduled jobs, WhatsApp notifications, and Google Sheets integration."
    ],
    tags: ["Flutter", "Node.js", "MySQL", "JWT", "Cron Jobs", "WhatsApp API"],
    link: ["REPOSITORY", "https://github.com/coppi-ux/kos-management"],
    note: "Team of 5 · Contributed across All 4 Sprints",
    shots: [   // add  image: "yourfile.png"  to the box to show a real screenshot
      { big: true, image: "images/kos-cover.webp", gallery: [
      ["images/kos-1.webp", "Role selection: owner or tenant"],
      ["images/kos-2.webp", "Owner home: setup, rooms, tenants, billing and analytics"],
      ["images/kos-3.webp", "Room list with occupied and available status"],
      ["images/kos-4.webp", "Billing summary and bill generation"],
      ["images/kos-5.webp", "Analytics: income, unpaid bills and room occupancy"],
      ["images/kos-6.webp", "Tenant view: current bill and payment"]
    ], icon: "📱", label: "PROJECT SCREENSHOT / Flutter MVVM 18 Screens, Node.js/Express Backend & MySQL 9 Tables", caption: "Architecture Schema • Role-Based Admin & Tenant" }
    ] },
  { group: "personal", brief: "A UI/UX redesign of arisan savings groups, focused on transparency and privacy.", image: "images/arisanku-cover.webp", gallery: [
      ["images/arisanku-1.webp", "Dashboard: total pot, your status and this month's recipient"],
      ["images/arisanku-2.webp", "Payment: send proof by photo or upload, with payment history"],
      ["images/arisanku-3.webp", "Order: who receives the pot each month"]
    ], badge: "COMPETITION", icon: "🤝", shot: "Figma Flows", caption: "Dashboard • Payment • Order Screens", kicker: "UI/UX DESIGN CHALLENGE", year: "2026", title: "Arisanku", text: "A UI/UX redesign of Indonesian \"arisan\" (rotating savings groups), focused on transparency, privacy, and judgment-free late-payment verification. Designed in Figma and tested with real usability sessions, built with team CloVer (Shafiya Ramadhani Kanata, Deneta Evelyn Simamora, Clarisse Xaviera Kurniaman) for the EEA 2026 UI/UX Design Challenge (HIMATRO Universitas Lampung).", tags: ["Figma", "Usability Testing"], link: ["View on Figma ↗", "https://www.figma.com/"] },
  { group: "personal", brief: "A pixel-art surprise gift website with mini games and a letter reveal.", image: "images/gift-cover.webp", gallery: [
      ["images/gift-1.webp", "Mini game: drag the item to the toilet"],
      ["images/gift-2.webp", "A pixel letter opens"],
      ["images/gift-3.webp", "Mini game: drag the shrimp to the pan"],
      ["images/gift-4.webp", "The shrimp is served"],
      ["images/gift-5.webp", "The final letter on the plate"]
    ], badge: "SOLO PRANK", icon: "🦐", shot: "Web Reveal", caption: "Shrimp Plushy Unboxing Prank", kicker: "INTERACTIVE WEB", year: "2024", title: "Interactive Gift Card Website", text: "A solo, self-initiated HTML/CSS/JS surprise gift experience made for a Beelingua staff: a shrimp plushy hidden inside unexpected packaging as a prank, paired with a custom website reveal.", tags: ["HTML", "CSS", "JavaScript"], link: ["View the website ↗", "https://github.com/coppi-ux"] },
  { group: "personal", brief: "A browser pixel game: collect all 12 pages to unlock a gift.", image: "images/grad-cover.webp", gallery: [
      ["images/grad-1.webp", "Title screen: collect all 12 pages to unlock your gift"],
      ["images/grad-2.webp", "Walk around the garden and collect the pages"],
      ["images/grad-3.webp", "All pages collected: the gift is unlocked"]
    ], badge: "PIXEL GAME", icon: "🕹️", shot: "Canvas Game", caption: "Virtual Mobile Joystick Active", kicker: "CANVAS 2D GAME", year: "2025", title: "Graduation Quest", text: "A solo, self-initiated browser pixel game built in vanilla JavaScript and HTML5 Canvas, made to celebrate sister getting into ITB. Includes a mobile virtual joystick.", tags: ["JavaScript", "HTML5 Canvas", "Game Loop"], link: ["View the website ↗", "https://github.com/coppi-ux"] },
  { group: "academic", brief: "An AR app for early childhood education: scan cards to meet 3D animals.", image: "images/ar-cover.webp", gallery: [
      ["images/ar-1.webp", "Home screen: tap Scan to start"],
      ["images/ar-2.webp", "My Collection: the animals you have collected"],
      ["images/ar-3.webp", "AR scan: a 3D cat appears on the card"],
      ["images/ar-4.webp", "Animal detail: the cat in a 3D scene"]
    ], icon: "🦁 👓", shot: "Unity Raycasting & AR Collectibles", caption: "Vuforia Image Target Tracking Fixed Collider", kicker: "MULTIMEDIA & MIXED REALITY", year: "2026", title: "AR Animal App", text: "A Unity/Vuforia Android AR app built for early childhood education for a Multimedia & Mixed Reality course, with a group of 5; she was de facto lead developer, building the collectibles system, tap-detection raycasting, and particle effects, and managing the team's GitHub workflow. Heikal Ghazni Ibrahim designed the UI.", tags: ["Unity", "Vuforia", "C#"], link: ["View on GitHub ↗", "https://github.com/coppi-ux"] },
  { group: "academic", soon: true, badge: "RESEARCH PAPER", icon: "📡 ⚡", shot: "SIMULATION DATA & S-PARAMETER PLOTS (45–870 MHz)", caption: "FT50-61 vs FT37-61 NiZn Ferrite Core Simulation", kicker: "RESEARCH METHODOLOGY", year: "2026", title: "RF Transformer Comparative Study", text: "A research paper for a Research Methodology course comparing FT50-61 vs FT37-61 NiZn ferrite cores for a wideband RF transmission-line transformer (45-870 MHz) for passive radar. First author and simulation lead. Co-authors: Melisa Lea Andrea, Emmanuel Keith Hadipradja; corresponding author and supervisor: Livia Janice Widiapradja.", tags: ["RF Engineering", "Simulation", "Passive Radar"], status: "Status: In progress — being refined for conference submission" },
  { group: "academic", soon: true, icon: "🥗 📷", shot: "Computer Vision Ingredient Scanner", caption: "Real-time Detection & Recipe Retrieval Engine", kicker: "COMPUTER VISION", year: "Ongoing", title: "CookItUp", text: "A Flutter food scanner app built with a teammate for a Computer Vision course; she's currently expanding its recipe sources and image retrieval pipelines.", tags: ["Flutter", "Computer Vision", "Mobile Scanner"], status: "Status: In progress — not yet public" },
  { group: "academic", brief: "A C terminal app for renting musical instruments.", image: "images/rhythm-cover.webp", gallery: [
      ["images/rhythm-1.webp", "Main menu: user, admin or exit"],
      ["images/rhythm-2.webp", "User menu: browse, search, rent and return instruments"],
      ["images/rhythm-3.webp", "Instrument list with price and status"],
      ["images/rhythm-4.webp", "Renting an instrument by its ID"]
    ], kicker: "DATA STRUCTURES", year: "2024", title: "Rhythm Rentals", caption: "C Standard I/O • Data Structures Course", terminal: [["cmd", "> ./rhythm_rentals --auth admin"], ["ok", "[OK] Linked-list queue initialized (size: 64)"], ["warn", "> calculate_late_fee(rental_id: 104) -> IDR 45,000"], ["pass", "> File persistence sync: PASS"]], text: "A C terminal application for a Data Structures course: an instrument rental system with a linked-list queue, file persistence, role-based login, and late-fee calculation.", tags: ["C Language", "Data Structures", "CLI & File I/O"], link: ["View on GitHub ↗", "https://github.com/coppi-ux/CollegeProject"] },
];

const experience = [
  { kicker: "STUDENT ORGANIZATION", when: "2025 – 2026", title: "Responsi Division Activist, HIMTI BINUS University", text: "Active member of HIMTI's Responsi Division, the role through which I was later selected to lead the company visit event." },
  { kicker: "MENTORSHIP", when: "2025 – 2026", title: "Language Mentor, Beelingua (BINUS University)", text: "Mentored students in English language learning through BINUS's official Beelingua program, running interactive sessions focused on communication skills and confidence in real conversation." },
  { kicker: "FESTIVAL DIRECTOR", when: "Jan 2023 – Aug 2023", title: "Chief Executive, WafiFest 3.0, Al-Wafi Student Organization", text: "Led a 3-day hybrid inter-school festival themed \"Agent of Change,\" overseeing 54 committee members across 7 divisions, 10 competition categories, and a Rp 88.8 million budget." },
  { kicker: "STUDENT GOVERNANCE", when: "2022 – 2023", title: "Language Division Coordinator, Al-Wafi Student Organization", text: "Coordinated trilingual proficiency programs (Indonesian, English, Arabic) across the school community and maintained consistent language use standards among students." },
  { kicker: "EDUCATION", when: "2023", title: "Graduated, Al Wafi Islamic Boarding School, West Java", text: "Graduated as Valedictorian, Best in Language." }
];

// ---------- Build the page ----------
const esc = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

const rich = t => esc(t).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");   // **bold** inside project text

const githubIcon = '<svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>';

const emptyShot = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg><span>PREVIEW NOT AVAILABLE YET</span>`;

const galleryAttr = o => o.gallery ? ` data-gallery="${esc(JSON.stringify(o.gallery))}"` : "";

const kosShot = sh => `
  <div class="kos-shot ${sh.big ? "big" : sh.tone || ""}${sh.image ? " has-img" : ""}"${galleryAttr(sh)}>
    ${sh.image
      ? `<img src="${sh.image}" alt="${esc(sh.caption)}" loading="lazy">`
      : `<span class="k-icon">${sh.icon}</span><span class="k-label">[ ${esc(sh.label)} ]</span><small>${esc(sh.caption)}</small>`}
  </div>`;

// Featured project card (wide, text on the left, screenshots on the right)
const card = p => `
  <article class="card kos" data-brief="${esc(p.brief || "")}">
    <span class="flag">${esc(p.banner)}</span>
    <div class="kos-info">
      <p class="kos-kicker">${esc(p.kicker)}</p>
      <h3>${esc(p.title)}</h3>
      ${p.paras.map(t => `<p>${rich(t)}</p>`).join("")}
      <div class="kos-tags">${p.tags.map(t => `<span class="tag">${esc(t)}</span>`).join("")}</div>
      <a class="repo-btn" href="${p.link[1]}">${githubIcon}${esc(p.link[0])}</a>
      <p class="kos-note">${esc(p.note)}</p>
    </div>
    <div class="kos-shots">${p.shots.map(kosShot).join("")}</div>
  </article>`;

const terminalShot = p => `
  <div class="shot term">
    <div class="term-bar"><i></i><i></i><i></i><span>[ TERMINAL DATA / CLI PLACEHOLDER ]</span></div>
    <pre>${p.terminal.map(([c, t]) => `<span class="${c}">${esc(t)}</span>`).join("\n")}</pre>
    <small>${esc(p.caption)}</small>
  </div>`;

// Project cards (all shown at once, no rotation)
const slide = p => `
  <article class="card pcard${p.soon ? " no-preview" : ""}" data-brief="${esc(p.brief || "")}">
    ${p.badge ? `<span class="badge">${esc(p.badge)}</span>` : ""}
    ${p.terminal && !p.image ? terminalShot(p) : `<div class="shot${p.image ? " has-img" : p.soon ? " empty" : ""}"${galleryAttr(p)}>${p.soon ? emptyShot : p.image
      ? `<img src="${p.image}" alt="${esc(p.title)} screenshot" loading="lazy">`
      : `<span class="icon">${p.icon}</span><span class="label">[ PROJECT SCREENSHOT / ${esc(p.shot)} ]</span><small>${esc(p.caption)}</small>`}</div>`}
    <div class="meta-row"><span class="kicker">${esc(p.kicker)}</span><span class="yr">${esc(p.year)}</span></div>
    <h3>${esc(p.title)}</h3>
    <p>${esc(p.text)}</p>
    <div>${p.tags.map(t => `<span class="tag">${esc(t)}</span>`).join("")}</div>
    ${p.status ? `<p class="status">${esc(p.status)}</p>` : ""}
    ${p.link ? `<a href="${p.link[1]}">${esc(p.link[0])}</a>` : ""}
  </article>`;

["featured", "personal", "academic"].forEach(g => {
  const items = projects.filter(p => p.group === g);
  document.getElementById(g + "-list").innerHTML = items.map(g === "featured" ? card : slide).join("");
});

document.getElementById("experience-list").innerHTML = experience.map(e => `
  <li>
    <div class="t-card">
      <div class="t-top"><span class="t-kick">${esc(e.kicker)}</span><span class="t-when">${esc(e.when)}</span></div>
      <h3>${esc(e.title)}</h3>
      <p>${esc(e.text)}</p>
    </div>
  </li>`).join("");

// Contact form opens the visitor's email app with the message filled in
document.getElementById("contact-form").addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const subject = f.get("subject") || "Hello from your portfolio";
  const body = `${f.get("message")}\n\nFrom: ${f.get("name")} (${f.get("email")})`;
  window.location.href = `mailto:sofi.rkanata1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.getElementById("form-status").textContent = "Opening your email app. Press send there to finish.";
});

// ---------- Rotating role sticker (edit roles and colors here) ----------
// Sticker colors: fill (light), stroke (darker), ink (text, darkest). Used by the role sticker and every tag.
const palette = [
  { fill: "#D9EFFE", stroke: "#BAE3FD", ink: "#0C5A8A" },  // blue
  { fill: "#D1FAE5", stroke: "#A7F3D0", ink: "#047857" },  // green
  { fill: "#FEF3C7", stroke: "#FDE68A", ink: "#92400E" },  // amber
  { fill: "#F3E8FF", stroke: "#E9D5FF", ink: "#7E22CE" },  // purple
  { fill: "#EFF6FF", stroke: "#BFDBFE", ink: "#1D4ED8" },  // pale blue
  { fill: "#F0FDF4", stroke: "#BBF7D0", ink: "#15803D" },  // light green
  { fill: "#FCE7F3", stroke: "#FFC8E7", ink: "#BE185D" },  // pink
  { fill: "#D9EFFE", stroke: "#7FC4F0", ink: "#0369A1" },  // sky (earlier set)
  { fill: "#B6F3D7", stroke: "#7FE0B0", ink: "#0B6B4A" },  // mint
  { fill: "#FFD6DC", stroke: "#FE7583", ink: "#B4232F" },  // rose
  { fill: "#FFE0B2", stroke: "#FFB74D", ink: "#B45309" },  // orange
  { fill: "#FEF9D0", stroke: "#FFF176", ink: "#7A5C00" },  // yellow
  { fill: "#E6DCFF", stroke: "#B39DDB", ink: "#5B3FA0" }   // lavender
];

// Your roles, in order. Each one takes the next color from the palette.
const roles = [
  "Full-Stack Developer", "Backend Developer", "Frontend Developer", "Mobile Developer",
  "Game Developer", "UI/UX Designer", "Language Mentor"
];
const roleAt = i => ({ text: roles[i], ...palette[i % palette.length] });
const roleBox = document.getElementById("role");
const roleText = document.getElementById("role-text");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let r = 0, n = 0, deleting = false;

function setColors(role) {
  roleBox.style.background = role.fill;
  roleBox.style.borderColor = role.stroke;
  roleBox.style.color = role.ink;
}

function tick() {
  const role = roleAt(r);
  if (reduceMotion) {                       // no typing animation: just swap every 2.5s
    roleText.textContent = role.text; setColors(role);
    r = (r + 1) % roles.length;
    return setTimeout(tick, 2500);
  }
  if (!deleting) {
    n++; setColors(role);
    roleText.textContent = role.text.slice(0, n);
    if (n === role.text.length) { deleting = true; return setTimeout(tick, 1600); }
    return setTimeout(tick, 70);
  }
  n--;
  roleText.textContent = role.text.slice(0, n);
  if (n === 0) { deleting = false; r = (r + 1) % roles.length; return setTimeout(tick, 300); }
  setTimeout(tick, 35);
}
setColors(roleAt(0));
setTimeout(tick, 1800);   // first role stays visible for a moment, then it starts cycling

// Give every tag sticker the next palette color, so neighbors always look different
document.querySelectorAll(".tags span, .card .tag").forEach((el, i) => {
  const c = palette[i % palette.length];
  el.style.background = c.fill;
  el.style.borderColor = c.stroke;
  el.style.color = c.ink;
});

// ---------- Photo card: pick it up and stick it anywhere on the page ----------
(function () {
  const card = document.getElementById("photo-card");
  const main = document.querySelector("main");
  if (!card || !main) return;
  let dragging = false, startX, startY, startL, startT;

  function place(left, top) {            // keep the card inside the page
    const maxL = main.clientWidth - card.offsetWidth;
    const maxT = main.clientHeight - card.offsetHeight;
    card.style.left = Math.min(Math.max(0, left), maxL) + "px";
    card.style.top = Math.min(Math.max(0, top), maxT) + "px";
  }
  function free() {                      // leave the hero slot, same spot, now positioned on the page
    if (card.classList.contains("free")) return;
    const l = card.offsetLeft, t = card.offsetTop;
    card.classList.add("free");
    place(l, t);
  }
  function reset() {                     // double-click or Escape puts it back
    card.classList.remove("free");
    card.style.left = card.style.top = "";
    card.style.removeProperty("--tilt");
  }
  function drop() {
    if (!dragging) return;
    dragging = false;
    card.classList.remove("lifted");
    card.style.setProperty("--tilt", (Math.random() * 8 - 4).toFixed(1) + "deg");
    card.classList.add("stuck");
  }

  card.addEventListener("pointerdown", e => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    e.preventDefault();
    free();
    dragging = true;
    startX = e.clientX; startY = e.clientY;
    startL = card.offsetLeft; startT = card.offsetTop;
    card.setPointerCapture(e.pointerId);
    card.classList.add("lifted");
  });
  card.addEventListener("pointermove", e => {
    if (dragging) place(startL + e.clientX - startX, startT + e.clientY - startY);
  });
  card.addEventListener("pointerup", drop);
  card.addEventListener("pointercancel", drop);
  card.addEventListener("animationend", () => card.classList.remove("stuck"));
  card.addEventListener("dblclick", reset);
  card.addEventListener("keydown", e => {
    const d = e.shiftKey ? 60 : 20;
    const move = { ArrowLeft: [-d, 0], ArrowRight: [d, 0], ArrowUp: [0, -d], ArrowDown: [0, d] }[e.key];
    if (move) { e.preventDefault(); free(); place(card.offsetLeft + move[0], card.offsetTop + move[1]); }
    else if (e.key === "Escape") reset();
  });
  window.addEventListener("resize", () => {
    if (card.classList.contains("free")) place(card.offsetLeft, card.offsetTop);
  });
})();

// Make sure the spiral spine exists: adds it if index.html doesn't already have the <aside class="spine"> line
(function () {
  const main = document.querySelector("main");
  if (!main || main.querySelector(".spine")) return;
  const spine = document.createElement("aside");
  spine.className = "spine";
  spine.setAttribute("aria-hidden", "true");
  main.prepend(spine);
})();

// Fit the rings: only a whole number of rings goes down the strip, so none is cut off at the end of the page
(function () {
  const main = document.querySelector("main");
  const spine = document.querySelector(".spine");
  if (!main || !spine) return;
  function fitRings() {
    const small = window.matchMedia("(max-width: 640px)").matches;
    const pitch = small ? 46.6 : 74.5;      // space between rings (matches background-size in style.css)
    const pad = small ? 10 : 16;            // empty space above the first ring
    const count = Math.max(1, Math.floor((spine.offsetHeight - pad * 2) / pitch));
    spine.style.setProperty("--ring-top", pad + "px");
    spine.style.setProperty("--ring-h", count * pitch + "px");
  }
  fitRings();
  window.addEventListener("load", fitRings);
  window.addEventListener("resize", fitRings);
  if (window.ResizeObserver) new ResizeObserver(fitRings).observe(main);   // page height changes as content loads
})();

// ---------- Pop up while scrolling (repeats every time you scroll past) ----------
(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) return;       // no animation: everything just shows
  document.documentElement.classList.add("js-reveal");

  // what pops up (add a selector here to animate more things)
  const targets = document.querySelectorAll(".hero h1, .hero .role, .hero .quote, .hero .links, .sec-head, .contact-head, .kos, .pcard, .timeline li, .channels-card, #contact form");
  const intro = [".hero h1", ".hero .role", ".hero .quote", ".hero .links"];
  targets.forEach(el => {
    el.classList.add("reveal");
    const step = intro.findIndex(sel => el.matches(sel));
    if (step !== -1) el.style.setProperty("--d", (step + 1) * 100 + "ms");   // intro text pops in one after another
    if (el.classList.contains("pcard")) {                                      // cards in the same row pop one after another
      const columns = el.parentElement.id === "academic-list" ? 2 : 3;
      const position = Array.prototype.indexOf.call(el.parentElement.children, el);
      el.style.setProperty("--d", (position % columns) * 120 + "ms");
    }
  });

  // pops in when about 12% is on screen, and resets once it is completely off screen
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting && e.intersectionRatio >= 0.12) e.target.classList.add("in");
    else if (!e.isIntersecting) e.target.classList.remove("in");
  }), { threshold: [0, 0.12], rootMargin: "0px 0px -6% 0px" });
  targets.forEach(el => io.observe(el));
})();

// ---------- Picture preview: click a project card (or the Kos picture) to see it big ----------
(function () {
  const icon = d => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.hidden = true;
  lb.setAttribute("role", "dialog");
  lb.setAttribute("aria-modal", "true");
  lb.setAttribute("aria-label", "Project picture preview");
  lb.innerHTML = `
    <div class="lb-backdrop" data-close></div>
    <div class="lb-panel">
      <button type="button" class="lb-close" data-close aria-label="Close preview">${icon('<path d="M18 6 6 18"/><path d="m6 6 12 12"/>')}</button>
      <div class="lb-stage"></div>
      <p class="lb-shotcap"></p>
      <div class="lb-thumbs" role="group" aria-label="Pictures of this project" hidden></div>
      <div class="lb-caption">
        <div class="lb-info"><h3 class="lb-title"></h3><p class="lb-brief"></p></div>
        <a class="lb-open" href="#" target="_blank" rel="noopener">Open project ${icon('<path d="M7 7h10v10"/><path d="M7 17 17 7"/>')}</a>
      </div>
    </div>`;
  document.body.appendChild(lb);
  const q = sel => lb.querySelector(sel);
  const stage = q(".lb-stage"), thumbs = q(".lb-thumbs"), closeBtn = q(".lb-close");
  const text = (root, sel) => (root.querySelector(sel) || {}).textContent || "";

  let items = [], index = 0, opener = null;

  const varsOf = card => { const cs = getComputedStyle(card); return ["--tint", "--edge", "--txt"].map(v => `${v}:${cs.getPropertyValue(v).trim()}`).join(";"); };
  const infoOf = (card, isKos) => ({
    title: text(card, "h3"),
    brief: card.dataset.brief || "",
    href: (card.querySelector(isKos ? ".repo-btn" : ".lb-never, a") || {}).href || ""   // the project's own link (GitHub or Figma)
  });

  // el = a project card, or the picture box of the Kos card
  function itemsFor(el) {
    const isKos = el.classList.contains("kos-shot");
    const card = isKos ? el.closest(".kos") : el;
    const shot = isKos ? el : el.querySelector(".shot");
    const info = infoOf(card, isKos);
    if (shot && shot.dataset.gallery) {                       // the project has several screenshots: browse them
      const vars = isKos ? "--tint:#dbeafe;--edge:#7fb3f5" : varsOf(card);
      return { start: 0, vars, list: JSON.parse(shot.dataset.gallery).map(([src, caption], i, all) => ({
        ...info, thumb: src, label: caption, caption: `${i + 1} / ${all.length} · ${caption}`,
        stage: isKos
          ? `<div class="kos-shot big gal"><img src="${src}" alt="${esc(caption)}"></div>`
          : `<div class="pcard lb-wrap" style="${vars}"><div class="shot gal"><img src="${src}" alt="${esc(caption)}"></div></div>` })) };
    }
    if (isKos) return { start: 0, list: [{ ...info, caption: "", stage: el.outerHTML }] };
    const cards = [...card.parentElement.querySelectorAll(".pcard")];   // no screenshots yet: arrows move between projects
    return { start: Math.max(0, cards.indexOf(card)), list: cards.map(c => ({
      ...infoOf(c, false), caption: "",
      stage: `<div class="pcard lb-wrap" style="${varsOf(c)}">${c.querySelector(".shot").outerHTML}</div>` })) };
  }

  function show() {
    const it = items[index];
    stage.innerHTML = it.stage;
    stage.querySelectorAll("[tabindex]").forEach(n => { n.removeAttribute("tabindex"); n.removeAttribute("role"); n.removeAttribute("aria-label"); });   // the copy is only a picture
    q(".lb-shotcap").textContent = it.caption;
    q(".lb-title").textContent = it.title;
    q(".lb-brief").textContent = it.brief;
    const open = q(".lb-open");
    open.hidden = !it.href;
    if (it.href) open.href = it.href;
    thumbs.querySelectorAll(".lb-thumb").forEach((b, n) => {          // highlight the picture being shown
      const on = n === index;
      b.setAttribute("aria-current", on ? "true" : "false");
      if (on) b.scrollIntoView({ block: "nearest", inline: "center" });
    });
    [index - 1, index + 1].forEach(n => {                      // load the neighbours so browsing feels instant
      const m = (items[(n + items.length) % items.length] || {}).stage || "";
      const src = (m.match(/<img src="([^"]+)"/) || [])[1];
      if (src) new Image().src = src;
    });
  }
  function open(el, from) {
    const r = itemsFor(el);
    items = r.list; index = r.start; opener = from;
    const many = items.length > 1 && !!items[0].thumb;
    thumbs.innerHTML = many ? items.map((it, n) =>
      `<button type="button" class="lb-thumb" data-i="${n}" aria-label="Show picture ${n + 1}: ${esc(it.label)}"><img src="${it.thumb}" alt=""></button>`).join("") : "";
    thumbs.setAttribute("style", r.vars || "");
    thumbs.hidden = !many;
    show();
    lb.hidden = false;
    document.documentElement.style.overflow = "hidden";
    closeBtn.focus();
  }
  function close() {
    lb.hidden = true;
    stage.innerHTML = "";
    thumbs.innerHTML = "";
    document.documentElement.style.overflow = "";
    if (opener && opener.focus) opener.focus();
  }
  const step = d => { index = (index + d + items.length) % items.length; show(); };

  // clicking a card (anywhere except its link) opens the preview
  document.addEventListener("click", e => {
    if (!lb.hidden || e.target.closest("a, button")) return;
    let el = e.target.closest(".pcard, .kos");
    if (el && el.classList.contains("no-preview")) return;                       // nothing to preview yet
    if (el && el.classList.contains("kos")) el = el.querySelector(".kos-shot");   // clicking anywhere on the Kos card previews its pictures
    if (el) open(el, el.classList.contains("kos-shot") ? el : el.querySelector(".shot"));
  });
  lb.addEventListener("click", e => { if (e.target.closest("[data-close]")) close(); });
  thumbs.addEventListener("click", e => {
    const b = e.target.closest(".lb-thumb");
    if (b) { index = +b.dataset.i; show(); }
  });

  // keyboard: the picture boxes can be focused; Enter or Space opens, Esc closes, arrows browse
  document.querySelectorAll(".pcard:not(.no-preview) .shot, .kos-shot").forEach(box => {
    const name = box.closest(".pcard") ? text(box.closest(".pcard"), "h3") : text(box.closest(".kos"), "h3");
    box.tabIndex = 0;
    box.setAttribute("role", "button");
    box.setAttribute("aria-label", "Preview pictures: " + name);
    box.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(box.classList.contains("kos-shot") ? box : box.closest(".pcard"), box); }
    });
  });
  document.addEventListener("keydown", e => {
    if (lb.hidden) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowLeft" && items.length > 1) step(-1);
    else if (e.key === "ArrowRight" && items.length > 1) step(1);
    else if (e.key === "Tab") {                                   // keep focus inside the preview
      const f = [...lb.querySelectorAll("button, a.lb-open")].filter(b => !b.hidden);
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
})();

// ---------- Header: the pill follows the section you scrolled to, or the link you clicked ----------
(function () {
  const links = [...document.querySelectorAll(".nav nav a[href^='#']")].filter(a => !a.classList.contains("cv-btn"));
  const linkFor = { featured: "#featured", personal: "#personal", academic: "#personal", experience: "#experience", contact: "#contact" };   // Projects covers Personal and Academic
  const byHref = Object.fromEntries(links.map(a => [a.getAttribute("href"), a]));
  const inBand = new Set();
  let locked = false, unlockTimer, lockTarget = null;

  function setCurrent(link, again) {                           // again = a click: stick the pill on (again), even if it is already there
    const now = links.find(a => a.hasAttribute("aria-current")) || null;
    if (now === (link || null) && !again) return;                // nothing changed, so don't replay the animation
    links.forEach(a => { a.removeAttribute("aria-current"); a.classList.remove("stuck"); });
    if (link) {
      void link.offsetWidth;                                     // reading offsetWidth restarts the animation
      link.setAttribute("aria-current", "location");
      if (again) link.classList.add("stuck");                    // stuck on = it was clicked (scrolling gives the plain pill)
    }
  }
  function sync() {                                              // work out which section you are in
    if (locked) return;
    const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;
    let id = ["contact", "experience", "academic", "personal", "featured"].find(i => inBand.has(i));
    if (atBottom) id = "contact";
    if (window.scrollY < 40) id = null;                           // at the very top: no pill yet
    setCurrent(id ? byHref[linkFor[id]] : null);
  }
  // a section counts as "reached" once its top passes the upper part of the screen
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => (e.isIntersecting ? inBand.add(e.target.id) : inBand.delete(e.target.id)));
    sync();
  }, { rootMargin: "-15% 0px -70% 0px" });
  Object.keys(linkFor).forEach(id => { const s = document.getElementById(id); if (s) io.observe(s); });

  // clicking a link shows its pill straight away and keeps it while the page scrolls there
  const unlock = () => { locked = false; lockTarget = null; clearTimeout(unlockTimer); sync(); };
  const arrived = () => {                                        // has the page finished scrolling to the clicked section?
    if (!lockTarget) return true;
    const pad = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
    const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;
    return Math.abs(lockTarget.getBoundingClientRect().top - pad) < 8 || atBottom;
  };
  links.forEach(a => a.addEventListener("click", () => {
    setCurrent(a, true); locked = true; lockTarget = document.querySelector(a.getAttribute("href"));
    clearTimeout(unlockTimer); unlockTimer = setTimeout(unlock, 1600);
  }));
  window.addEventListener("scrollend", () => { if (locked && arrived()) unlock(); });   // ignore the end of some older scroll
  ["wheel", "touchstart"].forEach(ev => window.addEventListener(ev, () => { if (locked) unlock(); }, { passive: true }));
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (ticking) return; ticking = true;
    requestAnimationFrame(() => { ticking = false; sync(); });
  }, { passive: true });
  sync();
})();