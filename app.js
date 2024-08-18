const  hamberg =document.querySelector('.hamberg');
const  hambergMenu=document.querySelector('.hamberg-menu');
const close=document.querySelector('.close-btn');

if(hamberg){
    hamberg.addEventListener("click",()=>{
        hambergMenu.classList.add("open");
    });
}
if(close){
    close.addEventListener("click",()=>{
        hambergMenu.classList.remove("open");
    }
    )};

let container_id = document.getElementById("cont");
let text = document.getElementById("chng");

let card_one_fun = () => {
  container_id.style.backgroundImage =
    "url('./images/lighting-3489394_1920.jpg')";
  container_id.style.backgroundPosition = "100%";
  container_id.style.backgroundRepeat = "no-repeat";
  container_id.style.backgroundSize = "cover";
  text.innerHTMl = "Apple";
};

document
  .getElementById("card_one")
  .addEventListener("mouseenter", card_one_fun);

let card_two_fun = () => {
  container_id.style.backgroundImage =
    "url('./images/cellular-4602489_1920.jpg')";
  container_id.style.backgroundPosition = "100%";
  container_id.style.backgroundRepeat = "no-repeat";
  container_id.style.backgroundSize = "cover";
  text.innerHTMl = "vijay";
};

document
  .getElementById("card_two")
  .addEventListener("mouseenter", card_two_fun);
let card_three_fun = () => {
  container_id.style.backgroundImage =
    "url('./images/rendering-smart-home-device.jpg')";
  container_id.style.backgroundPosition = "100%";
  container_id.style.backgroundRepeat = "no-repeat";
  container_id.style.backgroundSize = "cover";
  text.innerHTMl = "vijay";
};

document
  .getElementById("card_three")
  .addEventListener("mouseenter", card_three_fun);
let card_four_fun = () => {
  container_id.style.backgroundImage =
    "url('./images/wireless-earbuds-with-neon-cyberpunk-style-lighting (1).jpg')";
  container_id.style.backgroundPosition = "100%";
  container_id.style.backgroundRepeat = "no-repeat";
  container_id.style.backgroundSize = "cover";
  text.innerHTMl = "vijay";
};

document
  .getElementById("card_four")
  .addEventListener("mouseenter", card_four_fun);
let card_five_fun = () => {
  container_id.style.backgroundImage =
    "url('./images/wireless-earbuds-with-neon-cyberpunk-style-lighting.jpg')";
  container_id.style.backgroundPosition = "100%";
  container_id.style.backgroundRepeat = "no-repeat";
  container_id.style.backgroundSize = "cover";
  text.innerHTMl = "vijay";
};

document
  .getElementById("card_five")
  .addEventListener("mouseenter", card_five_fun);
let card_six_fun = () => {
  container_id.style.backgroundImage = "url('./images/4-2.jpg')";
  container_id.style.backgroundPosition = "100%";
  container_id.style.backgroundRepeat = "no-repeat";
  container_id.style.backgroundSize = "cover";
  text.innerHTMl = "vijay";
};

document
  .getElementById("card_six")
  .addEventListener("mouseenter", card_six_fun);
