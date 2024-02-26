function validateForm() {
    var firstName = document.getElementById("first-name").value.trim();
    var lastName = document.getElementById("last-name").value.trim();
    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var country = document.getElementById("country").value.trim();
    var dob = document.getElementById("dob").value.trim();
    var gender = document.querySelector('input[name="gender"]:checked');
    var termsAgreed = document.querySelector('input[type="checkbox"]:checked');


    if(firstName === "" || lastName === "" || username === "" || email === "" || country === "" || dob === "" || !gender || !termsAgreed) {
        alert("Please fill all the required fields");
        return false;
    }

    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    var passwordError = document.getElementById("password-error");

    if (password !== confirmPassword) {
        passwordError.style.display = "block";
        return false;
    } else {
        passwordError.style.display = "none";

        let passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])\S{8,}$/;

        if (!passwordRegex.test(password)) {
          flag = 0;
          alert(
            "Password must be at least 8 characters long and include at least one number, one alphabet, and one symbol."
          );
        }

        var user = {
            firstName: firstName,
            lastName: lastName,
            username: username,
            email: email,
            country: country,
            dob: dob,
            gender: gender.value
        };

        localStorage.setItem('user', JSON.stringify(user));
        window.location.href = "profile.html";
          
        return false; 
    }
}
