# Santoshidevi - Yoga & Bienestar

Aplicación web moderna y responsive (SPA) para la marca de yoga Santoshidevi. Esta plataforma muestra cursos de yoga, productos, clases online y servicios de bienestar.

## 🌐 Sitio en Vivo

**URL de Producción:** [https://santoshidevi.vercel.app/](https://santoshidevi.vercel.app/)

> **Estado Actual:** Versión inicial con contenido placeholder. En espera de que el cliente complete el brief con contenido real.

---

## 📋 Estado del Proyecto

- ✅ **Estructura base implementada** - Componentes React y arquitectura lista
- ✅ **Diseño y tema configurado** - Colores y estilos apropiados para yoga
- ✅ **Traducciones ES/EN** - Sistema de internacionalización configurado
- ✅ **Deployado en Vercel** - Disponible en producción
- ⏳ **Pendiente:** Contenido real del cliente (brief en proceso)

---

## ✨ Características

- **Soporte multi-idioma** (Español/Inglés) con i18next
- **Diseño responsive** - Se adapta a todos los dispositivos
- **Showcase de productos/servicios** - Clases, cursos, productos de yoga
- **Secciones incluidas:**
  - Hero con llamados a la acción (CTA)
  - Acerca de (historia y misión)
  - Productos y servicios
  - Sección de contacto
- **Paleta de colores inspirada en yoga** - Sage, púrpura profundo, lotus, tierra

---

## 🛠️ Stack Tecnológico

- **React 18** - Librería de UI
- **Vite** - Build tool y dev server
- **Styled Components** - CSS-in-JS para estilos
- **i18next** - Internacionalización (ES/EN)
- **React Icons** - Iconografía

---

## 💻 Desarrollo Local

### Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# El sitio estará disponible en http://localhost:5173
```

### Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Preview del build
npm run lint     # Linter ESLint
```

---

## 🚀 Deployment

### Configuración de Vercel

El proyecto está conectado a Vercel con auto-deploy desde GitHub:

- **Repositorio:** [https://github.com/Nubiru/santoshidevi](https://github.com/Nubiru/santoshidevi)
- **Branch principal:** `main`
- **Framework detectado:** Vite
- **Build command:** `npm run build`
- **Output directory:** `dist`

### Proceso de Deploy

Cada push a la rama `main` dispara automáticamente:
1. Build en Vercel
2. Deploy a producción
3. URL actualizada en [santoshidevi.vercel.app](https://santoshidevi.vercel.app/)

---

## 📁 Estructura del Proyecto

```
santoshidevi/
├── src/
│   ├── components/
│   │   ├── layout/          # NavBar, Footer, TopBanner
│   │   ├── sections/        # Hero, About, Products, Services, Contact
│   │   └── styles/          # Styled components
│   ├── data/
│   │   ├── NavItems.jsx     # Items de navegación
│   │   └── ProductItems.jsx # Productos y servicios
│   ├── translations/
│   │   ├── en/global.json   # Traducciones en inglés
│   │   └── es/global.json   # Traducciones en español
│   ├── hooks/               # React hooks personalizados
│   ├── App.jsx              # Componente principal con theme
│   └── main.jsx             # Entry point
├── public/
│   └── images/              # Imágenes e iconos
├── index.html               # HTML template
├── package.json             # Dependencias
└── vite.config.js           # Configuración de Vite
```

---

## 🎨 Paleta de Colores

El tema utiliza una paleta inspirada en yoga y bienestar:

```javascript
{
  white: '#FFFFFF',
  cream: '#FAF5EB',
  sage: '#9CAF88',         // Verde salvia
  deepPurple: '#4B2E83',   // Púrpura profundo
  lotus: '#D8BFD8',        // Rosado lotus
  earth: '#8B7765',        // Tonos tierra
  accent: '#D4AF37'        // Dorado de acento
}
```

---

## 📝 Gestión de Contenido

### Productos y Servicios

Editar `src/data/ProductItems.jsx`:

```javascript
export const ProductItems = [
  {
    thumbnail: './images/ejemplo.jpg',
    title: 'Nombre del Producto',
    tags: ['Tag1', 'Tag2', 'Tag3'],
    paragraph: 'Descripción del producto o servicio',
    codeLink: '#',
    projectLink: '#url-destino',
    projectLinkText: 'Texto del botón'
  },
  // ... más productos
]
```

### Traducciones

Editar `src/translations/es/global.json` y `src/translations/en/global.json`:

```json
{
  "hero": {
    "profession": "{Texto principal}",
    "specialization": "| Texto | Separado | Por | Pipes |",
    "cta1": "Botón primario",
    "cta2": "Botón secundario"
  }
}
```

### Imágenes

Colocar imágenes en `public/images/` y referenciarlas con:
```javascript
thumbnail: './images/nombre-imagen.jpg'
```

---

## 🔄 Próximos Pasos

### Pendiente de Cliente

El cliente está completando los siguientes documentos:
- `BRIEF_CLIENTE_SANTOSHIDEVI.md` - Brief completo (350+ preguntas)
- `CHECKLIST_RAPIDO_CLIENTE.md` - Checklist esencial

### Información Requerida

**Esencial:**
- Logo y colores de marca
- Fotos profesionales (3-5 mínimo)
- Descripción de servicios y precios
- CTA principal (WhatsApp, formulario, etc.)
- Texto "Acerca de mí"
- Redes sociales y contacto

**Recomendado:**
- Testimonios de estudiantes (3-5)
- Referencias de diseño
- Preguntas frecuentes (FAQ)

### Una Vez Recibido el Brief

1. Reemplazar contenido placeholder con contenido real
2. Actualizar `ProductItems.jsx` con servicios reales
3. Actualizar traducciones en `src/translations/`
4. Reemplazar imágenes en `public/images/`
5. Actualizar links de redes sociales y CTAs
6. Commit y push → auto-deploy en Vercel
7. Review con cliente

---

## 🔗 Links Importantes

- **Sitio Web:** [https://santoshidevi.vercel.app/](https://santoshidevi.vercel.app/)
- **Repositorio:** [https://github.com/Nubiru/santoshidevi](https://github.com/Nubiru/santoshidevi)
- **Panel Vercel:** [Vercel Dashboard](https://vercel.com/nubiru/santoshidevi)

---

## 📞 Contacto del Equipo

Para dudas sobre el desarrollo o brief:
- **Desarrollador:** Equipo de desarrollo
- **Estado:** En espera de contenido del cliente

---

## 📄 Licencia

Proyecto privado - © 2026 Santoshidevi

---

**Última actualización:** Enero 2026
**Versión actual:** MVP Placeholder (v0.1)
