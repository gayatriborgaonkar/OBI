function convertTemperature() {
    var temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
    var unitSelect = document.getElementById("unitSelect").value;
    var resultBox = document.getElementById("result");
    
    if (isNaN(temperatureInput)) {
        resultBox.innerHTML = "Please enter a valid temperature.";
        return;
    }

    if (unitSelect === "C") {
        var convertedTemp = (temperatureInput * 9 / 5) + 32;
        resultBox.innerHTML = temperatureInput + "°C is " + convertedTemp + "°F";
    } else if (unitSelect === "F") {
        var convertedTemp = (temperatureInput - 32) * 5 / 9;
        resultBox.innerHTML = temperatureInput + "°F is " + convertedTemp + "°C";
    } else if (unitSelect === "K") {
        var convertedTemp = temperatureInput + 273.15;
        resultBox.innerHTML = temperatureInput + "K is " + convertedTemp + "°C";
    }
}