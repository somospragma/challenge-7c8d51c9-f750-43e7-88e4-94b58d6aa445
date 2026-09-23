# AGENTS.md

Instrucciones para el agente de IA que abra este repositorio (Claude Code, Cursor, Codex, Copilot, Gemini). Se cargan solas: no hay que pegar nada en ningun chat.

## Que es este repositorio

Es el codigo base de un reto de aprendizaje de Pragma: **Mejora de Experiencia de Usuario con Animaciones y Transiciones en eCommerce**.

| | |
|---|---|
| Tema | vtex-io-microinteracciones |
| Nivel | advanced-l3 |
| Chapter | Frontend |
| Especialidad | VTEX IO |
| Stack | TypeScript 5.4 / VTEX IO Store Framework |
| Patron arquitectonico | componentes reutilizables con patrones de animación declarativos (CSS/JS) |
| Tiempo estimado | 2 semanas |

## Receta del stack

Esqueleto obligatorio:

- `manifest.json en la raiz (declara vendor, name, builders)`
- `store/blocks con la composicion de bloques`
- `store/interfaces.json`
- `react/ con los componentes`
- `styles/configs con los CSS Handles`

Dependencias:

- vtex.styleguide 9.x
- @vtex/api n/a
- react 18.2.0
- react-dom 18.2.0
- @types/react 18.2.0
- @types/react-dom 18.2.0
- typescript 5.4.5
- framer-motion n/a

## Tu tarea

Dejar este proyecto en estado **verificable**: que el comando de verificacion corra sin errores. Escribi los archivos en disco, en este repositorio. No generes ZIPs ni archivos adjuntos.

En orden:

1. Corre `npm install && npx tsc --noEmit` y mira que falla.
2. Completa lo que falte de la lista de abajo: manifiesto de dependencias, punto de entrada, capa de interfaz y las capas del patron declarado.
3. Arregla SOLO los errores que impiden compilar o arrancar.
4. Volve a correr `npm install && npx tsc --noEmit` hasta que pase.
5. Pará ahí.

## Regla dura: las fases son trabajo del humano

**PROHIBIDO implementar los entregables de las fases.** El valor del reto esta en que la persona los resuelva. Tu trabajo es que tenga un proyecto que arranca; el hueco pedagogico se queda como esta.

No resuelvas nada de esto:

- **Fase 1 — Análisis de UX y Selección de Microinteracciones**: Documento que detalla las microinteracciones seleccionadas y la propuesta de mejora con animaciones y transiciones.
- **Fase 2 — Implementación de Animaciones y Transiciones**: Código implementado con las animaciones y transiciones en las microinteracciones seleccionadas.
- **Fase 3 — Evaluación y Optimización**: Informe de evaluación con resultados de las pruebas de usuario y recomendaciones de optimización.

Distincion operativa:

- **Arreglar** (si): import faltante, tipo que no existe, dependencia sin declarar, error de sintaxis, archivo referenciado que no existe.
- **No tocar** (no): logica de negocio incompleta, validaciones ausentes, secretos hardcodeados, APIs deprecadas que funcionan, concurrencia insegura, patrones mejorables. Eso es lo que la persona tiene que encontrar.

## Lo que falta y tenes que completar

No se detectaron huecos: estan los archivos declarados, el boilerplate del stack y ninguna referencia quedo colgando. Igual corre el comando de verificacion — que los archivos existan no garantiza que compilen.

### Presentes (13)

- `tsconfig.json`
- `manifest.json`
- `store/interfaces.json`
- `store/blocks/search.json`
- `store/blocks/cart.json`
- `store/blocks/checkout.json`
- `react/components/Search/SearchAnimation.tsx`
- `react/components/Cart/CartAnimation.tsx`
- `react/components/Checkout/CheckoutAnimation.tsx`
- `react/hooks/useAnimation.ts`
- `react/utils/performance.ts`
- `styles/configs/animations.css`
- `README.md`

### Capas del patron declarado

Cada una tiene que existir como directorio real con al menos un archivo. Codigo plano en la raiz no satisface el patron.

- `react/`
- `react/components/`
- `react/components/Search/`
- `react/components/Cart/`
- `react/components/Checkout/`
- `react/hooks/`
- `react/utils/`
- `styles/`
- `styles/configs/`
- `store/`
- `store/blocks/`

## Verificacion

```bash
npm install && npx tsc --noEmit
```

Ese comando pasando es la definicion de "terminado" para vos.

## Convenciones que tenes que respetar

- Un solo ecosistema: no declares librerias de otro lenguaje ni mezcles gestores de paquetes.
- Toda libreria que uses tiene que estar declarada en el manifiesto de dependencias.
- Todo import declarado tiene que usarse; todo tipo usado tiene que existir o venir de una dependencia declarada.
- El patron es **componentes reutilizables con patrones de animación declarativos (CSS/JS)**: los contratos (interfaces, puertos) los define la capa interna y los implementa la externa, nunca al revés.
- Los archivos que crees llevan implementacion real, no stubs: sin `TODO`, sin cuerpos vacios, sin `// getters y setters`.

## Contexto del candidato

Sirve para calibrar el nivel del codigo, no para resolver las fases.

- Perfil: Chapter Frontend, Especialidad eCommerce, Tecnología Vtex, Advanced
- Brecha que el reto ataca: Aplica conscientemente conceptos de animaciones y transiciones orientadas a microinteracciones y alineadas con la UX definida en el proyecto.
- Mision: Candidato con experiencia avanzada en eCommerce, trabajando en mejora de experiencia de usuario mediante animaciones y transiciones web.

---

*Generado por Challenge Generator — Pragma. `README.md` tiene el enunciado completo del reto para la persona. `PROMPT_MEJORA.md` es la variante para pegar en un chat, si se prefiere ese flujo.*
