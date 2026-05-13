# Análisis financiero — ETL y Dashboard

Proyecto compuesto por un **backend Java Spring Boot** y un **frontend Angular 21** para procesar datos financieros mediante un pipeline ETL y visualizar los resultados en un dashboard interactivo.

---

## Descripción general

Esta solución integra dos módulos principales:

- **BACK-END:** servicio Spring Boot que ejecuta el ETL, mantiene el estado en memoria y expone una API REST para análisis.
- **FRONT-END:** aplicación Angular que consume los datos del backend y presenta un dashboard con métricas, tablas y gráficas.

El frontend utiliza rutas por feature y un esquema de estilo centralizado para mantener consistencia visual.

---

## Características principales

- Ejecución de pipeline ETL con control de estado y concurrencia.
- API REST `/etl` para consulta de estado, ejecución de ETL y recuperación de resultados.
- Dashboard financiero con:
  - métricas clave
  - gráficas de series temporales
  - comparaciones de similitud
  - tablas ordenables y filtros.
- Desarrollo con proxy para integración local entre Angular y Spring Boot.
- Paleta de colores actualizada en el frontend para una presentación más vibrante.

---

## Estructura del repositorio

| Carpeta | Contenido |
| --- | --- |
| `BACK-END/` | Servicio Spring Boot, lógica ETL, endpoints REST. |
| `FRONT-END/` | Aplicación Angular 21, UI y consumo de la API. |
| `CONTEXTO-IMPLEMENTACION.md` | Detalles de diseño y arquitectura. |
| `Contexto-proyecto.sty` | Documento adicional en formato LaTeX. |

---

## API del backend

El backend expone los siguientes endpoints bajo `/etl`:

| Método | Ruta | Descripción |
| --- | --- | --- |
| `GET` | `/etl/status` | Estado del ETL, última actualización y versión de datos. |
| `GET` | `/etl/run` | Ejecuta manualmente el pipeline ETL. |
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
