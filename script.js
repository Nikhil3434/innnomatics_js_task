function showSection(id) {
    let sections = document.querySelectorAll('.task-section');
    sections.forEach(section => section.style.display = "none");
    document.getElementById(id).style.display = "block";
}

// ATM Withdrawal
function atmWithdrawal(balance, pin) {
    let enteredPin = parseInt(document.getElementById("atmPin").value);
    let amount = parseInt(document.getElementById("atmAmount").value);
    let result = document.getElementById("atmResult");

    if (enteredPin !== pin) {
        result.textContent = "Incorrect PIN";
    } else if (amount > balance) {
        result.textContent = "Insufficient Funds";
    } else if (amount % 100 !== 0) {
        result.textContent = "Enter amount in multiples of 100";
    } else {
        result.textContent = `Withdrawn: $${amount}, Remaining Balance: $${balance - amount}`;
    }
}

// Online Shopping Discount
function calculateFinalAmount() {
    let orderAmount = parseFloat(document.getElementById("orderAmount").value);
    let result = document.getElementById("shoppingResult");
    let discount = 0;
    let shipping = orderAmount > 50 ? 0 : 10;

    if (orderAmount > 1000) discount = 0.2;
    else if (orderAmount > 500) discount = 0.1;

    let finalPrice = orderAmount - (orderAmount * discount) + shipping;
    result.textContent = `Final Price: $${finalPrice.toFixed(2)}`;
}

// Student Grading System
function calculateGrade() {
    let marks = parseInt(document.getElementById("marks").value);
    let attendance = parseInt(document.getElementById("attendance").value);
    let result = document.getElementById("gradeResult");

    if (attendance > 90) marks += 5;
    let grade = marks >= 90 ? "A" : marks >= 80 ? "B" : marks >= 70 ? "C" : marks >= 60 ? "D" : "F";
    
    result.textContent = `Final Grade: ${grade}`;
}

// Smart Traffic Light System
function trafficLightControl() {
    let density = document.getElementById("trafficDensity").value;
    let result = document.getElementById("trafficResult");
    
    let time = density === "Heavy" ? 60 : density === "Moderate" ? 40 : 20;
    result.textContent = `Green light duration: ${time} seconds`;
}

// Movie Ticket Pricing
function calculateTicketPrice() {
    let age = parseInt(document.getElementById("ticketAge").value);
    let showTime = parseInt(document.getElementById("showTime").value);
    let result = document.getElementById("ticketResult");

    let price = 12;
    if (showTime < 17) price *= 0.8;
    if (age > 60) price *= 0.7;
    if (age < 12) price *= 0.6;

    result.textContent = `Final Ticket Price: $${price.toFixed(2)}`;
}
