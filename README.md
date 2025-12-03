# Landing Page - Amira cumple 1 año

Landing page mobile-first con React + Vite para el primer cumpleaños de Amira, con 10 sugerencias de regalos, animaciones optimizadas y diseño infantil mágico estilo Plim Plim.

## Características

- **100% Mobile-First Responsive**: Optimizado desde 320px hasta escritorios grandes
- **Animaciones Fluidas**: Framer Motion con animaciones GPU-accelerated
- **Accesibilidad**: Support para prefers-reduced-motion y navegación por teclado
- **Performance**: Touch targets mínimo 44px, lazy loading de animaciones
- **10 Sugerencias de Regalos**: Basadas en desarrollo motor y cognitivo para bebés de 1 año

## Stack Tecnológico

- **React 18**: Framework UI
- **Vite**: Build tool ultra-rápido
- **Framer Motion**: Librería de animaciones optimizadas
- **CSS Modules**: Estilos mobile-first con variables CSS
- **Google Fonts**: Baloo 2, Fredoka, Quicksand

## Estructura del Proyecto

```
amira-landing/
├── public/
│   └── logo_amira.png
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── ParentsMessage.jsx
│   │   ├── GiftCard.jsx
│   │   ├── GiftSection.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── gifts.js
│   ├── styles/
│   │   ├── globals.css
│   │   └── animations.js
│   ├── App.jsx
│   └── main.jsx
├── vercel.json
└── package.json
```

## Comandos

### Desarrollo Local
```bash
cd amira-landing
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Build de Producción
```bash
npm run build
```

### Preview del Build
```bash
npm run preview
```

## Deploy en Vercel

### Opción 1: Desde la interfaz web de Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Click en "New Project"
3. Importa tu repositorio de GitHub
4. Vercel detectará automáticamente que es un proyecto Vite
5. Click en "Deploy"

### Opción 2: Desde la CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desde la carpeta amira-landing
cd amira-landing
vercel
```

## Personalización

### Cambiar las sugerencias de regalos
Edita el archivo `src/data/gifts.js`

### Cambiar colores
Edita las variables CSS en `src/styles/globals.css`

### Cambiar animaciones
Edita los variants en `src/styles/animations.js`

### Cambiar el enlace de ubicación
Edita el href en `src/components/CTA.jsx`

## Paleta de Colores

- **Cielo**: #4BA9DC → #79C4E3 (degradado)
- **Verde**: #2E772B, #398C39, #C3CF4E
- **Amarillo**: #F0E269, #F9F3C6
- **Rosa**: #E281ED
- **Naranja**: #D36B29
- **Rojo suave**: #E7554B
- **Morados**: #B36DE8, #8C54C7

## Breakpoints

- **Mobile**: 320px - 639px (base)
- **Tablet**: 640px - 1023px
- **Desktop**: 1024px+

## Mejores Prácticas Implementadas

- Media queries con `min-width` (mobile-first)
- CSS `clamp()` para tipografía fluida
- Solo animaciones GPU-accelerated (transform, opacity)
- `useInView` para lazy load de animaciones
- `useReducedMotion` para accesibilidad
- Touch targets mínimo 48px
- Semantic HTML

## Licencia

Proyecto personal para el cumpleaños de Amira.

## Autor

Creado con React, Vite y Framer Motion siguiendo las mejores prácticas de 2025.
# Amira_1
