# Sistema de Login - QUANTA LTDA

## Descripción
Se ha implementado un sistema de autenticación completo que protege el acceso al proyecto. El login se muestra antes de acceder al dashboard.

## Características Implementadas

### 1. **Componente de Login** (`src/app/features/login/login.component.*`)
- Interfaz moderna y responsiva con branding de QUANTA LTDA
- Validación de formularios en tiempo real
- Mensajes de error descriptivos
- Loader durante la autenticación
- Diseño atractivo con degradado azul y elementos decorativos

### 2. **Servicio de Autenticación** (`src/app/core/services/authentication.service.ts`)
- Gestión de tokens JWT
- Almacenamiento persistente en localStorage
- Observable de usuario actual
- Estados de autenticación

### 3. **Guard de Rutas** (`src/app/core/guards/auth.guard.ts`)
- Protección de rutas autenticadas
- Redirección automática a login si no hay sesión activa

### 4. **Funcionalidad de Logout**
- Botón "Cerrar Sesión" en la barra superior del layout
- Visualización del nombre del usuario autenticado
- Limpieza de sesión y redirección a login

## Credenciales de Prueba

El sistema incluye tres usuarios de prueba. Usa cualquiera de los siguientes:

| Usuario | Contraseña | Nombre |
|---------|-----------|--------|
| `admin` | `admin123` | Administrador QUANTA LTDA |
| `demo` | `demo123` | Usuario Demo |
| `analista` | `analista123` | Analista Financiero |

## Cómo Funciona

1. **Al iniciar la aplicación**: Se muestra la pantalla de login
2. **Ingresa credenciales**: Usa una de las combinaciones de arriba
3. **Verificación**: El sistema valida las credenciales
4. **Acceso**: Si son correctas, se guarda el token y se redirige al dashboard
5. **Sesión persistente**: La sesión se mantiene aunque refresques la página
6. **Logout**: Haz clic en "Cerrar Sesión" para terminar la sesión

## Archivos Modificados/Creados

- ✅ `src/app/features/login/login.component.ts` - Componente del formulario
- ✅ `src/app/features/login/login.component.html` - Plantilla del login
- ✅ `src/app/features/login/login.component.css` - Estilos del login
- ✅ `src/app/core/services/authentication.service.ts` - Servicio de autenticación
- ✅ `src/app/core/guards/auth.guard.ts` - Guard de protección de rutas
- ✅ `src/app/app.routes.ts` - Rutas actualizadas con login y guard
- ✅ `src/app/shared/layout/main-layout.component.ts` - Agregado método logout
- ✅ `src/app/shared/layout/main-layout.component.html` - Botón de logout
- ✅ `src/app/shared/layout/main-layout.component.css` - Estilos del logout

## Integración con Backend Real

Para conectar con un backend real:

1. **Endpoint esperado**: `POST /api/auth/login`
2. **Request body**:
   ```json
   {
     "username": "usuario",
     "password": "contraseña"
   }
   ```
3. **Response esperada**:
   ```json
   {
     "token": "jwt-token-aqui",
     "user": {
       "id": "1",
       "username": "usuario",
       "email": "usuario@example.com",
       "name": "Nombre del Usuario"
     }
   }
   ```

El servicio intentará primero llamar al backend real. Si falla, usará los usuarios de prueba.

## Notas de Seguridad

⚠️ **Importante para Producción**:
- Los usuarios de prueba están hardcodeados solo para desarrollo
- En producción, **elimina** `DEMO_USERS` y confía solo en el backend real
- Almacena tokens de forma segura (HttpOnly cookies preferiblemente)
- Implementa refresh tokens para mayor seguridad
- Usa HTTPS en producción

## Próximos Pasos

1. Conecta tu backend de autenticación real
2. Configura los endpoints correctos
3. Implementa refresh de tokens
4. Agrega validaciones adicionales según tu backend
