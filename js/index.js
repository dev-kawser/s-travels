let maxSeat = 0
let seatCounter = 1;



const seatButtons = document.getElementsByClassName('seat-btn')
for (const seatButton of seatButtons) {
    seatButton.addEventListener('click', function () {
        seatButton.classList.add('bg-green-500');
        seatButton.classList.add('text-white');
        // maxSeat++;
        // if (maxSeat == 4) {

        // }

        // seat left js
        const seatSLeft = document.getElementById('seat-left');
        const seatLeft = parseInt(seatSLeft.innerText);
        let newSeatLeft = seatLeft - 1;
        seatSLeft.innerText = newSeatLeft;

        // seat left js
        const seatSCount = document.getElementById('seat-count');
        let newSeatCount = seatCounter++;
        seatSCount.innerText = newSeatCount;

        // price section js
        const seatButtonText = seatButton.innerText;
        const priceDiv = document.getElementById('price-div').childNodes[1];
        const newP = document.createElement('p');
        newP.innerText = seatButtonText;
        priceDiv.appendChild(newP);

        const priceDiv1 = document.getElementById('price-div').childNodes[3];
        const newP1 = document.createElement('p');
        newP1.innerText = "Economy";
        priceDiv1.appendChild(newP1);

        const priceDiv2 = document.getElementById('price-div').childNodes[5];
        const newP2 = document.createElement('p');
        newP2.innerText = 550;
        priceDiv2.appendChild(newP2);
    })
}