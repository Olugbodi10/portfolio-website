/* =========================
   GLOBAL UTILITIES
========================= */

// Smooth scroll for internal anchors (safe)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});


/* =========================
   RESEARCH / WRITINGS DATA
========================= */

const viewLabels = {
  essay: "View Essay",
  chapter: "View Chapter",
  article: "Read Article",
  report: "View Report"
};

const tagLabels = {
  essay: "Essay",
  chapter: "Book Chapter",
  article: "Article"
};

const writings = [
  {
    title: "Omo Dàadáa: The Day 0.03 CGPA Changed My Perspective",
    type: "award",
    category: "essay",
    year: 2025,
    description: "A reflective narrative on academic discipline, growth, and personal accountability during university life.",
    recognition: "Top Three – Tosin Adesile Essay Writing Competition",
    link: "assets/Emmanuel Olugbodi (Unilag Press Club, 2025).pdf"
  },
  {
    title: "MARPOL at 50: Our Commitment Goes On",
    type: "award",
    category: "essay",
    year: 2023,
    description: "A policy-focused essay exploring the evolution of MARPOL and Nigeria’s role in maritime environmental protection.",
    recognition: "Top Ten – World Maritime Day Essay Competition (NIMASA)",
    link: "assets/Emmanuel Olugbodi (NIMASA, 2023).pdf"
  },
  {
    title: "Nigerian Content and the Lessons from the COVID-19 Pandemic",
    type: "award",
    category: "essay",
    year: 2023,
    description: "An analytical essay examining the impact of COVID-19 on Nigerian Content policy in the oil and gas industry.",
    recognition: "Top Ten – NCDMB National Undergraduate Essay Competition",
    link: "assets/Emmanuel Olugbodi (NCDMB, 2023).pdf"
  },
  {
    bookTitle: "POLITICS IN NIGERIA",
    title: "Chapter 1: Political Parties",
    type: "regular",
    category: "chapter",
    year: 2023,
    description: "This chapter examines the role of political parties in Nigeria.",
    link: "assets/Politics_in_Nigeria_Chapter1.pdf"
  }
];


/* =========================
   WRITINGS RENDER LOGIC
========================= */

const container = document.getElementById("writings-container");
const filterButtons = document.querySelectorAll(".filters button");

function renderWritings(filter = "all") {
  if (!container) return;

  container.innerHTML = "";

  const filtered =
    filter === "all"
      ? writings
      : writings.filter(item => item.type === filter || item.category === filter);

  filtered.forEach(item => {
    const card = document.createElement("article");
    card.className = `writing-card ${item.type === "award" ? "featured" : ""}`;

    const buttonLabel = viewLabels[item.category] || "View Work";
    const tagLabel =
      item.type === "award"
        ? "Award-Winning"
        : (tagLabels[item.category] || "Work");

    let html = `
      <div class="card-header">
        <span class="tag">${tagLabel}</span>
        <span class="year">${item.year}</span>
      </div>
    `;

    if (item.category === "chapter" && item.bookTitle) {
      html += `
        <h3 class="book-title">${item.bookTitle}</h3>
        <h4 class="chapter-title">${item.title}</h4>
        <p class="description">${item.description}</p>
      `;
    } else {
      html += `
        <h3 class="content-title">${item.title}</h3>
        <p class="description">${item.description}</p>
      `;
    }

    if (item.recognition) {
      html += `<p class="recognition">${item.recognition}</p>`;
    }

    html += `
      <a href="${item.link}" class="btn small" target="_blank" rel="noopener">
        ${buttonLabel}
      </a>
    `;

    card.innerHTML = html;
    container.appendChild(card);
  });
}

// Filter buttons (safe)
if (filterButtons.length && container) {
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderWritings(btn.dataset.filter);
    });
  });

  renderWritings();
}


/* =========================
   NAVIGATION & UI
========================= */

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navbar = document.querySelector(".navbar");
  const backToTopBtn = document.getElementById("back-to-top");

  // Mobile menu
  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  // Active link
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll(".nav-links a").forEach(link => {
    if (
      link.getAttribute("href") === currentPage ||
      (currentPage === "" && link.getAttribute("href") === "index.html")
    ) {
      link.classList.add("active");
    }
  });

  // Scroll effects
  window.addEventListener("scroll", () => {
    if (navbar) {
      navbar.classList.toggle("scrolled", window.scrollY > 10);
    }

    if (backToTopBtn) {
      backToTopBtn.style.display = window.scrollY > 300 ? "flex" : "none";
    }

    if (window.innerWidth <= 768 && navLinks?.classList.contains("open")) {
      navLinks.classList.remove("open");
    }
  });

  // Back to top
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
