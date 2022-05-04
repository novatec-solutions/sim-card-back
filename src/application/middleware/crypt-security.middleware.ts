import { Injectable, NestMiddleware } from '@nestjs/common';
import * as CryptoJS from 'crypto-js';
import { IV, UUID } from 'src/constants';
import { Request } from 'express';

@Injectable()
export class CryptSecurityMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: any) {
    if (req?.body?.data) {
      const { data } = req.body as Record<string, any>;
      req.body = CryptSecurityMiddleware.decrypt(data);
    }
    next();
  }

  public static decrypt<T>(value: string): T {
    const key = CryptoJS.enc.Hex.parse(UUID);
    const iv = CryptoJS.enc.Hex.parse(IV);
    const decrypted = CryptoJS.AES.decrypt(value, key, {
      iv,
      padding: CryptoJS.pad.ZeroPadding,
    }).toString(CryptoJS.enc.Utf8);
    return JSON.parse(decrypted);
  }
}
