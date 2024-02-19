const allSeatBtn = document.querySelectorAll('.seat')
let count = 0;
let leftSeat = 40;
let totalPrice=0;
let grandTotal=0;
for (const btn of allSeatBtn) {
    btn.addEventListener("click", function (event) {
        if(!btn.classList.contains("clicked")){
            if(count<4){
                //count seat
                count++;
                leftSeat--;
                setValueById('seat-count', count);
                setValueById('seat-left', leftSeat);
                btn.classList.add("clicked")
                 //change clicked btn
                const btnId = btn.innerText;
                const bgColorChange = document.getElementById(btnId);
                bgColorChange.classList.add('bg-[#1DD100]');
                //appen seat on price section
                const seat=btn.innerText;
                const priceList = document.getElementById('price-list');
                let listElement = document.createElement("div");
                let p = document.createElement("p");
                p.innerText = seat;
                let p2 = document.createElement("p");
                p2.innerText = "Economoy";
                let p3 = document.createElement("p");
                p3.innerText = 550;
                priceList.appendChild(listElement).classList.add('flex','justify-between');
                listElement.append(p,p2,p3);
                //total price and grand price
                totalPrice=totalPrice+550;
                setValueById('ticket-total-price',totalPrice);
                setValueById('ticket-grand-price',totalPrice);


            }
        }

    })
}
function applyCoupon(){
    const couponCode = document.getElementById("coupon-input").value;
    let discount=0;
    if(couponCode === "NEW15"){
        discount=15;
        document.getElementById('coupon-input-field').classList.add('hidden')
    }
    else if(couponCode ==="Couple 20"){
        discount=20;
        document.getElementById('coupon-input-field').classList.add('hidden')

    }
    const discountAmount =(totalPrice*discount)/100;
    grandTotal=totalPrice-discountAmount;
    setValueById('ticket-grand-price',grandTotal)
}
function popUp(){
    showElemntById('pop-up');
    removeElementById('header-section');
    removeElementById('main-section');
}
function backPage(){
    showElemntById('header-section');
    showElemntById('main-section');
    removeElementById('pop-up');
    window.location.reload();

}
document.getElementById("pop-up-btn").addEventListener("click", function(){
    document.getElementById("pop-up").showModal();
})


// Reusable Function-------------->
function setValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}
function showElemntById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('hidden')
}
function removeElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('hidden')
}