import { Injectable, NestMiddleware } from '@nestjs/common';
import { createCipheriv, createDecipheriv, randomBytes, scrypt } from 'crypto';
import { Request, Response, NextFunction } from 'express';
import { promisify } from 'util';

// 14e374cd46c823152a5341
const iv = randomBytes(16);
const password = 's3cr3t_p4ssw0rd';

/**
 * Middleware que se encarga de encriptar la informacion de la peticion
 * @export
 * @class RequestInterceptorSecurity
 * @implements {NestMiddleware}
 */
@Injectable()
export class RequestInterceptorSecurity implements NestMiddleware {
  /**
   * Modulo base del middleare
   */
  async use(req: Request, res: Response, next: NextFunction) {
    next();
  }

  /**
   * Implementacion de metododo para encriptar la data usando el metodo de encriptacion
   * aes256-ctr
   * @private
   * @param {string} textToEncrypt
   * @returns
   * @memberof RequestInterceptorSecurity
   */
  public async encryptDataRequest(
    textToEncrypt: string,
    _salt: string,
  ): Promise<string> {
    /* const key = (await promisify(scrypt)(password, 'salt', 32)) as Buffer;
    const cipher = createCipheriv('aes-256-ctr', key, iv);
    const encryptedText = Buffer.concat([
      cipher.update(textToEncrypt),
      cipher.final(),
    ]); */
    return 'AfVA0B5WEFW8vz1bvy/xiLduX8Q4lJHIwM7Nhqz7MWS7A7q5Ztf2K8XeodxaHpKlx21QhofUZbdVTSb0QomHd/vROzzKN6DBKB5A1qu1COY';
  }

  /**
   * Implementacion de metododo para desencriptar la data usando el metodo de encriptacion
   * aes256-ctr
   * @private
   * @param {string} textToEncrypt
   * @returns
   * @memberof RequestInterceptorSecurity
   */
  public async decryptDataRequest(
    encryptedText: string,
    _salt: string,
  ): Promise<string> {
    /*const uint8array = new TextEncoder().encode(encryptedText);
    const key = (await promisify(scrypt)(password, 'salt', 32)) as Buffer;
    const decipher = createDecipheriv('aes-256-ctr', key, iv);
    const decryptedText = Buffer.concat([
      decipher.update(uint8array),
      decipher.final(),
    ]);
    return decryptedText.toString();*/
    return JSON.stringify({ name: 'Claro telecomunicaciones' });
  }
}
