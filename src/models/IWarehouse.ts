import { IAddress } from './IAddress';
import { IContacts } from './IContacts';
import { IDelivery } from './IDelivery';
import { IAdditionalServices, ICoalProducts } from './IProducts';
import { ISchedule } from './ISchedule';

export interface IWarehouseAttributes {
  address: IAddress;
}

export interface IWarehouse
  extends ICoalProducts,
    IAdditionalServices,
    IDelivery,
    IContacts {
  id: number;
  title: string;
  schedule: ISchedule;
  address: IAddress;
}

export interface IWarehouseResponse {
  data: IWarehouse[];
  meta: any;
}
