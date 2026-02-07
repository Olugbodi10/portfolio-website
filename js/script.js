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
 

    /* ===== TEMPLATE FOR OTHER ESSAYS ===== */ 
    {
    bookTitle: "POLITICS IN NIGERIA",
    title: "Chapter 1: Political parties",
    type: "regular",
    category: "chapter",
    year: 2023,
    description: "This chapter examines the role of political parties in Nigeria, tracing their historical development, functions, and challenges. It highlights how weak structures and low ethical standards undermine effective leadership and democratic accountability.",
    recognition: "",
    link: "assets/Politics_in_Nigeria_Chapter1.pdf"
},

     {
    bookTitle: "POLITICS IN NIGERIA",
    title: "Chapter 2: Election",
    type: "regular",
    category: "chapter",
    year: 2023,
    description: "This chapter examines elections in Nigeria, highlighting challenges such as election rigging and political apathy that hinder free and fair electoral outcomes. It also explores the need for preventive measures to ensure that electoral outcomes genuinely reflect the will of the people.",
    recognition: "",
    link: "assets/Politics_in_Nigeria_Chapter2.pdf"
},

       {
    bookTitle: "POLITICS IN NIGERIA",
    title: "Chapter 3: Appointment ",
    type: "regular",
    category: "chapter",
    year: 2023,
    description: "This chapter examines the challenges associated with political appointments in Nigeria, highlighting how weak institutional structures undermine merit-based selection. It emphasises the need for transparent appointment processes and accountability mechanisms as essential steps towards improving governance.",
    recognition: "",
    link: "assets/Politics_in_Nigeria_Chapter3.pdf"
},
        {
    bookTitle: "POLITICS IN NIGERIA",
    title: "Chapter 4: Governance ",
    type: "regular",
    category: "chapter",
    year: 2023,
    description: "This chapter analyses governance in Nigeria, its key responsibilities, major challenges, and the need for proactive measures and regulation to ensure effective and accountable leadership.",
    recognition: "",
    link: "assets/Politics_in_Nigeria_Chapter4.pdf"
},

     {
        title: "Digitization and Self Service: A Mission to Improve Service Delivery at the University of Lagos",
        type: "regular",
        category: "essay",
        year: 2025,
        description: "The essay explores how digitization and self-service systems can enhance service delivery at the University of Lagos by improving efficiency, and addressing persistent administrative challenges in a modern academic environment.",
        recognition: "",
        link: "assets/Emmanuel Olugbodi (UNILAG ICSW, 2025).pdf"
    },

     {
        title: "The Role of Students in Attainment of Sdg4",
        type: "regular",
        category: "essay",
        year: 2024,
        description: "This essay examines Sustainable Development Goal 4, which focuses on achieving inclusive and equitable quality education for all. And this essay emphasizes on the role of students in promoting inclusive and quality education through active engagement and advocacy.",
        recognition: "",
        link: "assets/Emmanuel Olugbodi ( 2024).pdf"
    },

   {
        title: "The Japa’ Syndrome and its Effect on National Economy: The Way Forward",
        type: "regular",
        category: "essay",
        year: 2023,
        description: "This essay explores the ‘Japa’ Syndrome in Nigeria, examining its causes, economic impact, and societal implications. It highlights CIPM’s efforts in addressing the issue and proposes practical solutions to mitigate its effects and inform national strategies.",
        link: "assets/Emmauel Olugbodi (CIPM, 2023).pdf"
    },

      {
        title: "Building a Future-Ready Workforce: Re-Evaluating our Educational System",
        type: "regular",
        category: "essay",
        year: 2022,
        description: "This essay evaluates Nigeria’s educational system and its ability to develop a future-ready workforce, highlighting key structural weaknesses and gaps in relevance. It calls for targeted reforms in curriculum design, institutional frameworks, technology use, and partnerships to better align education with modern workforce demands.",
        recognition: "",
        link: "assets/Emmanuel Olugbodi (CIPM, 2022).pdf"
    },

         {
        title: "Advancing the Frontiers of Possibilities for Safe, Secured, and Prosperous Oyo State through Citizen’s Active Participation in Governance Processes.",
        type: "regular",
        category: "essay",
        year: 2022,
        description: "This essay highlights how active citizen participation in governance contributes to a safer, more secure, and prosperous Oyo State by strengthening accountability and inclusive decision-making.",
        recognition: "",
        link: "assets/Emmanuel Olugbodi [Oyo, 2022).pdf"
    },

       {
        title: "Mitigating the Impact of Poor Drainage Systems and Bad Roads in Community Development",
        type: "regular",
        category: "essay",
        year: 2022,
        description: "This essay examines how poor drainage systems and deteriorated roads hinder community development in a rural area of Ogun State. It identifies irresponsible building practices, and poor waste disposal as key causes, and proposes enforcement of building standards, and other comprehensive and well-reasoned solution to address this issue.",
        recognition: "",
        link: "assets/Emmanuel Olugbodi (2022).pdf"
    },

    {
        title: "Maximizing Website Traffic: Why Responsive Web Design is Crucial for Business Success",
        type: "regular",
        category: "article",
        year: 2022,
        description: "Responsive web design is essential for modern businesses as mobile devices now account for a large share of web traffic. This article explains how responsive design improves user experience across devices and helps businesses increase traffic and engagement.",
        recognition: "",
        link: "assets/Maximizing Website Traffic.pdf"
    },

     {
        title: "How to Fight Economic and Financial Crimes to Make Nigeria Great Again",
        type: "regular",
        category: "essay",
        year: 2021,
        description: "The essay explains that financial crimes in Nigeria can be reduced through effective reporting, proper investigation, and appropriate punishment. It highlights the roles of financial institutions, social media regulation, and strong enforcement in achieving this goal.",
        recognition: "",
        link: "assets/Emmanuel Olugbodi (EFCC Essay, 2021).pdf"
    },
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
