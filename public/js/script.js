
    const form = document.getElementById('addNewListing');
  
    form.addEventListener('submit', function(event) {
      // Check if form is valid before submission
      if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
      }
    });
    
  
    function validateForm() {
      const fields = ['title', 'description', 'price','image', 'location', 'country'];
      let isValid = true;
  
      fields.forEach(field => {
        const input = document.getElementById(field);
        const error = document.getElementById(`${field}-error`);
        const success= document.getElementById(`${field}-success`);
  
        if (!input.value.trim()) {
            input.classList.remove('border-green-500');
            input.classList.add('border-red-500');
           // Apply invalid input style
           success.classList.add('hidden');
           error.classList.remove('hidden'); // Show error message
          isValid = false;
        } else {
            
          input.classList.remove('border-red-500'); // Remove invalid input style
          input.classList.add('border-green-500');
          error.classList.add('hidden');
           // Hide error message
          success.classList.remove('hidden');
        }
      });
  
      return isValid;
    };

  