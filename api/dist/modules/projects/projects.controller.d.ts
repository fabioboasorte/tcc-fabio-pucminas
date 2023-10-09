/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { ProjectsService } from './projects.service';
import { Projects } from 'src/interfaces/projects.int';
import { CreateProjectsDto } from 'src/dto/projects.dto';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    getProjects(): Promise<Projects[] | null>;
    create(createProjectsDto: CreateProjectsDto): Promise<Projects>;
    get(params: any): Promise<Projects>;
    update(createProjectsDto: CreateProjectsDto, params: any): Promise<import("mongoose").Document<unknown, {}, Projects> & Projects & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(params: any): Promise<import("mongoose").Document<unknown, {}, Projects> & Projects & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
