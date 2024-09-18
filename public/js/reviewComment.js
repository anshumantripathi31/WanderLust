const form = document.getElementById('reviewForm');
  
    form.addEventListener('submit', function(event) {
      // Check if form is valid before submission
      if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
      }
      else if(!this.checkValidity()){
        event.preventDefault();
      }
    });

    document.getElementById('comment').addEventListener('input', function () {
        validateForm();
    });
    
    function validateForm() {
       
        const commentInput = document.getElementById('comment');
        const commentFeedback = document.getElementById('commentFeedback');
        const commentError = document.getElementById('commentError');
        const commentValue=commentInput.value.trim()

        if(commentValue===''){
            commentInput.classList.remove('border-green-500');
            commentInput.classList.add('border-red-500');
           // Apply invalid input style
           commentFeedback.classList.add('hidden');
           commentError.classList.remove('hidden'); // Show error message
          return  false;
        } else {
            commentInput.classList.remove('border-red-500'); // Remove invalid input style
            commentInput.classList.add('border-green-500');
            commentError.classList.add('hidden');
             // Hide error message
            commentFeedback.classList.remove('hidden');
            return true;
          };  
    }