let saturate = document.getElementById("saturate");
let Contrast = document.getElementById("Contrast");
let brightness = document.getElementById("brightness");
let Sepia = document.getElementById("Sepia");
let Grayscale = document.getElementById("Grayscale");
let blur = document.getElementById("blur");
let Huerotate = document.getElementById("Huerotate");

let upload = document.getElementById("upload");
let download = document.getElementById("download");
let img = document.getElementById("img");

let reset = document.querySelector('span');
let imgbox = document.querySelector('.img-box');

let canvase = document.getElementById("canvase");
let ctx = canvase.getContext('2d');

function resetvalue() {
    ctx.filter = 'none';
    saturate.value = '100';
    brightness.value = '100';
    Contrast.value = '100';
    Sepia.value = '0';
    Grayscale.value = '0';
    blur.value = '0';
    Huerotate.value = '0';
}



window.onload = function () {
    download.style.display = "none";
    reset.style.display = "none";
    imgbox.style.display = "none";
}

upload.onchange = function () {
    resetvalue();
    download.style.display = "block";
    reset.style.display = "block";
    imgbox.style.display = "block";
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = function () {
        img.src = file.result;
    }
    img.onload = function () {
        canvase.width = img.width;
        canvase.height = img.height;
        ctx.drawImage(img, 0, 0, canvase.width, canvase.height);
        img.style.display = 'none';
    }
}

let filters = document.querySelectorAll("ul li input");

filters.forEach(filter => {
    filter.addEventListener('input', function () {
        ctx.filter = `
        saturate(${saturate.value}%)
        contrast(${Contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${Sepia.value}%)
        Grayscale(${Grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${Huerotate.value}deg)
        `
        ctx.drawImage(img, 0, 0, canvase.width, canvase.height);
    })
})

download.onclick = function () {
    download.href = canvase.toDataURL();
}