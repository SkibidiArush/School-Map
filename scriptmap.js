function letterRange(start, end) {
  const out = [];
  for (let i = start.charCodeAt(0); i <= end.charCodeAt(0); i += 1) {
    out.push(String.fromCharCode(i));
  }
  return out;
}

function makeRoomCodes(prefix, start, end) {
  return letterRange(start, end).map(letter => `${prefix}-${letter}`);
}

const locations = [
  {
    id: "g-fs1",
    name: "FS 1 Classrooms",
    zone: "academic",
    floor: "Ground",
    short: "Foundation Stage 1 classrooms.",
    rooms: "FS1 A-J",
    roomCodes: makeRoomCodes("FS1", "A", "J"),
    details: ["10 classrooms", "Early years furniture", "Direct link to FS area"],
    uses: ["Teaching", "Early Years"],
    plan: { x: 6, y: 12, w: 28, h: 20 },
    pin: { x: 17, y: 20 }
  },
  {
    id: "g-fs2",
    name: "FS 2 Classrooms",
    zone: "academic",
    floor: "Ground",
    short: "Foundation Stage 2 classrooms.",
    rooms: "FS2 A-J",
    roomCodes: makeRoomCodes("FS2", "A", "J"),
    details: ["10 classrooms", "Learning corners", "Outdoor play access"],
    uses: ["Teaching", "Early Years"],
    plan: { x: 36, y: 12, w: 28, h: 20 },
    pin: { x: 47, y: 20 }
  },
  {
    id: "g-yr1",
    name: "Year 1 Classrooms",
    zone: "academic",
    floor: "Ground",
    short: "Year 1 classroom cluster.",
    rooms: "YR1 A-J",
    roomCodes: makeRoomCodes("YR1", "A", "J"),
    details: ["10 classrooms", "Shared corridor", "Display wall"],
    uses: ["Teaching"],
    plan: { x: 66, y: 12, w: 28, h: 20 },
    pin: { x: 78, y: 20 }
  },
  {
    id: "g-ks1",
    name: "Head of KS1",
    zone: "admin",
    floor: "Ground",
    short: "Leadership office for KS1.",
    rooms: "Office",
    roomCodes: ["HEAD-KS1"],
    details: ["KS1 leadership", "Parent meeting point"],
    uses: ["Administration", "Leadership"],
    plan: { x: 6, y: 60, w: 24, h: 16 },
    pin: { x: 14, y: 67 }
  },
  {
    id: "g-fsarea",
    name: "FS Area",
    zone: "services",
    floor: "Ground",
    short: "Shared Foundation Stage activity zone.",
    rooms: "Common Area",
    roomCodes: ["FS-AREA"],
    details: ["Indoor activity space", "Group sessions", "Teacher supervision"],
    uses: ["Activity", "Early Years"],
    plan: { x: 36, y: 54, w: 34, h: 22 },
    pin: { x: 51, y: 63 }
  },
  {
    id: "g-wc",
    name: "Washrooms",
    zone: "safety",
    floor: "Ground",
    short: "Two washroom blocks.",
    rooms: "2 Units",
    roomCodes: ["WC-G1", "WC-G2"],
    details: ["Student washrooms", "Accessible facilities"],
    uses: ["Hygiene", "Support"],
    plan: { x: 74, y: 58, w: 20, h: 18 },
    pin: { x: 83, y: 66 }
  },
  {
    id: "f-yr2",
    name: "Year 2 Classrooms",
    zone: "academic",
    floor: "First",
    short: "Year 2 classroom cluster.",
    rooms: "YR2 A-J",
    roomCodes: makeRoomCodes("YR2", "A", "J"),
    details: ["10 classrooms", "Shared prep space"],
    uses: ["Teaching"],
    plan: { x: 6, y: 12, w: 28, h: 20 },
    pin: { x: 17, y: 20 }
  },
  {
    id: "f-yr3",
    name: "Year 3 Classrooms",
    zone: "academic",
    floor: "First",
    short: "Year 3 classroom cluster.",
    rooms: "YR3 A-J",
    roomCodes: makeRoomCodes("YR3", "A", "J"),
    details: ["10 classrooms", "Learning displays"],
    uses: ["Teaching"],
    plan: { x: 36, y: 12, w: 28, h: 20 },
    pin: { x: 47, y: 20 }
  },
  {
    id: "f-yr4ae",
    name: "Year 4 Classrooms (A-E)",
    zone: "academic",
    floor: "First",
    short: "Year 4 lower section.",
    rooms: "YR4 A-E",
    roomCodes: makeRoomCodes("YR4", "A", "E"),
    details: ["5 classrooms", "Close to LKS2 office"],
    uses: ["Teaching"],
    plan: { x: 66, y: 12, w: 28, h: 20 },
    pin: { x: 78, y: 20 }
  },
  {
    id: "f-lks2",
    name: "Head of LKS2",
    zone: "admin",
    floor: "First",
    short: "Leadership office for Lower KS2.",
    rooms: "Office",
    roomCodes: ["HEAD-LKS2"],
    details: ["LKS2 support", "Parent discussions"],
    uses: ["Administration", "Leadership"],
    plan: { x: 8, y: 60, w: 24, h: 16 },
    pin: { x: 15, y: 67 }
  },
  {
    id: "f-prayer",
    name: "Prayer Room",
    zone: "services",
    floor: "First",
    short: "Quiet prayer and reflection room.",
    rooms: "Prayer Space",
    roomCodes: ["PRAYER"],
    details: ["Quiet zone", "Wudu access nearby"],
    uses: ["Prayer", "Reflection"],
    plan: { x: 38, y: 56, w: 30, h: 20 },
    pin: { x: 50, y: 64 }
  },
  {
    id: "f-wc",
    name: "Washrooms",
    zone: "safety",
    floor: "First",
    short: "Two washroom blocks.",
    rooms: "2 Units",
    roomCodes: ["WC-F1", "WC-F2"],
    details: ["Student washrooms", "Accessible facilities"],
    uses: ["Hygiene", "Support"],
    plan: { x: 74, y: 58, w: 20, h: 18 },
    pin: { x: 83, y: 66 }
  },
  {
    id: "s-yr4fj",
    name: "Year 4 Classrooms (F-J)",
    zone: "academic",
    floor: "Second",
    short: "Year 4 upper section.",
    rooms: "YR4 F-J",
    roomCodes: makeRoomCodes("YR4", "F", "J"),
    details: ["5 classrooms", "Transition to upper KS2"],
    uses: ["Teaching"],
    plan: { x: 6, y: 12, w: 28, h: 20 },
    pin: { x: 17, y: 20 }
  },
  {
    id: "s-yr5",
    name: "Year 5 Classrooms",
    zone: "academic",
    floor: "Second",
    short: "Year 5 classroom cluster.",
    rooms: "YR5 A-J",
    roomCodes: makeRoomCodes("YR5", "A", "J"),
    details: ["10 classrooms", "Shared resources"],
    uses: ["Teaching"],
    plan: { x: 36, y: 12, w: 28, h: 20 },
    pin: { x: 47, y: 20 }
  },
  {
    id: "s-yr6",
    name: "Year 6 Classrooms",
    zone: "academic",
    floor: "Second",
    short: "Year 6 classroom cluster.",
    rooms: "YR6 A-J",
    roomCodes: makeRoomCodes("YR6", "A", "J"),
    details: ["10 classrooms", "Exam prep resources"],
    uses: ["Teaching", "Assessment"],
    plan: { x: 66, y: 12, w: 28, h: 20 },
    pin: { x: 78, y: 20 }
  },
  {
    id: "s-ks2",
    name: "Head of KS2",
    zone: "admin",
    floor: "Second",
    short: "Leadership office for KS2.",
    rooms: "Office",
    roomCodes: ["HEAD-KS2"],
    details: ["Upper KS2 leadership", "Parent meetings"],
    uses: ["Administration", "Leadership"],
    plan: { x: 6, y: 60, w: 24, h: 16 },
    pin: { x: 14, y: 67 }
  },
  {
    id: "s-slt",
    name: "SLT Office",
    zone: "admin",
    floor: "Second",
    short: "Senior Leadership Team office.",
    rooms: "Office",
    roomCodes: ["SLT"],
    details: ["Senior leadership operations", "Planning space"],
    uses: ["Administration", "Leadership"],
    plan: { x: 36, y: 56, w: 30, h: 20 },
    pin: { x: 50, y: 64 }
  },
  {
    id: "s-wc",
    name: "Washrooms",
    zone: "safety",
    floor: "Second",
    short: "Two washroom blocks.",
    rooms: "2 Units",
    roomCodes: ["WC-S1", "WC-S2"],
    details: ["Student washrooms", "Accessible facilities"],
    uses: ["Hygiene", "Support"],
    plan: { x: 74, y: 58, w: 20, h: 18 },
    pin: { x: 83, y: 66 }
  }
];

const zoneColors = {
  academic: "var(--zone-academic)",
  admin: "var(--zone-admin)",
  safety: "var(--zone-safety)",
  services: "var(--zone-services)"
};

const floorOrder = ["Ground", "First", "Second"];

const mapBoard = document.getElementById("mapBoard");
const streetMap = document.getElementById("streetMap");
const zoneFilter = document.getElementById("zoneFilter");
const floorFilter = document.getElementById("floorFilter");
const detailsContent = document.getElementById("detailsContent");
const optionCurrent = document.getElementById("optionCurrent");
const optionGmaps = document.getElementById("optionGmaps");
const classSearch = document.getElementById("classSearch");
const searchBtn = document.getElementById("searchBtn");
const schoolLogo = document.querySelector(".school-logo");

let currentView = "current";
let activeLocationId = "";

function uniqueValues(key) {
  return [...new Set(locations.map(item => item[key]))];
}

function populateFilters() {
  uniqueValues("zone").forEach(zone => {
    const opt = document.createElement("option");
    opt.value = zone;
    opt.textContent = zone[0].toUpperCase() + zone.slice(1);
    zoneFilter.appendChild(opt);
  });

  floorOrder.forEach(floor => {
    const opt = document.createElement("option");
    opt.value = floor;
    opt.textContent = floor;
    floorFilter.appendChild(opt);
  });

  floorFilter.value = "Ground";
}

function getFilteredLocations() {
  const selectedZone = zoneFilter.value;
  const selectedFloor = floorFilter.value;

  return locations.filter(loc => {
    const zoneMatch = selectedZone === "all" || loc.zone === selectedZone;
    const floorMatch = selectedFloor === "all" || loc.floor === selectedFloor;
    return zoneMatch && floorMatch;
  });
}

function addFlowGuides() {
  const stairsLink = document.createElement("div");
  stairsLink.className = "stairs-link";
  stairsLink.style.left = "6%";
  stairsLink.style.top = "90%";
  stairsLink.innerHTML = '<span class="stairs-arrow"></span> Stairs to other floors';
  mapBoard.appendChild(stairsLink);

  const exitLeft = document.createElement("div");
  exitLeft.className = "exit-link";
  exitLeft.style.left = "4%";
  exitLeft.style.top = "4%";
  exitLeft.innerHTML = '<span class="exit-arrow"></span> Emergency Exit A';
  mapBoard.appendChild(exitLeft);

  const exitRight = document.createElement("div");
  exitRight.className = "exit-link";
  exitRight.style.right = "4%";
  exitRight.style.top = "84%";
  exitRight.innerHTML = 'Emergency Exit B <span class="exit-arrow"></span>';
  mapBoard.appendChild(exitRight);
}

function renderPlanBlocks() {
  mapBoard.innerHTML = "";
  const filtered = getFilteredLocations();

  if (filtered.length === 0) {
    mapBoard.innerHTML = '<p class="hint">No locations match your selected filters.</p>';
    return;
  }

  const corridor = document.createElement("div");
  corridor.className = "corridor";
  corridor.textContent = `${floorFilter.value} Floor Main Corridor`;
  mapBoard.appendChild(corridor);

  filtered.forEach(loc => {
    const block = document.createElement("button");
    block.type = "button";
    block.className = "plan-block";
    block.dataset.locId = loc.id;
    block.style.left = `${loc.plan.x}%`;
    block.style.top = `${loc.plan.y}%`;
    block.style.width = `${loc.plan.w}%`;
    block.style.height = `${loc.plan.h}%`;
    block.style.borderColor = zoneColors[loc.zone];

    if (activeLocationId && loc.id === activeLocationId) {
      block.classList.add("active-result");
    }

    block.innerHTML = `
      <strong>${loc.name}</strong>
      <span>${loc.rooms}</span>
    `;

    block.addEventListener("click", () => {
      activeLocationId = loc.id;
      renderDetails(loc);
      renderPlanBlocks();
    });

    mapBoard.appendChild(block);
  });

  addFlowGuides();
}

function renderStreetMap() {
  streetMap.innerHTML = "";
  const filtered = getFilteredLocations();

  if (filtered.length === 0) {
    streetMap.innerHTML = '<p class="hint">No locations match your selected filters.</p>';
    return;
  }

  const grid = document.createElement("div");
  grid.className = "street-grid";

  filtered.forEach(loc => {
    const pinWrap = document.createElement("div");
    pinWrap.style.position = "absolute";
    pinWrap.style.top = `${loc.pin.y}%`;
    pinWrap.style.left = `${loc.pin.x}%`;

    const pin = document.createElement("button");
    pin.type = "button";
    pin.className = "pin";
    pin.style.background = zoneColors[loc.zone];
    pin.title = loc.name;
    pin.setAttribute("aria-label", loc.name);

    if (activeLocationId && loc.id === activeLocationId) {
      pin.classList.add("active-result");
    }

    const label = document.createElement("span");
    label.className = "pin-label";
    label.textContent = loc.name;

    pin.addEventListener("click", () => {
      activeLocationId = loc.id;
      renderDetails(loc);
      renderStreetMap();
    });

    pinWrap.appendChild(pin);
    pinWrap.appendChild(label);
    grid.appendChild(pinWrap);
  });

  streetMap.appendChild(grid);
}

function setView(view) {
  currentView = view;
  const showCurrent = currentView === "current";

  mapBoard.classList.toggle("hidden", !showCurrent);
  streetMap.classList.toggle("hidden", showCurrent);
  optionCurrent.classList.toggle("active", showCurrent);
  optionGmaps.classList.toggle("active", !showCurrent);

  rerenderActiveView();
}

function renderDetails(loc, searchText = "") {
  const detailItems = loc.details.map(item => `<li>${item}</li>`).join("");
  const useBadges = loc.uses.map(tag => `<span class="badge">${tag}</span>`).join(" ");
  const sampleRooms = loc.roomCodes.slice(0, 8).join(", ");

  detailsContent.innerHTML = `
    <h3>${loc.name}</h3>
    <p>${loc.short}</p>
    <p><strong>Rooms:</strong> ${loc.rooms}</p>
    <p><strong>Zone:</strong> ${loc.zone} | <strong>Floor:</strong> ${loc.floor}</p>
    <p><strong>Class Codes:</strong> ${sampleRooms}${loc.roomCodes.length > 8 ? ", ..." : ""}</p>
    ${searchText ? `<p><strong>Match Found:</strong> ${searchText}</p>` : ""}
    <h4>Key Features</h4>
    <ul class="info-list">${detailItems}</ul>
    <h4>Primary Use</h4>
    <div>${useBadges}</div>
  `;
}

function normalizeClassCode(value) {
  return value.toUpperCase().replace(/\s+/g, "").replace(/_/g, "-");
}

function runClassSearch() {
  const raw = classSearch.value.trim();
  if (!raw) {
    return;
  }

  const needle = normalizeClassCode(raw);
  const match = locations.find(loc => loc.roomCodes.some(code => normalizeClassCode(code) === needle));

  if (!match) {
    detailsContent.innerHTML = `<p class="hint">No class found for <strong>${raw}</strong>. Try format like YR5-C, FS1-A, YR4-F.</p>`;
    activeLocationId = "";
    rerenderActiveView();
    return;
  }

  floorFilter.value = match.floor;
  activeLocationId = match.id;
  renderDetails(match, raw.toUpperCase());
  rerenderActiveView();
}

function rerenderActiveView() {
  if (currentView === "current") {
    renderPlanBlocks();
  } else {
    renderStreetMap();
  }
}

zoneFilter.addEventListener("change", rerenderActiveView);
floorFilter.addEventListener("change", rerenderActiveView);
optionCurrent.addEventListener("click", () => setView("current"));
optionGmaps.addEventListener("click", () => setView("gmaps"));
searchBtn.addEventListener("click", runClassSearch);
classSearch.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    runClassSearch();
  }
});

populateFilters();
setView("current");

if (schoolLogo) {
  schoolLogo.addEventListener("error", () => {
    schoolLogo.src =
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><rect width='120' height='120' rx='14' fill='%23ffffff'/><rect x='16' y='18' width='88' height='84' rx='10' fill='%230a4f9c'/><path d='M20 100 L100 100 L92 110 L28 110 Z' fill='%23c4182e'/><text x='60' y='70' font-size='24' text-anchor='middle' fill='white'>SM</text></svg>";
  });
}
