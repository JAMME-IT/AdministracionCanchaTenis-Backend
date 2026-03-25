import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { Client } from '@notionhq/client';
import {
  PageObjectResponse,
  BlockObjectResponse,
  PartialBlockObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

export interface TaskProperties {
  [key: string]: any;
}

@Injectable()
export class NotionService {
  private notion: Client;
  private databaseId: string;

  constructor() {
    const notion_token = process.env.NOTION_TOKEN;
    const database_id = process.env.NOTION_DATABASE_ID;

    if (!notion_token) {
      throw new BadRequestException('NOTION_TOKEN variable is not defined');
    }

    if (!database_id) {
      throw new BadRequestException('NOTION_DATABASE_ID variable is not defined');
    }

    this.notion = new Client({ auth: notion_token });
    this.databaseId = database_id;
  }

  /**
   * Obtiene todas las tareas del tablero Kanban
   * @returns Array de tareas con sus propiedades
   */
  async getAllTasks() {
    try {
      const response = await fetch(
        `https://api.notion.com/v1/databases/${this.databaseId}/query`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
            'Notion-Version': '2022-06-28',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({}),
        },
      );

      if (!response.ok) {
        throw new Error(`Notion API error: ${response.statusText}`);
      }

      const data = await response.json() as any;
      return data.results.map((page: any) => this.formatPageToTask(page as PageObjectResponse));
    } catch (error) {
      throw new BadRequestException(`Error fetching tasks: ${error.message}`);
    }
  }

  /**
   * Obtiene una tarea específica por su ID
   * @param pageId - ID de la página/tarea en Notion
   */
  async getTaskById(pageId: string) {
    try {
      const page = (await this.notion.pages.retrieve({
        page_id: pageId,
      })) as PageObjectResponse;
      return this.formatPageToTask(page);
    } catch (error) {
      throw new NotFoundException(`Task not found: ${error.message}`);
    }
  }

  /**
   * Obtiene todas las notas (bloques de texto) dentro de una tarea
   * @param pageId - ID de la página/tarea
   */
  async getTaskNotes(pageId: string) {
    try {
      const blocks = await this.notion.blocks.children.list({
        block_id: pageId,
      });

      const textBlocks = (blocks.results as (BlockObjectResponse | PartialBlockObjectResponse)[])
        .filter((block): block is BlockObjectResponse =>
          'type' in block && this.isTextBlock(block as BlockObjectResponse),
        )
        .map((block) => this.formatBlockToNote(block));

      return textBlocks;
    } catch (error) {
      throw new BadRequestException(`Error fetching notes: ${error.message}`);
    }
  }

  /**
   * Crea una nueva tarea en el tablero
   * @param createTaskDto - Datos de la nueva tarea
   */
  async createTask(createTaskDto: CreateTaskDto) {
    try {
      const properties = this.buildTaskProperties(createTaskDto);

      const response = (await this.notion.pages.create({
        parent: { database_id: this.databaseId },
        properties,
      })) as PageObjectResponse;

      return this.formatPageToTask(response);
    } catch (error) {
      throw new BadRequestException(`Error creating task: ${error.message}`);
    }
  }

  /**
   * Actualiza una tarea existente
   * @param pageId - ID de la tarea a actualizar
   * @param updateTaskDto - Datos a actualizar
   */
  async updateTask(pageId: string, updateTaskDto: UpdateTaskDto) {
    try {
      const properties = this.buildTaskProperties(updateTaskDto);

      const response = (await this.notion.pages.update({
        page_id: pageId,
        properties,
      })) as PageObjectResponse;

      return this.formatPageToTask(response);
    } catch (error) {
      throw new BadRequestException(`Error updating task: ${error.message}`);
    }
  }

  /**
   * Cambia el estado de una tarea
   * @param pageId - ID de la tarea
   * @param status - Nuevo estado (Todo, In Progress, Done)
   */
  async updateTaskStatus(pageId: string, status: string) {
    try {
      const response = (await this.notion.pages.update({
        page_id: pageId,
        properties: {
          Estado: {
            status: status,
          },
        } as any,
      })) as PageObjectResponse;

      return this.formatPageToTask(response);
    } catch (error) {
      throw new BadRequestException(
        `Error updating task status: ${error.message}`,
      );
    }
  }

  /**
   * Elimina una tarea (archiva la página)
   * @param pageId - ID de la tarea a eliminar
   */
  async deleteTask(pageId: string) {
    try {
      await this.notion.pages.update({
        page_id: pageId,
        archived: true,
      });

      return { success: true, message: 'Task archived successfully' };
    } catch (error) {
      throw new BadRequestException(`Error deleting task: ${error.message}`);
    }
  }

  /**
   * Busca tareas por título
   * @param query - Texto a buscar
   */
  async searchTasks(query: string) {
    try {
      const response = await fetch(
        `https://api.notion.com/v1/databases/${this.databaseId}/query`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
            'Notion-Version': '2022-06-28',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            filter: {
              property: 'Nombre',
              title: {
                contains: query,
              },
            },
          }),
        },
      );

      if (!response.ok) {
        throw new Error(`Notion API error: ${response.statusText}`);
      }

      const data = await response.json() as any;

      return data.results.map((page) => this.formatPageToTask(page as PageObjectResponse));
    } catch (error) {
      throw new BadRequestException(`Error searching tasks: ${error.message}`);
    }
  }

  /**
   * Filtra tareas por estado
   * @param status - Estado a filtrar (Sin empezar, En desarrollo, Probando, Revisión, Completado)
   */
  async getTasksByStatus(status: string) {
    try {
      const response = await fetch(
        `https://api.notion.com/v1/databases/${this.databaseId}/query`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
            'Notion-Version': '2022-06-28',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            filter: {
              property: 'Estado',
              status: {
                equals: status,
              },
            },
          }),
        },
      );

      if (!response.ok) {
        throw new Error(`Notion API error: ${response.statusText}`);
      }

      const data = await response.json() as any;

      return data.results.map((page) => this.formatPageToTask(page as PageObjectResponse));
    } catch (error) {
      throw new BadRequestException(
        `Error filtering tasks by status: ${error.message}`,
      );
    }
  }

  /**
   * Agrega una nota a una tarea existente
   * @param pageId - ID de la tarea
   * @param noteContent - Contenido de la nota
   */
  async addNoteToTask(pageId: string, noteContent: string) {
    try {
      const response = await this.notion.blocks.children.append({
        block_id: pageId,
        children: [
          {
            object: 'block' as const,
            type: 'paragraph' as const,
            paragraph: {
              rich_text: [
                {
                  type: 'text' as const,
                  text: {
                    content: noteContent,
                  },
                },
              ],
            },
          },
        ],
      });

      return { success: true, blocks: response.results };
    } catch (error) {
      throw new BadRequestException(`Error adding note to task: ${error.message}`);
    }
  }

  // ============ PRIVATE HELPER METHODS ============

  /**
   * Convierte una página de Notion a un objeto Task formateado
   */
  private formatPageToTask(page: PageObjectResponse) {
    const props = page.properties as TaskProperties;

    // Extraer título del campo "Nombre" (type: 'title')
    let title = '';
    if (props?.Nombre && (props.Nombre as any)?.type === 'title') {
      title = this.extractRichText(props.Nombre);
    }

    // Extraer estado del campo "Estado"
    let status = null;
    if (props?.Estado && (props.Estado as any)?.type === 'status') {
      status = (props.Estado as any).status?.name || null;
    }

    // Extraer equipo del campo "Equipo"
    let team = null;
    if (props?.Equipo && (props.Equipo as any)?.type === 'select') {
      team = (props.Equipo as any).select?.name || null;
    }

    // Extraer responsable del campo "Responsable"
    let responsible: string | null = null;
    if (props?.Responsable && (props.Responsable as any)?.type === 'people') {
      const people = (props.Responsable as any).people || [];
      if (Array.isArray(people) && people.length > 0) {
        responsible = people.map((p: any) => p.name || p.id).join(', ');
      }
    }

    // Extraer palabras clave
    let keywords: string | null = null;
    if (props?.['Palabras clave con IA'] && (props['Palabras clave con IA'] as any)?.type === 'multi_select') {
      const options = (props['Palabras clave con IA'] as any).multi_select || [];
      if (Array.isArray(options) && options.length > 0) {
        keywords = options.map((opt: any) => opt.name).join(', ');
      }
    }

    // Extraer fecha límite
    let dueDate = null;
    if (props?.['Fecha límite'] && (props['Fecha límite'] as any)?.type === 'date') {
      dueDate = (props['Fecha límite'] as any).date?.start || null;
    }

    return {
      id: page.id,
      url: page.url || '',
      archived: page.archived,
      createdTime: page.created_time,
      lastEditedTime: page.last_edited_time,
      title: title,
      status: status,
      team: team,
      responsible: responsible,
      keywords: keywords,
      dueDate: dueDate,
      rawProperties: props, // Para debugging
    };
  }

  /**
   * Convierte un bloque de Notion a un objeto Note formateado
   */
  private formatBlockToNote(block: BlockObjectResponse) {
    const typeKey = block.type as keyof typeof block;
    const content = block[typeKey] as any;

    let text = '';
    if (content?.rich_text) {
      text = content.rich_text.map((item: any) => item.plain_text).join('');
    }

    return {
      id: block.id,
      type: block.type,
      content: text,
      createdTime: block.created_time,
    };
  }

  /**
   * Extrae texto plano de un campo de texto enriquecido de Notion
   */
  private extractRichText(property: any): string {
    if (!property) {
      return '';
    }
    
    // Manejar tipo "title"
    if (property.title && Array.isArray(property.title)) {
      return property.title.map((item: any) => item.plain_text || item.text?.content || '').join('');
    }
    
    // Manejar tipo "rich_text"
    if (property.rich_text && Array.isArray(property.rich_text)) {
      return property.rich_text.map((item: any) => item.plain_text || item.text?.content || '').join('');
    }
    
    return '';
  }

  /**
   * Verifica si un bloque es un bloque de texto (paragraph, heading, etc.)
   */
  private isTextBlock(block: BlockObjectResponse): boolean {
    const textBlockTypes = [
      'paragraph',
      'heading_1',
      'heading_2',
      'heading_3',
      'quote',
      'bulleted_list_item',
      'numbered_list_item',
    ];
    return textBlockTypes.includes(block.type);
  }

  /**
   * Construye el objeto de propiedades para crear o actualizar una tarea
   */
  private buildTaskProperties(data: CreateTaskDto | UpdateTaskDto): TaskProperties {
    const properties: TaskProperties = {};

    if (data.title) {
      properties.Nombre = {
        title: [
          {
            text: {
              content: data.title,
            },
          },
        ],
      };
    }

    if (data.status) {
      properties.Estado = {
        status: data.status,
      };
    }

    if (data.team) {
      properties.Equipo = {
        select: {
          name: data.team,
        },
      };
    }

    if (data.keywords) {
      const keywordArray = typeof data.keywords === 'string' 
        ? data.keywords.split(',').map(k => ({ name: k.trim() }))
        : Array.isArray(data.keywords) ? data.keywords : [];
      
      properties['Palabras clave con IA'] = {
        multi_select: keywordArray,
      };
    }

    if (data.dueDate) {
      properties['Fecha límite'] = {
        date: {
          start: data.dueDate,
        },
      };
    }

    return properties;
  }
}
