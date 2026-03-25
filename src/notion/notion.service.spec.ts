import { Test, TestingModule } from '@nestjs/testing';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { NotionService } from './notion.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

describe('NotionService', () => {
  let service: NotionService;

  beforeEach(async () => {
    process.env.NOTION_TOKEN = 'test-token';
    process.env.NOTION_DATABASE_ID = 'test-db-id';

    const module: TestingModule = await Test.createTestingModule({
      providers: [NotionService],
    }).compile();

    service = module.get<NotionService>(NotionService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('NotionService initialization', () => {
    it('should be defined', () => {
      expect(service).toBeDefined();
    });

    it('should throw error if NOTION_TOKEN is not set', () => {
      delete process.env.NOTION_TOKEN;
      expect(
        () =>
          new NotionService(),
      ).toThrow(BadRequestException);
    });

    it('should throw error if NOTION_DATABASE_ID is not set', () => {
      delete process.env.NOTION_DATABASE_ID;
      expect(
        () =>
          new NotionService(),
      ).toThrow(BadRequestException);
    });
  });

  describe('Helper methods', () => {
    it('isTextBlock should identify text blocks correctly', () => {
      const textBlock = { type: 'paragraph' } as any;
      const headingBlock = { type: 'heading_1' } as any;
      const imageBlock = { type: 'image' } as any;

      expect(service['isTextBlock'](textBlock)).toBe(true);
      expect(service['isTextBlock'](headingBlock)).toBe(true);
      expect(service['isTextBlock'](imageBlock)).toBe(false);
    });

    it('extractRichText should extract text from rich text properties', () => {
      const property = {
        rich_text: [
          { plain_text: 'Hello' },
          { plain_text: ' World' },
        ],
      };

      const result = service['extractRichText'](property);
      expect(result).toBe('Hello World');
    });

    it('extractRichText should return empty string for undefined property', () => {
      const result = service['extractRichText'](undefined);
      expect(result).toBe('');
    });
  });

  describe('Service methods (integration level)', () => {
    it('should have getAllTasks method', () => {
      expect(service.getAllTasks).toBeDefined();
    });

    it('should have getTaskById method', () => {
      expect(service.getTaskById).toBeDefined();
    });

    it('should have getTaskNotes method', () => {
      expect(service.getTaskNotes).toBeDefined();
    });

    it('should have createTask method', () => {
      expect(service.createTask).toBeDefined();
    });

    it('should have updateTask method', () => {
      expect(service.updateTask).toBeDefined();
    });

    it('should have updateTaskStatus method', () => {
      expect(service.updateTaskStatus).toBeDefined();
    });

    it('should have deleteTask method', () => {
      expect(service.deleteTask).toBeDefined();
    });

    it('should have searchTasks method', () => {
      expect(service.searchTasks).toBeDefined();
    });

    it('should have getTasksByStatus method', () => {
      expect(service.getTasksByStatus).toBeDefined();
    });

    it('should have addNoteToTask method', () => {
      expect(service.addNoteToTask).toBeDefined();
    });
  });
});
