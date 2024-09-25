// Function to record donation history
function recordDonationHistory(amount, cardTitle) {
  const historyPageElement = document.getElementById("history-page");
  const currentDate = new Date();
  const formattedDate = currentDate.toString();

  // Creating element
  const historyEntry = document.createElement("div");
  historyEntry.classList.add(
    "my-4",
    "p-4",
    "border",
    "border-gray-300",
    "rounded-lg",
    "bg-white"
  );

  // Setting the inner HTML
  historyEntry.innerHTML = `
        <p class="font-bold p-2">${amount} Taka has been donated for- ${cardTitle}</p>
        <div class="my-2"></div>
        <p class="bg-gray-100 p-2 rounded-lg">Date: ${formattedDate}</p>
    `;

  // Append
  historyPageElement.appendChild(historyEntry);
}

// Exporting the function
export { recordDonationHistory };
