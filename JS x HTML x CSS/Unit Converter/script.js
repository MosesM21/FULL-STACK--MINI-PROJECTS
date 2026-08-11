const convertBtn = document.getElementById('convert-btn');
const inputValue = document.getElementById('input-value');
const lengthResult = document.getElementById('length-result');
const volumeResult = document.getElementById('volume-result');
const massResult = document.getElementById('mass-result');

convertBtn.addEventListener('click', () => {
    let value = parseFloat(inputValue.value);
    if (isNaN(value)) {
        lengthResult.textContent = 'Please enter a valid number.';
        return;
    }
    lengthConversion(value);
    volumeConversion(value);
    massConversion(value);
});

function lengthConversion(value) {
    const metersToFeet = (value * 3.28084).toFixed(3);
    const feetToMeters = (value / 3.28084).toFixed(3);
    lengthResult.textContent = `${value} meters = ${metersToFeet} feet | ${value} feet = ${feetToMeters} meters`;
}

function volumeConversion(value) {
    const litersToGallons = (value * 0.264172).toFixed(3);
    const gallonsToLiters = (value / 0.264172).toFixed(3);
    volumeResult.textContent = `${value} liters = ${litersToGallons} gallons | ${value} gallons = ${gallonsToLiters} liters`;
}

function massConversion(value) {
    const kilosToPounds = (value * 2.20462).toFixed(3);
    const poundsToKilos = (value / 2.20462).toFixed(3);
    massResult.textContent = `${value} kilos = ${kilosToPounds} pounds | ${value} pounds = ${poundsToKilos} kilos`;
}