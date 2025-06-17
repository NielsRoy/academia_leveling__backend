import { Inject, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryRunner, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { HASH_ADAPTER } from '../common/adapters/constants';
import { HashAdapter } from '../common/adapters/hash/hash.adapter';
import { CreateUserInput } from './dto/create-user.input';
import { ErrorHandlerUtil } from '../common/utils/error-handler.util';

@Injectable()
export class UsersService {
  
  private logger = new Logger('UsersService');

  constructor(

    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,

    @Inject(HASH_ADAPTER)
    private readonly hashAdapter: HashAdapter,

  ) {}

  async create(createUserInput: CreateUserInput, queryRunner: QueryRunner): Promise<User> {
    try {
      const { password, firstName, lastName, ...rest } = createUserInput;
      const newUser = this.usersRepository.create({
        ...rest,
        password: this.hashAdapter.hash(createUserInput.password),
        firstName: firstName.toLowerCase().trim(),
        lastName: lastName.toLowerCase().trim(),
      });
      return queryRunner.manager.save(newUser);
    } catch (error) {
      ErrorHandlerUtil.handle(error, this.logger);
    }
  }


  findAll() {
    return `This action returns all users`;
  }

  async findOneById(id: number): Promise<User> {
    try {
      return await this.usersRepository.findOneByOrFail({ id });
    } catch (error) {
      ErrorHandlerUtil.handle(error, this.logger);
    }
  }

  async findOneByEmail(email: string): Promise<User> {
    try {
      return await this.usersRepository.findOneByOrFail({ email });
    } catch (error) {
      ErrorHandlerUtil.handle(error, this.logger);
    }
  }

  async update(id: number, updateUserInput: UpdateUserInput, queryRunner: QueryRunner): Promise<User> {
    try {
      const { password } = updateUserInput;
      if (password) updateUserInput.password = this.hashAdapter.hash(password);
      await this.usersRepository.createQueryBuilder().setQueryRunner(queryRunner)
        .update().set(updateUserInput).where('id = :id', { id }).execute();
      return await this.findOneById(id);
    } catch(error) {
      ErrorHandlerUtil.handle(error, this.logger);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
