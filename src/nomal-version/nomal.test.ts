import { AppRepository } from '../app.repository';

class BoardRepository {
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

class BoardService {
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

const board = new BoardService({ domainName: 'ljh' });

board.create({ id: 1, title: '111', content: '1111' });
