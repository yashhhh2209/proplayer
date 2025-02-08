// Make Shreya move in any random direction
document.getElementById("shreya").addEventListener("mouseenter", function() {
    let x = Math.random() * window.innerWidth;  // Random X position (based on screen width)
    let y = Math.random() * window.innerHeight; // Random Y position (based on screen height)
    this.style.left = x + "px";  // Set random left position in px
    this.style.top = y + "px";   // Set random top position in px
  });
  
  // When "Yash" is clicked, redirect to Yash's page
  document.getElementById("yash").addEventListener("click", function() {
    window.location.href = "yashPage.html";  // Redirect to Yash page
  });
  
  // Clear the message when Shreya is clicked
  document.getElementById("shreya").addEventListener("click", function() {
    document.getElementById("messageBox").innerText = ""; // Clear message here
  });
  