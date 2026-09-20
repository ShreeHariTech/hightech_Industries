/**
 * High Tech Industries - Product Data & Catalogue Engine
 */

const PRODUCTS_DATA = [
  {
    id: "prod-01",
    index: "01",
    name: "150T Hydraulic Compressor Joint Machine",
    category: "HYDRAULIC EQUIPMENT",
    catKey: "hydraulic",
    image: "assets/images/products/hydraulic-compressor/hydraulic-compressor-150t.jpg",
    specs: [
      { label: "Hydraulic Capacity", val: "150 Ton Pressing Force" },
      { label: "Material Construction", val: "Heavy Duty Mild Steel" },
      { label: "Power Source", val: "3HP Motorized Hydraulic Pack" },
      { label: "Application", val: "Power Transmission Conductor Jointing" }
    ],
    pills: ["150 Ton Press", "3HP Motorized", "Power Transmission"],
    description: "Specialized motorized hydraulic compression joint machine built for high-capacity power line conductor pressing and sleeve crimping."
  },
  {
    id: "prod-02",
    index: "02",
    name: "Mild Steel Hydraulic Compressor Jointing Machine",
    category: "HYDRAULIC EQUIPMENT",
    catKey: "hydraulic",
    image: "assets/images/products/hydraulic-compressor/hydraulic-compressor-jointing.jpg",
    specs: [
      { label: "Tonnage Rating", val: "100 - 150 Ton Force" },
      { label: "Body Build", val: "Structural Mild Steel Frame" },
      { label: "Pressure Pack", val: "External Electric Pump Unit" },
      { label: "Field Use", val: "Substation & Overhead Transmission" }
    ],
    pills: ["100T-150T", "Heavy Frame", "ACSR Jointing"],
    description: "Rugged mild steel hydraulic compression tool for heavy-duty field cable jointing and terminal connector pressing."
  },
  {
    id: "prod-03",
    index: "03",
    name: "8 Ton Mild Steel Drum Lifting Jack",
    category: "CABLE HANDLING",
    catKey: "cable",
    image: "assets/images/products/cable-drum-jack/drum-lifting-jack-8-ton.jpg",
    specs: [
      { label: "Lifting Capacity", val: "8 Ton per Pair" },
      { label: "Material Grade", val: "Structural Mild Steel" },
      { label: "Adjustment", val: "Multi-level Height Screw Jack" },
      { label: "Base Type", val: "Heavy Duty Spreader Base" }
    ],
    pills: ["8 Ton Capacity", "Mild Steel", "Height Screw"],
    description: "Precision engineered cable drum lifting jack engineered for heavy conductor drum pay-out and field cable laying."
  },
  {
    id: "prod-04",
    index: "04",
    name: "7 Ton Mild Steel Drum Lifting Jack",
    category: "CABLE HANDLING",
    catKey: "cable",
    image: "assets/images/products/cable-drum-jack/drum-lifting-jack-7-ton.jpg",
    specs: [
      { label: "Lifting Capacity", val: "7 Ton" },
      { label: "Structure", val: "High Strength Mild Steel" },
      { label: "Mechanism", val: "Trapezoidal Screw Lift" },
      { label: "Compatibility", val: "Standard Spindle Bar" }
    ],
    pills: ["7 Ton Load", "Screw Mechanical", "Cable Laying"],
    description: "Heavy duty cable drum jack designed for secure elevation and rotation of large electrical cable drums during utility installation."
  },
  {
    id: "prod-05",
    index: "05",
    name: "Cable Pulling / Power Winch Machine",
    category: "TRANSMISSION LINE TOOLS",
    catKey: "transmission",
    image: "assets/images/products/cable-winch/cable-pulling-winch.jpg",
    specs: [
      { label: "Winch Type", val: "Motorized Power Winch" },
      { label: "Frame Build", val: "Reinforced Steel Skid" },
      { label: "Application", val: "Overhead Conductor & Underground Pulling" },
      { label: "Control", val: "Fwd/Rev Mechanical Clutch" }
    ],
    pills: ["Motorized Puller", "High Traction", "Overhead & Underground"],
    description: "Heavy-duty power pulling winch machine built for continuous tension pulling of conductors and heavy power cables."
  },
  {
    id: "prod-06",
    index: "06",
    name: "Hydraulic Compress Head",
    category: "CUTTING & CRIMPING",
    catKey: "cutting",
    image: "assets/images/products/compressor-head/hydraulic-compress-head.jpg",
    specs: [
      { label: "Operating Force", val: "Up to 150 Ton Force" },
      { label: "Material", val: "Forged Alloy Steel" },
      { label: "Coupler", val: "Quick Release Hydraulic Nipple" },
      { label: "Compatibility", val: "Hexagonal & Round Compression Dies" }
    ],
    pills: ["Forged Steel", "100-150T Force", "Quick Coupler"],
    description: "Standalone high-pressure hydraulic compressor head for cable lug pressing and transmission line jointing."
  },
  {
    id: "prod-07",
    index: "07",
    name: "Metal Cable Winder Machine",
    category: "CABLE HANDLING",
    catKey: "cable",
    image: "assets/images/products/cable-winder/metal-cable-winder.jpg",
    specs: [
      { label: "Winder Structure", val: "Steel Fabrication Frame" },
      { label: "Operation Mode", val: "Manual / Motorized Option" },
      { label: "Usage", val: "Wire Rope & Conductor Coiling" }
    ],
    pills: ["Metal Frame", "Coiling & Rewinding", "Industrial Winder"],
    description: "Industrial metal cable winder designed for smooth reeling, measuring, and spooling of steel wires and conductors."
  },
  {
    id: "prod-08",
    index: "08",
    name: "Compressor Hexagonal Die Sets",
    category: "CUTTING & CRIMPING",
    catKey: "cutting",
    image: "assets/images/products/die-set/compressor-die-set.jpg",
    specs: [
      { label: "Die Material", val: "Hardened Tool Steel" },
      { label: "Profile Types", val: "Hexagonal / Round Jointing" },
      { label: "Precision", val: "CNC Precision Machined" }
    ],
    pills: ["Tool Steel", "Hexagonal Profile", "Precision Machined"],
    description: "High-grade heat-treated steel compression die sets compatible with hydraulic compression heads for uniform jointing."
  },
  {
    id: "prod-09",
    index: "09",
    name: "Metal Wire Cutter Hub",
    category: "CUTTING & CRIMPING",
    catKey: "cutting",
    image: "assets/images/products/cutter-hub/metal-wire-cutter-hub.jpg",
    specs: [
      { label: "Hub Material", val: "High Carbon Alloy Steel" },
      { label: "Cutting Capacity", val: "High Tensile Wire & Strands" },
      { label: "Durability", val: "Wear Resistant Edges" }
    ],
    pills: ["High Carbon Steel", "Heavy Duty Cutting", "Wear Resistant"],
    description: "Heavy-duty metal wire cutter hub designed for clean shearing of steel stay wires and ACSR conductors."
  },
  {
    id: "prod-10",
    index: "10",
    name: "Alloy Steel Hydraulic Press Machine",
    category: "INDUSTRIAL MACHINES",
    catKey: "industrial",
    image: "assets/images/products/hydraulic-press/hydraulic-press-machine.jpg",
    specs: [
      { label: "Machine Frame", val: "Alloy Steel Box Structure" },
      { label: "Pressing Type", val: "Vertical Hydraulic Ram" },
      { label: "Control System", val: "Manual & Hydraulic Valve" }
    ],
    pills: ["Alloy Steel", "Hydraulic Ram", "Industrial Press"],
    description: "Heavy alloy steel hydraulic press machine designed for precision component forming, straightening, and pressing."
  },
  {
    id: "prod-11",
    index: "11",
    name: "Mini Mobile Light Tower Generator",
    category: "INDUSTRIAL MACHINES",
    catKey: "industrial",
    image: "assets/images/products/tower-generator/mini-mobile-light-tower.jpg",
    specs: [
      { label: "Tower Chassis", val: "Wheeled Mobile Trailer" },
      { label: "Lighting System", val: "High Lumen LED Floodlights" },
      { label: "Power Generator", val: "Integrated Silent Diesel/Petrol Genset" },
      { label: "Field Use", val: "Night Infrastructure & Construction Sites" }
    ],
    pills: ["Mobile Tower", "High Floodlight", "Genset Powered"],
    description: "Compact mobile light tower generator providing high-intensity illumination for night construction and remote utility projects."
  }
];

document.addEventListener('DOMContentLoaded', () => {
  parseUrlCategory();
  initProductGrid();
  initCategoryFilters();
  initSearchInput();
});

let currentCategory = 'all';
let currentSearchQuery = '';

/* Read URL query param ?cat=xxx */
function parseUrlCategory() {
  const params = new URLSearchParams(window.location.search);
  const catParam = params.get('cat');
  if (catParam) {
    currentCategory = catParam.toLowerCase().trim();
  }
}

/* Render Product Cards into Container */
function initProductGrid() {
  const container = document.getElementById('productsGridContainer');
  if (!container) return;

  filterAndRender();
}

function renderProducts(products) {
  const container = document.getElementById('productsGridContainer');
  if (!container) return;

  if (products.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background: var(--color-white); border: 1px solid var(--color-border); border-radius: 2px;">
        <h3 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 800; color: var(--color-charcoal); margin-bottom: 0.5rem;">
          NO MACHINERY FOUND
        </h3>
        <p style="color: var(--color-text-grey); font-size: 0.95rem;">
          Try adjusting your search or category filter to find the machinery model you need.
        </p>
      </div>
    `;
    return;
  }

  container.innerHTML = products.map(prod => `
    <div class="product-card" data-id="${prod.id}">
      <div class="product-card-head">
        <span class="product-index">PROD-${prod.index}</span>
        <span class="product-cat-tag">${prod.category}</span>
      </div>
      <div class="product-image-box">
        <img src="${prod.image}" alt="${prod.name} manufactured by High Tech Industries" loading="lazy" />
      </div>
      <div class="product-card-body">
        <h3 class="product-card-title">${prod.name}</h3>
        <p style="font-size: 0.88rem; color: var(--color-text-grey); line-height: 1.5; margin-bottom: 1rem;">${prod.description}</p>
        <div class="product-spec-pills">
          ${prod.pills.map(p => `<span class="spec-pill">${p}</span>`).join('')}
        </div>
        <div class="product-card-footer">
          <a href="product-detail.html?id=${prod.id}" class="cat-showcase-link" style="font-size: 0.78rem;">
            VIEW DETAILS &rarr;
          </a>
          <a href="contact.html" class="nav-cta-btn" style="font-size: 0.72rem; padding: 0.45rem 0.85rem;">
            REQUEST QUOTE
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

/* Category Filter Buttons */
function initCategoryFilters() {
  const filterBtns = document.querySelectorAll('.sidebar-cat-btn, .cat-pill-btn');
  if (!filterBtns.length) return;

  // Sync active state based on currentCategory
  filterBtns.forEach(btn => {
    const filterVal = btn.getAttribute('data-filter') || 'all';
    if (filterVal === currentCategory) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }

    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      currentCategory = btn.getAttribute('data-filter') || 'all';
      filterAndRender();
    });
  });
}

/* Search Bar Input */
function initSearchInput() {
  const searchInput = document.getElementById('productSearchInput');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    currentSearchQuery = e.target.value.toLowerCase().trim();
    filterAndRender();
  });
}

function filterAndRender() {
  const filtered = PRODUCTS_DATA.filter(prod => {
    const matchesCat = (currentCategory === 'all') ||
      (prod.catKey === currentCategory) ||
      (prod.category.toLowerCase().includes(currentCategory));

    const matchesSearch = !currentSearchQuery ||
      prod.name.toLowerCase().includes(currentSearchQuery) ||
      prod.category.toLowerCase().includes(currentSearchQuery) ||
      prod.description.toLowerCase().includes(currentSearchQuery);

    return matchesCat && matchesSearch;
  });

  renderProducts(filtered);
}
