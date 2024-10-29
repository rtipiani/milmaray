function updateContent() {
// Ocultar todas las secciones de contenido
const contents = document.querySelectorAll('.tab-content');
contents.forEach(content => content.classList.add('hidden'));

// Mostrar la sección correspondiente al input seleccionado
const selectedTab = document.querySelector('input[name="tabs"]:checked');
if (selectedTab) {
const contentId = `content${selectedTab.id}`;
const selectedContent = document.getElementById(contentId);
if (selectedContent) {
selectedContent.classList.remove('hidden');
}
}
}
// Ejecutar la función de actualización al cargar la página
document.addEventListener('DOMContentLoaded', () => {
updateContent();

// Agregar eventos a los inputs de las pestañas
const tabInputs = document.querySelectorAll('input[name="tabs"]');
tabInputs.forEach(input => input.addEventListener('change', updateContent));
});
