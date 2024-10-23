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

// # calc

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  // # user input data
  let userDistance = parseInt(userDistanceInput.value);
  let userAgeRange = userAgeRangeInput.value;
  let discountPrice = 0;
  let ticketPrice = userDistance * pricePerKm;

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

  // # calc

  let finalPrice = ticketPrice - discountPrice;
  console.log(ticketPrice, finalPrice);
});
