import { faker } from '@faker-js/faker';
import { Marker } from './CustomMap';

export class Company implements Marker {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color = 'blue';

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
    <div>
      <h4>Company name: ${this.companyName}</h2>
      <h5>Catch Phrase: ${this.catchPhrase}</h3>
    </div>
    `;
  }
}
