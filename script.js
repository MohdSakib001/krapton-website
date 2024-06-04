const navIcon = document.getElementById("nav-icon");
const sidebar = document.getElementById("sidebar");
const cancel = document.getElementById("cancel");

navIcon.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar-active");
});
cancel.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar-active");
});

// API to fetch countries name
const countrySelect = document.getElementById("country");

async function fetchCountries() {
  try {
    const res = await fetch("https://countriesnow.space/api/v0.1/countries");
    const data = await res.json();
    data.data.forEach((element) => {
      const option = document.createElement("option");
      option.value = element.country;
      option.textContent = element.country;
      countrySelect.appendChild(option);
    });
  } catch (err) {
    console.error(err);
  }
}
fetchCountries();

// Scroll buttons
const scrollContainer = document.getElementById("scrollable-content");
const scrollLeftButton = document.getElementById("scroll-left");
const scrollRightButton = document.getElementById("scroll-right");

scrollLeftButton.addEventListener("click", () => {
  scrollContainer.scrollBy({
    left: -350, // Adjust the value to control scroll amount
    behavior: "smooth",
  });
});

scrollRightButton.addEventListener("click", () => {
  scrollContainer.scrollBy({
    left: 350, // Adjust the value to control scroll amount
    behavior: "smooth",
  });
});
