/* =========================================
   EDUVIORA JAVASCRIPT
========================================= */


/* =========================================
   MOBILE MENU
========================================= */

const menuButton =
    document.getElementById("menuButton");

const navbar =
    document.getElementById("navbar");


menuButton.addEventListener("click", function () {

    navbar.classList.toggle("active");

});


/* CLOSE MOBILE MENU AFTER CLICK */

const navLinks =
    document.querySelectorAll(".navbar a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("active");

    });

});


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            alert(
                "Thank you for contacting Eduviora. We will get back to you soon."
            );

            contactForm.reset();

        }
    );

}


/* =========================================
   HEADER SCROLL EFFECT
========================================= */

window.addEventListener("scroll", function () {

    const header =
        document.querySelector(".header");

    if (window.scrollY > 30) {

        header.style.boxShadow =
            "0 5px 25px rgba(15, 23, 42, 0.08)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* =========================================
   SIMPLE SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(
        ".about-card, .solution-card, .industry-card, .pricing-card"
    );


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.1
        }
    );


revealElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});
