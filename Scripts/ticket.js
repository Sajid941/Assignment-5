const allSeatBtn = [A1, A2, A3, A4, B1, B2, B3, B4, C1, C2, C3, C4, D1, D2, D3, D4, E1, E2, E3, E4, F1, F2, F3, F4, G1, G2, G3, G4, H1, H2, H3, H4, I1, I2, I3, I4, J1, J2, J3, J4,]
let count = 0;
let leftSeat = 40;
for (const btn of allSeatBtn) {
    btn.addEventListener("click", function (event) {
        count++;
        leftSeat--;
        setValueById('seat-count', count);
        setValueById('seat-left', leftSeat);
        const btnId = btn.innerText;
        const bgColorChange = document.getElementById(btnId);
        bgColorChange.classList.add('bg-[#1DD100]')
        if(count ===5){
                document.getElementById(btnId).disabled=true;
        }
    })
}
const currentSeatElement = document.getElementById('seat-count').innerText;
console.log(cu)
console.log(currentSeat)
// Reusable Function-------------->
function setValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

