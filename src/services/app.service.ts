import { Inject, Injectable } from '@nestjs/common';
import { Client } from 'nestjs-soap';
import { Continent } from 'src/models/continent.model';

@Injectable()
export class AppService {
  constructor(
    @Inject('COUNTRY_SOAP_LIST') private readonly mySoapClient: Client,
  ) {}

  async getContinents() {
    return new Promise((resolve, reject) => {
      this.mySoapClient.ListOfContinentsByName({}, (err, result) => {
        if (!err) {
          const {
            ListOfContinentsByNameResult: { tContinent },
          } = result;
          resolve(tContinent);
        } else {
          reject(err);
        }
      });
    });
  }

  async getHello() {
    const continents = (await this.getContinents()) as Continent[];
    return continents.map((continent) => continent.sName).join(',');
  }
}
