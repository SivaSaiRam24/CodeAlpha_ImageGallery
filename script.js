const images = [
{
title:"Forest",
category:"nature",
url:"https://picsum.photos/id/10/600/400",
figcaption:"A serene forest with tall trees and sunlight filtering through the leaves."
},
{
title:"Lake",
category:"nature",
url:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
figcaption:"A tranquil lake surrounded by mountains and forests."
},
{
title:"Mountain",
category:"nature",
url:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
figcaption:"A majestic mountain range with snow-capped peaks."  
},
{
    title: "Waterfall",
    category: "nature",
    url: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800",
    figcaption: "A beautiful waterfall cascading down rocks."
},
{
    title: "Sunset",
    category: "nature",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
    figcaption: "A stunning sunset over a calm sea."
},
{
    title: "River",
    category: "nature",
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
    figcaption: "A peaceful river flowing through a scenic landscape."
},
{
    title: "Green Hills",
    category: "nature",
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
    figcaption: "Rolling green hills covered in lush vegetation."
},
{
title:"Airport Departure",
category:"travel",
url:"https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800"
},
{
title:"Road Trip",
category:"travel",
url:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800"
},
{
title:"Beach Travel",
category:"travel",
url:"https://picsum.photos/id/100/600/400"
},
{
    title: "Airplane",
    category: "travel",
    url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800"
},
{
    title: "Mountain Journey",
    category: "travel",
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800"
},
{
    title: "Beach Vacation",
    category: "travel",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800"
},
{
    title: "Subway Platform",
    category: "travel",
    url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800"
},
{
title:"City Lights",
category:"city",
url:"https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800"
},
{
title:"SkyScraper",
category:"city",
url:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800"
},
{
    title: "Downtown Street",
    category: "city",
    url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800"
},
{
    title: "Urban Skyline",
    category: "city",
    url: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800"
},
{
    title: "Night City",
    category: "city",
    url: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800"
},
{
    title: "Modern Buildings",
    category: "city",
    url: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800"
},
{
    title: "Busy Avenue",
    category: "city",
    url: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800"
},
{
    title: "Smiling Woman",
    category: "people",
    url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800"
},
{
    title: "Portrait Man",
    category: "people",
    url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800"
},
{
    title: "Friends Together",
    category: "people",
    url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800"
},
{
    title: "Happy Family",
    category: "people",
    url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800"
},
{
    title: "Creative Artist",
    category: "people",
    url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800"
},
{
    title: "Traveler",
    category: "people",
    url: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=800"
},
{
title:"Portrait",
category:"people",
url:"https://picsum.photos/id/80/600/400"
},
{
title:"Friends",
category:"people",
url:"https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800"
},
{
title:"Abstract Art",
category:"abstract",
url:"https://picsum.photos/id/70/600/400"
},
{
title:"Fabric Detail",
category:"abstract",
url:"https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800"
},
{
    title: "Color Splash",
    category: "abstract",
    url: "https://picsum.photos/id/96/600/400"
},
{
    title: "Creative Shapes",
    category: "abstract",
    url: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?w=800"
},
{
    title: "Modern Design",
    category: "abstract",
    url: "https://picsum.photos/id/175/600/400"
},
{
    title: "Artistic Pattern",
    category: "abstract",
    url: "https://picsum.photos/id/201/600/400"
},
{
    title: "Abstract Texture",
    category: "abstract",
    url: "https://picsum.photos/id/225/600/400"
},
{
    title: "Digital Abstract",
    category: "abstract",
    url: "https://picsum.photos/id/257/600/400"
}
];

const gallery = document.getElementById("gallery");
const searchBox = document.getElementById("searchBox");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const caption = document.getElementById("caption");

let currentImages = [...images];
let currentIndex = 0;

function renderGallery(data){
    gallery.innerHTML = "";

    data.forEach((img,index)=>{
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${img.url}" alt="">
            <div class="overlay">${img.title}</div>
        `;

        card.addEventListener("click",()=>{
            openLightbox(index,data);
        });

        gallery.appendChild(card);
    });
}

function openLightbox(index,data){
    currentImages = data;
    currentIndex = index;

    lightboxImg.src = currentImages[index].url;
    caption.textContent = currentImages[index].title;

    lightbox.classList.add("active");
}

function showImage(index){
    if(index < 0){
        currentIndex = currentImages.length - 1;
    }
    else if(index >= currentImages.length){
        currentIndex = 0;
    }
    else{
        currentIndex = index;
    }

    lightboxImg.src = currentImages[currentIndex].url;
    caption.textContent = currentImages[currentIndex].title;
}

document.querySelector(".close").onclick = ()=>{
    lightbox.classList.remove("active");
};

document.querySelector(".next").onclick = ()=>{
    showImage(currentIndex + 1);
};

document.querySelector(".prev").onclick = ()=>{
    showImage(currentIndex - 1);
};

document.addEventListener("keydown",(e)=>{
    if(!lightbox.classList.contains("active")) return;

    if(e.key==="Escape"){
        lightbox.classList.remove("active");
    }

    if(e.key==="ArrowRight"){
        showImage(currentIndex+1);
    }

    if(e.key==="ArrowLeft"){
        showImage(currentIndex-1);
    }
});

document.querySelectorAll(".filter").forEach(btn=>{
    btn.addEventListener("click",()=>{

        document.querySelector(".active").classList.remove("active");
        btn.classList.add("active");

        const category = btn.dataset.category;

        if(category==="all"){
            renderGallery(images);
            return;
        }

        const filtered = images.filter(
            img => img.category === category
        );

        renderGallery(filtered);
    });
});

searchBox.addEventListener("input",()=>{

    const value = searchBox.value.toLowerCase();

    const filtered = images.filter(img =>
        img.title.toLowerCase().includes(value)
    );

    renderGallery(filtered);
});

renderGallery(images);
