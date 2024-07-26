document.addEventListener("DOMContentLoaded", function() {
    const showPopupButton = document.getElementById("show-popup");
    const popup = document.getElementById("popup");
    const closePopupButton = document.getElementById("close-popup");
  
    showPopupButton.addEventListener("click", function() {
      popup.style.display = "block"; // Show the popup
    });
  
    closePopupButton.addEventListener("click", function() {
      popup.style.display = "none"; // Hide the popup
    });
  });
  