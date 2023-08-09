import { AppRepository } from './app.repository';
import { Test, TestingModule } from '@nestjs/testing';

describe('Board Repository Process', () => {
  let repository: AppRepository;

  beforeEach(async () => {
    const repo = new AppRepository({ domainName: 'ljh' });

    const module: TestingModule = await Test.createTestingModule({
      providers: [AppRepository],
    }).compile();

    repository = module.get<AppRepository>(AppRepository);
  });

  describe('board create unit test', () => {
    it('success', () => {
      // new AppRepository({ domainName: 'ljh' });

      const dto = { id: 1, title: '11', content: '111' };
      const response = repository.create(dto);

      console.log(response);
    });
  });
});
