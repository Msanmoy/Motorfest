function validarFormulario() {
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    let isValid = true;

    document.getElementById('nombreError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    if (nombre === '') {
        document.getElementById('nombreError').textContent = 'Por favor ingresa tu nombre';
        isValid = false;
    }

    if (email === '') {
        document.getElementById('emailError').textContent = 'Por favor ingresa tu email';
        isValid = false;
    } else if (!emailValido(email)) {
        document.getElementById('emailError').textContent = 'Ingresa un email válido';
        isValid = false;
    }

    if (password === '') {
        document.getElementById('passwordError').textContent = 'Por favor ingresa una contraseña';
        isValid = false;
    } else if (!isValidPassword(password)){
        document.getElementById('passwordError').textContent = 'Ingresa una constraseña valida';
    }

    return isValid;
}

function emailValido(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])(?!\s)[a-zA-Z\d#$@!%&*?]{8,16}$/gm;
    return passRegex.test(password);
}