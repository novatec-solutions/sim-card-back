import { Injectable } from '@nestjs/common';
import { AccountRepository } from 'src/infraestructure/repositories/account/account.repository';

@Injectable()
export class AccountService {
  constructor(private readonly repository: AccountRepository) {}

  async consultContacts(consultContactsDto: any): Promise<any> {
    return await this.repository.consultContacts(consultContactsDto);
  }

  async migrateSim(Dto: any): Promise<any> {
    return await this.repository.migrateSim(Dto);
  }
}
