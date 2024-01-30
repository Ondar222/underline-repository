export interface IRegion {
  type: string;
  name: string;
}

export interface ILocality {
  type: string;
  name: string;
}

export interface IStreet {
  type: string;
  name: string;
  number: string;
}

export interface ICoordinates {
  latitude: number;
  longitude: number;
}

export interface IAddress {
  code: string;
  region: IRegion;
  locality: ILocality;
  street: IStreet;
  coordinates: ICoordinates;
}
