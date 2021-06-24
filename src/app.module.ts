import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { UpwardModule } from './upward/upward.module';
import { UpwardService } from './upward/upward.service';

@Module({
  imports: [UpwardModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: '185.216.25.151',
    username: 'cubetech',
    password: 'helloworld',
    database: 'app2021',
    "entities": ["dist/**/*.entity{.ts,.js}"],
    synchronize: false,
  }),
  ],
  providers: [UpwardService],
})
export class AppModule {}
