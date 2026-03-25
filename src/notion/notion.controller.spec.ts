import { Test, TestingModule } from '@nestjs/testing';
import { NotionController } from './notion.controller';
import { NotionService } from './notion.service';
import { CreateTaskDto } from './dto/create-task.dto';

describe('NotionController', () => {
  let controller: NotionController;
  let service: NotionService;

  const mockTask = {
    id: 'test-id',
    title: 'Test Task',
    status: 'Sin empezar',
    module: 'Auth',
  };

  const mockNotionService = {
    getAllTasks: jest.fn(),
    getTaskById: jest.fn(),
    getTaskNotes: jest.fn(),
    createTask: jest.fn(),
    updateTask: jest.fn(),
    updateTaskStatus: jest.fn(),
    deleteTask: jest.fn(),
    searchTasks: jest.fn(),
    getTasksByStatus: jest.fn(),
    addNoteToTask: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotionController],
      providers: [
        {
          provide: NotionService,
          useValue: mockNotionService,
        },
      ],
    }).compile();

    controller = module.get<NotionController>(NotionController);
    service = module.get<NotionService>(NotionService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getAllTasks', () => {
    it('should return all tasks', async () => {
      mockNotionService.getAllTasks.mockResolvedValue([mockTask]);

      const result = await controller.getAllTasks();

      expect(result).toEqual([mockTask]);
      expect(service.getAllTasks).toHaveBeenCalled();
    });
  });

  describe('getTaskById', () => {
    it('should return a specific task', async () => {
      mockNotionService.getTaskById.mockResolvedValue(mockTask);

      const result = await controller.getTaskById('test-id');

      expect(result).toEqual(mockTask);
      expect(service.getTaskById).toHaveBeenCalledWith('test-id');
    });
  });

  describe('getTaskNotes', () => {
    it('should return notes from a task', async () => {
      const mockNotes = [
        {
          id: 'note-1',
          type: 'paragraph',
          content: 'Note content',
        },
      ];

      mockNotionService.getTaskNotes.mockResolvedValue(mockNotes);

      const result = await controller.getTaskNotes('test-id');

      expect(result).toEqual(mockNotes);
      expect(service.getTaskNotes).toHaveBeenCalledWith('test-id');
    });
  });

  describe('createTask', () => {
    it('should create a new task', async () => {
      const createDto: CreateTaskDto = {
        title: 'New Task',
        status: 'Sin empezar',
      };

      mockNotionService.createTask.mockResolvedValue(mockTask);

      const result = await controller.createTask(createDto);

      expect(result).toEqual(mockTask);
      expect(service.createTask).toHaveBeenCalledWith(createDto);
    });
  });

  describe('updateTask', () => {
    it('should update a task', async () => {
      const updateDto = { title: 'Updated Task' };

      mockNotionService.updateTask.mockResolvedValue(mockTask);

      const result = await controller.updateTask('test-id', updateDto);

      expect(result).toEqual(mockTask);
      expect(service.updateTask).toHaveBeenCalledWith('test-id', updateDto);
    });
  });

  describe('updateTaskStatus', () => {
    it('should update task status', async () => {
      mockNotionService.updateTaskStatus.mockResolvedValue(mockTask);

      const result = await controller.updateTaskStatus(
        'test-id',
        'Completado',
      );

      expect(result).toEqual(mockTask);
      expect(service.updateTaskStatus).toHaveBeenCalledWith(
        'test-id',
        'Completado',
      );
    });
  });

  describe('deleteTask', () => {
    it('should delete a task', async () => {
      const mockResult = { success: true };

      mockNotionService.deleteTask.mockResolvedValue(mockResult);

      const result = await controller.deleteTask('test-id');

      expect(result).toEqual(mockResult);
      expect(service.deleteTask).toHaveBeenCalledWith('test-id');
    });
  });

  describe('searchTasks', () => {
    it('should search tasks', async () => {
      mockNotionService.searchTasks.mockResolvedValue([mockTask]);

      const result = await controller.searchTasks('test');

      expect(result).toEqual([mockTask]);
      expect(service.searchTasks).toHaveBeenCalledWith('test');
    });
  });

  describe('getTasksByStatus', () => {
    it('should filter tasks by status', async () => {
      mockNotionService.getTasksByStatus.mockResolvedValue([mockTask]);

      const result = await controller.getTasksByStatus('Sin empezar');

      expect(result).toEqual([mockTask]);
      expect(service.getTasksByStatus).toHaveBeenCalledWith('Sin empezar');
    });
  });

  describe('addNoteToTask', () => {
    it('should add a note to a task', async () => {
      const mockResult = { success: true };

      mockNotionService.addNoteToTask.mockResolvedValue(mockResult);

      const result = await controller.addNoteToTask('test-id', 'Note content');

      expect(result).toEqual(mockResult);
      expect(service.addNoteToTask).toHaveBeenCalledWith(
        'test-id',
        'Note content',
      );
    });
  });
});
