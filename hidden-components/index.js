console.log("test")

const elems = document.querySelectorAll('button');
elems.forEach((el, index) => {
    el.addEventListener("click", (e) => {
        el.dataset.visible = "true";
        console.log("test")
    })
})
// need to change to select the hidden div and change data attribute using index