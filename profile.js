document.addEventListener('DOMContentLoaded', function() {
    var profileDetails = document.getElementById('profile-details');
    var userData = JSON.parse(localStorage.getItem('user'));

    if(userData) {
        var profileHTML = `
            <p><strong>First Name:</strong> ${userData.firstName}</p>
            <p><strong>Last Name:</strong> ${userData.lastName}</p>
            <p><strong>Date of Birth:</strong> ${userData.dob}</p>
            <p><strong>Gender:</strong> ${userData.gender}</p>
        `;
        profileDetails.innerHTML = profileHTML;
    } else {
        profileDetails.innerHTML = "<p>No user data found</p>";
    }
});
