document.getElementById('login-submit').addEventListener
    ('click', function () {
        // get emaill
        const emailField = document.getElementById('user-email');
        const userEmail = emailField.value;

        // get password
        const paswordField = document.getElementById('user-password');
        const userPassword = paswordField.value;
        //  check email ansd password
        if (userEmail == 'me@baap.com' && userPassword == 'secret') {
            window.location.href = 'Banking.html'
        }

    })

