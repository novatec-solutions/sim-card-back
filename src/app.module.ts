import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PinService } from './domain/services/pin.service';
import { HttpModule } from '@nestjs/axios';
import { PinController } from './application/controllers/pin.controller';
import { PinRepository } from './infraestructure/repositories/pin/pin.repository';
import { CryptSecurityMiddleware } from './application/middleware/crypt-security.middleware';

const REPOSITORIES = [PinRepository];
const SERVICES = [PinService];

@Module({
  imports: [HttpModule],
  controllers: [PinController],
  providers: [...REPOSITORIES, ...SERVICES],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CryptSecurityMiddleware).forRoutes('*');
  }
}
