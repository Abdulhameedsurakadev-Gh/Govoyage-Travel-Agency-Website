import { placesDestinations } from "./data.js";

const destinationSelect = document.getElementById("destinationSelect");

placesDestinations.forEach(d => {
  const option = document.createElement("option");
  option.value = d.name;
  option.textContent = `${d.name} (${d.country})`;
  destinationSelect.appendChild(option);
});

const tripCards = document.querySelectorAll(".trip-card");
const tripTypeInput = document.getElementById("tripType");

tripCards.forEach(card => {
  card.addEventListener("click", () => {
    tripCards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");
    tripTypeInput.value = card.dataset.type;
  });
});

const form = document.getElementById("bookingForm");
const statusText = document.getElementById("formStatus");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", e => {
  e.preventDefault();

  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";
  statusText.classList.remove("hidden");
  statusText.textContent = "⏳ Sending your request...";

  form.reset();

  setTimeout(() => {
    statusText.textContent =
      "✅ Success! Our travel experts will contact you shortly.";
    submitBtn.textContent = "Request Sent";
  }, 2000);
});




