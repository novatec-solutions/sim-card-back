import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { SoapModule } from 'nestjs-soap';
import { AppController } from './controllers/app.controller';
import { RequestInterceptorSecurity } from './middleware/request.middleware';
import { AppService } from './services/app.service';

/**
 * Declaracion del modulo base, se especifica el controlador principal
 * adicionalmente se especifica las definiciones iniciales a usar en el programa tales como
 * las rutas, servicios, middleware, etc.
 * Dicho modulo es el que se utiliza para inicializar la aplicacion
 * @export
 * @class AppModule
 * @implements {NestModule}
 */
@Module({
  imports: [
    SoapModule.register({
      clientName: 'COUNTRY_SOAP_LIST',
      uri: 'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL'
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestInterceptorSecurity).forRoutes('*');
  }
}
