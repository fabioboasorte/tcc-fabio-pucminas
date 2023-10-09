import { Module } from '@nestjs/common';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsSchema } from 'src/schemas/projects.schema';

@Module({
  controllers: [ProjectsController],
  providers: [ProjectsService],
  imports: [
    MongooseModule.forFeature([{ name: 'Projects', schema: ProjectsSchema }]),
  ],
})
export class ProjectsModule {}
