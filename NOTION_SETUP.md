# 🚀 Setup: Integración Notion - Guía Paso a Paso

Esta guía te ayudará a configurar completamente la integración de Notion para que el agente pueda acceder a tu tablero Kanban.

## 📋 Índice
1. [Crear Token en Notion](#1-crear-token-en-notion)
2. [Configurar Base de Datos](#2-configurar-base-de-datos)
3. [Obtener Database ID](#3-obtener-database-id)
4. [Agregar Variables de Entorno](#4-agregar-variables-de-entorno)
5. [Probar la Integración](#5-probar-la-integración)
6. [Estructura del Tablero](#6-estructura-del-tablero)

---

## 1. Crear Token en Notion

### Paso 1.1: Ir a Integraciones
1. Abre tu navegador y ve a https://www.notion.com/my-integrations
2. Inicia sesión si no estás ya autenticado
3. Click en **"+ New integration"** o **"Create new integration"**

### Paso 1.2: Configurar la Integración
1. **Name:** Ingresa `Agente Desarrollo Admin Cancha` (o un nombre similar)
2. **Associated workspace:** Selecciona tu workspace de Notion
3. **Capabilities:** Asegúrate de seleccionar:
   - ✅ Read content
   - ✅ Update content
   - ✅ Insert content
4. Click en **"Submit"** o **"Create"**

### Paso 1.3: Copiar el Token
1. En la página de tu integración, busca **"Internal Integration Secret"**
2. Click en **"Show"** si está oculto
3. **Copia el token completo** (empieza con `secret_`)
4. **Guárdalo en un lugar seguro** (necesitarás pegarlo después)

⚠️ **IMPORTANTE:** Este token es secreto. Nunca lo publiques o compartas.

---

## 2. Configurar Base de Datos

### Paso 2.1: Crear o Abrir Tu Tablero Kanban

Si ya tienes un tablero Kanban en Notion, puedes usarlo. Si no, crea uno nuevo:

1. Ve a tu workspace de Notion
2. Click en **"+ Add a page"**
3. Selecciona **"Database"** → **"Kanban"**
4. Dale un nombre: `Tareas Desarrollo` (o similar)

### Paso 2.2: Verificar las Propiedades

Tu base de datos debe tener estas columnas/propiedades:

| Propiedad | Tipo | Requerida | Ejemplo |
|-----------|------|-----------|---------|
| **Tarea** | Title | ✅ Sí | Implementar autenticación JWT |
| **Descripción** | Rich Text | ❌ No | RF-1: Sistema de login... |
| **Status** | Status | ✅ Sí | Todo / In Progress / Done |
| **Módulo** | Rich Text | ❌ No | Auth, Reservas, Cuotas |
| **Tipo** | Rich Text | ❌ No | Feature, Bug, Refactor, Doc |

#### Para agregar una propiedad:
1. En tu tablero, haz click en **"+"** al final de las columnas
2. Selecciona el tipo según la tabla arriba
3. Dale el nombre exacto
4. Click en **"Done"**

### Paso 2.3: Conectar la Integración

1. En tu tablero, click en el botón **"..."** (menú) en la esquina superior derecha
2. Busca **"Connections"** o **"Add connections"**
3. Busca la integración que creaste (`Agente Desarrollo Admin Cancha`)
4. Click en **"Connect"** o **"Conectar"**

✅ Ahora tu integración tiene acceso a este tablero.

---

## 3. Obtener Database ID

### Paso 3.1: Copiar ID de la URL

1. Abre tu tablero Kanban en el navegador
2. Observa la URL en la barra de direcciones:
   ```
   https://notion.so/workspace/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX?v=xxxxx
   ```
3. Copia la parte larga de números y letras después de `/workspace/`
4. **Es un ID de 32 caracteres** (sin el `?v=...`)

### Paso 3.2: Formato Correcto

El Database ID debe verse así (sin espacios):
```
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Si tiene guiones, algunos formatos aceptan:
```
xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

Prueba con ambos si uno no funciona.

---

## 4. Agregar Variables de Entorno

### Paso 4.1: Editar archivo `.env`

En la raíz del proyecto `c:\Users\user\Desktop\AdministracionCanchaTenis-Backend`:

1. Si existe `.env`, ábrelo. Si no, crea uno nuevo.
2. Agrega estas líneas:

```env
# Existing configuration
DATABASE_URL="mysql://user:password@localhost:3306/db_crud"

# Notion Configuration
NOTION_TOKEN=secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_DATABASE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**Reemplaza:**
- `secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx` → Tu token real (paso 1.3)
- `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx` → Tu Database ID (paso 3.1)

### Paso 4.2: Verificar `.gitignore`

Asegúrate de que `.env` esté en `.gitignore` (para no commitear secretos):

```gitignore
# .gitignore
.env
.env.local
.env.*.local
```

---

## 5. Probar la Integración

### Paso 5.1: Ejecutar el Backend

```bash
npm install          # Si aún no lo hiciste
npm run start:dev    # Inicia en modo desarrollo
```

### Paso 5.2: Probar Endpoints

Abre tu navegador o usa **Postman/Insomnia** y prueba:

#### Test 1: Obtener todas las tareas
```
GET http://localhost:3000/notion/tasks
```

**Respuesta esperada:**
```json
[
  {
    "id": "page-id",
    "title": "Tu primera tarea",
    "status": "to_do",
    "module": "Auth",
    "description": "Detalles...",
    "url": "https://notion.so/...",
    "archived": false,
    "createdTime": "2024-01-01T...",
    "lastEditedTime": "2024-01-01T..."
  }
]
```

#### Test 2: Buscar una tarea
```
GET http://localhost:3000/notion/search?q=autenticación
```

#### Test 3: Crear una tarea
```
POST http://localhost:3000/notion/tasks
Content-Type: application/json

{
  "title": "Nueva tarea de test",
  "description": "Descripción de prueba",
  "status": "Todo",
  "module": "Auth",
  "type": "Feature"
}
```

Si ves respuestas JSON con tus tareas, ¡la integración está funcionando!

### Paso 5.3: Verificar Logs

En tu terminal donde corre el servidor, deberías ver:
```
[Nest] ... Logger     : Starting Nest application...
[Nest] ... Logger     : Listening on port 3000
NotionService initialized successfully
```

---

## 6. Estructura del Tablero

### Ejemplo de Tablero Completo

```
Tablero: "Tareas Desarrollo"

┌─────────────────────┬───────────────────────┬──────────┬──────────┬────────┐
│ Tarea               │ Descripción           │ Status   │ Módulo   │ Tipo   │
├─────────────────────┼───────────────────────┼──────────┼──────────┼────────┤
│ Implementar Auth    │ RF-1: Login JWT...    │ Done     │ Auth     │ Feature│
│ CRUD Usuarios       │ RF-2, RF-3: Gestión..│ Done     │ Usuario  │ Feature│
│ Reservar Cancha     │ RF-12: Motor disponib│ In Prog  │ Reservas │ Feature│
│ Generar Cuotas      │ RF-19: Automático...  │ Todo     │ Cuotas   │ Feature│
│ Tests de Auth       │ Cobertura: 85%        │ Todo     │ Auth     │ Refact │
└─────────────────────┴───────────────────────┴──────────┴──────────┴────────┘
```

### Agregar Notas a una Tarea

En Notion, dentro de cualquier tarea abierta:
1. Presiona `/` y selecciona un tipo de contenido
2. Ejemplos: párrafos, listas, código, etc.
3. Estas notas estarán disponibles vía:
   ```
   GET http://localhost:3000/notion/tasks/:pageId/notes
   ```

---

## 🔍 Solucionar Problemas

### Error: `401 Unauthorized`
- ✅ Verifica que `NOTION_TOKEN` sea correcto (empieza con `secret_`)
- ✅ Comprueba que la integración esté conectada a tu tablero

### Error: `404 Not Found`
- ✅ Verifica que `NOTION_DATABASE_ID` sea correcto (32 caracteres)
- ✅ Intenta sin guiones si lo copiaste con ellos

### Error: `Permission Denied`
- ✅ Asegúrate de tener permisos de lectura y escritura en el workspace
- ✅ Reconecta la integración a tu tablero

### El tablero no tiene propiedades
- ✅ Crea manualmente las columnas listadas en [Paso 2.2](#paso-22-verificar-las-propiedades)
- ✅ Los nombres deben ser exactamente iguales (con acentos)

---

## ✅ Checklist Final

- [ ] Token de Notion creado
- [ ] Database ID copiado
- [ ] `.env` configurado con ambas variables
- [ ] Integración conectada al tablero
- [ ] Propiedades verificadas en Notion
- [ ] Servidor iniciado sin errores
- [ ] `GET /notion/tasks` retorna datos

¡Listo! Tu integración está funcionando. El agente ahora puede:
- 📖 Ver todas las tareas
- 🔍 Buscar tareas específicas
- ✏️ Crear y actualizar tareas
- 📝 Agregar notas a tareas
- ✅ Cambiar estados

---

## 📚 Recursos Adicionales

- [Documentación oficial: Notion API](https://developers.notion.com)
- [Guía: Crear integraciones](https://www.notion.so/Integrations-and-API-65f7f7c4fb87436b9b9b5e1a4e4c8d3a)
- [Client oficial: @notionhq/client](https://github.com/makenotion/notion-sdk-js)
