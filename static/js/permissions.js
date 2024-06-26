document.addEventListener('DOMContentLoaded', function() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    const userTypeSpan = document.getElementById('user-type');
    const dummyLink = document.getElementById('paid-link');

    if (loggedInUser) {
      userTypeSpan.textContent = loggedInUser.userType;
      // Show link to dummy.html only for premium users
      if (loggedInUser.userType === 'PREMIUM' || loggedInUser.userType === 'ADMIN') {
        dummyLink.style.display = 'list-item';
      }
    } else {
      // If no user is logged in, redirect to the login/signup page
      window.location.href = 'index.html';
    }
});