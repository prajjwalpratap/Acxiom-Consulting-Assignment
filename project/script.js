function showPage(pageId) {
    document.querySelectorAll('.login-container, .signup-container, .dashboard-container, .module-login, .vendor-dashboard, .user-dashboard')
        .forEach(el => el.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

function login() {
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;
    if (userId.toLowerCase() === 'admin' && password.toLowerCase() === 'admin') {
        alert('Login Successful');
        showPage('dashboard');
    } else {
        alert('Invalid credentials');
    }
}

function resetLogin() {
    document.getElementById('userId').value = '';
    document.getElementById('password').value = '';
}

function signup() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('signPassword').value;
    const category = document.getElementById('category').value;
    if (!name || !email || !password || !category) {
        alert('Please fill out all fields.');
    } else {
        alert('Vendor Registered Successfully');
        showPage('dashboard');
    }
}

function showModuleLogin(moduleId) {
    showPage(moduleId);
}

function storeAndOpen(userIdField, passField, role) {
    const username = document.getElementById(userIdField).value;
    const password = document.getElementById(passField).value;
    if (username && password) {
        localStorage.setItem(role + 'User', username);
        localStorage.setItem(role + 'Pass', password);
        alert(`${role} Dashboard Opened for ${username}`);
        if (role === 'Vendor') {
            showPage('vendorDashboard');
        } else if (role === 'User') {
            showPage('userDashboard');
        } else if (role === 'Admin') {
            showPage('adminDashboard');
        }
    } else {
        alert('Please enter username and password.');
    }
}
