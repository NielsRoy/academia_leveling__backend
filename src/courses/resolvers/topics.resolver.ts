import { Args, Int, Query, Resolver } from "@nestjs/graphql";
import { Topic } from "../entities/topic.entity";
import { ParseIntPipe } from "@nestjs/common";
import { TopicsService } from "../services/topics.service";
import { RequireAuth } from "src/auth/decorators/require-auth.decorator";

@Resolver(() => Topic)
@RequireAuth()
export class TopicsResolver {
	constructor(
		private readonly topicsService: TopicsService,
	) {}

	@Query(() => [Topic], { name: 'topics' })
	async findAll(): Promise<Topic[]> {
		return this.topicsService.findAll();
	}

	@Query(() => Topic, { name: 'topic' })
	async findOne(
		@Args('id', { type: () => Int }, ParseIntPipe) id: number
	): Promise<Topic> {
		return this.topicsService.findOne(id);
	}

}