// Making a slider
const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const products = [
  {
    // Before the operator ":" is the variable's name so you can assign it directly
    id: 1,
    title: "Fender American 52' Telecaster",
    price: 1500,
    available: "In Stock",
    img: "./img/guitar-music-city-cairns-6.png",
  },
  {
    id: 2,
    title: "Akai Professional MPK Mini",
    price: 200, 
    available: "Out Of Stock",
    img: "./img/keyboard.png",
  },
  {
    id: 3,
    title: "Organic Drum",
    price: 2000, 
    available: "In Stock",
    img: "./img/percussion_resized.png",

  },
  {
    id: 4,
    title: "BOSS Guitar Pedalboard",
    price: 500, 
    available: "Out Of Stock",
    img:"./img/accessories.png",
  },
];
let chosenproduct = products[0];
const currentproductImg = document.querySelector(".productImg");
const currentproductTitle = document.querySelector(".productTitle");
const currentproductCondition = document.querySelector(".productCondition");
const currentproductPrice = document.querySelector(".productPrice");
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    //change the chosen product
    chosenproduct = products[index];
    // change the text of current product
    currentproductTitle.textContent = chosenproduct.title;
    currentproductCondition.textContent = chosenproduct.available;
    currentproductPrice.textContent= "$" + chosenproduct.price;
    currentproductImg.src = chosenproduct.img;
  });
});



const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",() => {
        payment.style.display="flex";
})

close.addEventListener("click",() => {
  payment.style.display="none";

})


