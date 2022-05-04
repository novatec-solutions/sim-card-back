import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { CustomerService } from 'src/domain/services/customer.service';
import { LoggingInterceptor } from '../interceptors/logging.interceptor';

@Controller('cliente')
@UseInterceptors(LoggingInterceptor)
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post('cuenta')
  async searchDataClient(@Body() body) {
    return await this.customerService.searchDataClient(body);
  }
}
