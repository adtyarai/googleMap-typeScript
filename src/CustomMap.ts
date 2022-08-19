import { User } from './User';
import { Company } from './Company';

export interface Marker {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  addMarker(marker: Marker): void {
    let url = 'http://maps.google.com/mapfiles/ms/icons/';
    url += marker.color + '-dot.png';
    const plotMarker = new google.maps.Marker({
      map: this.googleMap,
      position: { lat: marker.location.lat, lng: marker.location.lng },
      icon: {
        url: url,
      },
    });

    plotMarker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: marker.markerContent(),
      });

      infoWindow.open(this.googleMap, plotMarker);
    });
  }
}
