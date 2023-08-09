import { Injectable } from '@nestjs/common';
import { AppRepository } from './app.repository';

@Injectable()
export class AppService {
  private repository: AppRepository;

  constructor(params: { id: number; title: string; content: string }) {
    this.repository = new AppRepository({
      id: params.id,
      title: params.title,
      content: params.content,
    });
  }
}
