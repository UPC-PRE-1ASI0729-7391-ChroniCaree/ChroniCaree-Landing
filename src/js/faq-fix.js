// Este archivo contiene código para asegurar que las preguntas frecuentes funcionen
// Se carga después del script principal para garantizar la funcionalidad

document.addEventListener('DOMContentLoaded', function() {
    console.log('FAQ-fix loaded');
    
    // Esperar a que la página termine de cargarse completamente
    window.addEventListener('load', function() {
        // Dar un tiempo adicional para asegurarnos que todo está listo
        setTimeout(function() {
            // Seleccionar todas las preguntas frecuentes
            const faqQuestions = document.querySelectorAll('.faq-question');
            console.log('FAQ questions found:', faqQuestions.length);
            
            // Asegurarnos que cada pregunta tenga un evento click
            faqQuestions.forEach(function(question) {
                // Añadir un evento click directo
                question.onclick = function(e) {
                    e.preventDefault();
                    console.log('FAQ question clicked through direct handler');
                    
                    // Obtener el elemento padre (faq-item)
                    const faqItem = this.parentNode;
                    
                    // Comprobar si ya está activo
                    const wasActive = faqItem.classList.contains('active');
                    
                    // Cerrar todas las preguntas
                    document.querySelectorAll('.faq-item').forEach(function(item) {
                        item.classList.remove('active');
                    });
                    
                    // Si no estaba activo, abrirlo
                    if (!wasActive) {
                        faqItem.classList.add('active');
                    }
                };
            });
            
            // Activar la primera pregunta automáticamente para mostrar que funciona
            if (faqQuestions.length > 0) {
                faqQuestions[0].click();
                console.log('First FAQ question opened by faq-fix');
            }
        }, 1000);
    });
});