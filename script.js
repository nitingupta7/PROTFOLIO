document.addEventListener("DOMContentLoaded", function () {
    // Typing Effect
    const introText = "Hi! I'm Nitin Gupta";
    let index = 0;
    function typeEffect() {
        if (index < introText.length) {
            document.querySelector(".intro span").textContent += introText.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }
    typeEffect();

   
    const darkModeBtn = document.createElement("button");
    darkModeBtn.textContent = "Toggle Dark Mode";
    darkModeBtn.style.cssText = "position:fixed;top:10px;right:10px;padding:10px;cursor:pointer;";
    document.body.appendChild(darkModeBtn);
    darkModeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    
    const darkModeStyle = document.createElement("style");
    darkModeStyle.textContent = `
        
    `;
    document.head.appendChild(darkModeStyle);

    const quotes = [
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "Believe you can and you're halfway there.",
        "Don’t watch the clock; do what it does. Keep going.",
        "Hardships often prepare ordinary people for an extraordinary destiny."
    ];
    
    const quoteBtn = document.createElement("button");
    quoteBtn.textContent = "Generate Quote";
    quoteBtn.style.cssText = "display:block;margin:20px auto;padding:10px;cursor:pointer;";
    document.querySelector(".btn-container").appendChild(quoteBtn);
    
    const quoteDisplay = document.createElement("p");
    quoteDisplay.style.cssText = "text-align:center;color:white;margin-top:10px;";
    document.querySelector(".btn-container").appendChild(quoteDisplay);
    
    quoteBtn.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteDisplay.textContent = quotes[randomIndex];
    });

   
    document.querySelector(".contact-form").addEventListener("submit", function (e) {
        e.preventDefault();
        let name = document.querySelector("#name").value.trim();
        let email = document.querySelector("#email").value.trim();
        let errorMessage = "";

        if (name === "") errorMessage += "Name cannot be empty. ";
        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errorMessage += "Invalid email format. ";

        if (errorMessage) {
            alert(errorMessage);
        } else {
            alert("Form submitted successfully!");
        }
    });
});



// toggele
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    // Store user preference in localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
}

// Load dark mode preference on page load
window.onload = function () {
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }
};
