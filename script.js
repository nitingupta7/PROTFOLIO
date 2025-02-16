document.addEventListener("DOMContentLoaded", function () {
    const nameSpan = document.getElementById("name-span");
    const darkModeToggle = document.getElementById("darkModeToggle");
    const darkModeToggleDesktop = document.getElementById("darkModeToggleDesktop");
    const generateQuoteBtn = document.getElementById("generateQuote");
    const quoteDisplay = document.getElementById("quoteDisplay");
    const contactForm = document.querySelector(".contact-form");
    const menuToggle = document.getElementById("menuToggle");
    const nav = document.querySelector("nav");

    // Mobile Menu Toggle
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
        menuToggle.innerHTML = nav.classList.contains("active") 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll(".navlist a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // Typing Effect
    const name = "Nitin Gupta";
    let index = 0;

    function typeEffect() {
        if (index < name.length) {
            nameSpan.textContent += name.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }
    typeEffect();

    // Dark Mode Toggle
    function updateDarkModeIcon(isDark) {
        const icon = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
        darkModeToggle.innerHTML = icon;
        darkModeToggleDesktop.innerHTML = icon;
    }

    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");
        localStorage.setItem("darkMode", isDark);
        updateDarkModeIcon(isDark);
    }

    darkModeToggle.addEventListener("click", toggleDarkMode);
    darkModeToggleDesktop.addEventListener("click", toggleDarkMode);

    // Check for saved dark mode preference
    if (localStorage.getItem("darkMode") === "true") {
        toggleDarkMode();
    }

    // Random Quote Generator
    const quotes = [
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "Believe you can and you're halfway there.",
        "Don't watch the clock; do what it does. Keep going.",
        "Hardships often prepare ordinary people for an extraordinary destiny."
    ];

    generateQuoteBtn.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteDisplay.style.opacity = "0";
        setTimeout(() => {
            quoteDisplay.textContent = quotes[randomIndex];
            quoteDisplay.style.opacity = "1";
        }, 300);
    });

    // Form Validation
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        let name = document.querySelector("#name").value.trim();
        let email = document.querySelector("#email").value.trim();
        let message = document.querySelector("#message").value.trim();
        let errorMessage = "";

        if (name === "") errorMessage += "Name cannot be empty. ";
        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errorMessage += "Invalid email format. ";
        if (message === "") errorMessage += "Message cannot be empty. ";

        if (errorMessage) {
            alert(errorMessage);
        } else {
            alert("Form submitted successfully!");
            contactForm.reset();
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Animate skill bars on scroll
    function animateSkills() {
        const skills = document.querySelectorAll('.progress');
        skills.forEach(skill => {
            const skillTop = skill.getBoundingClientRect().top;
            const skillBottom = skill.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;

            if (skillTop < windowHeight && skillBottom > 0) {
                skill.style.width = skill.getAttribute('style').split(':')[1];
            }
        });
    }

    window.addEventListener('scroll', animateSkills);
    animateSkills(); // Initial check on page load
});
