
// =====================================
// TEJAS SOLAR SOLUTIONS
// Main JavaScript File
// =====================================

// Business Contact Details
const BUSINESS_PHONE = "919337318540";
const BUSINESS_EMAIL = "utpalkumarsahoo60@gmail.com";

// Mobile Navigation
document.addEventListener("DOMContentLoaded", function () {

    const menu = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    if (menu && nav) {
        menu.addEventListener("click", function () {
            nav.classList.toggle("active");
        });
    }

    // Close menu after clicking a link
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function () {
            nav?.classList.remove("active");
        });
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Update Footer Year
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // Contact Form
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const service = document.getElementById("service").value;
            const message = document.getElementById("message").value.trim();

            if (!name || !phone || !service) {
                alert("Please fill in all required fields.");
                return;
            }

            if (!/^[0-9+\-\s]{10,15}$/.test(phone)) {
                alert("Please enter a valid phone number.");
                return;
            }

            const whatsappMessage =
                `Hello Tejas Solar Solutions!

Name: ${name}
Phone: ${phone}
Service: ${service}
Message: ${message}`;

            const whatsappURL =
                `https://wa.me/${BUSINESS_PHONE}?text=${encodeURIComponent(whatsappMessage)}`;

            window.open(whatsappURL, "_blank");

            contactForm.reset();
        });
    }

});

// WhatsApp Quick Enquiry
function openWhatsApp() {
    const message =
        "Hello Tejas Solar Solutions! I am interested in your solar services. Please share more details.";

    window.open(
        `https://wa.me/${BUSINESS_PHONE}?text=${encodeURIComponent(message)}`,
        "_blank"
    );
}

// Email Enquiry
function sendEmail() {
    window.location.href =
        `mailto:${BUSINESS_EMAIL}?subject=Solar%20Enquiry`;
}
