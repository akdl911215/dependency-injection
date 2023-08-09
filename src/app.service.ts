import { Injectable } from '@nestjs/common';
import { AppRepository } from './app.repository';

@Injectable()
export class AppService {
  private repository: AppRepository;

  constructor(param: DomainName) {
    this.repository = new AppRepository({
      domainName: param.domainName,
    });
  }

  public create(params: Board): Board {
    return this.repository.create(params);
  }
}
