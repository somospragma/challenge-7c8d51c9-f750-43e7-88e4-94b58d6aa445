# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener un ZIP con el proyecto completo y arrancable.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Como saber que terminaste

```bash
npm install && npx tsc --noEmit
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Frontend, Especialidad eCommerce, Tecnología Vtex, Advanced

### Brecha de conocimiento
Aplica conscientemente conceptos de animaciones y transiciones orientadas a microinteracciones y alineadas con la UX definida en el proyecto.

### Misión / candidato
Candidato con experiencia avanzada en eCommerce, trabajando en mejora de experiencia de usuario mediante animaciones y transiciones web.

### Reto
- Tema: vtex-io-microinteracciones
- Seniority: advanced-l3
- Tipo: practical
- Título: Mejora de Experiencia de Usuario con Animaciones y Transiciones en eCommerce
- Tiempo estimado: 2 semanas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Análisis de UX y Selección de Microinteracciones — objetivo: Identificar las microinteracciones clave que pueden beneficiarse de animaciones y transiciones para mejorar la experiencia de usuario. — entregable (NO resolver): Documento que detalla las microinteracciones seleccionadas y la propuesta de mejora con animaciones y transiciones.
- Fase 2: Implementación de Animaciones y Transiciones — objetivo: Implementar las animaciones y transiciones seleccionadas en las microinteracciones identificadas. — entregable (NO resolver): Código implementado con las animaciones y transiciones en las microinteracciones seleccionadas.
- Fase 3: Evaluación y Optimización — objetivo: Evaluar el impacto de las animaciones y transiciones en la experiencia de usuario y optimizar según sea necesario. — entregable (NO resolver): Informe de evaluación con resultados de las pruebas de usuario y recomendaciones de optimización.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (ZIP).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "node",
    "strict": true,
    "jsx": "react-jsx",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "allowSyntheticDefaultImports": true,
    "baseUrl": "./",
    "paths": {
      "@vtex/*": ["./node_modules/@vtex/*"],
      "react": ["./node_modules/react"],
      "react-dom": ["./node_modules/react-dom"],
      "@types/*": ["./node_modules/@types/*"],
      "styles/*": ["./styles/*"],
      "react/*": ["./react/*"],
      "store/*": ["./store/*"]
    },
    "lib": ["dom", "dom.iterable", "esnext"],
    "types": ["react", "react-dom", "vtex.styleguide"]
  },
  "include": [
    "react/**/*.ts",
    "react/**/*.tsx",
    "store/**/*.json",
    "styles/**/*.css",
    "manifest.json"
  ],
  "exclude": [
    "node_modules",
    "**/*.spec.ts",
    "**/*.spec.tsx",
    "**/*.stories.tsx"
  ],
  "compileOnSave": false
}

// === ARCHIVO: manifest.json ===
{
  "vendor": "vtex",
  "name": "store-animations",
  "version": "1.0.0",
  "builders": {
    "react": "3.x",
    "store": "4.x",
    "styles": "2.x",
    "docs": "0.x"
  },
  "scripts": {
    "lint": "vtex lint --fix",
    "prettify": "vtex prettify",
    "test": "vtex test"
  },
  "dependencies": {
    "vtex.styleguide": "9.x",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  },
  "peerDependencies": {
    "@vtex/api": "^1.x",
    "framer-motion": "^10.x"
  },
  "settings": {
    "title": "Store Animations",
    "description": "App para manejar animaciones y transiciones en microinteracciones de eCommerce",
    "store-resources": {
      "blocks": [
        "store/blocks/search.json",
        "store/blocks/cart.json",
        "store/blocks/checkout.json"
      ]
    },
    "policies": [
      {
        "name": "search-animation",
        "props": {
          "animationType": {
            "type": "string",
            "enum": ["fade", "slide", "scale", "none"],
            "default": "fade"
          },
          "duration": {
            "type": "number",
            "default": 300
          },
          "delay": {
            "type": "number",
            "default": 0
          }
        }
      },
      {
        "name": "cart-animation",
        "props": {
          "animationType": {
            "type": "string",
            "enum": ["fade", "slide", "bounce", "none"],
            "default": "slide"
          },
          "duration": {
            "type": "number",
            "default": 400
          },
          "easing": {
            "type": "string",
            "default": "ease-in-out"
          }
        }
      },
      {
        "name": "checkout-animation",
        "props": {
          "animationType": {
            "type": "string",
            "enum": ["fade", "flip", "rotate", "none"],
            "default": "fade"
          },
          "duration": {
            "type": "number",
            "default": 500
          },
          "stagger": {
            "type": "number",
            "default": 50
          }
        }
      }
    ],
    "metrics": {
      "performance": {
        "enabled": true,
        "thresholds": {
          "lcp": 2500,
          "fid": 100,
          "cls": 0.1
        }
      }
    }
  },
  "billingOptions": {
    "type": "free"
  }
}


// === ARCHIVO: store/interfaces.json ===
{
  "search": {
    "type": "object",
    "properties": {
      "query": {
        "type": "string"
      },
      "results": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "price": {
              "type": "number"
            }
          }
        }
      }
    }
  },
  "cart": {
    "type": "object",
    "properties": {
      "items": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "quantity": {
              "type": "number"
            },
            "price": {
              "type": "number"
            }
          }
        }
      }
    }
  }
}

// === ARCHIVO: store/blocks/search.json ===
{
  "type": "search",
  "components": [
    {
      "type": "search-input",
      "props": {
        "placeholder": "Buscar productos..."
      }
    },
    {
      "type": "search-results",
      "props": {
        "animation": "fade-in"
      }
    }
  ]
}

// === ARCHIVO: store/blocks/cart.json ===
{
  "type": "cart",
  "components": [
    {
      "type": "cart-summary",
      "props": {
        "animation": "slide-in"
      }
    },
    {
      "type": "cart-items",
      "props": {
        "animation": "fade-in"
      }
    }
  ]
}

// === ARCHIVO: store/blocks/checkout.json ===
{
  "name": "checkout",
  "blocks": [
    {
      "name": "checkout-container",
      "type": "container",
      "blocks": [
        {
          "name": "checkout-header",
          "type": "text-block",
          "content": "Checkout"
        },
        {
          "name": "checkout-summary",
          "type": "checkout-summary-block"
        },
        {
          "name": "checkout-form",
          "type": "form-block"
        },
        {
          "name": "checkout-payment",
          "type": "payment-block"
        },
        {
          "name": "checkout-animation",
          "type": "animation-block",
          "config": {
            "animation": "fadeIn",
            "duration": 0.5,
            "delay": 0
          }
        }
      ]
    }
  ]
}

// === ARCHIVO: react/components/Search/SearchAnimation.tsx ===
import React from 'react';
import { motion } from 'framer-motion';

interface SearchAnimationProps {
  query: string;
  results: Array<{ id: string; name: string; }>;
}

class SearchAnimation extends React.Component<SearchAnimationProps> {
  private readonly query: string;
  private readonly results: Array<{ id: string; name: string; }>;

  constructor(props: SearchAnimationProps) {
    super(props);
    this.query = props.query;
    this.results = props.results;
    if (!this.query) {
      throw new Error('Query cannot be empty');
    }
  }

  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {this.results.map(result => (
          <motion.div
            key={result.id}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {result.name}
          </motion.div>
        ))}
      </motion.div>
    );
  }
}

export default SearchAnimation;

// === ARCHIVO: react/components/Cart/CartAnimation.tsx ===
import React from 'react';
import { motion } from 'framer-motion';

interface CartAnimationProps {
  items: Array<{ id: string; name: string; }>;
}

class CartAnimation extends React.Component<CartAnimationProps> {
  private readonly items: Array<{ id: string; name: string; }>;

  constructor(props: CartAnimationProps) {
    super(props);
    this.items = props.items;
    if (this.items.length === 0) {
      throw new Error('Cart cannot be empty');
    }
  }

  render() {
    return (
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {this.items.map(item => (
          <motion.div
            key={item.id}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {item.name}
          </motion.div>
        ))}
      </motion.div>
    );
  }
}

export default CartAnimation;

// === ARCHIVO: react/components/Checkout/CheckoutAnimation.tsx ===
import React from 'react';
import { motion } from 'framer-motion';

interface CheckoutAnimationProps {
  steps: Array<{ id: string; name: string; }>;
}

class CheckoutAnimation extends React.Component<CheckoutAnimationProps> {
  private readonly steps: Array<{ id: string; name: string; }>;

  constructor(props: CheckoutAnimationProps) {
    super(props);
    this.steps = props.steps;
    if (this.steps.length === 0) {
      throw new Error('Checkout steps cannot be empty');
    }
  }

  render() {
    return (
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {this.steps.map(step => (
          <motion.div
            key={step.id}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {step.name}
          </motion.div>
        ))}
      </motion.div>
    );
  }
}

export default CheckoutAnimation;

// === ARCHIVO: react/hooks/useAnimation.ts ===
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AnimationProps {
  type: string;
  duration: number;
  delay: number;
  easing: string;
}

const defaultProps: AnimationProps = {
  type: 'fade',
  duration: 0.5,
  delay: 0,
  easing: 'easeInOut',
};

export const useAnimation = (props: Partial<AnimationProps> = {}) => {
  const { type = defaultProps.type, duration = defaultProps.duration, delay = defaultProps.delay, easing = defaultProps.easing } = props;
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isAnimating) {
      setTimeout(() => setIsAnimating(false), duration * 1000);
    }
  }, [isAnimating, duration]);

  const startAnimation = () => {
    setIsAnimating(true);
  };

  const animationVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return {
    isAnimating,
    startAnimation,
    animationVariants,
    type,
    duration,
    delay,
    easing,
  };
};

// === ARCHIVO: react/utils/performance.ts ===
import { useEffect, useRef } from 'react';

export const usePerformance = () => {
  const animationFrameRef = useRef<number>(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleAnimationFrame = () => {
      // Simulate a performance check
      console.log('Performance check: Animation frame executed');
      animationFrameRef.current = requestAnimationFrame(handleAnimationFrame);
    };

    animationFrameRef.current = requestAnimationFrame(handleAnimationFrame);

    return () => cancelAnimationFrame(animationFrameRef.current);
  }, []);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('Performance check: Element is in view');
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection);

    return () => observerRef.current?.disconnect();
  }, []);

  return {
    animationFrameRef,
    observerRef,
  };
};

// === ARCHIVO: styles/configs/animations.css ===
@keyframes fade {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

.fade-in {
  animation: fade 0.5s ease-in-out;
}

.slide-in {
  animation: slide 0.5s ease-in-out;
}

.animated {
  will-change: transform, opacity;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.animated:hover {
  transform: scale(1.05);
  opacity: 0.9;
}

// === ARCHIVO: README.md ===
# Proyecto de Mejora de Experiencia de Usuario con Animaciones y Transiciones en eCommerce

## Descripción
Este proyecto tiene como objetivo mejorar la experiencia de usuario en un sitio de eCommerce utilizando VTEX IO mediante la aplicación de animaciones y transiciones en microinteracciones.

## Estructura de Archivos
- `manifest.json`: Configuración del proyecto VTEX IO.
- `store/`: Directorio que contiene la estructura de la tienda.
  - `interfaces.json`: Definición de interfaces para los bloques de la tienda.
  - `blocks/`: Directorio que contiene los bloques de la tienda.
    - `search.json`: Configuración del bloque de búsqueda.
    - `cart.json`: Configuración del bloque de carrito.
    - `checkout.json`: Configuración del bloque de checkout.
- `react/`: Directorio que contiene los componentes React.
  - `components/`: Directorio que contiene los componentes de la UI.
    - `Search/`: Directorio que contiene el componente de búsqueda.
      - `SearchAnimation.tsx`: Componente de animación para la búsqueda.
    - `Cart/`: Directorio que contiene el componente de carrito.
      - `CartAnimation.tsx`: Componente de animación para el carrito.
    - `Checkout/`: Directorio que contiene el componente de checkout.
      - `CheckoutAnimation.tsx`: Componente de animación para el checkout.
  - `hooks/`: Directorio que contiene los hooks personalizados.
    - `useAnimation.ts`: Hook para manejar las animaciones.
  - `utils/`: Directorio que contiene utilidades.
    - `performance.ts`: Utilidad para medir el rendimiento.
- `styles/`: Directorio que contiene los estilos.
  - `configs/`: Directorio que contiene las configuraciones de estilos.
    - `animations.css`: Archivo de configuración de animaciones.

## Comandos de Build
Para compilar y ejecutar el proyecto, utiliza los siguientes comandos:

```
npm install
npx tsc --noEmit
```

## Documentación
Para más información sobre VTEX IO y sus componentes, consulta la [documentación oficial](https://vtex.io/docs/).

## Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
```
