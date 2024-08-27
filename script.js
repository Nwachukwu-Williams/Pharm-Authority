hambuger.addEventListener("click", () => {
    hambuger.classList.toggle("active");
    document.getElementById("pag-nav").classList.toggle("active");
})

CatMenu.addEventListener("click", () => {
    CatMenu.classList.toggle("active");
    document.getElementById("CatList").classList.toggle("active");
})





const intersectionCallback = (entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.classList.add('fadeInUp');
        }
    }
}

const observer = new IntersectionObserver(intersectionCallback);

const items = document.querySelectorAll('.wow');
for (const item of items) {
    observer.observe(item);
}