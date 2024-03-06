document.getElementById("signupForm").addEventListener("submit",function(event){
    event.preventDefault();
    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    localStorage.setItem("name" , name);
    localStorage.setItem("username" , username);
    localStorage.setItem("password" , password);
    alert("Sign up successful! You can now login.");
    window.location.href="login.html";
});