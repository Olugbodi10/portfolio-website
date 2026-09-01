
document.addEventListener('DOMContentLoaded', () => {

    // Mobile Menu
    const menuBtn = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {

        menuBtn.addEventListener('click', (e) => {

            e.stopPropagation();

            const isOpen =
                menuBtn.getAttribute('aria-expanded') === 'true';

            menuBtn.setAttribute(
                'aria-expanded',
                String(!isOpen)
            );

            menuBtn.setAttribute(
                'aria-label',
                isOpen
                    ? 'Open navigation menu'
                    : 'Close navigation menu'
            );

            navLinks.classList.toggle('open', !isOpen);

        });


        // Close menu when clicking outside
        document.addEventListener('click', (e) => {

            if (
                !navLinks.contains(e.target) &&
                !menuBtn.contains(e.target) &&
                navLinks.classList.contains('open')
            ) {

                menuBtn.setAttribute(
                    'aria-expanded',
                    'false'
                );

                menuBtn.setAttribute(
                    'aria-label',
                    'Open navigation menu'
                );

                navLinks.classList.remove('open');

            }

        });


        // Close menu when a navigation link is selected
        navLinks.querySelectorAll('a').forEach((link) => {

            link.addEventListener('click', () => {

                menuBtn.setAttribute(
                    'aria-expanded',
                    'false'
                );

                menuBtn.setAttribute(
                    'aria-label',
                    'Open navigation menu'
                );

                navLinks.classList.remove('open');

            });

        });


        // Close menu when returning to desktop size
        window.addEventListener('resize', () => {

            if (window.innerWidth > 800) {

                menuBtn.setAttribute(
                    'aria-expanded',
                    'false'
                );

                menuBtn.setAttribute(
                    'aria-label',
                    'Open navigation menu'
                );

                navLinks.classList.remove('open');

            }

        });

    }


    // Current Year
    const yearElement =
        document.getElementById('year');

    if (yearElement) {
        yearElement.textContent =
            new Date().getFullYear();
    }


    // Back to Top
    const btt =
        document.querySelector('.back-to-top');

    if (btt) {

        window.addEventListener('scroll', () => {

            if (window.scrollY > 500) {
                btt.classList.add('visible');
            } else {
                btt.classList.remove('visible');
            }

        }, { passive: true });


        btt.addEventListener('click', () => {

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

        });

    }

});
