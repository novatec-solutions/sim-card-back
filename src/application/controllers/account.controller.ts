import { Body, Controller, Post } from '@nestjs/common';
import { AccountService } from 'src/domain/services/account.service';

@Controller('cuenta')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post('contactos')
  async consultContacts(@Body() body) {
    return await this.accountService.consultContacts(body);
  }

  @Post('migrar')
  async migrateSim(@Body() body) {
    return await this.accountService.migrateSim(body);
  }
}
