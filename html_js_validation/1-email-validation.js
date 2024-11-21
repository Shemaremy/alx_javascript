document.addEventListener('DOMContentLoaded', function(){
    const emailForm = document.getElementById('emailForm');
    const emailInput = document.getElementById('email');
    const error = document.getElementById('error');

    console.log(emailForm);
    console.log(error);

    emailForm.addEventListener('submit', function(e){
        e.preventDefault();
        const email = emailInput.value;

        if (validateEmail(email)){
            error.textContent = '';
            emailForm.submit();
        }else{
            error.textContent = 'Please enter a valid email address.';
        }


    })
})

function validateEmail(email){
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
}