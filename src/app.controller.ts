import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  private service: AppService;

  constructor(param: DomainName) {
    this.service = new AppService({
      domainName: param.domainName,
    });
  }

  @Post('/')
  private create(@Body() dto: Board): Board {
    return this.service.create(dto);
  }
}
