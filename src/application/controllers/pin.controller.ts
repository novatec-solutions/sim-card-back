import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { PinService } from '../../domain/services/pin.service';
import { LoggingInterceptor } from '../interceptors/logging.interceptor';

@Controller('pin')
@UseInterceptors(LoggingInterceptor)
export class PinController {
  constructor(private readonly pinService: PinService) {}

  @Post('generar')
  async generatePin(@Body() body) {
    return await this.pinService.generatePin(body);
  }

  @Post('validar')
  async validatePin(@Body() body) {
    return await this.pinService.validatePin(body);
  }
}
