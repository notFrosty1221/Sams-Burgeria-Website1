const accordions = document.querySelectorAll(".accordion");

accordions.forEach(button => {
    button.addEventListener("click", () => {

        const panel = button.nextElementSibling;

        if(panel.style.display === "block"){
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }

    });
});

if(document.getElementById("map")){

    var map = L.map("map").setView([-33.9249, 18.4241], 13);

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution: "&copy; OpenStreetMap contributors"
        }
    ).addTo(map);

    L.marker([-33.9249, 18.4241])
    .addTo(map)
    .blindPopup("Sams Burgeria");
}

const galleryImages =
document.querySelectorAll(".gallery-image");

const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightbox-img");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {
        
        lightbox.style.display = "block";

        lightboxImg.src = image.src;
    
    });
});

lightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});

/* Advance DOM manipulation button */

const specialButton =
document.getElementById("specialButton");

if(specialButton){

    specialButton.addEventListener("click", () => {
        
        document.getElementById("specialText").textContent =
        "Special: Buy 1 Get 1 Free";
    });
}

/* Product array dynamic content for question 2.2 */

const products = [
    "Sams Classic Beef Burger",
    "BBQ Bacon Burger",
    "Double Smashed Spicy Burger",
    "Sams Crispy Chicken Burger",
    "Spicy Chicken Burger",
    "Double Cheese Chicken Burger",
    "Veggie Delight",
    "Veggie Vurger",
    "Mushroom Burger"
];

/* Function to display products */

function displayProducts(items) {
    const productList = document.getElementById("productList");

    productList.innerHTML = "";

    items.forEach(product => {

        const div = document.createElement("div");

        div.classList.add("product");

        div.textContent = product;

        productList.appendChild(div);

    });
}

/* Loadd products automatically */

displayProducts(products);

/* Add search function */

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function() {

    const value = searchInput.value.toLowerCase();

    const filtered = products.filter(product => 
        product.toLowerCase().includes(value)
    );

    displayProducts(Filtered);

});

/* JavaScript form Validation // Enquiry Form validation*/

document.getElementById("enquiryForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.getElementById("enqName").value;
    let burger = document.getElementById("burgerType").value;

    let response = document.getElementById("enqResponse");

    if(name.length < 3) {
        response.textContent = "Name must be at least 3 characters.";
        return;
    }

    response.textContent =
    "Thank you " + name + "! Your " + burger + " enquiry has been received. We will respond with pricing and availability shortly.";
});

/* JavaScript Contact Form Validation */

document.getElementById("contactForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.getElementById("conName").value;
    let type = document.getElementById("messageType").value;

    document.getElementById("conResponse").textContent =
    "Thank you " + name + "! Your " + type + " has been sent successfully.";
});

/* AJAX Form Submission JavaScript */

fetch("https://example.com/api", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: name,
        type: type
    })
})
.then(response => {
    console.log("Message sent");
})
.catch(error => {
    console.log("Error sending message");
});

