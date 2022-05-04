import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PinService } from './domain/services/pin.service';
import { HttpModule } from '@nestjs/axios';
import { PinController } from './application/controllers/pin.controller';
import { AccountController } from './application/controllers/account.controller';
import { CustomerController } from './application/controllers/customer.controller';
import { AccountService } from './domain/services/account.service';
import { CustomerService } from './domain/services/customer.service';
import { AccountRepository } from './infraestructure/repositories/account/account.repository';
import { PinRepository } from './infraestructure/repositories/pin/pin.repository';
import { CustomerRepository } from './infraestructure/repositories/customer/customer.repository';
import { CryptSecurityMiddleware } from './application/middleware/crypt-security.middleware';

const REPOSITORIES = [AccountRepository, PinRepository, CustomerRepository];
const SERVICES = [PinService, AccountService, CustomerService];

@Module({
  imports: [HttpModule],
  controllers: [PinController, AccountController, CustomerController],
  providers: [...REPOSITORIES, ...SERVICES],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CryptSecurityMiddleware).forRoutes('*');
  }
}
