document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }

    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    function handleRegister(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const users = JSON.parse(localStorage.getItem('users')) || [];

        if (users.some(user => user.username === username)) {
            document.getElementById('registerResult').textContent = 'Usuário já existe.';
        } else {
            users.push({ username, password });
            localStorage.setItem('users', JSON.stringify(users));
            document.getElementById('registerResult').textContent = 'Registrado com sucesso!';
        }
    }

    function handleLogin(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const users = JSON.parse(localStorage.getItem('users')) || [];

        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            document.getElementById('loginResult').textContent = 'Login bem-sucedido!';
        } else {
            document.getElementById('loginResult').textContent = 'Usuário ou senha incorretos.';
        }
    }
});
