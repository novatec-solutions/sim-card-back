import { Injectable } from '@nestjs/common';
import Axios from 'axios';
import { ID_CLARO_URL, SIM_MIGRATION_URL } from 'src/constants';
import {
  RequestMethod,
  TypeContacts,
} from 'src/infraestructure/enum/request-method.enum';
import { validateAccountRequest } from '../account/account.request';

@Injectable()
export class AccountRepository {
  async consultContacts(body) {
    const { data } = await Axios({
      method: RequestMethod.PUT,
      url: `${ID_CLARO_URL}Evaluate`,
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

  async migrateSim(body) {
    try {
      const { data } = await Axios({
        method: RequestMethod.POST,
        url: `${SIM_MIGRATION_URL}migrateSIMResource`,
        data: body,
      });
      return data;
    } catch (err) {
      return `Error: ${err}`;
    }
  }
}