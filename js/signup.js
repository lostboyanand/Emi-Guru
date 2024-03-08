document.getElementById("signupForm").addEventListener("submit",function(event){
    event.preventDefault();
    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Form validation
    if (name.trim() === "") {
        alert("Please enter your name.");
        return;
    }

    if (username.trim() === "") {
        alert("Please enter a username.");
        return;
    }

    if (password.trim() === "" || password.length < 6 || !/[A-Z]/.test(password) || !/[!@#$%^&*]/.test(password)) {
        alert("Password must be at least 6 characters, contain at least one capital letter, and at least one special character (!@#$%^&*).");
        return;
    }

    //sample array of json abjects
    // retrive the input values from the signup

    const jsonArray = JSON.parse(localStorage.getItem('jsonArray')) || [];

    // create a new object with the retrieved values

    const newUser = {name: name , username: username , password: password};

    // pushing the new object into json array
    jsonArray.push(newUser);

    //storing the updated json array in localstorage
    localStorage.setItem('jsonArray',JSON.stringify(jsonArray) );
    alert("Sign up successful! You can now login.");
    window.location.href="login.html";
});