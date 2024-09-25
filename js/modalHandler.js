// Function to display the success modal
function showSuccessModal(amount) {
  const successModal = document.getElementById("success-modal");
  const closeModalButton = document.getElementById("close-modal");

  // Display success message
  successModal.classList.remove("hidden");

  // Close the modal
  closeModalButton.addEventListener("click", function () {
    successModal.classList.add("hidden");
  });
}

// Exporting the function
export { showSuccessModal };
