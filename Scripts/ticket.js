const allSeatBtn = document.querySelectorAll('.btn')
let count = 0;
let leftSeat = 40;
let perTicket=0;
for (const btn of allSeatBtn) {
    btn.addEventListener("click", function (event) {
        count++;
        leftSeat--;
        setValueById('seat-count', count);
        setValueById('seat-left', leftSeat);
        const btnId = btn.innerText;
        const bgColorChange = document.getElementById(btnId);
        bgColorChange.classList.add('bg-[#1DD100]')
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
        perTicket=perTicket+550;
        setValueById('total-ticket-price',perTicket)
    })
}

// Reusable Function-------------->
function setValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}