function convert() {
    const pounds = document.getElementById("pounds").value;
    const grams = pounds * 453.592;
    const kilograms = pounds * 0.453592;
    const ounces = pounds * 16;

    document.getElementById("grams").textContent = `${grams} g`;
    document.getElementById("kilograms").textContent = `${kilograms} kg`;
    document.getElementById("ounces").textContent = `${ounces} oz`;
  }