import { Injectable, NestMiddleware } from '@nestjs/common';
import { createCipheriv, createDecipheriv } from 'crypto';
import { Request, Response, NextFunction } from 'express';

const iv = 'FhQKfo3xwQeIutbQ';

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
    hashedPassword: any,
  ): Promise<string> {
    const cipher = createCipheriv('aes-192-cbc', hashedPassword, iv); //pruebas modo ecb

    const decryptedText = Buffer.concat([
      cipher.update(textToEncrypt),
      cipher.final(),
    ]);
    return decryptedText.toString('base64'); 
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
    encryptedText,
    hashedPassword: any,
  ): Promise<string> {
    const decipher = createDecipheriv('aes-192-cbc', hashedPassword, iv); //pruebas modo ecb

    let decrypted = decipher.update(encryptedText, 'base64', 'utf8');
    decrypted += decipher.final('utf8');

    return decrypted.toString();
  }
}
