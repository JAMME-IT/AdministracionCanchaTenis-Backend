# 📋 Módulo Notion - Tablero Kanban

Integración completa con Notion para gestionar tareas, requisitos y contexto del desarrollo.

## 🚀 Configuración

### 1. Variables de Entorno
Agrega a tu archivo `.env`:

```env
NOTION_TOKEN=secret_xxxxxxxxxxxxx_xxxxxxxxxxxxx
NOTION_DATABASE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 2. Obtener Credenciales

#### Token de Notion
1. Ve a https://www.notion.com/my-integrations
2. Crea una nueva integración
3. Copia el `Internal Integration Secret`

#### Database ID
1. Abre tu base de datos Notion en el navegador
2. Copia el ID de la URL:
   ```
   https://notion.so/workspace/[DATABASE_ID]?v=xxxxx
   ```
3. El `[DATABASE_ID]` es lo que necesitas (32 caracteres)

#### Conectar Base de Datos
1. En Notion, abre el menú "..." de tu base de datos
2. Ve a "Connections"
3. Busca tu integración creada y conéctala

## 📚 Estructura del Tablero

Tu base de datos Notion debe tener estas propiedades:

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| Tarea | Title | Nombre del requerimiento/feature |
| Descripción | Rich Text | Detalles técnicos o de negocio |
| Status | Status | Todo \| In Progress \| Done |
| Módulo | Rich Text | Auth, Reservas, Cuotas, etc. |
| Tipo | Rich Text | Feature, Bug, Refactor, Doc |

## 🔌 Endpoints API

### Obtener Tareas

```bash
GET /notion/tasks
```
Retorna todas las tareas del tablero.

```bash
GET /notion/tasks/:pageId
```
Obtiene una tarea específica por su ID.

### Notas y Contenido

```bash
GET /notion/tasks/:pageId/notes
```
Retorna todas las notas (bloques de texto) dentro de una tarea.

```bash
POST /notion/tasks/:pageId/notes
Content-Type: application/json

{
  "content": "Nueva nota sobre esta tarea"
}
```
Agrega una nota a una tarea existente.

### Crear y Modificar Tareas

```bash
POST /notion/tasks
Content-Type: application/json

{
  "title": "Implementar autenticación JWT",
  "description": "RF-1: Sistema de login para usuarios...",
  "status": "Todo",
  "module": "Auth",
  "type": "Feature"
}
```

```bash
PUT /notion/tasks/:pageId
Content-Type: application/json

{
  "title": "Nuevo título",
  "status": "In Progress"
}
```

### Cambiar Estado

```bash
PUT /notion/tasks/:pageId/status
Content-Type: application/json

{
  "status": "Done"
}
```
Estados válidos: `Todo`, `In Progress`, `Done`

### Buscar y Filtrar

```bash
GET /notion/search?q=autenticación
```

```bash
GET /notion/tasks/filter/status?status=In%20Progress
```

### Eliminar

```bash
DELETE /notion/tasks/:pageId
```
Archiva la tarea (no la borra permanentemente).

## 🎯 Ejemplo de Uso Completo

```typescript
// En un servicio NestJS
import { Injectable } from '@nestjs/common';
import { NotionService } from './notion.service';

@Injectable()
export class FeatureService {
  constructor(private notionService: NotionService) {}

  async implementarFeature() {
    // 1. Obtener todas las tareas
    const tasks = await this.notionService.getAllTasks();
    
    // 2. Buscar tarea específica
    const authTasks = tasks.filter(t => t.module === 'Auth');
    
    // 3. Obtener detalles y notas
    const task = authTasks[0];
    const notes = await this.notionService.getTaskNotes(task.id);
    
    // 4. Actualizar estado a "In Progress"
    await this.notionService.updateTaskStatus(task.id, 'In Progress');
    
    // 5. Implementar la funcionalidad...
    
    // 6. Marcar como "Done"
    await this.notionService.updateTaskStatus(task.id, 'Done');
    
    // 7. Agregar nota de finalización
    await this.notionService.addNoteToTask(task.id, 'Implementado y testeado correctamente');
  }
}
```

## 🧪 Tests

```bash
npm test notion
```

Todos los métodos del servicio tienen tests unitarios asociados.

## 🔒 Seguridad

- Nunca commitees el `NOTION_TOKEN` en el repositorio
- Usa `secrets` de GitHub Actions si despliegas
- El token debe estar en `.env` (incluido en `.gitignore`)
- Limita los permisos de la integración en Notion al mínimo necesario

## 📖 Más Información

- [Documentación oficial de Notion API](https://developers.notion.com)
- [Guía de Integración de Notion](https://www.notion.so/Integrations-and-API-65f7f7c4fb87436b9b9b5e1a4e4c8d3a)
