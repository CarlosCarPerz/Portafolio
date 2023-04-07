const form = document.querySelector("#contact-form");
const requiredFields = form.querySelectorAll(".required");
const submitButton = form.querySelector("#submit-button");

// Función para verificar si todos los campos requeridos están llenos
function checkRequiredFields() {
  let allFieldsFilled = true;
  
  requiredFields.forEach(field => {
    if (field.value.trim() === "") {
      allFieldsFilled = false;
    }
  });
  
  return allFieldsFilled;
}

// Agregar evento de escucha al formulario
form.addEventListener("input", () => {
  // Verificar si todos los campos requeridos están llenos
  const allFieldsFilled = checkRequiredFields();
  
  // Habilitar/deshabilitar el botón de enviar según el estado de los campos requeridos
  submitButton.disabled = !allFieldsFilled;
});