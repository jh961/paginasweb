document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  alert(`Gracias, ${name}, por contactarnos. Responderemos a tu correo: ${email} pronto.`);
});
