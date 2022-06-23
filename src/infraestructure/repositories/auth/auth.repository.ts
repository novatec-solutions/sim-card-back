import { Injectable } from '@nestjs/common';
import Axios from 'axios';
import { SIM_MIGRATION_URL } from 'src/constants';
import { RequestMethod } from 'src/infraestructure/enum/request-method.enum';
import { HandleError } from 'src/infraestructure/handle-error';

@Injectable()
export class AuthRepository extends HandleError{
  async evaluateInformation(body) {
    try{
      const { data } = await Axios({
        method: RequestMethod.POST,
        url: `${SIM_MIGRATION_URL}validateSIMResource`,
        data: body,
      });
      return this.processError(data);
    } catch (error) {
      return {
        error: 1,
        response: { description: 'Ha ocurrido un error' },
      }
    }
  }

  async evaluateLine(body) {
    try{
      const { data } = await Axios({
        method: RequestMethod.GET,
        url: `${SIM_MIGRATION_URL}getCustomerInfoSIMResource`,
        params: body,
      });
      return this.processError(data);
    } catch (error) {
      return {
        error: 1,
        response: { description: 'Ha ocurrido un error' },
      }
    }
  }

  async evaluatePlan(body) {
    try{
      const { data } = await Axios({
        method: RequestMethod.POST,
        url: `${SIM_MIGRATION_URL}validatePlanSIMResource`,
        data: body,
      });
      return this.processError(data);
    } catch (error) {
      return {
        error: 1,
        response: { description: 'Ha ocurrido un error' },
      }
    }
  }
}