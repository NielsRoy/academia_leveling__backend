import { Args, Query, Resolver } from "@nestjs/graphql";
import { Subject } from "../entities/subject.entity";
import { SubjectsService } from "../services/subjects.service";
import { RequireAuth } from "../../auth/decorators/require-auth.decorator";

@Resolver(() => Subject)
@RequireAuth()
export class SubjectsResolver {

	constructor(
		private readonly subjectsService: SubjectsService,
	) {}

  @Query(() => [Subject], { name: 'subjects' })
  async findAll(): Promise<Subject[]> {
    return this.subjectsService.findAll();
  }

  @Query(() => Subject, { name: 'subject' })
  async findOne(
    @Args('searchParam', { type: () => String, description: 'Find a subject by its id or code' }) searchParam: string
  ): Promise<Subject> {
    return this.subjectsService.findOne(searchParam);
  }
}