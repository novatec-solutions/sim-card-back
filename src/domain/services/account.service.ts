import { Injectable } from '@nestjs/common';
import { AccountRepository } from 'src/infraestructure/repositories/account/account.repository';

@Injectable()
export class AccountService {
  constructor(private readonly repository: AccountRepository) {}

  async validateAccount(validateAccountDto: any): Promise<any> {
    return await this.repository.validateAccount(validateAccountDto);
  }
}
