import { Injectable } from '@nestjs/common';
import Axios from 'axios';
import { SIM_MIGRATION_URL } from 'src/constants';
import { RequestMethod } from 'src/infraestructure/enum/request-method.enum';

@Injectable()
export class AuthRepository {
  async evaluateInformation(body) {
    try {
      const { data } = await Axios({
        method: RequestMethod.POST,
        url: `${SIM_MIGRATION_URL}validateSIMResource`,
        data: body,
      });
      return data;
    } catch (err) {
      return `Error: ${err}`;
    }
  }

  async evaluateLine(body) {
    try {
      const { data } = await Axios({
        method: RequestMethod.GET,
        url: `${SIM_MIGRATION_URL}getCustomerInfoSIMResource`,
        params: body,
      });
      return data;
    } catch (err) {
      return `Error: ${err}`;
    }
  }

  async evaluatePlan(body) {
    try {
      const { data } = await Axios({
        method: RequestMethod.POST,
        url: `${SIM_MIGRATION_URL}validatePlanSIMResource`,
        data: body,
      });
      return data;
    } catch (err) {
      return `Error: ${err}`;
    }
  }
}