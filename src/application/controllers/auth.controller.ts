import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from 'src/domain/services/auth.service';

@Controller('validar')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('informacion')
  async evaluateInformation(@Body() body) {
    return await this.authService.evaluateInformation(body);
  }

  @Post('linea')
  async evaluateLine(@Body() body) {
    return await this.authService.evaluateLine(body);
  }

  @Post('plan')
  async evaluatePlan(@Body() body) {
    return await this.authService.evaluatePlan(body);
  }
}
