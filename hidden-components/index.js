console.log("test")

const elems = document.querySelectorAll('button');
elems.forEach((el) => {
    el.addEventListener("click", (e) => {
        el.dataset.visible = "true";
        console.log("test")
    })
})