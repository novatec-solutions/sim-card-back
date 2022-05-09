import { Injectable } from '@nestjs/common';
import Axios from 'axios';
import { ID_CLARO_URL } from 'src/constants';
import { RequestMethod } from 'src/infraestructure/enum/request-method.enum';
import { generatePinRequest, validatePinRequest } from './pin.request';

@Injectable()
export class PinRepository {
  async generatePin(body) {
    const { data } = await Axios({
      method: RequestMethod.PUT,
      url: `${ID_CLARO_URL}GeneratePin`,
      data: generatePinRequest(body),
    });

    const [info] = data.response;
    const res = {
      error: info.result == 'SUCCESS' ? 0 : 1,
      response:
        info.result == 'SUCCESS'
          ? {
              pinGeneratorResponse: data.pinGeneratorResponse[0].message,
            }
          : { description: info.description },
    };
    return res;
  }

  async validatePin(body) {
    const { data } = await Axios({
      method: RequestMethod.PUT,
      url: `${ID_CLARO_URL}Validate`,
      data: validatePinRequest(body),
    });

    const [result] = data.pinGeneratorResponse;
    const res = {
      error: result.isValid == 'false' ? 1 : 0,
      response: { description: result.message }
    };
    return res;
  }
}
