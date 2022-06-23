import { Injectable } from '@nestjs/common';
import Axios from 'axios';
import { ID_CLARO_URL } from 'src/constants';
import { RequestMethod } from 'src/infraestructure/enum/request-method.enum';
import { HandleError } from 'src/infraestructure/handle-error';
import { generatePinRequest, validatePinRequest } from './pin.request';

@Injectable()
export class PinRepository extends HandleError {
  async generatePin(body) {
    try{
      const { data } = await Axios({
        method: RequestMethod.PUT,
        url: `${ID_CLARO_URL}GeneratePin`,
        data: generatePinRequest(body),
      });
      return this.processErrorRes(data);
    } catch (error) {
      return {
        error: 1,
        response: { description: 'Ha ocurrido un error' },
      }
    }  
  }

  async validatePin(body) {
    try{
      const { data } = await Axios({
        method: RequestMethod.PUT,
        url: `${ID_CLARO_URL}Validate`,
        data: validatePinRequest(body),
      });
      return this.processErrorRes(data);
    } catch (error) {
      return {
        error: 1,
        response: { description: 'Ha ocurrido un error' },
      }
    }
  }
}
