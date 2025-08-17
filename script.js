
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});


function openReservation() {
  document.getElementById("reservationModal").style.display = "block";
}

function closeReservation() {
  document.getElementById("reservationModal").style.display = "none";
}

// Hidden form submission
document.getElementById("reservationForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("✅ Your table has been reserved successfully!");
  closeReservation();
});
