# Mejora de Experiencia de Usuario con Animaciones y Transiciones en eCommerce

En el contexto de un proyecto de eCommerce utilizando VTEX IO, el objetivo es mejorar la experiencia de usuario mediante la aplicación consciente de animaciones y transiciones en microinteracciones. El proyecto involucra un motor de búsqueda de productos, un carrito de compras y una sección de checkout. Los actores involucrados son el usuario final, el sistema de búsqueda, el carrito de compras y el sistema de checkout. Las animaciones deben ser suaves, no deben afectar la performance del sitio y deben ser consistentes con la UX definida en el proyecto.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | vtex-io-microinteracciones |
| **Nivel** | advanced-l3 |
| **Tipo** | practical |
| **Tiempo estimado** | 2 semanas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Un IDE o editor de código.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Verifica que el proyecto arranca sin errores.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Análisis de UX y Selección de Microinteracciones

**Objetivo:** Identificar las microinteracciones clave que pueden beneficiarse de animaciones y transiciones para mejorar la experiencia de usuario.

**Tiempo estimado:** 3 días

**Instrucciones:**

- Revisa la UX actual del proyecto y selecciona al menos tres microinteracciones que podrían mejorar con animaciones.
- Documenta las microinteracciones seleccionadas y describe cómo las animaciones y transiciones pueden mejorar la experiencia de usuario.

**Entregable:** Documento que detalla las microinteracciones seleccionadas y la propuesta de mejora con animaciones y transiciones.

<details>
<summary>Pistas de conocimiento</summary>

- Considera el impacto de las animaciones en la percepción del usuario.
- Evalúa la consistencia de las animaciones con la UX definida.

</details>

### Fase 2: Implementación de Animaciones y Transiciones

**Objetivo:** Implementar las animaciones y transiciones seleccionadas en las microinteracciones identificadas.

**Tiempo estimado:** 1 semana

**Instrucciones:**

- Desarrolla las animaciones y transiciones para las microinteracciones seleccionadas.
- Asegura que las animaciones sean suaves y no afecten la performance del sitio.

**Entregable:** Código implementado con las animaciones y transiciones en las microinteracciones seleccionadas.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza herramientas y librerías adecuadas para la implementación de animaciones.
- Prueba las animaciones en diferentes dispositivos y navegadores.

</details>

### Fase 3: Evaluación y Optimización

**Objetivo:** Evaluar el impacto de las animaciones y transiciones en la experiencia de usuario y optimizar según sea necesario.

**Tiempo estimado:** 4 días

**Instrucciones:**

- Realiza pruebas de usuario para evaluar el impacto de las animaciones y transiciones en la experiencia de usuario.
- Identifica áreas de mejora y optimiza las animaciones y transiciones según sea necesario.

**Entregable:** Informe de evaluación con resultados de las pruebas de usuario y recomendaciones de optimización.

<details>
<summary>Pistas de conocimiento</summary>

- Considera el feedback de los usuarios para identificar áreas de mejora.
- Evalúa el impacto de las animaciones en la performance del sitio.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son las microinteracciones y por qué son importantes en la experiencia de usuario?
- **paraQueSirve**: ¿Cómo pueden las animaciones y transiciones mejorar la experiencia de usuario en un proyecto de eCommerce?
- **comoSeUsa**: ¿Cómo implementaste las animaciones y transiciones en las microinteracciones seleccionadas?
- **erroresComunes**: ¿Qué errores comunes encontraste al implementar animaciones y transiciones y cómo los solucionaste?
- **queDecisionesImplica**: ¿Qué decisiones tomaste al seleccionar y optimizar las animaciones y transiciones?

## Criterios de Evaluacion

- Identificación correcta de microinteracciones críticas para mejorar la experiencia de usuario.
- Implementación efectiva de animaciones y transiciones que mejoren la experiencia de usuario sin afectar la performance del sitio.
- Evaluación y optimización basada en feedback de usuarios y pruebas de performance.

## Como trabajar con un asistente de IA

Hay dos caminos, elegi uno:

- **AGENTS.md** (recomendado) — instrucciones nativas del repo. Abri esta carpeta con tu agente local (Claude Code, Cursor, Codex, Copilot, Gemini) y las carga solo. Sabe que archivos faltan y con que comando se verifica, y completa el scaffold escribiendo en disco.
- **PROMPT_MEJORA.md** — para copiar y pegar en un chat (claude.ai, ChatGPT). Devuelve un ZIP con el proyecto. Sirve si no tenes un agente en el IDE.

Ninguno de los dos resuelve las fases del reto: eso es tu trabajo.

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install && npx tsc --noEmit
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
