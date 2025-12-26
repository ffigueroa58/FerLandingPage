# CLAUDE.md - Contexto del Proyecto

## Resumen del Proyecto

Landing page profesional para **Fernando Figueroa Reynoso**, especialista en automatizacion de procesos con 26 anos de experiencia. El objetivo es vender servicios freelance via WhatsApp.

## Stack Tecnologico

- **HTML + CSS + JavaScript** (sin frameworks)
- **Tailwind CSS** via CDN
- **tsParticles** para animaciones de fondo
- **Google Fonts** (Inter)

## Estructura de Archivos

```
FerLandingPage/
├── index.html          # Landing page principal
├── css/
│   └── styles.css      # Estilos adicionales
├── js/
│   └── main.js         # Temas, animaciones, interactividad
├── assets/
│   └── img/            # (pendiente foto profesional)
├── recordatorio.md     # Estrategia y contenido acordado
├── PLANTILLA_DEMO.md   # Texto para revision UX
└── CLAUDE.md           # Este archivo
```

## Funcionalidades Implementadas

### Sistema de Temas (5 temas)
- Cyber Dark (default) - Azul tecnologico
- Midnight Gold - Negro con dorado
- Ocean Deep - Azul oceano
- Matrix Green - Verde
- Clean Light - Tema claro

**Controles:** Boton flotante superior izquierdo, tecla "T"

### Sistema de Animaciones (6 tipos)
- Red Neuronal (default) - Particulas conectadas
- Burbujas - Esferas subiendo
- Estrellas - Puntos brillantes
- Matrix - Lluvia de particulas
- Ondas - Movimiento lateral
- Nieve - Particulas cayendo

**Controles:** Boton flotante debajo del tema, tecla "A"

### Secciones de la Landing
1. Hero - Headline orientado al dolor del cliente
2. Problema/Solucion - Cards comparativos
3. Resultados - Metricas reales (96%, 9.5M, 92%, 99.8%)
4. Servicios - 4 cards orientados a problemas
5. Casos de Exito - 3 casos (Telefonica x2, CONTATECH)
6. Stack Tecnologico - 12 tecnologias
7. Sobre Mi - Bio + contacto
8. Testimonio - Quote (placeholder)
9. CTA Final - WhatsApp
10. Footer + Boton flotante WhatsApp

## Cambios UX Implementados (Ultima Sesion)

Siguiendo recomendaciones de ingeniero UX:

1. **Hero:** Cambiado de "No automatizo tareas..." a "¿Tu equipo pierde horas en procesos que deberian tomar minutos?"

2. **CTAs mejorados:**
   - Nav: "Contactar" → "Consulta Gratis"
   - Hero: "Conversemos sobre tu proyecto" → "Agenda tu diagnostico gratuito"
   - Final: "Conversemos por WhatsApp" → "Agendar consulta gratuita (15 min)"

3. **Servicios:** Cambiados de features a problemas del cliente
   - "Automatizacion de Flujos" → "Mi equipo pasa horas en tareas repetitivas"

4. **Testimonio:** Agregada seccion con quote placeholder

5. **Micro-copy:** Agregado "Respuesta en menos de 24 horas", "Sin compromiso"

## Pendientes

- [ ] Obtener foto profesional (600x600px, JPG/PNG)
- [ ] Obtener testimonio real de cliente
- [ ] Feedback del ingeniero UX sobre PLANTILLA_DEMO.md
- [ ] Deploy a Netlify/Vercel
- [ ] Dominio personalizado (opcional)

## Datos de Contacto (para CTAs)

- **WhatsApp:** +51 939 922 418
- **Email:** ffigueroa58@gmail.com
- **LinkedIn:** /in/fernandofigueroareynoso
- **Ubicacion:** Lima, Peru

## Comandos Utiles

```bash
# Abrir en navegador (Windows)
start index.html

# Servidor local simple (si tienes Python)
python -m http.server 8000
```

## Notas Tecnicas

- Las particulas usan tsParticles v2.9.3 (estable)
- El contenedor de particulas tiene `z-index: 1` y `pointer-events: none`
- Los temas y animaciones se guardan en `localStorage`
- Mobile menu se genera dinamicamente via JS
