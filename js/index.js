let maxSeat = 0
let seatCounter = 1;
let totalPriceVar = 550;
let grandPriceVar = 550;

const seatButtons = document.getElementsByClassName('seat-btn')
for (const seatButton of seatButtons) {
    seatButton.addEventListener('click', function () {
        seatButton.classList.add('bg-green-500');
        seatButton.classList.add('text-white');

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


        // Total price section js
        const totalPrice = document.getElementById('total-price');
        let totalPriceFormate = parseInt(totalPrice.innerText);

        totalPriceFormate = totalPriceFormate + totalPriceVar;
        totalPrice.innerText = totalPriceFormate;

        // Grand price section js
        const grandPrice = document.getElementById('grand-total');
        let grandPriceFormate = parseInt(grandPrice.innerText);

        grandPriceFormate = grandPriceFormate + grandPriceVar;
        grandPrice.innerText = grandPriceFormate;

        // discount section js
        maxSeat++;
        if (maxSeat == 4) {
            document.getElementById('discount-btn').removeAttribute('disabled');
        }

        const discountBtn = document.getElementById('discount-btn')
        discountBtn.addEventListener('click', function () {
            const discountInput = document.getElementById('discount-input').value;

            if (discountInput == 'NEW 15') {
                const discountAmount = totalPriceFormate * 0.15;
                grandPrice.innerText = totalPriceFormate - discountAmount;
                document.getElementById('discount-div').classList.add('hidden');
            }

            else if (discountInput == 'Couple 20') {
                const discountAmount2 = totalPriceFormate * 0.20;
                grandPrice.innerText = totalPriceFormate - discountAmount2;
                document.getElementById('discount-div').classList.add('hidden');
            }
            else {
                alert('Invalid Coupon')
            }

        })


        document.getElementById('next-btn').addEventListener('click', function () {
            location.reload();
        })



    })



    const buyTickets = document.getElementById('buy-tickets');
    const ticketCounter = document.getElementById('ticket-counter');

    buyTickets.addEventListener('click', function () {
        ticketCounter.scrollIntoView({ behavior: 'smooth' });
    });
}