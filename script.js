

document.addEventListener("DOMContentLoaded", function () {
    const celsiusInput = document.getElementById("celsius");
    const convertButton = document.getElementById("convert");
    const resultParagraph = document.getElementById("result");

    convertButton.addEventListener("click", function () {
        const celsiusValue = parseFloat(celsiusInput.value);
        if (!isNaN(celsiusValue)) {
            const fahrenheitValue = (celsiusValue * 9/5) + 32;
            resultParagraph.textContent = `Result: ${fahrenheitValue.toFixed(2)} Fahrenheit`;
        } else {
            resultParagraph.textContent = "Invalid input";
        }
    });
});
