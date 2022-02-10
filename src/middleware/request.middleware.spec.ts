import { Test, TestingModule } from '@nestjs/testing';
import { RequestInterceptorSecurity } from './request.middleware';

const KEY = 's3cr3t';

describe('RequestInterceptorSecurity', () => {
  let requestService: RequestInterceptorSecurity;

  beforeEach(async () => {
    requestService = new RequestInterceptorSecurity();
  });

  describe('RequestInterceptorSecurity', () => {
    it('should encrypt data', async () => {
      const data = JSON.stringify({ name: 'Claro telecomunicaciones' });
      const expected =
        'AfVA0B5WEFW8vz1bvy/xiLduX8Q4lJHIwM7Nhqz7MWS7A7q5Ztf2K8XeodxaHpKlx21QhofUZbdVTSb0QomHd/vROzzKN6DBKB5A1qu1COY';
      expect(await requestService.encryptDataRequest(data, KEY)).toBe(expected);
    });

    it('should decrypt data', async () => {
      const data = JSON.stringify({ name: 'Claro telecomunicaciones' });
      const expected =
        'AfVA0B5WEFW8vz1bvy/xiLduX8Q4lJHIwM7Nhqz7MWS7A7q5Ztf2K8XeodxaHpKlx21QhofUZbdVTSb0QomHd/vROzzKN6DBKB5A1qu1COY';
      expect(await requestService.decryptDataRequest(expected, KEY)).toBe(data);
    });
  });
});
