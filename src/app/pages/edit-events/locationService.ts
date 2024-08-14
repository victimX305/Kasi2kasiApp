import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  selectedProvince: any;
  selectedDistrict: any;
  selectedMunicipality: any;
  selectedCity: any;
  selectedSuburb: any;
  selectedWard: any;
  name: string = '';

  constructor() { }

 
  resetSelectedLocations() {
    this.selectedProvince = null;
    this.selectedDistrict = null;
    this.selectedMunicipality = null;
    this.selectedCity = null;
    this.selectedSuburb = null;
    this.selectedWard = null;
    this.name = '';

  }
}
