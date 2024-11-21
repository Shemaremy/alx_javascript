document.addEventListener('DOMContentLoaded', function(){
    const passwordForm = document.getElementById('passwordForm');
    const passwordInput = document.getElementById('password'); 
    const error =  document.getElementById('error');

    passwordForm.addEventListener('submit', function (e){
    // prevent the form from submitting
    e.preventDefault();
    const password = passwordInput.value;

        if (validatePassword(password)) {
            // Password meets the criteria, allow form submission
            error.textContent = ''; // Clear any previous error messages
            passwordForm.submit();
        } else {
            // Password does not meet the criteria, display an error message
            error.textContent =
                'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one numeric digit, and one special character.';
        }
})

function validatePassword(password){
    // Define regular expressions for each criteria
    const lengthRegex = /.{8,}/;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /\d/;
    const specialCharRegex = /[!@#$%^&*]/;

    // Check if the password meets all criteria
    return (
        lengthRegex.test(password) &&
        uppercaseRegex.test(password) &&
        lowercaseRegex.test(password) &&
        digitRegex.test(password) &&
        specialCharRegex.test(password)
    );
}
})