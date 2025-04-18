import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Classroom } from '../entities/classroom.entity';
import { RequireAuth } from '../../auth/decorators/require-auth.decorator';
import { Role } from '../../auth/enum/role.enum';
import { ClassroomsService } from '../services/classrooms.service';
import { CreateClassroomInput } from '../dto/classroom/create-classroom.input';
import { GetAuthUser } from '../../auth/decorators/get-auth-user.decorator';
import { User } from '../../users/entities/user.entity';


@Resolver(() => Classroom)
@RequireAuth(Role.TEACHER)
export class ClassroomsResolver {
  constructor(private readonly classroomsService: ClassroomsService) {}

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

  // @Query(() => Classroom, { name: 'classroom' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.classroomsService.findOne(id);
  // }

  // @Mutation(() => Classroom)
  // updateClassroom(@Args('updateClassroomInput') updateClassroomInput: UpdateClassroomInput) {
  //   return this.classroomsService.update(updateClassroomInput.id, updateClassroomInput);
  // }

  // @Mutation(() => Classroom)
  // removeClassroom(@Args('id', { type: () => Int }) id: number) {
  //   return this.classroomsService.remove(id);
  // }
}
