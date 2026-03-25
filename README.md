# 🎾 Backend Administración Cancha Tenis

Sistema de administración integral para club de tenis con funcionalidades de reservas, gestión de socios, cuotas y reportes financieros.

## 📊 Estado del Proyecto

| Aspecto | Estado | Progreso |
|---------|--------|----------|
| **Autenticación & Usuarios** | ✅ Completado | 100% |
| **Base de Datos (Prisma)** | ✅ Completado | 100% |
| **Turnos/Reservas** | ❌ No iniciado | 0% |
| **Canchas** | ❌ No iniciado | 0% |
| **Iluminación** | ❌ No iniciado | 0% |
| **Configuración Club** | ❌ No iniciado | 0% |
| **Reportes** | ❌ No iniciado | 0% |
| **Overall** | 🟡 En desarrollo | **32%** (15/46 RF) |

## 🚀 Inicio Rápido

### Requisitos Previos
- Node.js 18+ 
- MySQL 8.0+
- Docker & Docker Compose (opcional, para base de datos)

### Instalación

```bash
# Clonar repositorio
git clone <repo-url>
cd AdministracionCanchaTenis-Backend

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tu configuración local

# Iniciar base de datos (Docker)
docker-compose up -d

# Aplicar migraciones Prisma
npx prisma migrate dev

# Iniciar servidor en modo desarrollo
npm run start:dev
```

### Acceso a la API

- **URL:** http://localhost:3000/api/v1
- **Swagger Docs:** http://localhost:3000/docs
- **Prisma Studio:** `npx prisma studio`

## 📁 Estructura del Proyecto

```
src/
├── auth/                 # ✅ Registro, Login, JWT
├── usuario/              # ✅ CRUD de usuarios completo
├── rol/                  # ✅ Gestión de roles
├── cuota/                # ⚠️ Parcial (auto-gen comentado)
├── linea-cuota/          # ✅ Pagos/líneas de cuota
├── valor-cuota/          # ✅ Historial de tarifas
├── socio/                # ⚠️ Stub sin lógica completa
├── estado-cuota/         # ⚠️ Solo crear()
├── estado-usuario/       # ⚠️ Stub sin lógica  
├── notion/               # ✅ Integración Notion API
├── app.module.ts         # Módulo principal
├── main.ts              # Bootstrap de NestJS
└── common/               # Utilidades, guards, pipes

prisma/
├── schema.prisma        # Definición de modelos
└── migrations/          # Historial de cambios BD
```

## 🔑 Módulos Implementados

### ✅ Autenticación (RF-1, RF-2)
```bash
POST /auth/register     # Registrar nuevo usuario
POST /auth/login        # Login y obtener JWT
GET  /auth/profile      # Perfil del usuario autenticado
```

**Features:**
- Encriptación bcrypt
- JWT con expiración 1 día
- Guards para rutas protegidas
- Validación DTO

---

### ✅ Usuarios (RF-3 a RF-7, RF-9 a RF-11)
```bash
POST   /usuario         # Crear usuario (solo admin)
GET    /usuario         # Listar todos
GET    /usuario/:id     # Obtener uno
PATCH  /usuario/:id     # Editar perfil
DELETE /usuario/:id     # Soft delete (baja lógica)
PATCH  /usuario/:id/rol # Cambiar rol (solo admin)
```

**Features:**
- RBAC (Roles: Admin, Socio, NoSocio)
- Soft delete con EstadoUsuario
- Historial de cambios de rol
- Validaciones de email único

---

### ✅ Roles (RF-11)
```bash
GET    /rol             # Listar roles disponibles  
POST   /rol             # Crear rol (admin)
GET    /rol/:id         # Detalles
PATCH  /rol/:id         # Editar (admin)
```

---

### ✅ Cuotas & Pagos (RF-20 a RF-30)
```bash
GET    /cuota           # Listar cuotas (con filtros)
GET    /cuota/:id       # Detalles de cuota
POST   /linea-cuota     # Registrar pago
PATCH  /valor-cuota     # Modificar tarifa (admin)
GET    /valor-cuota/historial # Ver cambios
```

**Features:**
- Auto-generación mensual (commented, necesita cron)
- Historial de tarifas
- Registro de pagos parciales
- Estado de deuda por usuario

---

### ✅ Notion Integration
```bash
GET    /notion/tasks    # Obtener tareas del tablero
POST   /notion/task     # Crear tarea
PATCH  /notion/task/:id # Actualizar tarea
DELETE /notion/task/:id # Eliminar tarea
```

**Features:**
- Sincronización con Notion Database
- Mapeo automático de propiedades
- Útil para task management del equipo

---

## ⚠️ Módulos en Desarrollo

### 🔴 CRÍTICO: Turnos/Reservas (RF-12 a RF-40)
**Estado:** No iniciado (0%)  
**Prioridad:** MÁXIMA - Bloquea todo

Incluye:
- Creación de turnos
- Validaciones (RN-1, RN-2, RN-11)
- Cálculo de costos
- Disponibilidad temporal
- Cancelaciones

---

### 🔴 CRÍTICO: Canchas (RF-17)
**Estado:** No iniciado (0%)  
**Prioridad:** MÁXIMA - Bloquea Turnos

Incluye:
- CRUD de canchas
- Estados (disponible, inhabilitada)
- Endpoint de disponibilidad

---

### 🔴 CRÍTICO: Iluminación (RF-16, RF-28, RF-33)
**Estado:** No iniciado (0%)  
**Prioridad:** MÁXIMA - Bloquea Turnos

Incluye:
- Tarifas de iluminación
- Franjas horarias con luz
- Cálculo automático de costos

---

### 🟡 IMPORTANTE: Configuración (RF-34, RF-35)
**Estado:** No iniciado (0%)  
**Prioridad:** ALTA

Incluye:
- Horarios de funcionamiento
- Duración de turnos configurable
- Días de cierre

---

### 🟡 IMPORTANTE: Validaciones & Morosidad (RN-1 a RN-11)
**Estado:** Parcial (0%)  
**Prioridad:** ALTA

Incluye:
- Control de morosidad
- Límites de reservas
- Anticipación mínima
- Cancellaciones

---

## 🗄️ Base de Datos

### Modelos Prisma

```prisma
Usuario          # Usuarios del sistema
Rol              # Roles (Admin, Socio, NoSocio)
UsuarioRol       # Historial de cambios de rol
Socio            # Perfil específico de socios
Cuota            # Cuota mensual
LineaDeCuota     # Líneas de pago (pagos parciales)
ValorCuota       # Historial de tarifas
EstadoCuota      # Estado de cada cuota (Pagada, Pendiente, Parcial)
EstadoUsuario    # Estado del usuario (Activo, Inactivo)
```

### Migraciones

```bash
# Lista de migraciones aplicadas
npx prisma migrate status

# Crear nueva migración (después de editar schema.prisma)
npx prisma migrate dev --name descripcion

# Aplicar migraciones en producción
npx prisma migrate deploy
```

## 🔐 Seguridad

### Autenticación
- [x] JWT con rol-based access (RBAC)
- [x] Contraseñas hasheadas con bcrypt
- [x] Guards para rutas protegidas
- [ ] Rate limiting (TODO)
- [ ] 2FA (TODO)

### Validaciones
- [x] DTO validation con class-validator
- [x] Sanitización de inputs
- [ ] CORS configurado (TODO)
- [ ] Helmet.js (TODO)

## 📚 Documentación

### Instrucciones Internas
- [📜 Copilot Instructions](./.github/instructions/copilot-instructions.md) - Especificaciones técnicas, reglas de negocio, RF-1 a RF-46
- [📖 Documentación](./.github/instructions/documentacion.md) - Guía completa con ejemplos

### APIs & Recursos
- **Swagger:** http://localhost:3000/docs
- **Notion Board:** [Tu tablero Notion]
- **Database Docs:** [Ver schema.prisma](./prisma/schema.prisma)

## 🤝 Contribuidores

- **Team:** 5 Desarrolladores BackEnd
- **Product Owner:** [Especificar]
- **Tech Lead:** [Especificar]

---

**Última actualización:** 2026-03-20  
**Versión:** 0.32.0 (32% complete)  
**Próxima revisión:** Después de completar módulos CRÍTICO

```bash
# Tests unitarios
npm test

# Tests con coverage
npm test -- --coverage

# E2E tests
npm run test:e2e

# Watch mode
npm test -- --watch
```

## 📦 Reproducción de Issues

1. Asegúrate de tener `.env` configurado
2. Base de datos sincronizada: `npx prisma migrate dev`
3. Servidor corriendo: `npm run start:dev`
4. Usa Swagger para testear endpoints

Reporta issues con:
- Pasos para reproducir
- Código exacto que falla
- Error completo en logs
- Entorno (Windows/Mac/Linux)

## 🚢 Deploy

### Desarrollo
```bash
npm run start:dev
```

### Producción
```bash
npm run build
npm run start:prod
```

### Docker
```bash
docker-compose up
```

## 📝 Licencia

Este proyecto es propiedad del Club de Tenis.

## 🤝 Contribuidores

- **Team:** 5 Desarrolladores BackEnd
- **Product Owner:** [Especificar]
- **Tech Lead:** [Especificar]

---

**Última actualización:** 2026-03-20  
**Versión:** 0.32.0 (32% complete)  
**Próxima revisión:** Después de completar módulos CRÍTICO
