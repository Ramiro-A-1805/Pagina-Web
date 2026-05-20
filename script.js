// ==========================================================================
// LÓGICA DE INTERFAZ DE USUARIO (UI)
// Este archivo controla las interacciones básicas de la página web.
// ==========================================================================

// --- CAMBIO DE TEMA CLARO/OSCURO ---
// Referencia al botón de cambio de tema
const themeToggle = document.getElementById('theme-toggle');
// Obtiene el tema guardado previamente en el almacenamiento local del navegador
const currentTheme = localStorage.getItem('theme');

// Aplicar el tema guardado (si es 'light', se añade la clase al body)
if (currentTheme === 'light') {
    document.body.classList.add('light-theme');
}

// Evento de click para alternar el tema: Añade o quita la clase 'light-theme' del body
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    let theme = 'dark';
    // Si el body ahora tiene la clase, el tema es claro
    if (document.body.classList.contains('light-theme')) {
        theme = 'light';
    }
    // Guarda la preferencia en el navegador para futuras visitas
    localStorage.setItem('theme', theme);
});

// --- ANIMACIÓN DE RIVE ---
// Instancia y configura la animación de Rive
const riveAnim = new rive.Rive({
    src: 'assets/animated_login_bear.riv', // Ruta al archivo Rive (.riv)
    canvas: document.getElementById('rive-canvas'), // Elemento donde se dibuja
    autoplay: true, // Reproducción automática al cargar
    onLoad: () => {
        // Ajusta el tamaño de la animación para que coincida con el tamaño del canvas
        riveAnim.resizeDrawingSurfaceToCanvas();
    },
});

// --- EFECTO DE APARICIÓN AL HACER SCROLL (FADE-IN) ---
// IntersectionObserver detecta cuando un elemento entra en el área visible de la pantalla
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Si el elemento es visible (está cruzando el umbral)
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Añade la clase que dispara la animación CSS
        }
    });
}, { threshold: 0.1 }); // El umbral 0.1 indica que la animación ocurre cuando el 10% del elemento es visible

// Aplica el observador a todos los elementos HTML que contengan la clase "fade-in"
document.querySelectorAll('.fade-in').forEach(section => {
    observer.observe(section);
});
