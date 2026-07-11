// Smooth navbar shadow on scroll
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.background = "rgba(20,35,25,0.90)";
    } else {
        nav.style.background = "rgba(20,35,25,0.55)";
    }
});


// Image Lightbox
const images = document.querySelectorAll(".gallery img");

const lightbox = document.createElement("div");
lightbox.id = "lightbox";

lightbox.style.position = "fixed";
lightbox.style.top = "0";
lightbox.style.left = "0";
lightbox.style.width = "100%";
lightbox.style.height = "100%";
lightbox.style.background = "rgba(0,0,0,.92)";
lightbox.style.display = "none";
lightbox.style.justifyContent = "center";
lightbox.style.alignItems = "center";
lightbox.style.zIndex = "99999";
lightbox.style.cursor = "zoom-out";

const img = document.createElement("img");

img.style.maxWidth = "92%";
img.style.maxHeight = "90%";
img.style.borderRadius = "12px";
img.style.boxShadow = "0 0 30px rgba(0,0,0,.5)";

lightbox.appendChild(img);
document.body.appendChild(lightbox);

images.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.style.display = "flex";
        img.src = image.src;

    });

});

lightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});
