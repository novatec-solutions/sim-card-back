import { Test, TestingModule } from '@nestjs/testing';
import { scryptSync } from 'crypto';
import { RequestInterceptorSecurity } from './request.middleware';

const KEY = 's3cr3t1234567890';
const hashedPassword = scryptSync(KEY, 'salt', 16).toString('base64');

describe('RequestInterceptorSecurity', () => {
  let requestService: RequestInterceptorSecurity;

  beforeEach(async () => {
    requestService = new RequestInterceptorSecurity();
  });

  describe('RequestInterceptorSecurity', () => {
    it('should encrypt data', async () => {
      const data = JSON.stringify({"name":"Claro telecomunicaciones"});
      const expected =
        'rXJqa+OeJSjtXjQyZbfqDN8kYCPcUyyNEXlvPRVTdgFhPso4zwm6zWUaVbm+S91k';
      expect(await requestService.encryptDataRequest(data, hashedPassword )).toBe(expected);
    });

    it('should decrypt data', async () => {
      const data = JSON.stringify({"name":"Claro telecomunicaciones"});
      const expected =
        'rXJqa+OeJSjtXjQyZbfqDN8kYCPcUyyNEXlvPRVTdgFhPso4zwm6zWUaVbm+S91k';
      expect(await requestService.decryptDataRequest(expected, hashedPassword )).toBe(data);
    });
  });
});
