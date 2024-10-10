// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// COLLECT VALUES FROM THE USER
investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
//VALIDATION
while (isNaN(investment) || investment <= 0) {
    window.alert('Please enter a valid positive number for the investment amount.');
    investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
}

rate = parseFloat(prompt('Enter interest rate as xx.x (0-6)'));
//VALIDATION
while (isNaN(rate) || rate < 0 || rate > 6) {
    window.alert('Please enter a valid interest rate between 0 and 6%.');
    rate = parseFloat(prompt('Enter interest rate as xx.x (0-6)'));
}

years = parseInt(prompt('Enter the number of years you want to invest for (1-30)'));
//VALIDATION
while (isNaN(years) || years < 1 || years > 30) {
    window.alert('Please enter a valid number of years between 1 and 30.');
    years = parseInt(prompt('Enter the number of years you want to invest for (1-30)'));
}

// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);
