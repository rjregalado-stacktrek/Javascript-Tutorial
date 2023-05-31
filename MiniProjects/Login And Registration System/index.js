    // User registration
    function register() {
        const regUsername = document.getElementById('regUsername').value;
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const regPassword = document.getElementById('regPassword').value;
  
        // Check if username, firstname, lastname, email and password are valid
        if (regUsername && regPassword && firstName && lastName) {
          localStorage.setItem('username', regUsername);
          localStorage.setItem('firstname', firstName);
          localStorage.setItem('lastname', lastName);
          localStorage.setItem('email', email);
          localStorage.setItem('password', regPassword);
          document.getElementById('regMessage').innerHTML = 'Registration successful. Please log in.';
        } else {
          document.getElementById('regMessage').innerHTML = 'Please fill in all fields.';
        }
      }
  
      // User login
      function login() {
        const loginUsername = document.getElementById('loginUsername').value;
        const loginPassword = document.getElementById('loginPassword').value;
  
        // Check if username and password match the stored values
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');
        if (loginUsername === storedUsername && loginPassword === storedPassword) {
          document.getElementById('loginMessage').innerHTML = 'Login successful.';
        } else {
          document.getElementById('loginMessage').innerHTML = 'Invalid username or password.';
        }
      }