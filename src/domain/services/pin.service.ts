import { Injectable } from '@nestjs/common';
import { PinRepository } from 'src/infraestructure/repositories/pin/pin.repository';

@Injectable()
export class PinService {
  constructor(private readonly repository: PinRepository) {}

  async generatePin(generatePinDto: any): Promise<any> {
    return await this.repository.generatePin(generatePinDto);
  }

  async validatePin(validatePinDto: any): Promise<any> {
    return await this.repository.validatePin(validatePinDto);
  }
}
