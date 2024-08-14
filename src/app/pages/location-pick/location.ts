export interface Province {
  name: string;
  district: District[];
}

export interface District {
  name: string;
  municipality: Municipality[];
}

export interface Municipality {
  name: string;
  city: City[];
}

export interface City {
  names: string;
  surburb: Surburb[];
}

export interface Surburb {
  name: string;
  ward: string[];
}



