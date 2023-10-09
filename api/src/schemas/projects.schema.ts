import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProjectsDocument = HydratedDocument<Projects>;

@Schema()
export class Projects {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop()
  votes: number;

  @Prop()
  goal: number;

  @Prop()
  goalAchieved: number;

  @Prop()
  imagem: string;

  @Prop()
  region: string;
}

export const ProjectsSchema = SchemaFactory.createForClass(Projects);
