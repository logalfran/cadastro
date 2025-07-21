document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cadastroForm');

    form.addEventListener('submit', function (e) {
        const username = form.username.value.trim();
        const email = form.email.value.trim();
        const password = form.password.value.trim();

        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!username || !email || !password) {
            alert('Todos os campos são obrigatórios.');
            e.preventDefault();
        } else if (!emailValido.test(email)) {
            alert('Email inválido.');
            e.preventDefault();
        }
    });
});
