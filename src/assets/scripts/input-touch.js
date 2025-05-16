document.addEventListener('DOMContentLoaded', function() {
  // Get all form inputs that need validation
  const formInputs = document.querySelectorAll('input, textarea, select');
  
  // Add event listeners to mark fields as touched after interaction
  formInputs.forEach(input => {
    // Add the touched class on blur (when user leaves the field)
    input.addEventListener('blur', function() {
      this.classList.add('touched');
    });
    
    // Optional: You might also want to add the class on input change
    input.addEventListener('input', function() {
      this.classList.add('touched');
    });
  });
  
  // Optional: For better UX, mark all fields as touched on form submission
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function() {
      formInputs.forEach(input => {
        input.classList.add('touched');
      });
    });
  });
});