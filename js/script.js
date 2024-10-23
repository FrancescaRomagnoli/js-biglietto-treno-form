// # data

const pricePerKm = 0.21;
const userDistanceInput = document.getElementById("distance");
const userAgeRangeInput = document.getElementById("age-range");

const submitButton = document.getElementById("submit-btn");
const cancelButton = document.getElementById("cancel-btn");

const ticketForm = document.getElementById("ticket-info-form");

// console.log(userDistanceInput.value);
// console.log(userAgeRangeInput.value);
// console.log(submitButton.value);
// console.log(cancelButton.value);
// console.log(ticketForm.value);

// # discounts
const minorDiscount = 20;
const seniorDiscount = 40;

// # submission

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  // # user input data
  let userDistance = parseInt(userDistanceInput.value);
  let userAgeRange = userAgeRangeInput.value;
  let discountPrice = 0;
  let ticketPrice = userDistance * pricePerKm;

  // # validation
  isUserDistanceValid = userDistanceInput.value > 0;

  if (isUserDistanceValid) {
    // # discount calc
    if (userAgeRangeInput.value === "minor") {
      discountPrice = (ticketPrice * minorDiscount) / 100;
    } else if (userAgeRangeInput.value === "senior") {
      discountPrice = (ticketPrice * seniorDiscount) / 100;
    }

    console.log(
      "userDistance :",
      typeof userDistance,
      userDistance,
      "userAgeRange :",
      typeof userAgeRange,
      userAgeRange
    );

    // # final price calc

    let finalPrice = ticketPrice - discountPrice;
    console.log(ticketPrice, finalPrice.toFixed(2));

    // # output

    const outputTicket = document.getElementById("ticket-container");

    const htmlTicket = `
        <h2>Il tuo biglietto</h2>
        <div>
          <h3>Dettaglio passeggeri</h3>
          <div>
            <h4>Nome passeggero</h4>
            <p id="passenger-name">
            </p>
          </div>
          <div>
            <h4>Offerta</h4>
            <p></p>
            <h4>Carrozza</h4>
            <p>5</p>
            <h4>Codice CP</h4>
            <p>92911</p>
            <h4>Costo bigllietto</h4>
            <p>${finalPrice.toFixed(2)}</p>
          </div>
        </div>`;

    outputTicket.innerHTML = htmlTicket;
  } else {
    console.log("invalid data");
  }
});
