document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();

    const storedArray = JSON.parse(localStorage.getItem('jsonArray'));

    //retrieving the input values from login
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;

    //flag to indicate if login is success
    var loginSuccess = false;

    //iterating through stored array
    storedArray.forEach(function(user){
        if(user.username === enteredUsername && user.password == enteredPassword){
            //login succes
            loginSuccess = true;
            return;
            
            
        }
    });
    if(loginSuccess){
        alert("Login has been done to Emi Guru! Redirecting to EMI Calculatore Page.");
        window.location.href="emicalc.html"
    }else{
        alert("Login failed");
    }
    
});