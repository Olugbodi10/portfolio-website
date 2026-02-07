//Data Analytics Section

document.addEventListener("DOMContentLoaded", () => {
  // ===== DATA ANALYTICS PROJECTS =====
  const projects = [
  {
  title: "Cyclistic Bike-Share Analysis",
  overview: "An analysis of Cyclistic bike-share data to guide marketing strategies aimed at converting casual riders into annual members.",
  businessProblem: "Cyclistic’s growth and profitability depend on increasing the number of annual memberships. While casual riders form a significant portion of the user base, their behaviors and usage patterns differ from those of annual members. The marketing team currently lacks data-driven insights into these differences, limiting their ability to design targeted strategies that convert casual riders into annual members. A structured analysis of historical bike-share data is therefore required to identify actionable trends and inform strategic marketing decisions.",
  data: {
    source: "Cyclistic historical bike trip data",
    link: "https://divvy-tripdata.s3.amazonaws.com/index.html",
    limitations: "The analysis relies on historical trip data provided as part of the Google Data Analytics Certification capstone. The dataset excludes demographic and income variables, limiting deeper behavioral segmentation. Rider motivations are inferred from usage patterns rather than direct survey data, and findings reflect past trends that may not fully capture recent market dynamics.",
  },
  methodology: [
  "Translated a business growth objective into measurable analytical questions",
  "Collected historical Cyclistic trip data provided in quarterly datasets",
  "Assessed data reliability and suitability using the ROCCC framework",
  "Cleaned and standardised inconsistent schemas, column names, and rider classifications",
  "Removed irrelevant and non-uniform variables to ensure structural consistency",
  "Engineered analytical features including ride duration, day-of-week, and monthly indicators",
  "Merged all quarterly datasets into a single master dataset",
  "Validated data accuracy through consistency and range checks",
  "Analyzed behavioural differences between casual riders and annual members",
  "Segmented riders by trip duration, usage frequency, and temporal patterns",
  "Visualised key trends to support marketing insights and recommendations"
],
 insights: [
  "Annual members demonstrate significantly higher ride frequency, with peak usage occurring on weekdays, particularly Tuesdays, indicating routine and utilitarian usage patterns.",
  "Casual riders exhibit longer average ride durations and peak usage on Sundays, suggesting leisure-oriented and discretionary riding behaviour.",
  "Distinct temporal usage patterns between rider types indicate that membership status strongly influences how and when Cyclistic bikes are used.",
  "Weekend concentration and longer ride durations among casual riders represent a clear opportunity for targeted membership conversion strategies."
],
recommendation: 
  "Cyclistic should design weekend-focused digital marketing campaigns aimed at casual riders, highlighting the cost efficiency and convenience of annual memberships. Promotions such as limited-time weekend membership discounts, ride credits for frequent weekend users, and in-app messaging triggered on Sundays can directly target peak casual usage periods. Thus, by aligning membership offers with how casual riders actually use the service, Cyclistic can encourage more organic and sustained conversions.",
  deliverables: {
    documentation: "assets/Project Documentation.pdf",
    scope: "assets/DATA ANALYTICS PROJECT SOW.pdf",
    presentation: "video/Presentation.mp4",
  }
    },
  ];

/*
  //EXTRA PROJECT 1
projects.push({
  title: "Graduate Unemployment Analysis",
      overview: "An analysis of graduate unemployment trends to support workforce and policy decisions.",
      businessProblem: "Graduate unemployment remains high despite increased tertiary education enrolment.",
      data: {
        source: "National Bureau of Statistics",
        limitations: "Informal employment may be underreported"
      },
      methodology: [
        "Cleaned labour force survey data",
        "Analysed unemployment trends by sector",
        "Compared outcomes across regions"
      ],
      insights: [
        "STEM graduates face lower unemployment",
        "Public sector hiring is declining",
        "Regional disparities persist"
      ],
      recommendation: "Policy focus should shift toward private-sector job creation.",
      deliverables: {
        documentation: "docs/project1/documentation.pdf",
        scope: "docs/project1/scope.pdf",
        presentation: "docs/project1/presentation.mp4"
      }
});

//EXTRA PROJECT 2
projects.push({
  title: "Customer Churn Prediction",
  overview: "Predicting customer churn to improve retention strategies.",
  businessProblem: "High churn rates are reducing company profitability and customer lifetime value.",
  data: {
    source: "Company CRM and transaction records",
    limitations: "Missing data for inactive customers"
  },
  methodology: [
    "Cleaned customer transaction and interaction data",
    "Engineered churn-related features",
    "Built and validated machine learning models (Random Forest, Logistic Regression)"
  ],
  insights: [
    "Customers with low engagement are more likely to churn",
    "Subscription plan type affects churn risk",
    "Promotions and incentives reduce churn by 15%"
  ],
  recommendation: "Implement targeted retention campaigns for high-risk customers.",
  deliverables: {
    documentation: "docs/project3/documentation.pdf",
    scope: "docs/project3/scope.pdf",
    presentation: "docs/project3/presentation.mp4"
  }
});

//EXTRA PROJECT 3
projects.push({
  title: "Customer Churn Prediction",
  overview: "Predicting customer churn to improve retention strategies.",
  businessProblem: "High churn rates are reducing company profitability and customer lifetime value.",
  data: {
    source: "Company CRM and transaction records",
    limitations: "Missing data for inactive customers"
  },
  methodology: [
    "Cleaned customer transaction and interaction data",
    "Engineered churn-related features",
    "Built and validated machine learning models (Random Forest, Logistic Regression)"
  ],
  insights: [
    "Customers with low engagement are more likely to churn",
    "Subscription plan type affects churn risk",
    "Promotions and incentives reduce churn by 15%"
  ],
  recommendation: "Implement targeted retention campaigns for high-risk customers.",
  deliverables: {
    documentation: "docs/project3/documentation.pdf",
    scope: "docs/project3/scope.pdf",
    presentation: "docs/project3/presentation.mp4"
  }
});


//EXTRA PROJECT 4
projects.push({
  title: "Customer Churn Prediction",
  overview: "Predicting customer churn to improve retention strategies.",
  businessProblem: "High churn rates are reducing company profitability and customer lifetime value.",
  data: {
    source: "Company CRM and transaction records",
    limitations: "Missing data for inactive customers"
  },
  methodology: [
    "Cleaned customer transaction and interaction data",
    "Engineered churn-related features",
    "Built and validated machine learning models (Random Forest, Logistic Regression)"
  ],
  insights: [
    "Customers with low engagement are more likely to churn",
    "Subscription plan type affects churn risk",
    "Promotions and incentives reduce churn by 15%"
  ],
  recommendation: "Implement targeted retention campaigns for high-risk customers.",
  deliverables: {
    documentation: "docs/project3/documentation.pdf",
    scope: "docs/project3/scope.pdf",
    presentation: "docs/project3/presentation.mp4"
  }
});

//EXTRA PROJECT 5
projects.push({
  title: "Customer Churn Prediction",
  overview: "Predicting customer churn to improve retention strategies.",
  businessProblem: "High churn rates are reducing company profitability and customer lifetime value.",
  data: {
    source: "Company CRM and transaction records",
    limitations: "Missing data for inactive customers"
  },
  methodology: [
    "Cleaned customer transaction and interaction data",
    "Engineered churn-related features",
    "Built and validated machine learning models (Random Forest, Logistic Regression)"
  ],
  insights: [
    "Customers with low engagement are more likely to churn",
    "Subscription plan type affects churn risk",
    "Promotions and incentives reduce churn by 15%"
  ],
  recommendation: "Implement targeted retention campaigns for high-risk customers.",
  deliverables: {
    documentation: "docs/project3/documentation.pdf",
    scope: "docs/project3/scope.pdf",
    presentation: "docs/project3/presentation.mp4"
  }
});

//EXTRA PROJECT 6
projects.push({
  title: "Customer Churn Prediction",
  overview: "Predicting customer churn to improve retention strategies.",
  businessProblem: "High churn rates are reducing company profitability and customer lifetime value.",
  data: {
    source: "Company CRM and transaction records",
    limitations: "Missing data for inactive customers"
  },
  methodology: [
    "Cleaned customer transaction and interaction data",
    "Engineered churn-related features",
    "Built and validated machine learning models (Random Forest, Logistic Regression)"
  ],
  insights: [
    "Customers with low engagement are more likely to churn",
    "Subscription plan type affects churn risk",
    "Promotions and incentives reduce churn by 15%"
  ],
  recommendation: "Implement targeted retention campaigns for high-risk customers.",
  deliverables: {
    documentation: "docs/project3/documentation.pdf",
    scope: "docs/project3/scope.pdf",
    presentation: "docs/project3/presentation.mp4"
  }
});
//EXTRA PROJECT 
*/

  // ===== RENDER PROJECTS =====
  const container = document.getElementById("projectsContainer");

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

  // ===== VIDEO LAZY LOADING =====
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

  // ===== NAVIGATION =====
  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navbar = document.querySelector(".navbar");

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  window.addEventListener("scroll", () => {
    // Close menu on scroll for mobile
    if (window.innerWidth <= 768 && navLinks.classList.contains("open")) {
      navLinks.classList.remove("open");
    }

    // Navbar shadow effect
    if (navbar) {
      if (window.scrollY > 10) navbar.classList.add("scrolled");
      else navbar.classList.remove("scrolled");
    }
  });

  document.addEventListener("click", (e) => {
    if (window.innerWidth <= 768 && navLinks.classList.contains("open") && !e.target.closest(".navbar")) {
      navLinks.classList.remove("open");
    }
  });

  // Highlight active link
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll(".nav-links a").forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
      link.classList.add("active");
    }
  });

  // ===== ANALYSIS DETAILS TOGGLE =====
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("toggle")) {
      const targetId = e.target.getAttribute("data-target");
      const content = document.getElementById(targetId);
      if (content) {
        content.classList.toggle("open");
        e.target.textContent = content.classList.contains("open") ? "Hide Analysis Details" : "View Analysis Details";
      }
    }
  });

  // ===== BACK TO TOP BUTTON =====
  const backToTopBtn = document.getElementById("back-to-top");
  const scrollPages = ["research.html", "cv.html", "analytics.html"];

  if (backToTopBtn && scrollPages.includes(currentPage)) {
    window.addEventListener("scroll", () => {
      backToTopBtn.style.display = window.scrollY > 300 ? "flex" : "none";
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});