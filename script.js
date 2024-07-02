const Name = document.querySelector("#item-name");
const price = document.querySelector("#item-price");
const btn = document.querySelector(".btn");
const bill = document.querySelector(".bill");
const total = document.querySelector(".total");
const delbtn = document.querySelector(".del")
let priceee = []

const storeName = ()=>{
    let itemName = Name.value;
    let itemPrice = (Number)(price.value);
    console.log(itemName,itemPrice);   
    const innerSpan = document.createElement("span");
    bill.appendChild(innerSpan);
    innerSpan.innerHTML = `${itemName} : Rs.${itemPrice}`;
    
    priceee.push(itemPrice);
   let totalprice =  addition(priceee);
    console.log( addition(priceee));
   total.innerHTML = `Total = Rs. ${totalprice}`;
   Name.value="";
   price.value="";

}

const addition = (priceee) =>{
    let totalAmount = priceee.reduce((acc,crr)=>acc+crr,0);
    return totalAmount;
}

btn.addEventListener("click",storeName);

const erase = ()=>{
    while(bill.firstChild){
        bill.removeChild(bill.firstChild);
        total.innerHTML="Total=Rs.";
    }
}

delbtn.addEventListener("click",erase);

