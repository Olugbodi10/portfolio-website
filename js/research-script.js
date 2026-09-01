document.addEventListener('DOMContentLoaded', () => {
    // =========================================================
    // WRITINGS DATA
    // =========================================================
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
            title: "Chapter 1: Political parties",
            type: "regular",
            category: "chapter",
            year: 2023,
            description: "This chapter examines the role of political parties in Nigeria, tracing their historical development, functions, and challenges.",
            link: "assets/Politics_in_Nigeria_Chapter1.pdf"
        },
        {
            bookTitle: "POLITICS IN NIGERIA",
            title: "Chapter 2: Election",
            type: "regular",
            category: "chapter",
            year: 2023,
            description: "This chapter examines elections in Nigeria, highlighting challenges such as election rigging and political apathy.",
            link: "assets/Politics_in_Nigeria_Chapter2.pdf"
        },
        {
            bookTitle: "POLITICS IN NIGERIA",
            title: "Chapter 3: Appointment",
            type: "regular",
            category: "chapter",
            year: 2023,
            description: "This chapter examines the challenges associated with political appointments in Nigeria, highlighting institutional weaknesses.",
            link: "assets/Politics_in_Nigeria_Chapter3.pdf"
        },
        {
            bookTitle: "POLITICS IN NIGERIA",
            title: "Chapter 4: Governance",
            type: "regular",
            category: "chapter",
            year: 2023,
            description: "This chapter analyses governance in Nigeria, its key responsibilities, and the need for accountable leadership.",
            link: "assets/Politics_in_Nigeria_Chapter4.pdf"
        },
        {
            title: "Digitization and Self Service: A Mission to Improve Service Delivery at the University of Lagos",
            type: "regular",
            category: "essay",
            year: 2025,
            description: "Explores how digitization can enhance administrative efficiency in modern academic environments.",
            link: "assets/Emmanuel Olugbodi (UNILAG ICSW, 2025).pdf"
        },
        {
            title: "The Role of Students in Attainment of SDG4",
            type: "regular",
            category: "essay",
            year: 2024,
            description: "Examines the role of students in promoting inclusive and quality education through active engagement.",
            link: "assets/Emmanuel Olugbodi ( 2024).pdf"
        },
        {
            title: "The Japa’ Syndrome and its Effect on National Economy: The Way Forward",
            type: "regular",
            category: "essay",
            year: 2023,
            description: "Explores the economic impact of brain drain in Nigeria and proposes practical solutions.",
            link: "assets/Emmauel Olugbodi (CIPM, 2023).pdf"
        },
        {
            title: "Building a Future-Ready Workforce: Re-Evaluating our Educational System",
            type: "regular",
            category: "essay",
            year: 2022,
            description: "Calls for targeted reforms in curriculum design and technology use to align education with workforce demands.",
            link: "assets/Emmanuel Olugbodi (2022).pdf"
        },
        {
            title: "Advancing the Frontiers of Possibilities for Oyo State through Citizen’s Active Participation",
            type: "regular",
            category: "essay",
            year: 2022,
            description: "Highlights how active citizen participation contributes to safer and more prosperous governance.",
            link: "assets/Emmanuel Olugbodi [Oyo, 2022).pdf"
        },
        {
            title: "Mitigating the Impact of Poor Drainage Systems and Bad Roads in Community Development",
            type: "regular",
            category: "essay",
            year: 2022,
            description: "Examines how infrastructure deficits hinder rural community development in Ogun State.",
            link: "assets/Emmanuel Olugbodi (2022).pdf"
        },
        {
            title: "Maximizing Website Traffic: Why Responsive Web Design is Crucial for Business Success",
            type: "regular",
            category: "article",
            year: 2022,
            description: "Explains how responsive design improves user experience and business engagement across devices.",
            link: "assets/Maximizing Website Traffic.pdf"
        },
        {
            title: "How to Fight Economic and Financial Crimes to Make Nigeria Great Again",
            type: "regular",
            category: "essay",
            year: 2021,
            description: "Explains how reporting and strong enforcement can reduce financial crimes in Nigeria.",
            link: "assets/Emmanuel Olugbodi (EFCC Essay, 2021).pdf"
        }
    ];

    // =========================================================
    // RENDERING LOGIC
    // =========================================================
    const container = document.getElementById('writings-container');
    const filterButtons = document.querySelectorAll('.filter-button');

    const typeLabels = {
        essay: 'Essay',
        chapter: 'Book Chapter',
        article: 'Article',
        award: 'Award-Winning'
    };

    const actionLabels = {
        essay: 'Read Essay',
        chapter: 'Read Chapter',
        article: 'Read Article'
    };

    const renderCard = (item) => {
        const isAward = item.type === 'award';
        const tag = isAward ? typeLabels.award : typeLabels[item.category];
        const action = actionLabels[item.category] || 'View Work';

        return `
            <article class="writing-card ${isAward ? 'featured' : ''}">
                <div class="card-header">
                    <span class="tag">${tag}</span>
                    <span class="year">${item.year}</span>
                </div>
                ${item.bookTitle ? `<span class="book-title">${item.bookTitle}</span>` : ''}
                <h3>${item.title}</h3>
                <p class="description">${item.description}</p>
                ${item.recognition ? `<div class="recognition">${item.recognition}</div>` : ''}
                <a href="${item.link}" class="btn-link" target="_blank" rel="noopener noreferrer">
                    ${action} <span aria-hidden="true">↗</span>
                </a>
            </article>
        `;
    };

    const displayWritings = (filter = 'all') => {
        if (!container) return;
        const filtered = filter === 'all' 
            ? writings 
            : writings.filter(w => w.type === filter || w.category === filter);
        
        container.innerHTML = filtered.map(renderCard).join('');
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
            displayWritings(btn.dataset.filter);
        });
    });

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
    displayWritings();
});
