import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Projects } from 'src/interfaces/projects.int';
import { CreateProjectsDto } from 'src/dto/projects.dto';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  async getProjects(): Promise<Projects[] | null> {
    return await this.projectsService.findAll();
  }

  @Post('add')
  async create(
    @Body() createProjectsDto: CreateProjectsDto,
  ): Promise<Projects> {
    return await this.projectsService.create(createProjectsDto);
  }

  @Get('findById/:id')
  async get(@Param() params) {
    return this.projectsService.findById(params.id);
  }

  @Put('edit/:id')
  update(@Body() createProjectsDto: CreateProjectsDto, @Param() params) {
    return this.projectsService.update(params.id, createProjectsDto);
  }

  @Delete('delete/:id')
  remove(@Param() params) {
    return this.projectsService.remove(params.id);
  }
}
