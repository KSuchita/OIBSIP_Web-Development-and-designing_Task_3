function convertTemperature() {
  const inputTemp = document.getElementById('temperature').value;
  const fromUnit = document.getElementById('fromUnit').value;
  const toUnit = document.getElementById('toUnit').value;
  const resultDiv = document.getElementById('result');

  if (inputTemp === '' || isNaN(inputTemp)) {
    resultDiv.textContent = 'Please enter a valid number.';
    return;
  }

  let temp = parseFloat(inputTemp);
  let convertedTemp;

  // Convert input to Celsius first
  if (fromUnit === 'F') {
    temp = (temp - 32) * 5 / 9;
  } else if (fromUnit === 'K') {
    temp = temp - 273.15;
  }

  // Convert from Celsius to target unit
  if (toUnit === 'F') {
    convertedTemp = (temp * 9 / 5) + 32;
  } else if (toUnit === 'K') {
    convertedTemp = temp + 273.15;
  } else {
    convertedTemp = temp;
  }

  convertedTemp = convertedTemp.toFixed(2);

  const unitLabel = {
    C: '°C',
    F: '°F',
    K: 'K'
  };

  resultDiv.textContent = `Converted Temperature: ${convertedTemp} ${unitLabel[toUnit]}`;
}
