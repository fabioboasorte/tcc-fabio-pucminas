import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsModule } from './modules/projects/projects.module';
// import { UsersModule } from './modules/users/users.module';
// import { EventsModule } from './modules/events/events.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_HOST),
    ProjectsModule,
    // UsersModule,
    // EventsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
