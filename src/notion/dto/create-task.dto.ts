import { IsString, IsOptional } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  status?: string; // Sin empezar, En desarrollo, Probando, Revisión, Completado

  @IsOptional()
  @IsString()
  team?: string; // FrontEnd o Backend

  @IsOptional()
  @IsString()
  keywords?: string; // Comma-separated or array

  @IsOptional()
  @IsString()
  dueDate?: string; // ISO 8601 date format
}
