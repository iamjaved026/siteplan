# 🚀 BuildTrack Pro

**BuildTrack Pro** is an algorithmic Project Management Dashboard built uniquely for heavy-duty operational workloads (ranging from residential builds to high-rise commercial architecture). The dashboard features native smart-parsing capability that dynamically maps static datasets or intelligent templates directly into interactive timelines, graphical prediction algorithms, and fully responsive fluid layouts.

---

## ✨ Features

- **Automated Data Processing Pipeline:** Drop legacy `.xlsx` files straight into the application. The system mathematical maps task sequences, derives overall site progress autonomously, calculating burn-rates instantaneously.
- **Dynamic Gantt Visualizations:** Entirely custom-built fluid CSS table Gantt structures mapping specific construction timelines against precise progress completion states without the need for overbearing heavy commercial libraries.
- **State-of-the-art UI/UX:** Built cleanly prioritizing heavy metrics while enforcing modern web standards. Micro-interactions natively highlight hovering workflows on desktop while converting dynamically into sliding menus and stacked mobile dashboards automatically on smaller devices.
- **Algorithmic Simulation Template Bootstrapping:** Don’t have raw tracking datasets? Generate "Prototype Templates" right on the spot representing unique phases (i.e., Commercial, Residential) mapped to a localized storage structure that fluidly simulates a living dataset natively simulating live conditions internally.
- **Multi-Project Swapping:** Rapid contextual tracking letting you cycle fluidly between vastly different deployment topologies asynchronously.

## 🛠 Tech Stack

- **Framework:** Next.js 16 (App Router paradigm) with React
- **Engine:** Turbopack optimization protocol natively spun up out of the box
- **Data Processor:** `xlsx` engine translating binary sheet logic to readable JSON topologies
- **Data Integrity Layer:** Secure LocalStorage object mapping arrays. State contexts track your unique IDs intelligently retaining active instances silently in the background across soft-reloads.
- **Rendering:** Responsive CSS flex grid/glassmorphism design styling standardizing cross-platform scaling securely.

---

## 💻 Installation & Setup

Before spinning the application, ensure you have **Node.js 18+** installed.

### 1. Install dependencies
```bash
npm install
```

### 2. Initiate the Dev Server
```bash
npm run dev
```
Navigate natively to `http://localhost:3000` to interact deeply with your live preview!

### 3. Production Deployment
To generate a fully statically typed optimized build securely tested by the native TypeScript integrity verification engine, trigger the build pipeline:
```bash
npm run build
```
Once your output indicates `0` errors, you are 100% prepared to host the `./out` static folder to **Vercel**, **Firebase Hosting**, **Netlify**, or standard VPS hosting!

---

## ⚙️ How it Works under the Hood

### **Project Switching Context:**
All logic orbits around `src/context/DataContext.tsx`. This provider houses arrays of uniquely registered Project tracking instances ensuring your component trees (`CustomGantt.tsx`, `BudgetCard.tsx`, etc.) are entirely agnostic to the data-source rendering the specific Active Project explicitly.

### **The Intelligent Data Analyzer (`src/lib/data-analysis.ts`):**
Whenever you push a dataset or click ‘Initialize’ through the smart templates, this layer evaluates chronologies finding distinct timeline dependencies (like mapping exactly how far delayed a phase execution currently resides compared to its anticipated ending).

### **Sample Generation Toolkit:**
If you ever want to reset the cache natively from the backend perspective or verify deep boundary tracking algorithms, you can use the built-in node script to rewrite unique baseline configurations natively!
```bash
node generate-sample.js
```
*This command natively populates 5 distinct `.xlsx` projects straight into your root directory ready for testing parsing limits!*

---
## 📄 License
This codebase acts as a private software intellectual property deployment for standard operation handling. Unauthorized distribution un-cleared by the repository owner strictly prohibited.
