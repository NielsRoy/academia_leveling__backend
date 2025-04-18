import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StudentsService } from './students.service';
import { Student } from './entities/student.entity';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';
import { RequireAuth } from '../auth/decorators/require-auth.decorator';
import { Role } from '../auth/enum/role.enum';
import { GetAuthUser } from '../auth/decorators/get-auth-user.decorator';
import { User } from '../users/entities/user.entity';


@Resolver(() => Student)
@RequireAuth(Role.STUDENT)
export class StudentsResolver {
  constructor(private readonly studentsService: StudentsService) {}

  // @Query(() => [Student], { name: 'students' })
  // findAll() {
  //   return this.studentsService.findAll();
  // }

  // @Query(() => Student, { name: 'student' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.studentsService.findOne(id);
  // }

  @Mutation(() => Student, { description: 'Mediante este mutation el estudiante se puede unir a un classroom' })
  async updateStudent(
    @Args('updateStudentInput') updateStudentInput: UpdateStudentInput,
    @GetAuthUser() user: User,
  ): Promise<Student> {
    return this.studentsService.updateByUser(user, updateStudentInput);
  }

  // @Mutation(() => Student)
  // removeStudent(@Args('id', { type: () => Int }) id: number) {
  //   return this.studentsService.remove(id);
  // }
}
