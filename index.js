let card_container = document.querySelector(".card_container")
let addBtn = document.querySelector("#add")
let clearAll = document.querySelector("#clearAll")
let card;
let count = 1;
addBtn.addEventListener("click",()=>{
    card = document.createElement("div");
    card.classList.add("card");
    card.textContent = count++;
    card_container.appendChild(card);
    console.log("working")
})
card_container.addEventListener("click",(e)=>{
    if(e.target.id === "main_container"){
    }
    else{
        let target = e.target.remove();
    }
})











// let addBtn = document.querySelector("button")
// let container = document.querySelector(".container");
// let delBtn = document.querySelector('#delete');
// let card = document.querySelector(".card")
// let count = 1;
// let newCard;
// addBtn.addEventListener("click",()=>{
//     newCard = document.createElement("div")
//     newCard.classList.add("card")
//     newCard.textContent = count++;
//     container.appendChild(newCard)
// })
// container.addEventListener("click",(e)=>{
//     container.removeChild(e.target)
//     console.log(e.target.textContent)
// })