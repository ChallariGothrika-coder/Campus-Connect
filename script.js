/* =========================
   CampusConnect — Smart Campus Companion
   Vanilla JavaScript application logic
   ========================= */

/* ---------- Sample data ---------- */

// Clearly marked sample announcements (demonstration data only).
const SAMPLE_ANNOUNCEMENTS = [
  {
    id: "a1",
    title: "Mid-term examination schedule released",
    description: "The mid-term timetable is now available on the college portal. Please review your exam dates carefully and report clashes to the examination cell.",
    category: "Examinations",
    date: "2026-10-05",
    priority: "High"
  },
  {
    id: "a2",
    title: "Library extended hours during exams",
    description: "The central library will stay open until 10:00 PM during the examination period. Carry your student ID for entry.",
    category: "Academics",
    date: "2026-10-08",
    priority: "Medium"
  },
  {
    id: "a3",
    title: "Annual cultural fest registrations open",
    description: "Registrations for the annual cultural fest are now open. Students can sign up for dance, music, drama and literary events.",
    category: "Events",
    date: "2026-10-10",
    priority: "Medium"
  },
  {
    id: "a4",
    title: "Campus maintenance notice",
    description: "Water supply will be interrupted in Block B on Saturday from 10 AM to 1 PM due to scheduled maintenance.",
    category: "General",
    date: "2026-10-12",
    priority: "Low"
  },
  {
    id: "a5",
    title: "Workshop on Data Structures",
    description: "A hands-on workshop on advanced data structures will be conducted by the CSE department on Friday.",
    category: "Academics",
    date: "2026-10-13",
    priority: "Medium"
  }
];

const SAMPLE_EVENTS = [
  {
    id: "e1",
    title: "Hackathon 2026",
    date: "2026-10-20",
    time: "9:00 AM - 6:00 PM",
    venue: "Computer Lab 2, Academic Block A",
    description: "A 9-hour coding hackathon for all CSE students. Teams of 3-4. Prizes for top three teams.",
    category: "Technical"
  },
  {
    id: "e2",
    title: "Cultural Night 2026",
    date: "2026-10-25",
    time: "5:00 PM - 9:00 PM",
    venue: "Auditorium",
    description: "An evening of music, dance and drama performances by college students.",
    category: "Cultural"
  },
  {
    id: "e3",
    title: "Inter-college Cricket Tournament",
    date: "2026-10-28",
    time: "8:00 AM - 5:00 PM",
    venue: "Sports Ground",
    description: "Annual inter-college cricket tournament. Registration required for team participation.",
    category: "Sports"
  },
  {
    id: "e4",
    title: "Web Development Workshop",
    date: "2026-11-02",
    time: "10:00 AM - 1:00 PM",
    venue: "Computer Lab 1, Academic Block B",
    description: "Introductory workshop on HTML, CSS and JavaScript for beginners.",
    category: "Workshops"
  },
  {
    id: "e5",
    title: "Resume Building Seminar",
    date: "2026-11-05",
    time: "2:00 PM - 4:00 PM",
    venue: "Seminar Hall",
    description: "Guidance on crafting an effective resume and preparing for placements.",
    category: "Technical"
  }
];

const SAMPLE_TIMETABLE = {
  Monday: [
    { time: "09:00 - 10:00", subject: "Data Structures", room: "Room 201, Block A" },
    { time: "10:15 - 11:15", subject: "Operating Systems", room: "Room 105, Block B" },
    { time: "11:30 - 12:30", subject: "Database Management", room: "Lab 1, Block A" },
    { time: "14:00 - 15:00", subject: "Mathematics III", room: "Room 302, Block C" }
  ],
  Tuesday: [
    { time: "09:00 - 10:00", subject: "Computer Networks", room: "Room 201, Block A" },
    { time: "10:15 - 11:15", subject: "Software Engineering", room: "Room 108, Block B" },
    { time: "11:30 - 12:30", subject: "Data Structures Lab", room: "Lab 2, Block A" }
  ],
  Wednesday: [
    { time: "09:00 - 10:00", subject: "Operating Systems", room: "Room 204, Block A" },
    { time: "10:15 - 11:15", subject: "Database Management", room: "Room 105, Block B" },
    { time: "12:45 - 13:45", subject: "Web Technologies", room: "Lab 3, Block B" },
    { time: "14:00 - 15:00", subject: "Mathematics III", room: "Room 302, Block C" }
  ],
  Thursday: [
    { time: "09:00 - 10:00", subject: "Computer Networks", room: "Room 201, Block A" },
    { time: "10:15 - 11:15", subject: "Data Structures", room: "Room 204, Block A" },
    { time: "11:30 - 12:30", subject: "Software Engineering", room: "Room 108, Block B" }
  ],
  Friday: [
    { time: "09:00 - 10:00", subject: "Database Management Lab", room: "Lab 1, Block A" },
    { time: "11:30 - 12:30", subject: "Web Technologies", room: "Lab 3, Block B" },
    { time: "14:00 - 15:00", subject: "Seminar", room: "Seminar Hall" }
  ],
  Saturday: []
};

const SAMPLE_LOSTFOUND = [
  {
    id: "lf-sample-1",
    type: "lost",
    name: "Black wallet",
    description: "Black leather wallet containing student ID and a few cards. Lost near library.",
    category: "IDs / Documents",
    location: "Library entrance",
    date: "2026-10-09",
    contact: "student1@college.edu (sample)",
    createdAt: "2026-10-09T10:00:00.000Z",
    sample: true
  },
  {
    id: "lf-sample-2",
    type: "found",
    name: "USB drive (32GB)",
    description: "Blue 32GB pen drive found on a bench in Block A lobby.",
    category: "Electronics",
    location: "Block A lobby",
    date: "2026-10-11",
    contact: "student2@college.edu (sample)",
    createdAt: "2026-10-11T14:00:00.000Z",
    sample: true
  }
];

const CAMPUS_LOCATIONS = [
  { id: "c1", name: "Main Entrance", category: "Administrative", description: "Primary campus gate with security check and visitor registration." },
  { id: "c2", name: "Academic Block A", category: "Academic", description: "Classrooms, labs, and faculty offices for CSE and ECE departments." },
  { id: "c3", name: "Academic Block B", category: "Academic", description: "Lecture halls, seminar rooms, and the examination cell." },
  { id: "c4", name: "Central Library", category: "Academic", description: "Quiet study spaces, reference sections, and digital resource centre." },
  { id: "c5", name: "Computer Laboratories", category: "Academic", description: "Well-equipped computer labs used for practical sessions." },
  { id: "c6", name: "Canteen", category: "Services", description: "Affordable meals, snacks, and beverages for students and staff." },
  { id: "c7", name: "Auditorium", category: "Recreation", description: "Large venue for seminars, cultural events, and guest lectures." },
  { id: "c8", name: "Sports Ground", category: "Recreation", description: "Outdoor field for cricket, football, athletics, and events." },
  { id: "c9", name: "Administrative Office", category: "Administrative", description: "Student services, fee payment, certificates, and records." },
  { id: "c10", name: "Faculty Lounge", category: "Academic", description: "Reserved space for faculty and staff meetings." }
];

/* ---------- Storage helpers ---------- */

const STORAGE_KEYS = {
  lostfound: "campusconnect_lostfound",
  registrations: "campusconnect_registrations",
  timetable: "campusconnect_timetable"
};

function safeJsonParse(str, fallback) {
  try {
    const v = JSON.parse(str);
    return Array.isArray(v) || (v && typeof v === "object") ? v : fallback;
  } catch (e) {
    return fallback;
  }
}

function getStoredLostFound() {
  const raw = localStorage.getItem(STORAGE_KEYS.lostfound);
  const parsed = safeJsonParse(raw, []);
  if (!Array.isArray(parsed)) return [];
  // validate shape lightly
  return parsed.filter(item =>
    item && typeof item === "object" &&
    item.id && item.name && item.type
  );
}

function saveLostFound(list) {
  try {
    localStorage.setItem(STORAGE_KEYS.lostfound, JSON.stringify(list));
  } catch (e) {
    showToast("Could not save data in this browser.");
  }
}

function getRegistrations() {
  const raw = localStorage.getItem(STORAGE_KEYS.registrations);
  const parsed = safeJsonParse(raw, []);
  return Array.isArray(parsed) ? parsed : [];
}

function saveRegistrations(list) {
  try {
    localStorage.setItem(STORAGE_KEYS.registrations, JSON.stringify(list));
  } catch (e) {
    showToast("Could not save registration.");
  }
}

function allLostFoundPosts() {
  const user = getStoredLostFound().map(p => ({ ...p, sample: false }));
  return [...SAMPLE_LOSTFOUND, ...user];
}

/* ---------- State ---------- */

const state = {
  section: "dashboard",
  selectedDay: todayDayName(),
  globalQuery: "",
};

function todayDayName() {
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const d = new Date().getDay();
  // Default to Monday if weekend
  const name = days[d];
  if (name === "Sunday") return "Monday";
  return name;
}

/* ---------- Utilities ---------- */

function escapeHtml(str) {
  return String(str == null ? "" : str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatDate(iso) {
  if (!iso) return "";
  try {
    const d = new Date(iso);
    if (isNaN(d.getTime())) return iso;
    return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  } catch (e) {
    return iso;
  }
}

function showToast(message, type) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  toast.hidden = false;
  clearTimeout(toast._t);
  toast._t = setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => { toast.hidden = true; }, 200);
  }, 2600);
}

let idCounter = 0;
function uniqueId(prefix) {
  idCounter += 1;
  return prefix + "-" + Date.now().toString(36) + "-" + idCounter;
}

/* ---------- Navigation ---------- */

function showSection(name) {
  state.section = name;
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  const page = document.getElementById("section-" + name);
  if (page) page.classList.add("active");
  document.querySelectorAll(".nav-item").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.section === name);
  });
  // close mobile sidebar
  document.body.classList.remove("sidebar-open");
  const toggle = document.getElementById("menuToggle");
  if (toggle) toggle.setAttribute("aria-expanded", "false");
  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Render relevant
  if (name === "dashboard") renderDashboard();
  if (name === "timetable") renderTimetable();
  if (name === "announcements") renderAnnouncements();
  if (name === "events") renderEvents();
  if (name === "lostfound") renderLostFound();
  if (name === "campus") renderCampus();
}

function initNavigation() {
  document.querySelectorAll("[data-section]").forEach(el => {
    el.addEventListener("click", e => {
      const sec = el.dataset.section;
      if (sec) showSection(sec);
    });
  });

  const toggle = document.getElementById("menuToggle");
  const backdrop = document.getElementById("sidebarBackdrop");
  toggle.addEventListener("click", () => {
    const open = document.body.classList.toggle("sidebar-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  backdrop.addEventListener("click", () => {
    document.body.classList.remove("sidebar-open");
    toggle.setAttribute("aria-expanded", "false");
  });

  // Profile menu
  const profBtn = document.getElementById("profileBtn");
  const profMenu = document.getElementById("profileMenu");
  profBtn.addEventListener("click", e => {
    e.stopPropagation();
    const hidden = profMenu.hidden;
    profMenu.hidden = !hidden;
    profBtn.setAttribute("aria-expanded", String(hidden));
  });
  document.addEventListener("click", e => {
    if (!profMenu.contains(e.target) && !profBtn.contains(e.target)) {
      profMenu.hidden = true;
      profBtn.setAttribute("aria-expanded", "false");
    }
  });

  document.getElementById("resetDataBtn").addEventListener("click", resetDemoData);
  document.getElementById("resetDataBtn2").addEventListener("click", resetDemoData);
  const exportBtn = document.getElementById("exportDataBtn");
  if (exportBtn) exportBtn.addEventListener("click", () => {
    try {
      // eslint-disable-next-line no-console
      console.log("Lost & Found:", getStoredLostFound());
      // eslint-disable-next-line no-console
      console.log("Registrations:", getRegistrations());
      showToast("Stored data logged to console.");
    } catch (e) { showToast("Could not read stored data."); }
  });

  // Keyboard: Escape closes menus
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      profMenu.hidden = true;
      document.body.classList.remove("sidebar-open");
    }
  });
}

/* ---------- Dashboard ---------- */

function renderDashboard() {
  // Summary counts
  const upcomingEvents = SAMPLE_EVENTS.filter(e => new Date(e.date) >= new Date(new Date().toDateString())).length;
  const announcementsCount = SAMPLE_ANNOUNCEMENTS.length;
  const lfCount = allLostFoundPosts().length;
  const regs = getRegistrations().length;

  const grid = document.getElementById("summaryGrid");
  grid.innerHTML = `
    <div class="summary-card primary">
      <div class="summary-icon">📣</div>
      <div>
        <div class="summary-number">${announcementsCount}</div>
        <div class="summary-label">Announcements</div>
      </div>
    </div>
    <div class="summary-card info">
      <div class="summary-icon">🗓️</div>
      <div>
        <div class="summary-number">${upcomingEvents}</div>
        <div class="summary-label">Upcoming events</div>
      </div>
    </div>
    <div class="summary-card warning">
      <div class="summary-icon">🔍</div>
      <div>
        <div class="summary-number">${lfCount}</div>
        <div class="summary-label">Lost &amp; Found posts</div>
      </div>
    </div>
    <div class="summary-card success">
      <div class="summary-icon">🎟️</div>
      <div>
        <div class="summary-number">${regs}</div>
        <div class="summary-label">Your registrations</div>
      </div>
    </div>
  `;

  // Latest announcements (3)
  const dashAnn = document.getElementById("dashboardAnnouncements");
  const latestAnn = [...SAMPLE_ANNOUNCEMENTS].slice(0, 3);
  dashAnn.innerHTML = latestAnn.map(a => announcementCardHtml(a, true)).join("") || emptyState("No announcements", "Announcements will appear here.");

  // Upcoming events (3)
  const dashEvt = document.getElementById("dashboardEvents");
  const upcoming = [...SAMPLE_EVENTS].slice(0, 3);
  dashEvt.innerHTML = upcoming.map(e => eventCardHtml(e)).join("") || emptyState("No events", "Upcoming events will appear here.");

  // Attach event handlers for cards rendered
  attachCardHandlers();
}

/* ---------- Timetable ---------- */

function renderTimetable() {
  const days = Object.keys(SAMPLE_TIMETABLE);
  const tabs = document.getElementById("dayTabs");
  tabs.innerHTML = days.map(d => {
    const short = d.slice(0, 3);
    return `<button class="day-tab ${d === state.selectedDay ? "active" : ""}" data-day="${escapeHtml(d)}" role="tab" aria-selected="${d === state.selectedDay}">
      <span class="day-full">${escapeHtml(d)}</span>
      <span class="day-short">${escapeHtml(short)}</span>
    </button>`;
  }).join("");

  tabs.querySelectorAll(".day-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      state.selectedDay = btn.dataset.day;
      renderTimetable();
    });
  });

  const content = document.getElementById("timetableContent");
  const entries = SAMPLE_TIMETABLE[state.selectedDay] || [];
  if (entries.length === 0) {
    content.innerHTML = emptyState("No classes scheduled", "Enjoy your free day! Marked as sample data.");
    return;
  }
  content.innerHTML = `
    <table class="timetable-table" role="table">
      <thead>
        <tr><th>Time</th><th>Subject</th><th>Room</th></tr>
      </thead>
      <tbody>
        ${entries.map(e => `
          <tr>
            <td class="class-time">${escapeHtml(e.time)}</td>
            <td>${escapeHtml(e.subject)}</td>
            <td>${escapeHtml(e.room)}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

/* ---------- Announcements ---------- */

function announcementCardHtml(a, compact) {
  const catClass = categoryClassAnn(a.category);
  const prioClass = "priority-" + (a.priority || "Low").toLowerCase();
  return `
    <div class="item-card" data-ann-id="${escapeHtml(a.id)}">
      <div class="item-top">
        <h3 class="item-title">${escapeHtml(a.title)}</h3>
        <span class="badge ${catClass}">${escapeHtml(a.category)}</span>
      </div>
      ${compact ? "" : `<p class="item-desc">${escapeHtml(a.description)}</p>`}
      ${!compact ? `<div class="item-meta">
        <span>📅 ${escapeHtml(formatDate(a.date))}</span>
        <span class="badge ${prioClass}">Priority: ${escapeHtml(a.priority)}</span>
        <span class="badge sample">Sample</span>
      </div>` : `<p class="item-desc">${escapeHtml(a.description)}</p>`}
      ${compact ? `<div class="item-meta"><span>📅 ${escapeHtml(formatDate(a.date))}</span></div>` : ""}
    </div>
  `;
}

function categoryClassAnn(cat) {
  switch (cat) {
    case "Academics": return "academic";
    case "Examinations": return "exam";
    case "Events": return "event";
    default: return "general";
  }
}

function renderAnnouncements() {
  const q = (document.getElementById("annSearch").value || "").toLowerCase().trim();
  const cat = document.getElementById("annCategory").value;
  const list = SAMPLE_ANNOUNCEMENTS.filter(a => {
    const matchesCat = cat === "all" || a.category === cat;
    const matchesQ = !q || [a.title, a.description, a.category].join(" ").toLowerCase().includes(q);
    return matchesCat && matchesQ;
  });
  const container = document.getElementById("announcementsList");
  if (list.length === 0) {
    container.innerHTML = `<div class="empty-state">${emptyStateInner("No announcements found", "Try a different search or category.")}</div>`;
    return;
  }
  container.innerHTML = list.map(a => announcementCardHtml(a, false)).join("");
  attachCardHandlers();
}

/* ---------- Events ---------- */

function eventCardHtml(e) {
  const catClass = categoryClassEvt(e.category);
  const registered = isRegistered(e.id);
  return `
    <div class="item-card" data-evt-id="${escapeHtml(e.id)}">
      <div class="item-top">
        <h3 class="item-title">${escapeHtml(e.title)}</h3>
        <span class="badge ${catClass}">${escapeHtml(e.category)}</span>
      </div>
      <p class="item-desc">${escapeHtml(e.description)}</p>
      <div class="item-meta">
        <span>📅 ${escapeHtml(formatDate(e.date))}</span>
        <span>⏰ ${escapeHtml(e.time)}</span>
        <span>📍 ${escapeHtml(e.venue)}</span>
      </div>
      <div class="item-actions">
        <button class="btn btn-small ${registered ? "btn-success" : "btn-primary"} register-btn" data-evt-id="${escapeHtml(e.id)}" ${registered ? "disabled" : ""}>
          ${registered ? "✓ Registered" : "Register interest"}
        </button>
        <span class="badge sample">Sample</span>
      </div>
      ${registered ? `<p class="muted small" style="margin:0;">Registration saved in this browser.</p>` : ""}
    </div>
  `;
}

function categoryClassEvt(cat) {
  switch (cat) {
    case "Technical": return "tech";
    case "Cultural": return "cultural";
    case "Sports": return "sports";
    case "Workshops": return "workshop";
    default: return "general";
  }
}

function isRegistered(id) {
  return getRegistrations().includes(id);
}

function renderEvents() {
  const q = (document.getElementById("evtSearch").value || "").toLowerCase().trim();
  const cat = document.getElementById("evtCategory").value;
  const list = SAMPLE_EVENTS.filter(e => {
    const matchesCat = cat === "all" || e.category === cat;
    const matchesQ = !q || [e.title, e.description, e.venue, e.category].join(" ").toLowerCase().includes(q);
    return matchesCat && matchesQ;
  });
  const container = document.getElementById("eventsList");
  if (list.length === 0) {
    container.innerHTML = `<div class="empty-state">${emptyStateInner("No events found", "Try a different search or category.")}</div>`;
    return;
  }
  container.innerHTML = list.map(e => eventCardHtml(e)).join("");
  attachCardHandlers();
}

function registerInterest(eventId) {
  const regs = getRegistrations();
  if (regs.includes(eventId)) {
    showToast("You have already registered for this event.");
    return;
  }
  regs.push(eventId);
  saveRegistrations(regs);
  showToast("Registration interest saved locally.");
  renderEvents();
  renderDashboard();
}

/* ---------- Lost & Found ---------- */

function lfCardHtml(p) {
  const isUser = !p.sample;
  return `
    <div class="item-card" data-lf-id="${escapeHtml(p.id)}">
      <div class="item-top">
        <h3 class="item-title">${escapeHtml(p.name)}</h3>
        <div style="display:flex;gap:0.4rem;flex-wrap:wrap;">
          <span class="badge ${p.type === "lost" ? "lost" : "found"}">${p.type === "lost" ? "Lost" : "Found"}</span>
          <span class="badge category">${escapeHtml(p.category)}</span>
          ${p.sample ? '<span class="badge sample">Sample</span>' : '<span class="badge userpost">Your post</span>'}
        </div>
      </div>
      <p class="item-desc">${escapeHtml(p.description)}</p>
      <div class="item-meta">
        <span>📍 ${escapeHtml(p.location)}</span>
        <span>📅 ${escapeHtml(formatDate(p.date))}</span>
        <span>✉️ ${escapeHtml(p.contact)}</span>
      </div>
      ${isUser ? `<div class="item-actions">
        <button class="btn btn-ghost btn-small delete-lf-btn" data-lf-id="${escapeHtml(p.id)}">Delete</button>
      </div>` : ""}
    </div>
  `;
}

function renderLostFound() {
  const q = (document.getElementById("lfSearch").value || "").toLowerCase().trim();
  const typeF = document.getElementById("lfTypeFilter").value;
  const catF = document.getElementById("lfCategoryFilter").value;
  const list = allLostFoundPosts().filter(p => {
    const matchesType = typeF === "all" || p.type === typeF;
    const matchesCat = catF === "all" || p.category === catF;
    const matchesQ = !q || [p.name, p.description, p.location, p.category, p.contact].join(" ").toLowerCase().includes(q);
    return matchesType && matchesCat && matchesQ;
  });
  const container = document.getElementById("lfList");
  if (list.length === 0) {
    container.innerHTML = `<div class="empty-state">${emptyStateInner("No posts found", "Try a different filter or add a new post.")}</div>`;
    return;
  }
  container.innerHTML = list.map(p => lfCardHtml(p)).join("");
  attachCardHandlers();
}

function handleLfSubmit(e) {
  e.preventDefault();
  const errorEl = document.getElementById("lfError");
  const successEl = document.getElementById("lfSuccess");
  errorEl.hidden = true;
  successEl.hidden = true;

  const type = document.getElementById("lfType").value;
  const name = document.getElementById("lfName").value.trim();
  const desc = document.getElementById("lfDesc").value.trim();
  const category = document.getElementById("lfCategory").value;
  const location = document.getElementById("lfLocation").value.trim();
  const date = document.getElementById("lfDate").value;
  const contact = document.getElementById("lfContact").value.trim();

  // Validation
  const errors = [];
  if (!type) errors.push("Please select a post type (lost or found).");
  if (!name) errors.push("Item name is required.");
  if (!desc) errors.push("Description is required.");
  if (!category) errors.push("Please select a category.");
  if (!location) errors.push("Location is required.");
  if (!date) errors.push("Date is required.");
  if (!contact) errors.push("Contact information is required.");
  // Basic contact validation: allow email or phone-ish
  if (contact && !/[@0-9]/.test(contact)) {
    errors.push("Contact should include an email or phone number.");
  }
  // Date not in future
  if (date) {
    const d = new Date(date);
    const today = new Date();
    today.setHours(23,59,59,999);
    if (isNaN(d.getTime())) errors.push("Please enter a valid date.");
    else if (d > today) errors.push("Date cannot be in the future.");
  }

  if (errors.length) {
    errorEl.textContent = errors.join(" ");
    errorEl.hidden = false;
    return;
  }

  const post = {
    id: uniqueId("lfu"),
    type, name, description: desc, category, location, date, contact,
    createdAt: new Date().toISOString(),
    sample: false
  };

  const list = getStoredLostFound();
  list.unshift(post);
  saveLostFound(list);

  successEl.textContent = "Post added. It is saved in this browser only.";
  successEl.hidden = false;
  document.getElementById("lfForm").reset();
  renderLostFound();
  renderDashboard();
  showToast("Lost & found post added.");
}

function deleteLfPost(id) {
  if (!confirm("Delete this post? This action cannot be undone.")) return;
  const list = getStoredLostFound().filter(p => p.id !== id);
  saveLostFound(list);
  renderLostFound();
  renderDashboard();
  showToast("Post deleted.");
}

/* ---------- Campus Guide ---------- */

function campusCardHtml(c) {
  return `
    <div class="item-card">
      <div class="item-top">
        <h3 class="item-title">${escapeHtml(c.name)}</h3>
        <span class="badge category">${escapeHtml(c.category)}</span>
      </div>
      <p class="item-desc">${escapeHtml(c.description)}</p>
    </div>
  `;
}

function renderCampus() {
  const q = (document.getElementById("campusSearch").value || "").toLowerCase().trim();
  const cat = document.getElementById("campusCategory").value;
  const list = CAMPUS_LOCATIONS.filter(c => {
    const matchesCat = cat === "all" || c.category === cat;
    const matchesQ = !q || [c.name, c.description, c.category].join(" ").toLowerCase().includes(q);
    return matchesCat && matchesQ;
  });
  const container = document.getElementById("campusList");
  if (list.length === 0) {
    container.innerHTML = `<div class="empty-state">${emptyStateInner("No locations found", "Try a different search or category.")}</div>`;
    return;
  }
  container.innerHTML = list.map(c => campusCardHtml(c)).join("");
}

/* ---------- Global search ---------- */

function performGlobalSearch(query) {
  const q = query.toLowerCase().trim();
  const resultsEl = document.getElementById("searchResults");
  const subtitle = document.getElementById("searchSubtitle");
  const clearBtn = document.getElementById("clearGlobalSearch");
  clearBtn.hidden = !q;

  if (!q) {
    showSection("dashboard");
    return;
  }

  showSection("search");
  subtitle.textContent = `Results for "${query}"`;

  const groups = [];

  // Announcements
  const anns = SAMPLE_ANNOUNCEMENTS.filter(a =>
    [a.title, a.description, a.category].join(" ").toLowerCase().includes(q));
  if (anns.length) groups.push({ title: "Announcements", items: anns.map(a => ({
    title: a.title, desc: a.description, section: "announcements", id: a.id
  })) });

  // Events
  const evts = SAMPLE_EVENTS.filter(e =>
    [e.title, e.description, e.venue, e.category].join(" ").toLowerCase().includes(q));
  if (evts.length) groups.push({ title: "Events", items: evts.map(e => ({
    title: e.title, desc: `${e.date} — ${e.venue}`, section: "events", id: e.id
  })) });

  // Lost & Found
  const lfs = allLostFoundPosts().filter(p =>
    [p.name, p.description, p.location, p.category].join(" ").toLowerCase().includes(q));
  if (lfs.length) groups.push({ title: "Lost & Found", items: lfs.map(p => ({
    title: (p.type === "lost" ? "Lost: " : "Found: ") + p.name,
    desc: `${p.location} — ${p.category}`,
    section: "lostfound", id: p.id
  })) });

  // Campus
  const camps = CAMPUS_LOCATIONS.filter(c =>
    [c.name, c.description, c.category].join(" ").toLowerCase().includes(q));
  if (camps.length) groups.push({ title: "Campus locations", items: camps.map(c => ({
    title: c.name, desc: c.description, section: "campus", id: c.id
  })) });

  if (groups.length === 0) {
    resultsEl.innerHTML = `<div class="empty-state">${emptyStateInner("No matches found", "Try different keywords.")}</div>`;
    return;
  }

  resultsEl.innerHTML = groups.map(g => `
    <div class="search-group">
      <h3 class="search-group-title">${escapeHtml(g.title)} (${g.items.length})</h3>
      ${g.items.map(it => `
        <div class="search-hit" data-section="${it.section}" tabindex="0" role="button">
          <h4>${escapeHtml(it.title)}</h4>
          <p>${escapeHtml(it.desc)}</p>
        </div>
      `).join("")}
    </div>
  `).join("");

  // Click handling
  resultsEl.querySelectorAll(".search-hit").forEach(hit => {
    const go = () => showSection(hit.dataset.section);
    hit.addEventListener("click", go);
    hit.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); } });
  });
}

/* ---------- Empty state helpers ---------- */

function emptyState(title, desc) {
  return `<div class="empty-state"><span class="empty-icon">📭</span><h3>${escapeHtml(title)}</h3><p>${escapeHtml(desc)}</p></div>`;
}
function emptyStateInner(title, desc) {
  return `<span class="empty-icon">📭</span><h3>${escapeHtml(title)}</h3><p>${escapeHtml(desc)}</p>`;
}

/* ---------- Misc wiring ---------- */

function attachCardHandlers() {
  // Event registration buttons
  document.querySelectorAll(".register-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      if (btn.disabled) return;
      registerInterest(btn.dataset.evtId);
    });
  });
  // Delete lost & found
  document.querySelectorAll(".delete-lf-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      deleteLfPost(btn.dataset.lfId);
    });
  });
}

function initFilters() {
  const ids = [
    ["annSearch", renderAnnouncements],
    ["annCategory", renderAnnouncements],
    ["evtSearch", renderEvents],
    ["evtCategory", renderEvents],
    ["lfSearch", renderLostFound],
    ["lfTypeFilter", renderLostFound],
    ["lfCategoryFilter", renderLostFound],
    ["campusSearch", renderCampus],
    ["campusCategory", renderCampus],
  ];
  ids.forEach(([id, fn]) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("input", fn);
    if (el && el.tagName === "SELECT") el.addEventListener("change", fn);
  });

  // Lost & found form
  const form = document.getElementById("lfForm");
  if (form) {
    form.addEventListener("submit", handleLfSubmit);
    form.addEventListener("reset", () => {
      document.getElementById("lfError").hidden = true;
      document.getElementById("lfSuccess").hidden = true;
    });
  }

  // Global search
  const gSearch = document.getElementById("globalSearch");
  gSearch.addEventListener("input", e => {
    state.globalQuery = e.target.value;
    if (e.target.value.trim()) performGlobalSearch(e.target.value);
    else showSection(state.section === "search" ? "dashboard" : state.section);
  });
  document.getElementById("clearGlobalSearch").addEventListener("click", () => {
    gSearch.value = "";
    state.globalQuery = "";
    showSection("dashboard");
  });
}

function resetDemoData() {
  if (!confirm("Reset demonstration data? This will remove your saved lost-and-found posts and event registrations from this browser.")) return;
  try {
    localStorage.removeItem(STORAGE_KEYS.lostfound);
    localStorage.removeItem(STORAGE_KEYS.registrations);
  } catch (e) {}
  // hide profile menu
  document.getElementById("profileMenu").hidden = true;
  showToast("Demonstration data reset.");
  renderLostFound();
  renderEvents();
  renderDashboard();
}

/* ---------- Boot ---------- */

function boot() {
  initNavigation();
  initFilters();
  renderTimetable();
  renderDashboard();
  // Default section already dashboard in HTML
}

document.addEventListener("DOMContentLoaded", boot);
