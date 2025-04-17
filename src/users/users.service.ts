import { BadRequestException, Inject, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundError, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { HASH_ADAPTER } from '../common/adapters/constants';
import { HashAdapter } from '../common/adapters/hash/hash.adapter';
import { CreateUserInput } from './dto/create-user.input';

@Injectable()
export class UsersService {
  
  private logger = new Logger('UsersService');

  constructor(

    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,

    @Inject(HASH_ADAPTER)
    private readonly hashAdapter: HashAdapter,

  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    try {
      const newUser = this.usersRepository.create({
        ...createUserInput,
        password: this.hashAdapter.hash(createUserInput.password),
        firstName: createUserInput.firstName.toLowerCase(),
        lastName: createUserInput.lastName.toLowerCase(),
      });
      return await this.usersRepository.save(newUser);
    } catch (error) {
      this.handleDBErrors(error);
    }

  }


  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async findOneById(id: number): Promise<User> {
    try {
      return await this.usersRepository.findOneByOrFail({ id });
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async findOneByEmail(email: string): Promise<User> {
    try {
      return await this.usersRepository.findOneByOrFail({ email });
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  private handleDBErrors(error: any): never {
    if (error.code === '23505') {
      throw new BadRequestException(error.detail.replace('Key ',''));
    }

    if (error instanceof EntityNotFoundError) {
      throw new NotFoundException(error.message);
    }

    this.logger.error(error);
    throw new InternalServerErrorException(`Check server logs`);
  }
}
