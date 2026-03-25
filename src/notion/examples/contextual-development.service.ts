import { Injectable } from '@nestjs/common';
import { NotionService } from '../notion.service';

/**
 * Ejemplo de servicio que utiliza NotionService para obtener contexto
 * de tareas programadas en Notion antes de implementar funcionalidades
 */
@Injectable()
export class ContextualDevelopmentService {
  constructor(private notionService: NotionService) {}

  /**
   * Obtiene el contexto completo de una funcionalidad:
   * - Descripción del requerimiento
   * - Notas y especificaciones técnicas
   * - Estado actual
   * - Módulo relacionado
   */
  async getFeatureContext(featureName: string) {
    // 1. Buscar la tarea por nombre
    const tasks = await this.notionService.searchTasks(featureName);

    if (tasks.length === 0) {
      return {
        found: false,
        message: `No se encontró tarea relacionada con: ${featureName}`,
      };
    }

    const task = tasks[0];

    // 2. Obtener las notas/especificaciones dentro de la tarea
    const notes = await this.notionService.getTaskNotes(task.id);

    // 3. Retornar contexto completo
    return {
      found: true,
      task: {
        id: task.id,
        title: task.title,
        status: task.status,
        team: task.team,
        keywords: task.keywords,
        dueDate: task.dueDate,
      },
      technicalDetails: notes.map((note) => ({
        type: note.type,
        content: note.content,
      })),
      url: task.url,
    };
  }

  /**
   * Obtiene todas las tareas de un equipo específico
   * Útil para entender el contexto de un área completa
   */
  async getModuleContext(teamName: string) {
    const allTasks = await this.notionService.getAllTasks();
    const teamTasks = allTasks.filter((t) => t.team === teamName);

    return {
      team: teamName,
      totalTasks: teamTasks.length,
      byStatus: {
        'Sin empezar': teamTasks.filter((t) => t.status === 'Sin empezar').length,
        'En desarrollo': teamTasks.filter((t) => t.status === 'En desarrollo').length,
        'Completado': teamTasks.filter((t) => t.status === 'Completado').length,
      },
      tasks: teamTasks,
    };
  }

  /**
   * Obtiene un resumen del estado del desarrollo
   * Lista qué está en progreso, qué está pendiente, etc.
   */
  async getDevelopmentStatus() {
    const allTasks = await this.notionService.getAllTasks();

    const stats = {
      total: allTasks.length,
      completed: allTasks.filter((t) => t.status === 'Completado').length,
      inProgress: allTasks.filter((t) => t.status === 'En desarrollo').length,
      pending: allTasks.filter((t) => t.status === 'Sin empezar').length,
      byTeam: {} as Record<string, number>,
      byKeyword: {} as Record<string, number>,
    };

    // Contar por equipo
    allTasks.forEach((task) => {
      if (task.team) {
        stats.byTeam[task.team] = (stats.byTeam[task.team] || 0) + 1;
      }
      if (task.keywords) {
        // Keywords es un string separado por comas
        task.keywords.split(',').forEach(keyword => {
          const trimmed = keyword.trim();
          stats.byKeyword[trimmed] = (stats.byKeyword[trimmed] || 0) + 1;
        });
      }
    });

    return stats;
  }

  /**
   * Inicia una tarea (cambiar estado a "En desarrollo" y agregar nota)
   */
  async startTask(pageId: string, developerName: string) {
    await this.notionService.updateTaskStatus(pageId, 'En desarrollo');
    await this.notionService.addNoteToTask(
      pageId,
      `✅ Iniciado por: ${developerName} | Fecha: ${new Date().toLocaleString()}`,
    );

    return this.notionService.getTaskById(pageId);
  }

  /**
   * Completa una tarea (cambiar estado a "Completado" y agregar nota)
   */
  async completeTask(pageId: string, developerName: string, notes?: string) {
    await this.notionService.updateTaskStatus(pageId, 'Completado');

    const noteContent = `✅ Completado por: ${developerName} | Fecha: ${new Date().toLocaleString()}${notes ? '\n📝 ' + notes : ''}`;

    await this.notionService.addNoteToTask(pageId, noteContent);

    return this.notionService.getTaskById(pageId);
  }

  /**
   * Crea una tarea a partir de un requerimiento
   */
  async createTaskFromRequirement(
    requirementId: string,
    description: string,
    teamName: string,
  ) {
    return this.notionService.createTask({
      title: `${requirementId}: ${description}`,
      team: teamName,
      status: 'Sin empezar',
      keywords: 'Feature',
    });
  }

  /**
   * Obtiene todas las tareas pendientes de un equipo (para planificación)
   */
  async getPendingTasksForModule(teamName: string) {
    const tasks = await this.notionService.getTasksByStatus('Sin empezar');
    return tasks.filter((t) => t.team === teamName);
  }

  /**
   * Obtiene tareas en progreso (para saber qué se está trabajando)
   */
  async getInProgressTasks() {
    return this.notionService.getTasksByStatus('En desarrollo');
  }
}

/**
 * EJEMPLO DE USO EN UN CONTROLADOR:
 *
 * @Controller('features')
 * export class FeatureController {
 *   constructor(private developmentService: ContextualDevelopmentService) {}
 *
 *   @Get('context/:featureName')
 *   async getContext(@Param('featureName') featureName: string) {
 *     return this.developmentService.getFeatureContext(featureName);
 *   }
 *
 *   @Get('status')
 *   async getStatus() {
 *     return this.developmentService.getDevelopmentStatus();
 *   }
 * }
 */
