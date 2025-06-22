import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { SeedService } from './services/seed.service';
import { CsvGeneratorService } from './services/csv-generator.service';

@Resolver()
export class SeedResolver {

  constructor(
    private readonly seedService: SeedService,
    private readonly csvGeneratorService: CsvGeneratorService,
  ) {}

  @Mutation( () => Boolean, { name: 'executeSeed', description: 'Ejecuta la población de la base de datos' } )
  async executeSeed(): Promise<boolean> {
    return this.seedService.executeSeed();
  }

  @Query(() => String)
  async generateStudentsPerformanceCSV(): Promise<string> {
    return await this.csvGeneratorService.generateStudentsPerformanceCSV();
  }
}
