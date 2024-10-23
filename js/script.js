// # data

const pricePerKm = 0.21;
const userDistanceInput = document.getElementById("distance");
const userAgeRangeInput = document.getElementById("age-range");
const userFullNameInput = document.getElementById("user-fullname");

const submitButton = document.getElementById("submit-btn");
const cancelButton = document.getElementById("cancel-btn");

const ticketForm = document.getElementById("ticket-info-form");

let ticketOffer = "Biglietto Standard";

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
  let userFullName = userFullNameInput.value;
  let discountPrice = 0;
  let ticketPrice = userDistance * pricePerKm;

  // # validation
  isUserDistanceValid = userDistanceInput.value > 0;
  isuserFullNameInputValid = userFullNameInput.value.length > 3;

  if (isUserDistanceValid && isuserFullNameInputValid) {
    // # discount calc
    if (userAgeRangeInput.value === "minor") {
      discountPrice = (ticketPrice * minorDiscount) / 100;
      ticketOffer = "Offerta Under 18";
    } else if (userAgeRangeInput.value === "senior") {
      discountPrice = (ticketPrice * seniorDiscount) / 100;
      ticketOffer = "Offerta Over 65";
    }

    console.log(
      "userDistance :",
      typeof userDistance,
      userDistance,
      "userAgeRange :",
      typeof userAgeRange,
      userAgeRange
    );
    console.log(userFullNameInput.value);

    // # final price calc

    let finalPrice = ticketPrice - discountPrice;
    console.log(ticketPrice, finalPrice.toFixed(2));

    // # output

    const outputTicket = document.getElementById("ticket-container");

    const htmlTicket = `
        <h2 class="text-center mb-5 mt-3">Il tuo biglietto</h2>
        <div class="row justify-content-around align-content-center">
          <div class="col-4 bg-info p-3">
            <div class="mb-2 fs-4">Dettaglio passeggeri</div>
            <div>
              <div class="mb-2 fs-5">Nome passeggero</div>
              <div id="passenger-name">${userFullName}</div>
            </div>
          </div>
          <div class="col-6 p-3">
            <div class="row">
              <div class="col">
                <div class="mb-5 fs-5">Offerta</div>
                <div>${ticketOffer}</div>
              </div>
              <div class="col">
                <div class="mb-5 fs-5">Carrozza</div>
                <div>5</div>
              </div>
              <div class="col">
                <div class="mb-5 fs-5">Codice CP</div>
                <div>92911</div>
              </div>
              <div class="col">
                <div class="mb-5 fs-5">Costo biglietto</div>
                <div>${finalPrice.toFixed(2)}</div>
              </div>
            </div>
          </div>
        </div>`;

    outputTicket.innerHTML = htmlTicket;
  } else {
    console.log("invalid data");
  }
});
