import { Module } from '@nestjs/common';
import { HASH_ADAPTER } from './adapters/constants';
import { BcryptjsAdapter } from './adapters/hash/bcryptjs.adapter';

@Module({
  providers: [
    {
      provide: HASH_ADAPTER,
      useClass: BcryptjsAdapter,
    }
  ],
  exports: [
    HASH_ADAPTER
  ],
})
export class CommonModule {}
