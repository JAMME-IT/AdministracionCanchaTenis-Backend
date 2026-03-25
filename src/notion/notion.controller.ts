import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { NotionService } from './notion.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@ApiTags('Notion - Tablero Kanban')
@Controller('notion')
export class NotionController {
  constructor(private readonly notionService: NotionService) {}

  /**
   * Obtiene todas las tareas del tablero Kanban
   */
  @Get('tasks')
  @ApiOperation({
    summary: 'Obtener todas las tareas',
    description: 'Retorna todas las tareas del tablero Kanban de Notion',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de tareas obtenida correctamente',
    example: [
      {
        id: 'page-id',
        title: 'Implementar autenticación',
        status: 'in_progress',
        module: 'Auth',
        type: 'Feature',
      },
    ],
  })
  async getAllTasks() {
    return this.notionService.getAllTasks();
  }

  /**
   * Obtiene una tarea específica por su ID
   */
  @Get('tasks/:pageId')
  @ApiOperation({
    summary: 'Obtener tarea específica',
    description: 'Retorna los detalles de una tarea por su ID',
  })
  async getTaskById(@Param('pageId') pageId: string) {
    return this.notionService.getTaskById(pageId);
  }

  /**
   * Obtiene todas las notas dentro de una tarea
   */
  @Get('tasks/:pageId/notes')
  @ApiOperation({
    summary: 'Obtener notas de una tarea',
    description:
      'Retorna todas las notas y bloques de contenido dentro de una tarea',
  })
  async getTaskNotes(@Param('pageId') pageId: string) {
    return this.notionService.getTaskNotes(pageId);
  }

  /**
   * Crea una nueva tarea en el tablero
   */
  @Post('tasks')
  @ApiOperation({
    summary: 'Crear nueva tarea',
    description: 'Genera una nueva tarea en el tablero Kanban',
  })
  async createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.notionService.createTask(createTaskDto);
  }

  /**
   * Actualiza una tarea existente
   */
  @Put('tasks/:pageId')
  @ApiOperation({
    summary: 'Actualizar tarea',
    description: 'Modifica los datos de una tarea existente',
  })
  async updateTask(
    @Param('pageId') pageId: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    return this.notionService.updateTask(pageId, updateTaskDto);
  }

  /**
   * Cambia el estado de una tarea
   */
  @Put('tasks/:pageId/status')
  @ApiOperation({
    summary: 'Cambiar estado de tarea',
    description: 'Actualiza el estado de una tarea (Sin empezar, En desarrollo, Probando, Revisión, Completado)',
  })
  async updateTaskStatus(
    @Param('pageId') pageId: string,
    @Body('status') status: string,
  ) {
    return this.notionService.updateTaskStatus(pageId, status);
  }

  /**
   * Elimina una tarea (la archiva)
   */
  @Delete('tasks/:pageId')
  @ApiOperation({
    summary: 'Eliminar tarea',
    description: 'Archiva una tarea existente',
  })
  async deleteTask(@Param('pageId') pageId: string) {
    return this.notionService.deleteTask(pageId);
  }

  /**
   * Busca tareas por texto
   */
  @Get('search')
  @ApiOperation({
    summary: 'Buscar tareas',
    description: 'Busca tareas por título o contenido',
  })
  async searchTasks(@Query('q') query: string) {
    return this.notionService.searchTasks(query);
  }

  /**
   * Filtra tareas por estado
   */
  @Get('tasks/filter/status')
  @ApiOperation({
    summary: 'Filtrar por estado',
    description: 'Retorna todas las tareas con un estado específico',
  })
  async getTasksByStatus(@Query('status') status: string) {
    return this.notionService.getTasksByStatus(status);
  }

  /**
   * Agrega una nota a una tarea
   */
  @Post('tasks/:pageId/notes')
  @ApiOperation({
    summary: 'Agregar nota a tarea',
    description: 'Añade una nota de contenido dentro de una tarea existente',
  })
  async addNoteToTask(
    @Param('pageId') pageId: string,
    @Body('content') content: string,
  ) {
    return this.notionService.addNoteToTask(pageId, content);
  }
}
