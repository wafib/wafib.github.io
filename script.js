document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate");

    calculateButton.addEventListener("click", function () {
        const fareClass = document.getElementById("fare-class").value;
        const milesFlown = parseFloat(document.getElementById("miles-flown").value);
        const membershipStatus = document.getElementById("membership-status").value;
        const bonusPercentage = parseFloat(document.getElementById("bonus-percentage").value);

        const fareEarningRates = {
            "First Class Flex": 3.5,
            "First Class Semi-Flex": 2.0,
            "Business Class Flex": 1.75,
            "Business Class Semi-Flex": 1.5,
            "Business Class Basic": 1.25,
            "Guest Class Flex": 1.0,
            "Guest Class Semi-Flex": 0.6,
            "Guest Basic": 0.35,
            "Guest Saver": 0.3,
            // Add other fare class rates here
        };

        const bonusMultipliers = {
            "Green": 1.0,
            "Silver": 1.25,
            "Gold": 1.5,
        };

        const isDomestic = true; // You can implement this logic as needed

        const bonusMultiplier = bonusMultipliers[membershipStatus];
        const earningRate = fareEarningRates[fareClass];

        if (isNaN(milesFlown) || isNaN(bonusPercentage)) {
            displayResult("Please enter valid numbers.");
        } else {
            const totalMileage = calculateMileage(milesFlown, earningRate, bonusMultiplier);
            displayResult(`Total mileage with bonus: ${totalMileage.toFixed(2)} miles`);
        }
    });

    function calculateMileage(milesFlown, earningRate, bonusMultiplier) {
        return milesFlown * earningRate * bonusMultiplier;
    }

    function displayResult(resultText) {
        const resultDiv = document.getElementById("result");
        resultDiv.textContent = resultText;
    }
});
