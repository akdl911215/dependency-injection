import { Injectable } from '@nestjs/common';
import { AppInterface } from './app.interface';

//Repository
@Injectable()
export class AppRepository implements AppInterface {
  private save: Map<string, Board> = new Map<string, Board>();

  private readonly domainName: string;

  constructor(param: DomainName) {
    this.domainName = param.domainName;
  }

  public create(params: Board): Board {
    this.save.set(`board${this.domainName}-${params.id}`, {
      id: params.id,
      title: params.title,
      content: params.content,
    });

    return this.save.get(`board${this.domainName}-${params.id}`);
  }
}
