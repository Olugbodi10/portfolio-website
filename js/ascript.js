document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     DATA ANALYTICS PROJECTS
  ========================= */
  const projects = [
    {
      title: "Cyclistic Bike-Share Analysis",
      overview: "An analysis of Cyclistic bike-share data to guide marketing strategies aimed at converting casual riders into annual members.",
      businessProblem: "Cyclistic’s growth and profitability depend on increasing the number of annual memberships. While casual riders form a significant portion of the user base, their behaviors and usage patterns differ from those of annual members. A structured analysis of historical bike-share data is required to identify actionable trends.",
      data: {
        source: "Cyclistic historical bike trip data",
        link: "https://divvy-tripdata.s3.amazonaws.com/index.html",
        limitations: "The analysis relies on historical trip data and excludes demographic variables, limiting deeper insights."
      },
      methodology: [
        "Translated business objective into measurable analytical questions",
        "Collected historical Cyclistic trip data",
        "Assessed data reliability and suitability",
        "Cleaned and standardized datasets",
        "Analyzed behavioral differences between casual and annual riders"
      ],
      insights: [
        "Annual members have higher ride frequency on weekdays",
        "Casual riders have longer rides on weekends",
        "Distinct temporal usage patterns indicate membership affects bike usage"
      ],
      recommendation: "Design weekend-focused marketing campaigns to convert casual riders into annual members.",
      deliverables: {
        documentation: "assets/Project Documentation.pdf",
        scope: "assets/DATA ANALYTICS PROJECT SOW.pdf",
        presentation: "video/Presentation.mp4"
      }
    }
  ];

  /*
    // EXTRA PROJECTS
   
  */

  /* =========================
     RENDER PROJECTS
  ========================= */
  const container = document.getElementById("projectsContainer");
  if (container) {
    projects.forEach((project, index) => {
      const section = document.createElement("section");
      section.className = "project";
      section.innerHTML = `
        <h2>${project.title}</h2>
        <p class="overview">${project.overview}</p>

        <div class="video-wrapper">
          <video controls preload="none" data-src="${project.deliverables.presentation}">
            <source type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>

        <button class="toggle" data-target="details-${index}">View Analysis Details</button>

        <div class="details" id="details-${index}">
          <div class="details-text">
            <h3>Business Problem</h3>
            <p>${project.businessProblem}</p>

            <h3>Data and Scope</h3>
            <p><strong>Source:</strong> 
             ${project.data.link ? `<a href="${project.data.link}" target="_blank">${project.data.source}</a>` : project.data.source}
            </p>
            <p><strong>Limitations:</strong> ${project.data.limitations}</p>

            <h3>Methodology</h3>
            <ul>${project.methodology.map(step => `<li>${step}</li>`).join("")}</ul>

            <h3>Key Insights</h3>
            <ul>${project.insights.map(insight => `<li>${insight}</li>`).join("")}</ul>

            <h3>Recommendation</h3>
            <p>${project.recommendation}</p>

            <h3>Deliverables</h3>
            <div class="deliverables">
              <a href="${project.deliverables.documentation}" target="_blank">Documentation</a>
              <a href="${project.deliverables.scope}" target="_blank">Scope of Work</a>
            </div>
          </div>
        </div>
      `;
      container.appendChild(section);
    });
  }

  /* =========================
     VIDEO LAZY LOADING
  ========================= */
  const videos = document.querySelectorAll("video");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const video = entry.target;
        const source = video.querySelector("source");
        if (!source.src) {
          source.src = video.dataset.src;
          video.load();
        }
        observer.unobserve(video);
      }
    });
  });
  videos.forEach(video => observer.observe(video));

  /* =========================
     PROJECT DETAILS TOGGLE
  ========================= */
  document.querySelectorAll(".toggle").forEach(button => {
    button.addEventListener("click", () => {
      const details = document.getElementById(button.dataset.target);
      if (!details) return;
      details.classList.toggle("open");
      button.textContent = details.classList.contains("open")
        ? "Hide Analysis Details"
        : "View Analysis Details";
    });
  });

  /* =========================
     NAVIGATION & UI
  ========================= */
  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navbar = document.querySelector(".navbar");
  const backToTopBtn = document.getElementById("back-to-top");

  // Mobile menu toggle
  if (toggle && navLinks) {
    toggle.addEventListener("click", () => navLinks.classList.toggle("open"));

    // Close menu when a nav link is clicked
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 768) navLinks.classList.remove("open");
      });
    });
  }

  // Scroll effects & back-to-top
  window.addEventListener("scroll", () => {
    // Navbar scroll style
    if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 10);

    // Hide mobile menu on scroll
    if (window.innerWidth <= 768 && navLinks?.classList.contains("open")) {
      navLinks.classList.remove("open");
    }

    // Back-to-top button
    if (backToTopBtn) backToTopBtn.style.display = window.scrollY > 300 ? "flex" : "none";
  });

  // Back-to-top click
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" })
    );
  }

  // Close mobile menu when clicking outside
  document.addEventListener("click", e => {
    if (
      window.innerWidth <= 768 &&
      navLinks?.classList.contains("open") &&
      !e.target.closest(".nav-links") &&
      !e.target.closest(".menu-toggle")
    ) {
      navLinks.classList.remove("open");
    }
  });

  // Highlight active page link
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(link => {
    const linkPage = link.getAttribute("href").split("/").pop();
    if (linkPage === currentPage) link.classList.add("active");
  });
});
