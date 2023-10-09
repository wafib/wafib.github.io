document.addEventListener('DOMContentLoaded', function () {
    const calculateMilesBtn = document.getElementById('calculateMilesBtn');
    const originInput = document.getElementById('origin');
    const destinationInput = document.getElementById('destination');
    const resultLabel = document.getElementById('resultLabel');

    calculateMilesBtn.addEventListener('click', function () {
        const origin = originInput.value.toUpperCase();
        const destination = destinationInput.value.toUpperCase();

        try {
            // Use the geodesic function to calculate distance
            const originCoordinates = { latitude: airports[origin].lat, longitude: airports[origin].lon };
            const destinationCoordinates = { latitude: airports[destination].lat, longitude: airports[destination].lon };
            const distance = geodesic(originCoordinates, destinationCoordinates).miles;

            // Update the result label
            resultLabel.textContent = `Distance between ${origin} and ${destination}: ${distance.toFixed(2)} miles`;
        } catch (error) {
            // Handle errors
            resultLabel.textContent = 'Error: Unable to get coordinates for one or both airports';
        }
    });

    const calculateMileageBtn = document.getElementById('calculateMileageBtn');
    const fareClassSelect = document.getElementById('fareClass');
    const milesFlownInput = document.getElementById('milesFlown');
    const membershipStatusSelect = document.getElementById('membershipStatus');
    const domesticFlightCheckbox = document.getElementById('domesticFlight');
    const bonusPercentageInput = document.getElementById('bonusPercentage');
    const totalMileageLabel = document.getElementById('totalMileageLabel');

    calculateMileageBtn.addEventListener('click', function () {
        const fareClass = fareClassSelect.value;
        const milesFlown = parseFloat(milesFlownInput.value);
        const membershipStatus = membershipStatusSelect.value;
        const isDomestic = domesticFlightCheckbox.checked;
        const bonusPercentage = parseFloat(bonusPercentageInput.value);

        // Define fare class earning rates
        const earningRates = isDomestic ? fareEarningRates.Domestic : fareEarningRates.International;

        // Get the earning rate for the selected fare class
        const earningRate = earningRates[fareClass] || 0;

        // Calculate total mileage
        const baseMileage = milesFlown * earningRate;
        const bonusMultiplier = bonusMultipliers[membershipStatus] || 1.0;
        const totalMileage = baseMileage * bonusMultiplier;

        // Update the total mileage label
        totalMileageLabel.textContent = `Total mileage with bonus: ${totalMileage.toFixed(2)} miles`;
    });
});
