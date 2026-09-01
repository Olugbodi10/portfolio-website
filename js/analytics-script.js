document.addEventListener('DOMContentLoaded', () => {
    // =========================================================
    // PROJECT DATA
    // =========================================================
    const projects = [
        {
            id: 'cyclistic-2025',
            title: 'Cyclistic Bike-Share Analysis',
            category: 'business',
            tag: 'Business Analytics',
            description: 'Analysed 12 months of historical trip data to identify behavioral differences between casual riders and annual members for a marketing strategy.',
            image: '', // Leave empty to use visual placeholder
            visualLabel: 'Business Analytics',
            visualTitle: 'Cyclistic Case Study',
            tools: ['Excel', 'Tableau', 'Data Storytelling'],
            problem: 'How do annual members and casual riders use Cyclistic bikes differently, and how can these insights drive a marketing strategy to convert casual riders into members?',
            methodology: [
                'Data Cleaning: Removed duplicate entries and handled missing values in 5.8 million records.',
                'Data Transformation: Calculated trip duration and identified day-of-week patterns.',
                'Analysis: Conducted descriptive analysis to compare trip frequencies and durations.',
                'Visualisation: Built a Tableau dashboard to present user behavior trends.'
            ],
            findings: 'Casual riders take longer trips on average, particularly on weekends, while members show consistent usage patterns on weekdays, suggesting commuting behavior.',
            recommendation: 'Target casual riders with weekend-only memberships and seasonal promotions that highlight the convenience of commuting for members.',
            documentation: 'assets/Project Documentation.pdf',
            scope: 'assets/DATA ANALYTICS PROJECT SOW.pdf',
            video: 'video/Presentation.mp4'
        }
        // Future projects can be added here
    ];

    // =========================================================
    // RENDER PROJECTS
    // =========================================================
    const container = document.getElementById('projects-container');
    const filterButtons = document.querySelectorAll('.filter-button');

    const renderProject = (project) => {
        const visualContent = project.image 
            ? `<img src="${project.image}" alt="${project.title}">`
            : `<div class="visual-placeholder">
                 <span class="visual-label">${project.visualLabel}</span>
                 <strong>${project.visualTitle}</strong>
               </div>`;

        return `
            <article class="project-card" data-category="${project.category}">
                <div class="project-main">
                    <div class="project-visual ${project.image ? 'has-image' : ''}">
                        ${visualContent}
                    </div>
                    <div class="project-content">
                        <span class="project-tag">${project.tag}</span>
                        <h3>${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                        <div class="project-meta">
                            ${project.tools.map(tool => `<span class="meta-pill">${tool}</span>`).join('')}
                        </div>
                        <div class="project-actions">
                            <button class="project-button primary details-toggle" data-target="details-${project.id}" aria-expanded="false">
                                View case study <span aria-hidden="true">↓</span>
                            </button>
                            <a href="mailto:olugbodiemmanuel1@gmail.com" class="project-button">Discuss results ↗</a>
                        </div>
                    </div>
                </div>
                <div class="project-details" id="details-${project.id}">
                    <div class="details-grid">
                        <div class="detail-block">
                            <h4>The Problem</h4>
                            <p>${project.problem}</p>
                            <h4 style="margin-top:20px;">Methodology</h4>
                            <ul>
                                ${project.methodology.map(step => `<li>${step}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="detail-block">
                            <h4>Key Findings</h4>
                            <p>${project.findings}</p>
                            <h4 style="margin-top:20px;">Recommendation</h4>
                            <p>${project.recommendation}</p>
                            <h4 style="margin-top:20px;">Deliverables</h4>
                            <div class="deliverables">
                                <a href="${project.documentation}" class="deliverable-link" download>
                                    <span>📄</span> Project Documentation
                                </a>
                                <a href="${project.scope}" class="deliverable-link" download>
                                    <span>📋</span> Scope of Work (SOW)
                                </a>
                            </div>
                        </div>
                    </div>
                    ${project.video ? `
                        <div class="project-video">
                            <video controls preload="none" data-video-src="${project.video}">
                                <source src="" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    ` : ''}
                </div>
            </article>
        `;
    };

    const displayProjects = (filter = 'all') => {
        if (!container) return;
        const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);
        
        container.innerHTML = filtered.length 
            ? filtered.map(renderProject).join('') 
            : '<p style="padding:40px; text-align:center; color:var(--ink-soft);">New projects in this category will be added soon.</p>';

        bindToggles();
        setupVideoObserver();
    };

    // =========================================================
    // UI LOGIC
    // =========================================================
    
    // Filtering
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-pressed', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-pressed', 'true');
            displayProjects(btn.dataset.filter);
        });
    });

    // Case Study Toggles
    const bindToggles = () => {
        document.querySelectorAll('.details-toggle').forEach(btn => {
            btn.addEventListener('click', () => {
                const details = document.getElementById(btn.dataset.target);
                const isOpen = details.style.display === 'block';
                
                details.style.display = isOpen ? 'none' : 'block';
                btn.setAttribute('aria-expanded', !isOpen);
                btn.innerHTML = isOpen 
                    ? 'View case study <span aria-hidden="true">↓</span>' 
                    : 'Hide case study <span aria-hidden="true">↑</span>';

                if (!isOpen) {
                    const video = details.querySelector('video');
                    if (video && video.dataset.videoSrc) loadVideo(video);
                }
            });
        });
    };

    // Lazy Video Loading
    const loadVideo = (video) => {
        if (video.dataset.loaded) return;
        const source = video.querySelector('source');
        source.src = video.dataset.videoSrc;
        video.load();
        video.dataset.loaded = 'true';
    };

    const setupVideoObserver = () => {
        if (!('IntersectionObserver' in window)) return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    loadVideo(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { rootMargin: '200px' });

        document.querySelectorAll('video[data-video-src]').forEach(v => observer.observe(v));
    };

    // Mobile Menu (Homepage Match)
    const menuBtn = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
            menuBtn.setAttribute('aria-expanded', !isOpen);
            navLinks.classList.toggle('open');
        });

        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !menuBtn.contains(e.target) && navLinks.classList.contains('open')) {
                menuBtn.setAttribute('aria-expanded', 'false');
                navLinks.classList.remove('open');
            }
        });
    }

    // Current Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // Back to Top
    const btt = document.getElementById('back-to-top');
    if (btt) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) btt.classList.add('visible');
            else btt.classList.remove('visible');
        });
        btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    // Initial Load
    displayProjects();
});
