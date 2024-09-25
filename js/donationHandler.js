// donationHandler.js

import { showSuccessModal } from "./modalHandler.js";
import { recordDonationHistory } from "./historyHandler.js";

function isValidDonationInput(input) {
  const validInputPattern = /^[1-9]\d*(\.\d+)?$/;
  return validInputPattern.test(input);
}

// Function to handle the donation process
function processDonation(
  cardInputId,
  cardBalanceId,
  cardButtonId,
  cardTitleId,
  mainBalanceId,
  historyPageId
) {
  const cardInputElement = document.getElementById(cardInputId);
  const cardBalanceElement = document.getElementById(cardBalanceId);
  const cardButtonElement = document.getElementById(cardButtonId);
  const cardTitleElement = document.getElementById(cardTitleId);
  const mainBalanceElement = document.getElementById(mainBalanceId);

  cardButtonElement.addEventListener("click", function () {
    const inputAmount = cardInputElement.value.trim();

    // Input Validation
    if (isValidDonationInput(inputAmount)) {
      const donationAmount = parseFloat(inputAmount);
      const mainBalanceText = mainBalanceElement.textContent.replace(
        /[^\d.-]/g,
        ""
      );
      const mainBalance = parseFloat(mainBalanceText);

      // Allowed Range
      if (donationAmount > 0 && donationAmount <= mainBalance) {
        // Updated balances
        const updatedMainBalance = mainBalance - donationAmount;
        const cardBalanceText = cardBalanceElement.textContent.replace(
          /[^\d.-]/g,
          ""
        );
        const currentCardBalance = parseFloat(cardBalanceText);
        const updatedCardBalance = currentCardBalance + donationAmount;

        // Updating DOM elements
        mainBalanceElement.textContent = `${Math.round(
          updatedMainBalance
        )} BDT`;
        cardBalanceElement.textContent = `${Math.round(
          updatedCardBalance
        )} BDT`;

        // Show modal
        showSuccessModal(donationAmount);

        // Record history
        recordDonationHistory(donationAmount, cardTitleElement.textContent);

        // Clear input field
        cardInputElement.value = "";
      } else {
        alert(
          "Sorry! Please enter a valid number from 1 to your current balance limit."
        );
      }
    } else {
      alert("Invalid Number! Please enter a valid Amount. Thank You.");
    }
  });
}

// Initialize the function for the first card donation
processDonation(
  "card-01-input",
  "card-01-balance",
  "card-01-btn",
  "card-01-title",
  "main-balance",
  "history-page"
);
processDonation(
  "card-02-input",
  "card-02-balance",
  "card-02-btn",
  "card-02-title",
  "main-balance",
  "history-page"
);
processDonation(
  "card-03-input",
  "card-03-balance",
  "card-03-btn",
  "card-03-title",
  "main-balance",
  "history-page"
);
