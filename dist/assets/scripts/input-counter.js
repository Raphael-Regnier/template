document.addEventListener('DOMContentLoaded', function() {
  // Select all container divs for input fields that might have a counter
  const inputFieldContainers = document.querySelectorAll('.input-field');

  inputFieldContainers.forEach(container => {
    // Find the input OR textarea element with a maxlength attribute within this container
    const inputElement = container.querySelector('input[maxlength], textarea[maxlength]');
    // Find the character counter legend within this container
    const counterElement = container.querySelector('.character-count');

    // If both the input/textarea and its counter are found
    if (inputElement && counterElement) {
      const maxLength = inputElement.getAttribute('maxlength');

      // Function to update the counter
      const updateCounter = () => {
        const currentLength = inputElement.value.length;
        counterElement.textContent = `${currentLength}/${maxLength}`;
      };

      // Initialize the counter text (e.g., "0/80" or "0/100")
      updateCounter();

      // Add event listener to the input field or textarea
      inputElement.addEventListener('input', updateCounter);
    }
  });
});