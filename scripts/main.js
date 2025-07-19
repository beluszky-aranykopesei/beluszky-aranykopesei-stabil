  window.onload = function() {
    document.getElementById("beluszky-popup").style.display = "block";

    // Opció: automatikus eltűnés 10 másodperc után
    setTimeout(function() {
      document.getElementById("beluszky-popup").style.display = "none";
    }, 10000);
  };
