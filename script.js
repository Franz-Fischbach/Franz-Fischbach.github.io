function generateRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 101); // Generate random number between 0 and 100
    document.getElementById('randomNumber').textContent = 'Random Number: ' + randomNumber;
}
