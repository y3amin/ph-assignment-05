function showPage(activeButton, inactiveButton, activePage, inactivePage) {
    activePage.style.display = "block";
    inactivePage.style.display = "none";
    activeButton.classList.add("bg-lime-400");
    inactiveButton.classList.remove("bg-lime-400");
    activeButton.classList.remove("bg-transparent", "border-gray-400");
    inactiveButton.classList.add("bg-transparent", "border-gray-400");
  }
  
  const btnDonation = document.getElementById("btn-donation");
  const btnHistory = document.getElementById("btn-history");
  const donationPage = document.getElementById("donation-page");
  const historyPage = document.getElementById("history-page");
  
  // Event listeners
  btnDonation.addEventListener("click", function () {
    showPage(btnDonation, btnHistory, donationPage, historyPage);
  });
  
  btnHistory.addEventListener("click", function () {
    showPage(btnHistory, btnDonation, historyPage, donationPage);
  });
  
  showPage(btnDonation, btnHistory, donationPage, historyPage);
  