// main.js
// -------------------------
// MOBILE MENU TOGGLE
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// -------------------------
// HOME PAGE LOGIC (index.html)
if (document.getElementById("slideshow")) {
    // HERO SLIDESHOW
    const slideshow = document.getElementById("slideshow");
    const images = [
        "https://res.cloudinary.com/dmnugpagw/image/upload/v1765929991/wcijd1gjvrckg2cdfvgk.jpg",
        "https://res.cloudinary.com/dmnugpagw/image/upload/v1765929975/kq33j4uh9ptq8ehtwtlr.jpg",
        "https://res.cloudinary.com/dmnugpagw/image/upload/v1765929971/dzurea9iwh5kptj2zlfc.jpg",
        "https://res.cloudinary.com/dmnugpagw/image/upload/v1765929983/qhgcc9nnlkegfqkvuq8r.jpg"
    ];
    let slideshowIndex = 0;

    function changeImage() {
        slideshow.style.opacity = 0;
        setTimeout(() => {
            slideshow.style.backgroundImage = `url(${images[slideshowIndex]})`;
            slideshow.style.opacity = 1;
            slideshowIndex = (slideshowIndex + 1) % images.length;
        }, 1000);
    }

    slideshow.style.backgroundImage = `url(${images[slideshowIndex]})`;
    slideshowIndex++;
    setInterval(changeImage, 30000);


    // HOME CARDS (Top Destinations)
    const homeGrid = document.getElementById("destinationGrid");
    if (homeGrid) {
        const homeDestinations = [
            {
                image: "https://res.cloudinary.com/dmnugpagw/image/upload/v1765929952/owdxoihxpogkusr2zonj.jpg",
                name: "The Great Migration",
                country: "Tanzania",
                category: "Safari",
                price: 1200
            },
            {
                image: "https://res.cloudinary.com/dmnugpagw/image/upload/v1765929996/unxnf0cvseokzr5w6vhk.jpg",
                name: "Table Mountain",
                country: "South Africa",
                category: "Adventure",
                price: 1500
            },
            {
                image: "https://res.cloudinary.com/dmnugpagw/image/upload/v1765929967/rah97aezeypxbxggroa1.jpg",
                name: "Nzulezo",
                country: "Ghana",
                category: "Culture",
                price: 1300
            },
            {
                image: "https://res.cloudinary.com/dmnugpagw/image/upload/v1765929948/ahwgbjwj3m01o7fzujfd.jpg",
                name: "Djemaa el Fna",
                country: "Morocco",
                category: "City",
                price: 1100
            }
        ];

        function renderHomeDestinations() {
            homeGrid.innerHTML = homeDestinations.map(dest => `
                <div class="bg-white text-gray-800 rounded-lg shadow-md p-4 md:p-6 gap-6 overflow-hidden transition-transform duration-300 hover:sclae-105 shadow-md rounded-xl">
                    <img src="${dest.image}" alt="${dest.name}" class="w-full h-72 object-cover">
                    <div class="p-4 space-y-2">
                        <h3 class="text-xl font-bold">${dest.name}</h3>
                        <p class="text-gray-600 text-sm">${dest.country}</p>
                        <p class="text-gray-500 text-sm">Category: <span class="font-medium">${dest.category}</span></p>
                        <p class="text-lg font-semibold">From $${dest.price}</p>
                        <a href="booking.html"><button class="mt-3 w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 font-semibold">View Details</button></a>
                        <a href="booking.html"><button class="mt-3 w-full bg-amber-500 text-white font-semibold py-2 rounded-lg hover:bg-amber-600">Book Now</button></a>
                    </div>
                </div>
            `).join("");
        }

        renderHomeDestinations();
    }

    // TESTIMONIALS
    const testimonialSlider = document.getElementById("testimonialSlider");
    if (testimonialSlider) {
        const testimonials = [
            {
                image: "https://res.cloudinary.com/dmnugpagw/image/upload/v1765929975/b1vkp49tto2tu5ra8aqr.jpg",
                name: "John Doe",
                quote: "This travel agency made my vacation unforgettable! Highly recommended."
            },
            {
                image: "https://res.cloudinary.com/dmnugpagw/image/upload/v1765929973/jhy57ke53z0d3kqfxi7z.jpg.jpg",
                name: "Jane Smith",
                quote: "Excellent service and amazing destinations. I will definitely book again!"
            },
            {
                image: "https://res.cloudinary.com/dmnugpagw/image/upload/v1765929978/dr8zdyhv1mp4eezqqoeb.jpg",
                name: "Mike Johnson",
                quote: "A seamless experience from start to finish. Great job!"
            }
        ];

        function renderTestimonials() {
            testimonialSlider.innerHTML = testimonials.map(testimonial => `
                <div class="testimonial-slide p-6 bg-gray-50 rounded-lg shadow-md text-center hover:shadow-lg transition">
                    <img src="${testimonial.image}" alt="${testimonial.name}" class="w-24 h-24 mx-auto rounded-full mb-4 object-cover">
                    <h3 class="text-xl text-gray-900 font-semibold font-bold mb-2">${testimonial.name}</h3>
                    <p class="text-gray-700 italic">"${testimonial.quote}"</p>
                </div>
            `).join("");
        }

        renderTestimonials();
    }
}




