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


const boxes = document.getElementsByClassName('drop');

for (const box of boxes) {
    box.addEventListener('click', function handleClick() {
        box.classList.toggle('active');
    });
}