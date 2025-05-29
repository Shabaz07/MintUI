if (document.querySelector(".sidebar")) {
    document.body.classList.add("body")
}
document.querySelector(".btn-close").addEventListener("click", () => {
    document.querySelector(".menu-toggle").checked = false;
})