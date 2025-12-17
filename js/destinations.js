// Place Destinations Javascript 
import { placesDestinations } from "./data.js";

// UI References
const pageGrid = document.getElementById("listDestinationGrid");
const pagination = document.getElementById("pagination");

const searchInput = document.getElementById("searchInput");
const filterCountry = document.getElementById("filterCountry");
const filterCategory = document.getElementById("filterCategory");
const sortSelect = document.getElementById("sortSelect");

const modal = document.getElementById("detailsModal");
const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalCountry = document.getElementById("modalCountry");
const modalCategory = document.getElementById("modalCategory");
const modalPrice = document.getElementById("modalPrice");
const modalDescription = document.getElementById("modalDescription");
const closeModal = document.getElementById("closeModal");

// State
let filtered = [...placesDestinations];
let currentPage = 1;
const perPage = 8;

//Popluate Filter Options
function loadFilterOptions() {
    const countries = [...new Set(placesDestinations.map(d => d.country))];
    const categories = [...new Set(placesDestinations.map(d => d.category))];
    
    countries.forEach(c => { 
        filterCountry.innerHTML += `<option value="${c}">${c}</option>`;
    });
    categories.forEach(cat => { 
        filterCategory.innerHTML += `<option value="${cat}">${cat}</option>`;
    });
}

// Render Destinations
function renderplacesDestinations() {
    const start = (currentPage - 1) * perPage;
    const end = start + perPage;
    const current = filtered.slice(start, end);

    pageGrid.innerHTML = current.map(d => `
        <div class="bg-white rounded-xl overflow-hidden radius-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-4 space-y-2">
        <img src="${d.image}" class="h-48 w-full object-cover">
        <div class="p-4 space-y-2">
            <h3 class="text-lg font-bold text-gray-900">${d.name}</h3>
            <p class="text-gray-600 text-sm">${d.country}</p>
            <p class="text-gray-500 text-sm">Category: ${d.category}</p>
            <p class="text-amber-600 font-semibold text-base mt-2> $${d.price}</p>
            <button class="mt-3 w-full bg-teal-700 text-white font-semibold py-2 rounded-lg border" onClick="viewDetails(${d.id})">View Details</button>
        </div>
        </div>
    `).join("");
    renderPagination();
}

// Render Pagination
function renderPagination() {
    const total = Math.ceil(filtered.length / perPage);
    pagination.innerHTML = "";
    for (let i = 1; i <= total; i++) {
        pagination.innerHTML += `
            <button class="px-4 py-2 border rounded ${ i === currentPage ? "bg-teal-600 text-white" : "bg-white text-gray-700 border hover:bg-teal-100"}" onClick="goToPage(${i})">${i}</button>
        `;
    }
};

window.goToPage = function(page) {
    currentPage = page;
    renderplacesDestinations();
};

//Search + Filter + Sort
function applyFilters() {
    const search = searchInput.value.toLowerCase();
    const country = filterCountry.value;
    const category = filterCategory.value;
    const sort = sortSelect.value;

    filtered = placesDestinations.filter(d => {
        const matchName = d.name.toLowerCase().includes(search);
        const matchCountry = country ? d.country === country : true;
        const matchCategory = category ? d.category === category : true;
        return matchName && matchCountry && matchCategory;
    });

    //Sorting
    if (sort === "name") {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "priceLow") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "priceHigh") {
        filtered.sort((a, b) => b.price - a.price);
    }

    currentPage = 1;
    renderplacesDestinations();
}

searchInput.addEventListener("input", applyFilters);
filterCountry.addEventListener("change", applyFilters);
filterCategory.addEventListener("change", applyFilters);
sortSelect.addEventListener("change", applyFilters);
modal.classList.remove("hidden");
modal.classList.add("flex");



// View Details Of the Modal
window.viewDetails = function(id) {
    const item = placesDestinations.find(d => d.id === id); 

    modalImage.src = item.image;
    modalName.textContent = item.name;
    modalCountry.textContent = "Country: " + item.country;
    modalCategory.textContent = "Category: " + item.category;
    modalPrice.textContent = "Price: $" + item.price;
    modalDescription.textContent = item.description;
    modal.classList.remove("hidden");
    modal.classList.add("flex");
};

closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");

});


loadFilterOptions();
renderplacesDestinations();