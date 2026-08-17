document.addEventListener("DOMContentLoaded", () => {
  const anio = document.querySelectorAll("#anio");
  anio.forEach(elemento => elemento.textContent = new Date().getFullYear());

  const formulario = document.getElementById("formularioContacto");
  if (formulario) {
    formulario.addEventListener("submit", (evento) => {
      evento.preventDefault();
      const respuesta = document.getElementById("respuesta");
      respuesta.textContent = "¡Mensaje preparado correctamente! Este formulario es demostrativo.";
      formulario.reset();
    });
  }
});
