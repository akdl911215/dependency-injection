import { Injectable } from '@nestjs/common';
import { AppInterface } from './app.interface';

// Service
@Injectable()
export class AppService {
  constructor(private readonly repository: AppInterface) {}

  public create(params: Board): Board {
    return this.repository.create(params);
  }
}
