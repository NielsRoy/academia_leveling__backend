import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { StudentsService } from './students.service';
import { Student } from './entities/student.entity';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';
import { RequireAuth } from '../auth/decorators/require-auth.decorator';
import { Role } from '../auth/enum/role.enum';
import { GetAuthUser } from '../auth/decorators/get-auth-user.decorator';
import { User } from '../users/entities/user.entity';
import { ParseIntPipe } from '@nestjs/common';
import { StudentAchiev } from '../student_achiev/entities/student_achiev.entity';
import { StudentAchievService } from '../student_achiev/student_achiev.service';


@Resolver(() => Student)
@RequireAuth(Role.STUDENT)
export class StudentsResolver {
  constructor(
    private readonly studentsService: StudentsService,
    private readonly studentAchievService: StudentAchievService
  ) {}

  // @Query(() => [Student], { name: 'students' })
  // findAll() {
  //   return this.studentsService.findAll();
  // }

  @Query(() => Student, { name: 'student' })
  async findOne(
    @GetAuthUser() user: User,
  ): Promise<Student> {
    return this.studentsService.findOneByUser(user);
  }

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

  @ResolveField( () => [StudentAchiev], { name: 'achievements' } )
  async getStudentAchievements(
    @Parent() student: Student,
  ): Promise<StudentAchiev[]> {
    return this.studentAchievService.findAll(student);
  }
}
