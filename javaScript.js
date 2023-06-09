function convert() {
    var celsiusInput = document.getElementById('celsius');
    var result = document.getElementById('result');

    // Check if input is empty
    if (celsiusInput.value === '') {
        result.innerHTML = 'Please enter a temperature';
        return;
    }

    // Convert Celsius to Fahrenheit
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = (celsius * 9 / 5) + 32;

    // Display the result
    result.innerHTML = celsius + ' degrees Celsius is equal to ' + fahrenheit.toFixed(2) + ' degrees Fahrenheit';
}
