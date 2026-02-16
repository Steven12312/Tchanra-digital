// Mobile nav
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu after click on link (mobile)
  navMenu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Contact form -> mailto (simple, no backend)
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name")?.value?.trim() || "";
    const email = document.getElementById("email")?.value?.trim() || "";
    const message = document.getElementById("message")?.value?.trim() || "";

    const subject = encodeURIComponent(`Anfrage Website – ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}\n`
    );

    // TODO: hier deine echte Email setzen
    const to = "info@tchanra-digital.de";
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });
}
