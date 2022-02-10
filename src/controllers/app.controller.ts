import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  async getHello(@Body() myDto: string) {
    const data = await this.appService.getHello();
    return `Lista de continentes desde SOAP: ${data} `;
  }

  @Get('/paises')
  async getPaises(@Body() myDto: string) {
    const data = Buffer.from('novatec', 'base64');
    return data.toString('hex');
  }
}
