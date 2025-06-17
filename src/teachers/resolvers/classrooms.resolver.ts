import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { Classroom } from '../entities/classroom.entity';
import { RequireAuth } from '../../auth/decorators/require-auth.decorator';
import { Role } from '../../auth/enum/role.enum';
import { ClassroomsService } from '../services/classrooms.service';
import { CreateClassroomInput } from '../dto/classroom/create-classroom.input';
import { GetAuthUser } from '../../auth/decorators/get-auth-user.decorator';
import { User } from '../../users/entities/user.entity';
import { Student } from '../../students/entities/student.entity';
import { StudentsService } from '../../students/students.service';
import { ModuleRef } from '@nestjs/core';


@Resolver(() => Classroom)
@RequireAuth(Role.TEACHER)
export class ClassroomsResolver {
  constructor(
    private readonly classroomsService: ClassroomsService,
    //private readonly studentsService: StudentsService,
    private readonly moduleRef: ModuleRef,
  ) {}

  @Mutation(() => Classroom)
  async createClassroom(
    @Args('createClassroomInput') createClassroomInput: CreateClassroomInput,
    @GetAuthUser() user: User,
  ): Promise<Classroom> {
    return this.classroomsService.create(createClassroomInput, user);
  }

  // @Query(() => [Classroom], { name: 'classrooms' })
  // findAll() {
  //   return this.classroomsService.findAll();
  // }

  @Query(() => Classroom, { name: 'classroom' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.classroomsService.findOne(id);
  }

  // @Mutation(() => Classroom)
  // updateClassroom(@Args('updateClassroomInput') updateClassroomInput: UpdateClassroomInput) {
  //   return this.classroomsService.update(updateClassroomInput.id, updateClassroomInput);
  // }

  // @Mutation(() => Classroom)
  // removeClassroom(@Args('id', { type: () => Int }) id: number) {
  //   return this.classroomsService.remove(id);
  // }

  @ResolveField( () => [Student], { name: 'students' } )
  async getStudentsByClassroom(
    @Parent() classroom: Classroom,
    // @Args() paginationArgs: PaginationArgs,
    // @Args() searchArgs: SearchArgs,
  ): Promise<Student[]> {
    const studentsService = this.moduleRef.get(StudentsService, { strict: false });
    return await studentsService.findAllByClassroom(classroom);
  }

}
