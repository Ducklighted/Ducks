document.addEventListener('DOMContentLoaded', function () {
    const mainHeading = document.querySelector('.main-heading');
    const buttons = document.querySelectorAll('.button-row button');
    let currentCalculation = '';

    // Function to update the main heading with the current calculation
    function updateMainHeading() {
        mainHeading.textContent = currentCalculation;
    }

    // Function to perform the calculation
    function calculate() {
        try {
            const result = eval(currentCalculation);
            currentCalculation = result.toString();
            updateMainHeading();
        } catch (error) {
            mainHeading.textContent = 'Error';
        }
    }

    // Event listener for all buttons
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const buttonText = button.textContent;

            if (buttonText === 'C') {
                // Clear current calculation
                currentCalculation = '';
            } else if (buttonText === 'AC') {
                // Clear all
                currentCalculation = '';
            } else if (buttonText === '=') {
                // Calculate and display result
                calculate();
            } else {
                // Append clicked button value to current calculation
                currentCalculation += buttonText;
            }

            // Update main heading
            updateMainHeading();
        });
    });
});
