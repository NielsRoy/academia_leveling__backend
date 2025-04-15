import * as bcrypt from 'bcryptjs';
import { Injectable } from '@nestjs/common';
import { HashAdapter } from './hash.adapter';

@Injectable()
export class BcryptjsAdapter implements HashAdapter {
  private readonly saltRounds = 10;

  hash(data: string): string {
    return bcrypt.hashSync(data, this.saltRounds);
  }

  compare(data: string, encrypted: string): boolean {
    return bcrypt.compareSync(data, encrypted);
  }
}