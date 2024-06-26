// Function to load user details
function loadUserProfile() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!loggedInUser) {
      window.location.href = 'login.html'; // Redirect to login if no user is logged in
      return;
    }

    const profileDetails = document.getElementById('profile-details');
    profileDetails.innerHTML = `
      <p><strong>Username:</strong> ${loggedInUser.username}</p>
      <p><strong>User Type:</strong> ${loggedInUser.userType}</p>
    `;

    // Fetch all users to get more details
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === loggedInUser.username);
    if (user) {
      profileDetails.innerHTML += `
        <p><strong>Email:</strong> ${user.email}</p>
      `;
    }
  }

  loadUserProfile();