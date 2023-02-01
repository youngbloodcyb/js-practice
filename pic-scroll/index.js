const imgs = document.querySelectorAll("img");

imgs.forEach(img => {
    img.addEventListener("mouseover", (e) => {
        e.target.width = 400;
        // e.target.style.transitionTimingFunction = "cubic-bezier(.17,.67,.53,.92)"
    })
    img.addEventListener("mouseout", (e) => {
        e.target.width = 100;
    })
})