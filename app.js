// Click on the h1 to change it to red
const pokemonName = document.querySelector("h1")

pokemonName.addEventListener("click", function(){
    pokemonName.style.color = "red"
});

// Creating an array of random images, to exchange out when the image is clicked
const image = document.querySelector("img")

let links = [
    "https://i.imgur.com/J7vfzJU.png", 
    "https://i.imgur.com/ueGCmuu.png",
    "https://i.imgur.com/kBckKQ0.png", 
    "https://i.imgur.com/SLb20ez.png",
    "https://i.imgur.com/LUuu8Nn.png"
]

// Randomly change the image using the links array
image.addEventListener("click", function(){
    // console.log("Image Click heard!")
    let randomImg = Math.floor(Math.random() * links.length);
    image.src = (links[randomImg])
})

// Creating a button function to toggle between light and dark mode
const buttonEl = document.querySelector("button")

const containerEl = document.querySelector(".container")

// containerEl.addEventListener("click", function(){            //button click console log for testing purposes
//     console.log("container click!")              
// })

buttonEl.addEventListener("click", function(){
    // console.log("Button Click heard!")
    containerEl.classList.toggle('lightMode')
    // console.log(document.querySelector(".container"))
})