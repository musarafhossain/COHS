const icon = document.querySelector(".icon");
const header = document.querySelector("header");

icon.addEventListener("click", () => {
    header.classList.toggle("expand");
});