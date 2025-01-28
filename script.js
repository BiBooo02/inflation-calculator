function inflationCalculator() {
 // Clear previous results and errors
 const errorMsg = document.querySelector("#errorMsg");
 const resultContainer = document.querySelector("#resultContainer");
 const yearlyBreakdown = document.querySelector("#yearlyBreakdown tbody");
 errorMsg.innerText = "";
 resultContainer.innerHTML = "";
 yearlyBreakdown.innerHTML = "";
 document.querySelector("#yearlyBreakdown").classList.add("hidden");

 // Fetch inputs
 let inflationRate = parseFloat(document.querySelector("#inflationRate").value);
 let money = parseFloat(document.querySelector("#money").value);
 let years = parseInt(document.querySelector("#years").value);

 // Validate inputs
 if (isNaN(inflationRate) || isNaN(money) || isNaN(years) || inflationRate <= 0 || money <= 0 || years <= 0) {
   errorMsg.innerText = "Please enter valid values for all fields.";
   return;
 }

 let worth = money;
 let breakdown = [];

 // Calculate worth and yearly breakdown
 for (let i = 0; i < years; i++) {
   worth += worth * (inflationRate / 100);
   breakdown.push({ year: i + 1, value: worth.toFixed(2) });
 }

 worth = worth.toFixed(2);

 // Display final result
 const finalResult = document.createElement("div");
 finalResult.className = "new-value";
 finalResult.innerText = `Today's ${money}€ will be the same as ${worth}€ in ${years} years.`;
 resultContainer.appendChild(finalResult);

 // Populate yearly breakdown table
 breakdown.forEach((item) => {
   const row = document.createElement("tr");
   row.innerHTML = `<td>${item.year}</td><td>${item.value} €</td>`;
   yearlyBreakdown.appendChild(row);
 });

 // Show the table
 document.querySelector("#yearlyBreakdown").classList.remove("hidden");
}
