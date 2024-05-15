function validarFormulario() {
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const phone = document.getElementById('phone').value.trim();
    let isValid = true;

    document.getElementById('nombreError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    if (nombre === '') {
        document.getElementById('nombreError').classList.add("error")
        isValid = false;
    } else {
        document.getElementById('nombreError').classList.remove("error")
    }

    if (email === '') {
        document.getElementById('emailError').classList.add("error")
        isValid = false;
    } else if (!emailValido(email)) {
        document.getElementById('emailErro').textContent = 'Ingresa un email válido';
        document.getElementById('emailError').classList.add("error")
        isValid = false;
    } else {
        document.getElementById('emailError').classList.remove("error")
        document.getElementById('emailErro').textContent = '';
    }

    if (password === '') {
        document.getElementById('passwordError').classList.add("error")
        isValid = false;
    } else if (!isValidPassword(password)){
        document.getElementById('passwordErro').textContent = 'Ingresa una constraseña valida';
        document.getElementById('passwordError').classList.add("error")
        isValid = false;
    } else {
        document.getElementById('passwordError').classList.remove("error")
        document.getElementById('passwordErro').textContent = '';
    }

    if (phone === '') {
        document.getElementById('phoneError').classList.add("error")
        isValid = false;
    } else {
        document.getElementById('phoneError').classList.remove("error")
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