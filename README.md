# 📊 Análisis Financiero de Activos - ETL y Dashboard

Plataforma integral de análisis financiero compuesta por un **backend Java Spring Boot** y un **frontend Angular** para procesar, analizar y visualizar datos de activos financieros mediante un pipeline ETL avanzado.

---

## 🎯 Descripción General

Este proyecto integra un ecosistema completo de análisis financiero:

- **BACKEND:** Servicio REST en Spring Boot que gestiona pipelines ETL, cálculos de análisis financiero y mantiene el estado de los datos.
- **FRONTEND:** Aplicación Angular moderna con múltiples módulos especializados para análisis, visualización y gestión de activos.

Proporciona herramientas avanzadas para procesar, analizar y comparar activos financieros con métricas complejas y visualizaciones interactivas.

---

## ✨ Características Principales

### Backend
- ✅ Pipeline ETL robusto con manejo de estado y concurrencia
- ✅ API REST documentada para todas las operaciones
- ✅ Procesamiento eficiente de grandes volúmenes de datos
- ✅ Dockerizado para despliegue en contenedores

### Frontend
- ✅ Dashboard principal con métricas KPI
- ✅ Módulo de Análisis con cálculos financieros
- ✅ Gestión de Activos con tablas interactivas
- ✅ Análisis de Similitud entre activos
- ✅ Visualizaciones avanzadas con gráficas
- ✅ Ordenamiento y filtrado de datos
- ✅ Generación de reportes en PDF
- ✅ Manejo robusto de errores con interceptores HTTP

---

## 📁 Estructura del Repositorio

```
ANALISIS-FINANCIERO-ACTIVOS/
├── BACKEND/
│   ├── src/main/java/com/uniquindio/etl/
│   │   ├── service/          # Servicios de negocio ETL
│   │   └── ...
│   ├── pom.xml              # Dependencias Maven
│   ├── Dockerfile           # Imagen Docker
│   └── README.md
├── FRONTEND/
│   ├── src/app/
│   │   ├── features/        # Módulos feature (Dashboard, Activos, Análisis, etc.)
│   │   ├── core/            # Servicios, interceptores, configuración
│   │   ├── shared/          # Componentes compartidos
│   │   └── app.routes.ts    # Rutas principales
│   ├── package.json         # Dependencias npm
│   ├── angular.json         # Configuración Angular
│   ├── proxy.conf.json      # Proxy para desarrollo
│   ├── vercel.json          # Configuración Vercel
│   └── README.md
├── CONTEXTO-IMPLEMENTACION.md
├── Contexto-proyecto.sty
└── README.md (este archivo)
```

---

## 🚀 Guía de Inicio Rápido

### Requisitos Previos
- **Java 17+** (Backend)
- **Node.js 20+** y npm (Frontend)
- **Docker** (opcional, para containerización)

### Backend

```bash
cd BACKEND
mvn clean install
mvn spring-boot:run
```

El backend estará disponible en `http://localhost:8080`

### Frontend

```bash
cd FRONTEND
npm install
npm start
```

El frontend estará disponible en `http://localhost:4200` (con proxy a backend en puerto 8080)

---

## 🔌 API del Backend

### Endpoints Principales

| Método | Ruta | Descripción |
|--------|------|------------|
| `GET` | `/etl/status` | Obtiene el estado actual del ETL |
| `POST` | `/etl/run` | Ejecuta manualmente el pipeline ETL |
| `GET` | `/etl/results` | Recupera los resultados del último ETL |
| `GET` | `/activos` | Lista todos los activos procesados |
| `POST` | `/analisis` | Ejecuta análisis sobre datos |

---

## 🎨 Módulos del Frontend

### Dashboard (`dashboard`)
Panel principal con métricas clave, indicadores KPI y estado general del sistema.

### Activos (`activos`)
Gestión completa de activos financieros con tablas, filtros y operaciones CRUD.

### Análisis (`analisis`)
Módulo de análisis financiero avanzado con cálculos complejos.

### Visualizaciones (`visualizaciones`)
Gráficas interactivas, series temporales y representaciones visuales de datos.

### Similitud (`similitud`)
Análisis comparativo de similitud entre diferentes activos.

### Ordenamiento (`ordenamiento`)
Herramientas de ordenamiento y clasificación de activos.

---

## 🛠️ Tecnologías Utilizadas

### Backend
- **Spring Boot 3.x**
- **Java 17+**
- **Maven**
- **Docker**

### Frontend
- **Angular 21**
- **TypeScript**
- **Angular Material/UI Components**
- **RxJS**
- **npm**

---

## 📝 Documentación Adicional

- **[CONTEXTO-IMPLEMENTACION.md](CONTEXTO-IMPLEMENTACION.md)** - Detalles de diseño, arquitectura y decisiones técnicas
- **[BACKEND/README.md](BACKEND/README.md)** - Guía específica del backend
- **[FRONTEND/README.md](FRONTEND/README.md)** - Guía específica del frontend

---

## 🐛 Troubleshooting

### Problema: CORS
Si hay errores de CORS, verifica que el `proxy.conf.json` esté correctamente configurado.

### Problema: Puerto en uso
- Backend: Cambia el puerto en `application.properties`
- Frontend: Ejecuta con `ng serve --port 4201`

### Problema: Dependencias
```bash
# Backend
mvn clean install -U

# Frontend
rm -rf node_modules package-lock.json
npm install
```

---

## 📧 Contacto

**Universidad del Quindío** - Programa de Ingeniería de Sistemas
**Proyecto:** Análisis Financiero de Activos
**Repositorio:** https://github.com/Luistorres1221/ANALISIS-FINANCIERO-ACTIVOS

---

## 📜 Licencia

Este proyecto es desarrollado como parte de un proyecto académico en la Universidad del Quindío.

---

**Última actualización:** Mayo 13, 2026
| `GET` | `/etl/symbols` | Lista de activos disponibles. |
| `GET` | `/etl/dataset` | Dataset consolidado con series históricas. |
| `GET` | `/etl/analysis` | Resultados de análisis financiero. |
| `GET` | `/etl/similarity` | Métricas de similitud entre activos. |
| `GET` | `/etl/series` | Series de retornos alineadas. |

> Algunos endpoints pueden devolver `503` cuando no hay datos listos tras una ejecución de ETL.

---

## Frontend — comportamiento

- El frontend consulta `GET /etl/status` de manera periódica para mantener el estado sincronizado.
- Cuando el ETL está en estado `LISTO`, carga datos de métricas, tablas y gráficas.
- La UI permite iniciar el ETL y refrescar resultados desde el dashboard.
- La paleta de colores del frontend se centraliza en `FRONT-END/src/styles.css`.

---

## Requisitos

- Java 17+ compatible con Spring Boot.
- Maven para el backend.
- Node.js y npm para el frontend.

---

## Ejecución local

### Backend

```bash
cd BACK-END
./mvnw spring-boot:run
```

El servidor se inicia en `http://localhost:8080`.

### Frontend

```bash
cd FRONT-END
npm install
npm start
```

Abrir `http://localhost:4200` en el navegador.

---

## Comandos útiles

- Construir el frontend:

```bash
cd FRONT-END
npm run build
```

- Ejecutar pruebas unitarias del frontend:

```bash
cd FRONT-END
npm test
```

---

## Configuraciones comunes

- Cambiar la URL del backend: `FRONT-END/src/environments/environment.ts` y `FRONT-END/src/environments/environment.production.ts`.
- Modificar el proxy de desarrollo de Angular: `FRONT-END/proxy.conf.json`.
- Ajustar el ETL programado: `BACK-END/src/main/resources/application.properties`.

---

## Recursos adicionales

- `CONTEXTO-IMPLEMENTACION.md`: documentación técnica detallada.
- `Contexto-proyecto.sty`: archivo documental en LaTeX.

---

## Estado del proyecto

Proyecto preparado para ejecución local con backend y frontend integrados. La arquitectura separa claramente el procesamiento ETL en Java del frontend de visualización en Angular.
