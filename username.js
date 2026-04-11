window.addEventListener('load', function() {
    let username = localStorage.getItem('username') || prompt('Who is this user?');
    
    while (username && username.length > 20) {
        username = prompt('Username must be 20 characters or less. Please try again:');
    }
    
    if (username) {
        localStorage.setItem('username', username);
        const usernameElement = document.getElementById('username');
        if (usernameElement) {
            usernameElement.textContent = username;
        }
    }
});