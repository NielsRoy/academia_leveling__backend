import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { Teacher } from '../entities/teacher.entity';
import { Role } from '../../auth/enum/role.enum';
import { RequireAuth } from '../../auth/decorators/require-auth.decorator';
import { TeachersService } from '../services/teachers.service';
import { ClassroomsService } from '../services/classrooms.service';
import { Classroom } from '../entities/classroom.entity';
import { GetAuthUser } from '../../auth/decorators/get-auth-user.decorator';
import { User } from '../../users/entities/user.entity';


@Resolver(() => Teacher)
@RequireAuth(Role.TEACHER)
export class TeachersResolver {
  constructor(

    private readonly teachersService: TeachersService,
    private readonly classroomsService: ClassroomsService,

  ) {}

  // @Mutation(() => Teacher)
  // async createTeacher(
  //   @Args('createTeacherInput') createTeacherInput: CreateTeacherInput
  // ): Promise<Teacher> {
  //   return this.teachersService.create(createTeacherInput);
  // }

  // @Query(() => [Teacher], { name: 'teachers' })
  // findAll() {
  //   return this.teachersService.findAll();
  // }

  @Query(() => Teacher, { name: 'teacher' })
  async findOne(
    @GetAuthUser() user: User,
  ): Promise<Teacher> {
    return this.teachersService.findOneByUser(user);
  }

  // @Mutation(() => Teacher)
  // updateTeacher(@Args('updateTeacherInput') updateTeacherInput: UpdateTeacherInput) {
  //   return this.teachersService.update(updateTeacherInput.id, updateTeacherInput);
  // }

  // @Mutation(() => Teacher)
  // removeTeacher(@Args('id', { type: () => Int }) id: number) {
  //   return this.teachersService.remove(id);
  // }

  @ResolveField( () => [Classroom], { name: 'classrooms' } )
  async getClassroomsByTeacher(
    @Parent() teacher: Teacher,
    // @Args() paginationArgs: PaginationArgs,
    // @Args() searchArgs: SearchArgs,
  ): Promise<Classroom[]> {
    return this.classroomsService.findAll(teacher);
  }
}
