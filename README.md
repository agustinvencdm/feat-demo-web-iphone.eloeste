# iPhone el Oeste — Demo Web
### Desarrollado por VitaDev

---

## Estructura de archivos

```
iphone_eloeste_site/
├── index.html    → Estructura HTML
├── styles.css    → Todos los estilos
├── main.js       → Interacciones y animaciones
└── README.md     → Este archivo
```

---

## Cómo abrirlo en VS Code

1. Abrí VS Code
2. Arrastrá la carpeta `iphone_eloeste_site` al editor
3. Instalá la extensión **Live Server** (si no la tenés)
   - Ir a Extensions (Ctrl+Shift+X)
   - Buscar "Live Server" de Ritwick Dey
   - Instalar
4. Click derecho en `index.html` → **Open with Live Server**
5. Se abre en el navegador automáticamente 🚀

---

## Qué personalizar para el cliente

### En `index.html`
| Qué           | Dónde buscar                        |
|---------------|-------------------------------------|
| Precios       | Sección `#productos` → `.product-price` |
| Productos     | Sección `#productos` → `.product-card`  |
| Testimonios   | Sección `.section-testimonios`          |
| Horarios      | Footer → `.footer-info`                 |

### En `main.js`
| Variable            | Qué hace                              |
|---------------------|---------------------------------------|
| `WHATSAPP_NUMBER`   | Número de WhatsApp del negocio        |

### En `styles.css`
| Variable CSS    | Qué controla                          |
|-----------------|---------------------------------------|
| `--accent`      | Color verde lima (color principal)    |
| `--black`       | Fondo oscuro                          |
| `--white`       | Color de texto principal              |

---

## Funcionalidades incluidas

- ✅ Navbar fija con scroll effect
- ✅ Hero con mockup de productos
- ✅ Stats bar animada
- ✅ Catálogo de productos (cards clickeables → abren WhatsApp)
- ✅ Sección de servicios
- ✅ Plan canje (2 opciones)
- ✅ Testimonios
- ✅ CTA final con botón WhatsApp e Instagram
- ✅ Animaciones al hacer scroll (Intersection Observer)
- ✅ Diseño 100% responsive (mobile friendly)
- ✅ Banner de demo (borrar antes de entregar al cliente)

---

## Para borrar el banner de demo

En `index.html`, eliminá esta línea:
```html
<div class="demo-banner">⚡ DEMO — Desarrollado por VitaDev para iPhone el Oeste</div>
```

Y en `styles.css`, eliminá el bloque `.demo-banner { ... }`.

---

Desarrollado por **VitaDev** · vitadev.com.ar
