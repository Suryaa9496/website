function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username.trim() === "" || password.trim() === "") {
        alert("Please fill all the fields");
        return false;
    }
    return true;
}

function checkFields() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var submit = document.getElementById("button");
    
    if (username === "" || password === "") {
        submit.disabled = true;
    } else {
        submit.disabled = false;
    }
  JSON.parse(localStorage.getItem("user"));
    var user = {
        firstName: firstName,
        lastName: lastName,
        dob: dob,
        gender: gender.value
    };
window.location.href = "profile.html";

    return false; 
}





 

