import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { StudentDoExercise } from "../../students/entities/student_do_exercise.entity";
import { Repository } from "typeorm";
import { join } from "path";
import { createObjectCsvWriter } from "csv-writer";

@Injectable()
export class CsvGeneratorService {

  constructor(
    @InjectRepository(StudentDoExercise)
    private readonly stDoExRepository: Repository<StudentDoExercise>,
  ) {}

  async getStudentsPerformance(): Promise<any[]> {
          const sde = await this.stDoExRepository
              .createQueryBuilder('sde')
              .select([
                  'sde.student_id',
                  'sde.errors',
                  'les.topic_id',
              ])
              .leftJoin('sde.exercise', 'ex')
              .leftJoin('ex.lesson', 'les')
              .getRawMany();
          
          return sde;
      }
  
      async generateStudentsPerformanceCSV() {
          const filePath = join(process.cwd(), 'src/students_performance.csv') 
          //const filePath = join(__dirname, '..', '..', 'exports', 'students_performance.csv');
  
          const data = await this.getStudentsPerformance();
          for (const item of data) {
              console.log(item);
          }
  
          const csvData = data.map((item) => ({
              student_id: item.student_id,
              topic_id: item.topic_id,
              correct: item.sde_errors === 0 ? 1 : 0,
          }));
  
          const csvWriter = createObjectCsvWriter({
              path: filePath,
              header: [
                  { id: 'student_id', title: 'student_id' },
                  { id: 'topic_id', title: 'topic_id' },
                  { id: 'correct', title: 'correct' },
              ]
              //header: Object.keys(data[0]).map((key) => ({ id: key, title: key })),
          });
  
          await csvWriter.writeRecords(csvData);
          return filePath;
    }

}
