export interface IDeliveryOptions {
  locality: {
    id: number;
    locality: string;
  };
  price: number;
}

export interface IDelivery {
  delivery: [IDeliveryOptions];
}
