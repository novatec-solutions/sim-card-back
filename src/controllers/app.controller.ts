import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async getHello(@Body() myDto: string) {
    const data = await this.appService.getHello();
    return `Continent List: ${data}`;
  }
}
