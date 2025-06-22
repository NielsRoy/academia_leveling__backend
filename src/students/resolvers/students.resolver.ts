import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { StudentsService } from '../services/students.service';
import { Student } from '../entities/student.entity';
import { CreateStudentInput } from '../dto/create-student.input';
import { UpdateStudentInput } from '../dto/update-student.input';
import { RequireAuth } from '../../auth/decorators/require-auth.decorator';
import { Role } from '../../auth/enum/role.enum';
import { GetAuthUser } from '../../auth/decorators/get-auth-user.decorator';
import { User } from '../../users/entities/user.entity';
import { ParseIntPipe } from '@nestjs/common';
import { StudentAchiev } from '../entities/student_achiev.entity';
import { StudentAchievService } from '../services/student_achiev.service';
import { StudentDoExerciseInput } from '../dto/student-do-exercise.input';
import { StudentDoExercise } from '../entities/student_do_exercise.entity';
import { AdaptativeLearningService } from '../services/adaptative-learning.service';


@Resolver(() => Student)
@RequireAuth(Role.STUDENT)
export class StudentsResolver {
  constructor(
    private readonly studentsService: StudentsService,
    private readonly studentAchievService: StudentAchievService,
    private readonly adapatativeLearningService: AdaptativeLearningService,
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
    return await this.studentsService.updateByUser(user, updateStudentInput);
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

  @Mutation(() => StudentDoExercise)
  async studentDoExercise(
    @Args('studentDoExerciseInput') studentDoExerciseInput: StudentDoExerciseInput,
    @GetAuthUser() user: User,
  ): Promise<StudentDoExercise> {
    return await this.studentsService.setStudentDoExercise(user, studentDoExerciseInput);
  }
}
