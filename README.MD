# ChroniCaree - Landing Page

## Descripción del Proyecto

ChroniCaree es una plataforma digital revolucionaria que transforma el cuidado de enfermedades crónicas desde casa. Nuestra solución conecta a pacientes con herramientas digitales inteligentes y a profesionales de la salud con sistemas de gestión avanzados, democratizando el acceso a cuidados de calidad mientras mejora significativamente los resultados clínicos.

### Características principales:

**Para Pacientes:**
-  **Aplicación móvil intuitiva**: Monitoreo en tiempo real de signos vitales y síntomas
-  **Planificador de cuidados inteligente**: Recordatorios personalizados y adherencia al tratamiento
-  **Monitor de salud personal**: Alertas preventivas y métricas adaptativas
-  **Conexión directa con médicos**: Comunicación segura y seguimiento continuo

**Para Hospitales y Doctores:**
-  **Dashboard hospitalario**: Panel centralizado con métricas en tiempo real
-  **Gestión inteligente de pacientes**: Priorización automática y seguimiento múltiple
-  **Comunicación segura HIPAA**: Plataforma compliant con historial integrado
-  **Sistema de membresías escalable**: Planes flexibles con soporte 24/7

**Resultados comprobados:**
-  45% reducción en hospitalizaciones evitables
-  80% mejora en adherencia al tratamiento
-  95% satisfacción de pacientes y médicos
-  60% reducción en llamadas de emergencia

## Paleta de Colores

- **Primary**: `#26B5A6` - Color principal de la marca (botones, acentos)
- **Primary Dark**: `#1e8a7e` - Variación oscura del color principal
- **Secondary**: `#2C3E50` - Color secundario para textos y elementos
- **Accent**: `#E74C3C` - Color de acento para alertas y elementos destacados
- **Success**: `#27AE60` - Color para estados de éxito
- **Warning**: `#F39C12` - Color para advertencias
- **Light**: `#F8F9FA` - Color base claro para fondos
- **Dark**: `#2C3E50` - Color oscuro para textos principales

## Tecnologías Utilizadas

- **HTML5** - Estructura semántica y accesible
- **CSS3** - Diseño responsive con Flexbox y Grid
- **JavaScript (Vanilla)** - Interactividad y funcionalidades dinámicas
- **Sistema de Internacionalización (i18n)** - Soporte completo para Español e Inglés
- **Google Fonts (Poppins)** - Tipografía moderna y legible
- **Font Awesome** - Iconografía vectorial
- **Intersection Observer API** - Animaciones optimizadas al scroll

## Funcionalidades Especiales

### Sistema de Traducción Multiidioma
-  **Español/Inglés**: Cambio dinámico de idioma sin recarga
-  **Persistencia**: Recordar preferencia de idioma del usuario
-  **Cobertura completa**: Todos los elementos traducidos

### Características de UX/UI
-  **Diseño Responsive**: Optimizado para todos los dispositivos
-  **Animaciones suaves**: Transiciones y efectos visuales atractivos
-  **FAQ Interactivas**: Sistema de preguntas frecuentes expandibles
-  **Animaciones de contadores**: Estadísticas que cobran vida
-  **Efectos Parallax**: Experiencia visual inmersiva

## Estructura del Proyecto

```
ChroniCaree-Landing/
├── index.html
├── README.md
└── src/
    ├── assets/
    │   └── img/
    │       └── log chroniCare.png
    ├── js/
    │   ├── i18n.js                 # Sistema de internacionalización
    │   ├── lang-toggle.js          # Componente de cambio de idioma
    │   ├── script.js               # Funcionalidades principales
    │   ├── faq-fix.js              # Sistema de FAQs
    │   └── translations/
    │       ├── es.json             # Traducciones en español
    │       └── en.json             # Traducciones en inglés
    └── styles/
        └── styles.css              # Estilos principales
```

## Secciones de la Landing Page

1. **Hero Section**: Presentación principal con call-to-action
2. **About Us**: Misión, visión, valores y estadísticas
3. **Historia**: Timeline evolutivo de ChroniCaree
4. **Team**: Presentación del equipo fundador
5. **Services**: Soluciones para pacientes y hospitales
6. **Testimonials**: Testimonios reales de usuarios
7. **FAQ**: Preguntas frecuentes categorizadas
8. **Footer**: Información de contacto y enlaces

## Instalación y Uso

### Requisitos Previos
- Navegador web moderno
- Servidor local (opcional para desarrollo)

### Instalación
1. Clona el repositorio:
   ```bash
   git clone https://github.com/UPC-PRE-1ASI0729-7391-ChroniCaree/ChroniCaree-Landing.git
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd ChroniCaree-Landing
   ```

3. Abre `index.html` en tu navegador o ejecuta un servidor local:
   ```bash
   # Opción 1: Python
   python -m http.server 8000
   
   # Opción 2: Node.js
   npx serve .
   ```

4. Visita `http://localhost:8000` en tu navegador

## Características Técnicas

### Sistema de Internacionalización
- **Carga dinámica**: Los archivos JSON se cargan bajo demanda
- **Fallback system**: Sistema de respaldo en caso de error
- **Cache inteligente**: Optimización de rendimiento
- **Persistencia**: LocalStorage para recordar preferencias

### Optimizaciones de Rendimiento
- **Lazy loading**: Carga diferida de elementos no críticos
- **Intersection Observer**: Animaciones optimizadas
- **CSS optimizado**: Uso eficiente de propiedades modernas
- **JavaScript modular**: Código organizado y mantenible

## Navegadores Compatibles
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Equipo de Desarrollo

- **Andreow Jomark Santiago Peña** - CEO & Fundador
- **Carlos Alberto Lopez Goitia** - CTO & Co-fundador
- **Gustavo Esau Huanca Navarro** - CMO & Especialista Médico
- **Rodrigo Alcántara Alania** - UX/UI Designer
- **Samuel Valverde Gutierrez** - Lead Developer

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

- **Website**: https://chronicaree.netlify.app/
- **Email**: info@chronicaree.com
- **Teléfono**: +51 987 654 321
- **Ubicación**: Lima, Perú

---

**© 2025 ChroniCaree by Chronisys. Todos los derechos reservados.**

*Transformando el cuidado de enfermedades crónicas a través de tecnología innovadora y centrada en el paciente.*
