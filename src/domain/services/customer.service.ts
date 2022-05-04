import { Injectable } from '@nestjs/common';
import { CustomerRepository } from 'src/infraestructure/repositories/customer/customer.repository';

@Injectable()
export class CustomerService {
  constructor(private readonly repository: CustomerRepository) {}

  async searchDataClient(searchDataClientDto: any): Promise<any> {
    return await this.repository.searchDataClient(searchDataClientDto);
  }
}
