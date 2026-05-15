// Sticky Navbar

// const navbar = document.getElementById("navbar");

// window.addEventListener("scroll", () => {

//     if (window.scrollY > 100) {

//         navbar.classList.add("sticky");

//     } else {

//         navbar.classList.remove("sticky");
//     }

// });

// thumbnail switching

const mainImage = document.getElementById("mainImage");

const thumbnails =
    document.querySelectorAll(".thumb");

thumbnails.forEach((thumbnail) => {

    thumbnail.addEventListener("click", () => {

        // Remove active class from all
        thumbnails.forEach((thumb) => {
            thumb.classList.remove("active");
        });

        // Add active class to clicked thumb
        thumbnail.classList.add("active");

        // Change main image
        mainImage.src = thumbnail.src;

    });

});

// hover image
mainImage.addEventListener("mousemove", (e) => {

    const rect =
        mainImage.getBoundingClientRect();

    const x =
        ((e.clientX - rect.left) / rect.width) * 100;

    const y =
        ((e.clientY - rect.top) / rect.height) * 100;

    mainImage.style.transformOrigin =
        `${x}% ${y}%`;

});

mainImage.addEventListener("mouseenter", () => {

    mainImage.style.transform = "scale(1.7)";
    mainImage.style.cursor = "zoom-in";

});

mainImage.addEventListener("mouseleave", () => {

    mainImage.style.transform = "scale(1)";
    mainImage.style.cursor = "default";

});


const images = [
    "Homepage pic.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpOEqFnsFdqcTpeuelz6fnOi4WNEEl8PDDQg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMGV4aTBAsGm1-TCApepbB1AcYYLJ305rPaQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJZIE0w4fFZ-pQ4GiyNM48OOzWOiTc1RWCOw&s",
    "https://plus.unsplash.com/premium_photo-1661932816149-291a447e3022?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjdG9yeSUyMHdvcmtlcnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1516216628859-9bccecab13ca?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjdG9yeSUyMHdvcmtlcnxlbnwwfHwwfHx8MA%3D%3D"
];

let currentImage = 0;

const nextBtn =
    document.querySelector(".nextBtn");

const prevBtn =
    document.querySelector(".prevBtn");

nextBtn.addEventListener("click", () => {

    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    mainImage.src =
        images[currentImage];
});

prevBtn.addEventListener("click", () => {

    currentImage--;

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    mainImage.src =
        images[currentImage];
});