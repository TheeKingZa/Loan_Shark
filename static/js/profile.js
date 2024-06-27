/*
 * Profile.js
 */

// Function to load user details
function loadUserProfile() {
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  if (!loggedInUser) {
    window.location.href = 'index.html'; // Redirect to login if no user is logged in
    return;
  }

  const profileDetails = document.getElementById('profile-details');
  profileDetails.innerHTML = `
    <p><strong>Username:</strong> ${loggedInUser.username}</p>
  `;

  // Fetch all users to get more details
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(user => user.username === loggedInUser.username);
  if (user) {
    profileDetails.innerHTML += `
    <p><strong>First Name:</strong> ${user.firstName}</p>
    <p><strong>Last Name:</strong> ${user.lastName}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>ID Number:</strong> ${user.idNumber}</p>
      <p><strong>User ID:</strong> ${user.id}</p>
    `;
  }
}

loadUserProfile();

// Add event listener for delete account button
document.getElementById('delete-account-button').addEventListener('click', function() {
  document.getElementById('delete-account-section').style.display = 'block';
});

// Add event listener for confirm delete button
document.getElementById('confirm-delete-button').addEventListener('click', function() {
  const confirmInput = document.getElementById('confirm-username-email').value;
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Check if the input matches the logged-in user's email or username
  if (confirmInput === loggedInUser.username || confirmInput === loggedInUser.email) {
    // Remove the user from the users array
    const updatedUsers = users.filter(user => user.username !== loggedInUser.username);
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    // Remove the logged-in user from local storage
    localStorage.removeItem('loggedInUser');

    // Redirect to login page
    window.location.href = 'index.html';
  } else {
    alert('Confirmation failed. Please enter your correct email or username.');
  }
});
