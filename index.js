const miBoton = document.getElementById('miBoton');
function handleClick(){
    alert('hola, has hecho click en el boton.');
}
miBoton.addEventListener("click", handleClick);
const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});
