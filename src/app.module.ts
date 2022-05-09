import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CryptSecurityMiddleware } from './application/middleware/crypt-security.middleware';

import { PinController } from './application/controllers/pin.controller';
import { PinService } from './domain/services/pin.service';
import { PinRepository } from './infraestructure/repositories/pin/pin.repository';

import { AuthController } from './application/controllers/auth.controller';
import { AuthService } from './domain/services/auth.service';
import { AuthRepository } from './infraestructure/repositories/auth/auth.repository';

import { AccountController } from './application/controllers/account.controller';
import { AccountService } from './domain/services/account.service';
import { AccountRepository } from './infraestructure/repositories/account/account.repository';

const REPOSITORIES = [PinRepository, AuthRepository, AccountRepository];
const SERVICES = [PinService, AuthService, AccountService];

@Module({
  imports: [HttpModule],
  controllers: [PinController, AuthController, AccountController],
  providers: [...REPOSITORIES, ...SERVICES],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CryptSecurityMiddleware).forRoutes('*');
  }
}
