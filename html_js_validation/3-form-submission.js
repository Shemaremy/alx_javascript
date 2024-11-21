const submitForm = document.getElementById('Submitform');
const error = document.getElementById('error');
const test = document.getElementById('test');

function handleFormSubmit(event){
    const name = document.getElementById('name');
    const email = document.getElementById('email');

    if (name.value === '' || email.value === ''){
        error.textContent = 'Please fill in all required fields.';
        event.preventDefault()
    }else{
        error.textContent = 'Form submitted successfully!';
    }
    
}

submitForm.addEventListener('submit', function (event){
    handleFormSubmit(event);
})