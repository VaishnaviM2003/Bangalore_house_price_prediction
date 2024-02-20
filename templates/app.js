fetch('columns.json')
  .then(response => response.json())
  .then(locations => {
    const locationSelect = document.getElementById('location');
    locations.forEach(location => {
      const option = document.createElement('option');
      option.value = location;
      option.textContent = location;
      locationSelect.appendChild(option);
    });
  });

// Handle form submission
const predictionForm = document.getElementById('prediction-form');
const predictedPrice = document.getElementById('predicted-price');

predictionForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(predictionForm);
  const data = {
    location: formData.get('location'),
    squareFeet: formData.get('square-feet'),
    bedrooms: formData.get('bedrooms'),
    bathrooms: formData.get('bathrooms')
  };

  // Replace this with actual backend integration
  // For now, let's simulate a response
  const predictionResponse = {
    price: 250000  // Replace this with the actual predicted price
  };

  // Update the predicted price display
  predictedPrice.textContent = `$${predictionResponse.price.toLocaleString()}`;
});
