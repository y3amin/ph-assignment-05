// Footer
document.getElementById("currentYear").textContent = new Date().getFullYear();

// For special fonts in FAQ
const codeElements = document.getElementsByTagName("code");

for (let i = 0; i < codeElements.length; i++) {
  codeElements[i].style.backgroundColor = "#333";
  codeElements[i].style.color = "#fff";
  codeElements[i].style.padding = "2px 4px";
  codeElements[i].style.borderRadius = "4px";
}

// Function to open new link
function navigateTo(url) {
  window.location.href = url;
}
