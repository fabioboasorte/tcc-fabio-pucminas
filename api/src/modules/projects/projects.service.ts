import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Projects } from 'src/interfaces/projects.int';
import { CreateProjectsDto } from 'src/dto/projects.dto';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel('Projects') private projectsModel: Model<Projects>,
  ) {}

  async create(createProjectsDto: CreateProjectsDto): Promise<Projects> {
    const createdProject = new this.projectsModel(createProjectsDto);
    return createdProject.save();
  }

  async findAll(): Promise<Projects[]> {
    return this.projectsModel.find().exec();
  }

  async findById(id: string): Promise<Projects> {
    return this.projectsModel.findById(id).exec();
  }

  async update(id: string, createProjectsDto: CreateProjectsDto) {
    return this.projectsModel.findByIdAndUpdate(id, createProjectsDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.projectsModel.findByIdAndRemove(id);
  }
}
