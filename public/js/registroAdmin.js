const registro = document.getElementById('registro');

registro.addEventListener('submit', function (event) {
  event.preventDefault();
  const datos = {
    nombre: this.nombre.value,
    correo: this.correo.value,
    password: this.password.value,
  };

  fetch('http://localhost:3001/administrador', {
    method: 'POST',
    body: JSON.stringify(datos),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.err) {
        alert(response.err.sqlMessage);
        return;
      }
      window.location.replace('http://localhost:3000/');
    });
});
