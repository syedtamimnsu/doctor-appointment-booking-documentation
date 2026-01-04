// =============================
// WhatsApp floating button (optional)
// =============================
const whatsappBtn = document.querySelector(".whatsapp-float");

if (whatsappBtn) {
  whatsappBtn.addEventListener("click", () => {
    // Change to your own number
    const phoneNumber = "13472389284";
    const message =
      "Hello! I need help with the Doctor Appointment System project documentation.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  });
}

// =============================
// Smooth scrolling for section links
// (same pattern as your previous documentation)
// =============================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const targetId = anchor.getAttribute("href");
    if (!targetId || targetId === "#" || targetId === "#top") return;

    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    e.preventDefault();
    window.scrollTo({
      top: targetElement.offsetTop - 80,
      behavior: "smooth",
    });
  });
});
// same behavior you used before :contentReference[oaicite:5]{index=5}


// =============================
// Number counters (hero + stats)
// (same idea as your previous file)
// =============================
function animateNumbers(selector) {
  const nodes = document.querySelectorAll(selector);

  nodes.forEach((node) => {
    const originalText = node.textContent.trim();
    const hasPlus = originalText.includes("+");
    const hasPercent = originalText.includes("%");
    const numeric = parseInt(originalText.replace(/[^\d]/g, ""), 10);
    if (isNaN(numeric)) return;

    let current = 0;
    const target = numeric;
    const steps = 30;
    const increment = target / steps;

    const timer = setInterval(() => {
      current += increment;

      if (current >= target) {
        current = target;
        clearInterval(timer);
      }

      let suffix = "";
      if (hasPercent) suffix += "%";
      if (hasPlus) suffix += "+";
      node.textContent = Math.floor(current) + suffix;
    }, 45);
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      if (entry.target.classList.contains("hero")) {
        animateNumbers(".hero-stat .number");
      } else if (entry.target.classList.contains("stats-container")) {
        animateNumbers(".stat-number");
      }

      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.45 }
);

const heroSection = document.querySelector(".hero");
if (heroSection) observer.observe(heroSection);

const statsSection = document.querySelector(".stats-container");
if (statsSection) observer.observe(statsSection);
// same approach as your previous script :contentReference[oaicite:6]{index=6}


// =============================
// Support modal (same behavior style as before)
// =============================
const supportModal = document.getElementById("supportModal");
const openSupportFormBtn = document.getElementById("openSupportFormBtn");
const closeSupportModalBtn = document.getElementById("closeSupportModalBtn");
const cancelSupportFormBtn = document.getElementById("cancelSupportFormBtn");
const supportContactForm = document.getElementById("supportContactForm");

function openSupportModal() {
  if (!supportModal) return;
  supportModal.classList.add("active");
  const input = document.getElementById("supportEmail");
  if (input) setTimeout(() => input.focus(), 180);
}

function closeSupportModal() {
  if (!supportModal) return;
  supportModal.classList.remove("active");
  if (supportContactForm) supportContactForm.reset();
}

if (openSupportFormBtn) {
  openSupportFormBtn.addEventListener("click", (e) => {
    e.preventDefault();
    openSupportModal();
  });
}

if (closeSupportModalBtn) {
  closeSupportModalBtn.addEventListener("click", closeSupportModal);
}

if (cancelSupportFormBtn) {
  cancelSupportFormBtn.addEventListener("click", closeSupportModal);
}

if (supportModal) {
  supportModal.addEventListener("click", (e) => {
    if (e.target === supportModal) closeSupportModal();
  });
}

// Submit handler → open Gmail compose pre-filled
if (supportContactForm) {
  supportContactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailInput = document.getElementById("supportEmail");
    const msgInput = document.getElementById("supportMessage");

    const fromEmail = emailInput ? emailInput.value.trim() : "";
    const message = msgInput ? msgInput.value.trim() : "";

    if (!fromEmail || !message) {
      alert("Please enter your email and message before sending.");
      return;
    }

    const to = "syedtamim167@gmail.com"; // change if needed
    const subject = `Doctor Appointment System – Support Request from ${fromEmail}`;
    const body =
      `Support request from: ${fromEmail}\n\n` +
      `Message:\n${message}\n\n` +
      `---\nSent from Doctor Appointment System Documentation`;

    const gmailURL =
      "https://mail.google.com/mail/?view=cm&fs=1" +
      `&to=${encodeURIComponent(to)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.open(gmailURL, "_blank");
    closeSupportModal();
  });
}
// This matches the same support form behavior you used previously :contentReference[oaicite:7]{index=7}
