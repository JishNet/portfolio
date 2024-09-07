

let container = document.querySelector("#image");
let Next = document.querySelector("#Next");
let pre = document.querySelector("#pre");
let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");

let images = [
    "image/wed12.jpeg",
    "image/wed10.jpeg",
    "image/wed3.jpeg",
    "image/wed4.jpeg",
    "image/wed8.jpeg",
    "image/wed6.jpeg",
];

let count = 0;

function updateImage() {
    container.classList.add('fade-out');

    setTimeout(() => {
        container.src = images[count];
        img1.src = images[count + 1] || images[0];
        img2.src = images[count + 2] || images[1] || images[0];

        container.classList.remove('fade-out');
    }, 500);
}

pre.addEventListener('click', () => {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    updateImage();
});

Next.addEventListener('click', () => {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    updateImage();
});

updateImage();

const boxes = document.querySelectorAll('.box');
const scrollContainer = document.querySelector('.scroll_container');

function checkVisibility() {
    const triggerBottom = scrollContainer.clientHeight / 5 * 4;

    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top - scrollContainer.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}

scrollContainer.addEventListener('scroll', checkVisibility);
checkVisibility();


window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadMoreImages();
    }
});

function loadMoreImages() {
    const gallery = document.querySelector('.gallery');
    for (let i = 0; i < 10; i++) {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `<img src="image/wed${Math.floor(Math.random() * 10) + 1}.jpeg" alt="New Image">`;
        gallery.appendChild(item);
    }
}


function toggleMenu() {
    const humberbar = document.getElementById('humberbar');
    const xmark = document.getElementById('xmark');
    const humberLink = document.querySelector('.humber_link');

    if (humberLink.style.display === 'block') {
        humberLink.style.display = 'none';
        xmark.style.display = 'none';
        humberbar.style.display = 'block';
    } else {
        humberLink.style.display = 'block';
        xmark.style.display = 'block';
        humberbar.style.display = 'none';
    }
}



let body = document.querySelector("body");
let love = document.querySelector("#switch");
let links = document.querySelectorAll("a")
let header = document.querySelector(".header")
let para = document.querySelectorAll(".contact-item p")
let paraicon = document.querySelectorAll(".contact-item i")
let con =document.querySelector("h2")

let section = document.querySelector("section")

love.addEventListener("click", () => {
    if (love.checked) {
        body.style.backgroundColor = "#212121";
        body.style.color = "#e8e8e8";
        section.style.backgroundColor = "#212121";

        for (let i = 0; i < 5; i++) {
            links[i].style.color = "#e8e8e8";

        }
        para.forEach(p => {
            p.style.color = "#e8e8e8"

        })
        paraicon.forEach(i => {
            i.style.color = "#e8e8e8"

        })
        header.style.color = "#e8e8e8"
        con.style.color ="#e8e8e8"
    }

    else {
        body.style.backgroundColor = "#e8e8e8";
        body.style.color = "#212121"
        section.style.backgroundColor = "#e8e8e8"

        for (let i = 0; i < 5; i++) {
            links[i].style.color = "#212121";

        }
        para.forEach(p => {
            p.style.color = "#212121";

        })
        paraicon.forEach(i => {
            i.style.color = "#212121";

        })
        header.style.color = "#212121";
        con.style.color ="#212121";



    }
});



