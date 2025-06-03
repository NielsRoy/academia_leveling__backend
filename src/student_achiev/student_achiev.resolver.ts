import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StudentAchievService } from './student_achiev.service';
import { StudentAchiev } from './entities/student_achiev.entity';
import { CreateStudentAchievInput } from './dto/create-student_achiev.input';
import { UpdateStudentAchievInput } from './dto/update-student_achiev.input';
import { RequireAuth } from '../auth/decorators/require-auth.decorator';
import { Role } from '../auth/enum/role.enum';

@Resolver(() => StudentAchiev)
//@RequireAuth()
export class StudentAchievResolver {
  constructor(private readonly studentAchievService: StudentAchievService) {}

  @Mutation(() => StudentAchiev)
  createStudentAchiev(@Args('createStudentAchievInput') createStudentAchievInput: CreateStudentAchievInput) {
    return this.studentAchievService.create(createStudentAchievInput);
  }

  // @Query(() => [StudentAchiev], { name: 'studentAchiev' })
  // findAll() {
  //   return this.studentAchievService.findAll();
  // }

  @Query(() => StudentAchiev, { name: 'studentAchiev' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.studentAchievService.findOne(id);
  }

  @Mutation(() => StudentAchiev)
  updateStudentAchiev(@Args('updateStudentAchievInput') updateStudentAchievInput: UpdateStudentAchievInput) {
    return this.studentAchievService.update(updateStudentAchievInput.id, updateStudentAchievInput);
  }

  @Mutation(() => StudentAchiev)
  removeStudentAchiev(@Args('id', { type: () => Int }) id: number) {
    return this.studentAchievService.remove(id);
  }
}
