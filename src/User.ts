// import faker from 'faker';
import { faker } from '@faker-js/faker';
import { Marker } from './CustomMap';

export class User implements Marker {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  color = 'red';

  markerContent(): string {
    return `User : ${this.name}`;
  }
}
