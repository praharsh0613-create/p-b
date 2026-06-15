// ======================
// LOADER
// ======================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

        setTimeout(() => {
            loader.remove();
        }, 500);

    }, 2500);

});

// ======================
// NAVBAR SCROLL EFFECT
// ======================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

// ======================
// REVEAL ANIMATION
// ======================

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }

    });

}, {
    threshold: 0.15
});

reveals.forEach(item => {
    revealObserver.observe(item);
});

// ======================
// COUNTER ANIMATION
// ======================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = +counter.dataset.target;

        let current = 0;

        const increment = target / 100;

        const updateCounter = () => {

            if (current < target) {

                current += increment;

                counter.innerText = Math.ceil(current);

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target + "+";

            }

        };

        updateCounter();

        counterObserver.unobserve(counter);

    });

}, {
    threshold: 0.5
});

counters.forEach(counter => {
    counterObserver.observe(counter);
});

// ======================
// CURSOR GLOW
// ======================

const cursor = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});

// ======================
// MOBILE MENU
// ======================

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

    if (navLinks.style.display === "flex") {

        navLinks.style.display = "none";

    } else {

        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "80px";
        navLinks.style.right = "30px";
        navLinks.style.background = "#111";
        navLinks.style.padding = "20px";
        navLinks.style.borderRadius = "12px";
        navLinks.style.gap = "20px";

    }

});

// ======================
// PARALLAX HERO
// ======================

const heroVideo = document.querySelector(".hero-video");

window.addEventListener("scroll", () => {

    const scroll = window.pageYOffset;

    if (heroVideo) {

        heroVideo.style.transform =
            `translateY(${scroll * 0.25}px)`;

    }

});

// ======================
// SMOOTH LINK CLOSE
// ======================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth < 768) {
            navLinks.style.display = "none";
        }

    });

});

console.log("Pitbox Loaded Successfully");