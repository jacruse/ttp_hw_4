function formValidation(inputPassword) {
    let validPassword = "12345678";
    if(!inputPassword.value.match(validPassword))
        alert("Invalid password!");
    else{
        alert("Success!");
        document.getElementById('h1').innerHTML = "Validation Successful"
    }    
}