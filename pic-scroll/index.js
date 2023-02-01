const imgs = document.querySelectorAll("img");

imgs.forEach(img => {
    img.addEventListener("mouseover", (e) => {
        e.target.width = 400;
    })
    img.addEventListener("mouseout", (e) => {
        e.target.width = 100;
    })
})