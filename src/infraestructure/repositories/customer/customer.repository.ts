import { Injectable } from '@nestjs/common';
import Axios from 'axios';
import { transform } from 'camaro';
import { WSDL_URL } from 'src/constants';
import { RequestMethod } from 'src/infraestructure/enum/request-method.enum';
import { customerSearchRequest } from './customer.request';

@Injectable()
export class CustomerRepository {
  async searchDataClient(body) {
    const { data } = await Axios({
      method: RequestMethod.POST,
      url: `${WSDL_URL}GetCustomerProfile/v2.0/new`,
      data: customerSearchRequest(body),
    });

    const template = {
      error: 0,
      response: [
        '//ns2:listadoDirecciones',
        {
          cuenta: 'ns2:customerIds',
          direccion: 'ns2:addressText',
        },
      ],
    }
    
    const output = await transform(data, template);
    return output
  }
}
