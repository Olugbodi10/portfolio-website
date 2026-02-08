document.addEventListener("DOMContentLoaded", () => {
  // ===== DATA ANALYTICS PROJECTS =====
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

  // ✅ INSERT HERE: close menu when a nav link is clicked
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove("open");
      }
    });
  });
}

window.addEventListener("scroll", () => {
  if (window.innerWidth <= 768 && navLinks.classList.contains("open")) {
    navLinks.classList.remove("open");
  }

  if (navbar) {
    if (window.scrollY > 10) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  }
});

document.addEventListener("click", (e) => {
  if (
    window.innerWidth <= 768 &&
    navLinks.classList.contains("open") &&
    !e.target.closest(".navbar")
  ) {
    navLinks.classList.remove("open");
  }
});

  // Highlight active link
const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav-links a").forEach(link => {
  const linkPage = link.getAttribute("href").split("/").pop();
  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});
  
  
  // ===== BACK TO TOP BUTTON =====
  const backToTopBtn = document.getElementById("back-to-top");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      backToTopBtn.style.display = window.scrollY > 300 ? "flex" : "none";
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

});



