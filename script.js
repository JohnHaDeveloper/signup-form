    const form = document.querySelector('form');
    const password = document.querySelector('#password');
    const confirmPassword = document.querySelector('#confirm-password');

    // Hide password
    password.addEventListener('input', (event) => {
      event.target.setCustomValidity('');
      event.target.type = 'password';
    });

    // Check if passwords match
    confirmPassword.addEventListener('input', (event) => {
      event.target.setCustomValidity('');
      if (password.value !== confirmPassword.value) {
        event.target.setCustomValidity('Passwords must match');
      }
    });

    // Handle form submission
   