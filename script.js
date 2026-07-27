// Mobile Navigation

const menuBtn = document.getElementById("menu-btn");

const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("hidden");

});

// Activate Lucide Icons

lucide.createIcons();


// =========================================
// SCROLL REVEAL
// =========================================

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

    reveals.forEach(item => {

        const windowHeight = window.innerHeight;

        const revealTop = item.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// =========================================
// COUNTERS
// =========================================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.dataset.target;

        const current = +counter.innerText;

        const increment = Math.ceil(target / 80);

        if (current < target) {

            counter.innerText = current + increment;

            setTimeout(updateCounter, 20);

        }

        else {

            counter.innerText = target + "+";

        }

    }

    updateCounter();

});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    navbar.classList.toggle("scrolled", window.scrollY > 80);

});

const topBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    topBtn.style.display =

        window.scrollY > 400

            ? "block"

            : "none";

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


// ========================================
// PRELOADER
// ========================================

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        preloader.classList.add("fade-out");

        setTimeout(() => {

            preloader.remove();

        }, 800);

    }, 600);

});