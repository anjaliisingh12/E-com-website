// ================= NAVBAR =================

let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");
let bar = document.getElementById("bar");

if(icon){
    icon.addEventListener("click", ()=>{
        ul.classList.toggle("showData");

        if(bar){
            if(ul.classList.contains("showData")){
                bar.className = "fa-solid fa-xmark";
            } else {
                bar.className = "fa-solid fa-bars";
            }
        }
    });
}


// ================= CARD CLICK =================

let cards = document.querySelectorAll(".crd");
let itemPage = document.querySelector(".itemPage");
let container = document.querySelector(".container");
let itemImg = document.getElementById("itemImg");

cards.forEach(card=>{
    card.addEventListener("click", ()=>{
        if(itemPage && container && itemImg){
            itemPage.style.display = "flex";
            container.style.display = "none";
            itemImg.src = card.querySelector("img").src;
        }
    });
});


// ================= BACK BUTTON =================

let backBtn = document.getElementById("backBtn");

if(backBtn){
    backBtn.addEventListener("click", (e)=>{
        e.preventDefault();   // 🔥 important
        itemPage.style.display = "none";
        container.style.display = "block";
    });
}


// ================= BUY PAGE =================

let buyBtn = document.getElementById("buyBtn");
let buyPage = document.querySelector(".buyPage");
let cross = document.querySelector(".cross");

if(buyBtn){
    buyBtn.addEventListener("click", function(){
        buyPage.style.display = "block";
    });
}

if(cross){
    cross.addEventListener("click", function(){
        buyPage.style.display = "none";
    });
}
// ================= SUBMIT BUTTON =================

let submitBtn = document.querySelector(".buyText button");

if(submitBtn){
    submitBtn.addEventListener("click", function(){

        let inputs = document.querySelectorAll(".buyText input");
        let name = inputs[0].value.trim();
        let address = inputs[1].value.trim();
        let number = inputs[2].value.trim();

        if(name === "" || address === "" || number === ""){
            alert("Please fill all details");
        } else {
            alert("Order Placed Successfully 🎉");
            document.querySelector(".buyPage").style.display = "none";
        }

    });
}