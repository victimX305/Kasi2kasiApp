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
    suburb: Suburb[];
  }

  export interface Suburb {
    name: string;
    ward: string[];
  }

  export interface Ward{
    name: string;
  }

  

  