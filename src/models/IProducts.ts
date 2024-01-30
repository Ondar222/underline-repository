export interface ICoalProduct {
  name: string;
  price: number;
  availability: boolean;
}

export interface ICoalProducts {
  coal_products: [ICoalProduct];
}

export interface IAdditionalService {
  name: string;
  price: number;
}

export interface IAdditionalServices {
  additional_services: [IAdditionalService];
}
