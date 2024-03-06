document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if(enteredUsername === storedUsername && enteredPassword === storedPassword){
        alert("Login has been done to Emi Guru! Redirecting to EMI Calculatore Page.");
        window.location.href="emicalc.html"
    }else{
        alert("Incorrect Username or Password Please Try Again");
    }
});