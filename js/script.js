/* =========================================================
   GLOBAL PORTFOLIO JAVASCRIPT
   Emmanuel Olugbodi Portfolio
   ========================================================= */


/* =========================================================
   WAIT FOR THE DOCUMENT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       MOBILE NAVIGATION
       ===================================================== */

    const menuButton =
        document.querySelector(".menu-toggle");

    const navMenu =
        document.querySelector("#primary-menu");

    const navbar =
        document.querySelector(".navbar");


    /*
     * Close the mobile navigation.
     */

    const closeMenu = () => {

        if (!menuButton || !navMenu) {
            return;
        }


        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );


        menuButton.setAttribute(
            "aria-label",
            "Open navigation menu"
        );


        navMenu.classList.remove("open");
    };


    /*
     * Open and close the mobile navigation.
     */

    if (menuButton && navMenu) {

        menuButton.addEventListener(
            "click",
            (event) => {

                /*
                 * Prevent this click from being
                 * interpreted as an outside click.
                 */

                event.stopPropagation();


                const isOpen =
                    menuButton.getAttribute(
                        "aria-expanded"
                    ) === "true";


                if (isOpen) {

                    closeMenu();

                } else {

                    menuButton.setAttribute(
                        "aria-expanded",
                        "true"
                    );


                    menuButton.setAttribute(
                        "aria-label",
                        "Close navigation menu"
                    );


                    navMenu.classList.add(
                        "open"
                    );
                }

            }
        );


        /*
         * Close the menu after selecting
         * a navigation link.
         */

        navMenu
            .querySelectorAll("a")
            .forEach((link) => {

                link.addEventListener(
                    "click",
                    () => {

                        closeMenu();

                    }
                );

            });


        /*
         * Close the menu when the user
         * clicks anywhere outside it.
         */

        document.addEventListener(
            "click",
            (event) => {

                const clickedInsideMenu =
                    navMenu.contains(
                        event.target
                    );


                const clickedMenuButton =
                    menuButton.contains(
                        event.target
                    );


                if (
                    !clickedInsideMenu &&
                    !clickedMenuButton
                ) {

                    closeMenu();

                }

            }
        );


        /*
         * Close the menu with Escape.
         */

        document.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key === "Escape" &&
                    navMenu.classList.contains("open")
                ) {

                    closeMenu();

                    menuButton.focus();

                }

            }
        );


        /*
         * Close the mobile menu when
         * the user begins scrolling.
         */

        window.addEventListener(
            "scroll",
            () => {

                if (
                    window.innerWidth <= 768 &&
                    navMenu.classList.contains("open")
                ) {

                    closeMenu();

                }

            },
            { passive: true }
        );

    }


    /* =====================================================
       NAVIGATION SHADOW
       ===================================================== */

    const updateNavbar = () => {

        if (!navbar) {
            return;
        }


        if (window.scrollY > 10) {

            navbar.classList.add(
                "scrolled"
            );

        } else {

            navbar.classList.remove(
                "scrolled"
            );

        }

    };


    updateNavbar();


    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );


    /* =====================================================
       ACTIVE NAVIGATION LINK
       ===================================================== */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop();


    const navLinks =
        document.querySelectorAll(
            ".nav-links a"
        );


    navLinks.forEach((link) => {

        const linkPage =
            link.getAttribute("href");


        /*
         * Remove manually assigned active
         * states so JavaScript can determine
         * the correct page consistently.
         */

        link.classList.remove(
            "active"
        );


        link.removeAttribute(
            "aria-current"
        );


        if (
            linkPage === currentPage ||
            (
                currentPage === "" &&
                linkPage === "index.html"
            )
        ) {

            link.classList.add(
                "active"
            );


            link.setAttribute(
                "aria-current",
                "page"
            );

        }

    });


    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    const yearElements =
        document.querySelectorAll(
            "#year"
        );


    yearElements.forEach((element) => {

        element.textContent =
            new Date().getFullYear();

    });


    /* =====================================================
       BACK TO TOP
       ===================================================== */

    const backToTopButton =
        document.querySelector(
            ".back-to-top"
        );


    if (backToTopButton) {


        /*
         * Show the button only after
         * meaningful scrolling.
         */

        const updateBackToTop =
            () => {

                if (
                    window.scrollY > 400
                ) {

                    backToTopButton.classList.add(
                        "visible"
                    );

                } else {

                    backToTopButton.classList.remove(
                        "visible"
                    );

                }

            };


        updateBackToTop();


        window.addEventListener(
            "scroll",
            updateBackToTop,
            { passive: true }
        );


        /*
         * Return to the top of the page.
         */

        backToTopButton.addEventListener(
            "click",
            () => {

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }
        );

    }


    /* =====================================================
       INTERNAL ANCHOR LINKS
       ===================================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach((link) => {

            link.addEventListener(
                "click",
                (event) => {

                    const targetId =
                        link.getAttribute(
                            "href"
                        );


                    /*
                     * Ignore empty "#".
                     */

                    if (
                        !targetId ||
                        targetId === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) {

                        return;

                    }


                    event.preventDefault();


                    target.scrollIntoView({

                        behavior: "smooth",

                        block: "start"

                    });

                }
            );

        });


    /* =====================================================
       RESEARCH PAGE
       ===================================================== */

    /*
     * These data objects are retained so the
     * Research page can continue generating
     * its writing cards.
     */

    const viewLabels = {

        essay:
            "View Essay",

        chapter:
            "View Chapter",

        article:
            "Read Article",

        report:
            "View Report"

    };


    const tagLabels = {

        essay:
            "Essay",

        chapter:
            "Book Chapter",

        article:
            "Article"

    };


    const writings = [

        {
            title:
                "Omo Dàadáa: The Day 0.03 CGPA Changed My Perspective",

            type:
                "award",

            category:
                "essay",

            year:
                2025,

            description:
                "A reflective narrative on academic discipline, growth, and personal accountability during university life.",

            recognition:
                "Top Three – Tosin Adesile Essay Writing Competition",

            link:
                "assets/Emmanuel Olugbodi (Unilag Press Club, 2025).pdf"
        },


        {
            title:
                "MARPOL at 50: Our Commitment Goes On",

            type:
                "award",

            category:
                "essay",

            year:
                2023,

            description:
                "A policy-focused essay exploring the evolution of MARPOL and Nigeria’s role in maritime environmental protection.",

            recognition:
                "Top Ten – World Maritime Day Essay Competition (NIMASA)",

            link:
                "assets/Emmanuel Olugbodi (NIMASA, 2023).pdf"
        },


        {
            title:
                "Nigerian Content and the Lessons from the COVID-19 Pandemic",

            type:
                "award",

            category:
                "essay",

            year:
                2023,

            description:
                "An analytical essay examining the impact of COVID-19 on Nigerian Content policy in the oil and gas industry.",

            recognition:
                "Top Ten – NCDMB National Undergraduate Essay Competition",

            link:
                "assets/Emmanuel Olugbodi (NCDMB, 2023).pdf"
        },


        {
            bookTitle:
                "POLITICS IN NIGERIA",

            title:
                "Chapter 1: Political parties",

            type:
                "regular",

            category:
                "chapter",

            year:
                2023,

            description:
                "This chapter examines the role of political parties in Nigeria, tracing their historical development, functions, and challenges. It highlights how weak structures and low ethical standards undermine effective leadership and democratic accountability.",

            recognition:
                "",

            link:
                "assets/Politics_in_Nigeria_Chapter1.pdf"
        },


        {
            bookTitle:
                "POLITICS IN NIGERIA",

            title:
                "Chapter 2: Election",

            type:
                "regular",

            category:
                "chapter",

            year:
                2023,

            description:
                "This chapter examines elections in Nigeria, highlighting challenges such as election rigging and political apathy that hinder free and fair electoral outcomes. It also explores the need for preventive measures to ensure that electoral outcomes genuinely reflect the will of the people.",

            recognition:
                "",

            link:
                "assets/Politics_in_Nigeria_Chapter2.pdf"
        },


        {
            bookTitle:
                "POLITICS IN NIGERIA",

            title:
                "Chapter 3: Appointment",

            type:
                "regular",

            category:
                "chapter",

            year:
                2023,

            description:
                "This chapter examines the challenges associated with political appointments in Nigeria, highlighting how weak institutional structures undermine merit-based selection. It emphasises the need for transparent appointment processes and accountability mechanisms as essential steps towards improving governance.",

            recognition:
                "",

            link:
                "assets/Politics_in_Nigeria_Chapter3.pdf"
        },


        {
            bookTitle:
                "POLITICS IN NIGERIA",

            title:
                "Chapter 4: Governance",

            type:
                "regular",

            category:
                "chapter",

            year:
                2023,

            description:
                "This chapter analyses governance in Nigeria, its key responsibilities, major challenges, and the need for proactive measures and regulation to ensure effective and accountable leadership.",

            recognition:
                "",

            link:
                "assets/Politics_in_Nigeria_Chapter4.pdf"
        },


        {
            title:
                "Advancing the Frontiers of Possibilities for Safe, Secured, and Prosperous Oyo State through Citizen’s Active Participation in Governance Processes.",

            type:
                "regular",

            category:
                "essay",

            year:
                2022,

            description:
                "This essay highlights how active citizen participation in governance contributes to a safer, more secure, and prosperous Oyo State by strengthening accountability and inclusive decision-making.",

            recognition:
                "",

            link:
                "assets/Emmanuel Olugbodi [Oyo, 2022).pdf"
        },


        {
            title:
                "Mitigating the Impact of Poor Drainage Systems and Bad Roads in Community Development",

            type:
                "regular",

            category:
                "essay",

            year:
                2022,

            description:
                "This essay examines how poor drainage systems and deteriorated roads hinder community development in a rural area of Ogun State. It identifies irresponsible building practices and poor waste disposal as key causes and proposes comprehensive solutions to address these issues.",

            recognition:
                "",

            link:
                "assets/Emmanuel Olugbodi (2022).pdf"
        },


        {
            title:
                "Maximizing Website Traffic: Why Responsive Web Design is Crucial for Business Success",

            type:
                "regular",

            category:
                "article",

            year:
                2022,

            description:
                "Responsive web design is essential for modern businesses as mobile devices now account for a large share of web traffic. This article explains how responsive design improves user experience across devices and helps businesses increase traffic and engagement.",

            recognition:
                "",

            link:
                "assets/Maximizing Website Traffic.pdf"
        },


        {
            title:
                "How to Fight Economic and Financial Crimes to Make Nigeria Great Again",

            type:
                "regular",

            category:
                "essay",

            year:
                2021,

            description:
                "The essay explains that financial crimes in Nigeria can be reduced through effective reporting, proper investigation, and appropriate punishment. It highlights the roles of financial institutions, social media regulation, and strong enforcement in achieving this goal.",

            recognition:
                "",

            link:
                "assets/Emmanuel Olugbodi (EFCC Essay, 2021).pdf"
        }

    ];


    /* =====================================================
       RESEARCH CARD RENDERING
       ===================================================== */

    const writingsContainer =
        document.getElementById(
            "writings-container"
        );


    const filterButtons =
        document.querySelectorAll(
            ".filters button"
        );


    if (
        writingsContainer &&
        filterButtons.length
    ) {


        const renderWritings =
            (filter = "all") => {

                writingsContainer.innerHTML =
                    "";


                const filtered =
                    filter === "all"
                        ? writings
                        : writings.filter(
                            (item) =>
                                item.type === filter ||
                                item.category === filter
                        );


                filtered.forEach(
                    (item) => {

                        const card =
                            document.createElement(
                                "article"
                            );


                        card.className =
                            `writing-card ${
                                item.type === "award"
                                    ? "featured"
                                    : ""
                            }`;


                        const buttonLabel =
                            viewLabels[
                                item.category
                            ] ||
                            "View Work";


                        const tagLabel =
                            item.type === "award"
                                ? "Award-Winning"
                                : (
                                    tagLabels[
                                        item.category
                                    ] ||
                                    "Work"
                                );


                        let cardContent = `

                            <div class="card-header">

                                <span class="tag">
                                    ${tagLabel}
                                </span>

                                <span class="year">
                                    ${item.year}
                                </span>

                            </div>

                        `;


                        if (item.bookTitle) {

                            cardContent += `

                                <p class="book-title">
                                    ${item.bookTitle}
                                </p>

                            `;

                        }


                        cardContent += `

                            <h3 class="chapter-title">
                                ${item.title}
                            </h3>

                            <p class="description">
                                ${item.description}
                            </p>

                        `;


                        if (item.recognition) {

                            cardContent += `

                                <p class="recognition">
                                    ${item.recognition}
                                </p>

                            `;

                        }


                        cardContent += `

                            <a
                                href="${item.link}"
                                class="btn small"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ${buttonLabel}
                            </a>

                        `;


                        card.innerHTML =
                            cardContent;


                        writingsContainer.appendChild(
                            card
                        );

                    }
                );

            };


        /* Filter buttons */

        filterButtons.forEach(
            (button) => {

                button.addEventListener(
                    "click",
                    () => {

                        filterButtons.forEach(
                            (item) => {

                                item.classList.remove(
                                    "active"
                                );

                            }
                        );


                        button.classList.add(
                            "active"
                        );


                        renderWritings(
                            button.dataset.filter
                        );

                    }
                );

            }
        );


        /* Initial research rendering */

        renderWritings();

    }

});
