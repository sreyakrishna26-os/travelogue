
/* =========================================
   WANDER KERALA - JAVASCRIPT
========================================= */

// SELECT ELEMENTS

const header = document.querySelector(".header");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-link");
const backToTop = document.getElementById("backToTop");


// =========================================
// MOBILE NAVIGATION
// =========================================

menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

});


// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll("#navLinks a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");

    });

});


// =========================================
// STICKY HEADER AND BACK TO TOP
// =========================================

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.classList.add("scrolled");
        backToTop.classList.add("show");

    } else {

        header.classList.remove("scrolled");
        backToTop.classList.remove("show");

    }

});


// =========================================
// BACK TO TOP BUTTON
// =========================================

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =========================================
// SCROLL REVEAL ANIMATION
// =========================================

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});

revealElements.forEach(element => {

    observer.observe(element);

});


// =========================================
// ACTIVE NAVIGATION LINK
// =========================================

const sections = document.querySelectorAll("main section[id]");

const sectionObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const currentId = entry.target.id;

            navItems.forEach(link => {

                link.classList.toggle(
                    "active",
                    link.getAttribute("href") === "#" + currentId
                );

            });

        }

    });

}, {
    rootMargin: "-35% 0px -55% 0px"
});

sections.forEach(section => {

    sectionObserver.observe(section);

});


// =========================================
// AUTOMATIC FOOTER YEAR
// =========================================

document.getElementById("year").textContent =
    new Date().getFullYear();


// =========================================
// CLOSE MENU WHEN CLICKING OUTSIDE
// =========================================

document.addEventListener("click", event => {

    const clickedInsideMenu = navLinks.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {

        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");

    }

});
