import { Module } from '@nestjs/common';
import { AppRepository } from './app.repository';

@Module({
  imports: [],
  controllers: [],
  providers: [AppRepository],
})
export class AppModule {}
