# High Tech Industries - Corporate Website

Standalone corporate website built for **High Tech Industries, Ahmedabad** (Manufacturer of Hydraulic & Cable Installation Equipment established in 2017).

## Tech Stack
- **HTML5**: Clean, semantic markup with Schema.org JSON-LD organization markup.
- **CSS3**: Custom design tokens, engineering blueprint grid system, responsive media queries, and 3D card perspective styling. No CSS frameworks used.
- **Vanilla JavaScript**: Pure ES6+ script for sticky header scroll dynamics, IntersectionObserver scroll animations, mouse 3D parallax depth, product catalogue category filtering, real-time live search, and modal inspection views. No JS libraries used.

## Directory Structure
```
HighTech_Industries/
├── index.html               # Main corporate landing page
├── about.html               # Company history & manufacturing capabilities
├── products.html            # Dynamic product catalogue with live search & filtering
├── contact.html             # Request for quotation (RFQ) & company location
│
├── css/
│   ├── style.css            # Core design system & component styles
│   └── responsive.css       # Mobile & tablet viewports (375px to 1920px)
│
├── js/
│   ├── main.js              # Header, scroll observer, mobile menu, parallax
│   └── products.js          # Product data store, search, filter & modal rendering
│
├── assets/
│   └── images/
│       ├── products/        # High Tech Industries actual product photographs
│       │   ├── hydraulic-compressor/
│       │   ├── cable-drum-jack/
│       │   ├── cable-winder/
│       │   ├── hydraulic-press/
│       │   ├── compressor-head/
│       │   ├── die-set/
│       │   ├── cutter-hub/
│       │   ├── tower-generator/
│       │   └── cable-winch/
│       ├── hero/            # Hero section 3D product display imagery
│       └── company/         # Manufacturing unit photographs
└── README.md
```

## Running Locally
Since the website is completely standalone with HTML, CSS, and Vanilla JavaScript, it can be viewed directly by opening `index.html` in any web browser, or served via any static HTTP server (e.g. `npx serve`, `python -m http.server 8000`).
