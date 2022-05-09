import { Injectable } from '@nestjs/common';
import { AuthRepository } from 'src/infraestructure/repositories/auth/auth.repository';

@Injectable()
export class AuthService {
  constructor(private readonly repository: AuthRepository) {}

  async evaluateInformation(infoDto: any): Promise<any> {
    return await this.repository.evaluateInformation(infoDto);
  }

  async evaluateLine(infoDto: any): Promise<any> {
    return await this.repository.evaluateLine(infoDto);
  }

  async evaluatePlan(infoDto: any): Promise<any> {
    return await this.repository.evaluatePlan(infoDto);
  }
}
