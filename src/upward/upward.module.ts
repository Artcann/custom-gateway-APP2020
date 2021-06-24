import { Module } from '@nestjs/common';
import { UpwardService } from './upward.service';
import { Connection } from 'typeorm';

@Module({
  providers: [UpwardService]
})
export class UpwardModule {}
