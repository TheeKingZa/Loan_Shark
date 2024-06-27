// logout.js

// Function to handle logout
function logout() {
    // Clear local storage
    localStorage.removeItem('loggedInUser');
    
    // Redirect to login page
    window.location.href = './index.html'; // Adjust this to your actual login page path
  }
  
  // Execute logout function when the logout button or link is clicked
  document.addEventListener('DOMContentLoaded', function() {
    const logoutButton = document.getElementById('logout-button'); // Replace with your actual logout button or link ID
    
    if (logoutButton) {
      logoutButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        
        // Call logout function
        logout();
      });
    }
  });
  