document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cadastroForm');

    form.addEventListener('submit', function (e) {
        const username = form.username.value.trim();
        const email = form.email.value.trim();
        const password = form.password.value.trim();

        function validarEmailSimples(email) {
            if (!email) return false;
            if (email.indexOf(' ') !== -1) return false; 
            const atIndex = email.indexOf('@');
            if (atIndex === -1) return false; 
            const dotIndex = email.indexOf('.', atIndex);
            if (dotIndex === -1) return false; 
            if (dotIndex === email.length -1) return false; 
            return true;
        }

        if (!username || !email || !password) {
            alert('Todos os campos são obrigatórios.');
            e.preventDefault();
        } else if (!validarEmailSimples(email)) {
            alert('Email inválido.');
            e.preventDefault();
        }
    });
});
