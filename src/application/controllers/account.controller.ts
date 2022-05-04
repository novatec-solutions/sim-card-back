import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { AccountService } from 'src/domain/services/account.service';
import { LoggingInterceptor } from '../interceptors/logging.interceptor';

@Controller('validar')
@UseInterceptors(LoggingInterceptor)
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post('cuenta')
  async validateAccount(@Body() body) {
    return await this.accountService.validateAccount(body);
  }
}
