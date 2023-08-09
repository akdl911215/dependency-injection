import { AppService } from './app.service';
import { Test, TestingModule } from '@nestjs/testing';
import { AppRepository } from './app.repository';

describe('Board Service Process', () => {
  let service: AppService;

  beforeEach(async () => {
    const ser = new AppService({ domainName: 'ljh' });

    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService, AppRepository],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  describe('board create unit test', () => {
    it('success', () => {
      const dto = { id: 1, title: '11', content: '111' };
      const response = service.create(dto);

      console.log(response);
    });
  });
});
