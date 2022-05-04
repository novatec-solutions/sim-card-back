import { Injectable } from '@nestjs/common';
import Axios from 'axios';
import { WSDL_URL } from 'src/constants';
import {
  RequestMethod,
  TypeContacts,
} from 'src/infraestructure/enum/request-method.enum';
import { validateAccountRequest } from './account.request';

@Injectable()
export class AccountRepository {
  async validateAccount(body) {
    const { data } = await Axios({
      method: RequestMethod.PUT,
      url: `${WSDL_URL}IdClaro/V1.0/Rest/Evaluate`,
      data: validateAccountRequest(body),
    });

    const [info] = data.response;
    const contact_array = [];

    data.telephoneNumbers.forEach((elem) => {
      contact_array.push({ type: TypeContacts.PHONE, contact: elem });
    });

    data.emails.forEach((elem) => {
      contact_array.push({ type: TypeContacts.MAIL, contact: elem });
    });

    const res = {
      error: info.result == 'SUCCESS' ? 0 : 1,
      response:
        info.result == 'SUCCESS'
          ? contact_array
          : { description: info.description },
    };
    return res;
  }
}
