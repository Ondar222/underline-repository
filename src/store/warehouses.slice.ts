import { ICoalProduct } from "@/models/IProducts";
import { IWarehouse, IWarehouseResponse } from "@/models/IWarehouse";
import { makeAutoObservable } from "mobx";

class WarehouseSlice {
  region: string = "Кызыл";
  locality: string = "Кызыл";

  regions: string[] = [];
  selectedRegionLocalities: string[] = [];
  grades: string[] = [];

  warehouses: IWarehouse[] = [];
  warehousePage: IWarehouse | undefined;
  selectedRegionWarehouses: IWarehouse[] = [];
  filteredWarehouses: IWarehouse[] = [];

  constructor() {
    makeAutoObservable(this);
    this.getAllWarehouses();
  }

  setRegion(e: string) {
    this.region = e;
  }

  setLocality(e: string) {
    this.locality = e;
  }

  async getAllWarehouses() {
    const data = await fetch(
      `${process.env.api}/api/warehouses?populate[0]=schedule.monday&populate[1]=schedule.tuesday&populate[2]=schedule.wednesday&populate[3]=schedule.thursday&populate[4]=schedule.friday&populate[5]=schedule.saturday&populate[6]=schedule.sunday&populate[7]=address.region&populate[8]=address.locality&populate[9]=address.street&populate[10]=address.coordinates&populate[11]=delivery.locality&populate[12]=coal_products&populate[13]=additional_services&populate[14]=contacts.emails&populate[15]=contacts.phones`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${process.env.token}`,
        },
      }
    )
      .then((res) => res.json())
      .catch((e) => console.error(e))
      .then((res) => res.data)
      .catch((e) => console.error(e))
      .finally(() => console.log("completed"));

    this.warehouses = await data;
  }

  getOneWarehouse(id: number) {
    this.warehousePage = this.warehouses?.find(
      (item: IWarehouse) => item.id === id
    );
  }

  getRegions() {
    this.warehouses?.forEach((element: IWarehouse) => {
      if (!this.regions.includes(element.address.region.name)) {
        this.regions.push(element.address.region.name);
      }
    });
  }

  setSelectedRegionWarehouses(region: string) {
    this.selectedRegionWarehouses = this.warehouses?.filter(
      (item: IWarehouse) => item.address.region.name === region
    );
  }

  getGrade(region: string, locality: string) {
    this.selectedRegionWarehouses?.forEach((item: IWarehouse) => {
      if (item.address.region.name === region && item.address.locality.name) {
        item.coal_products.forEach((item: ICoalProduct) => {
          if (!this.grades.includes(item.name)) {
            this.grades.push(item.name);
          }
        });
      }
    });
  }

  setSelectedRegionLocalities(region: string) {
    let localities: string[] = [];
    this.warehouses?.forEach((item: IWarehouse) => {
      if (
        item.address.region.name === region &&
        !localities?.includes(item.address.locality.name)
      ) {
        localities?.push(item.address.locality.name);
      }
    });

    this.selectedRegionLocalities = localities;
  }

  setFilteredWarehouses(region: string, locality: string, grade: string) {
    this.filteredWarehouses = this.warehouses?.filter(
      (item: IWarehouse) =>
        item.address.region.name === region &&
        item.address.locality.name === locality &&
        item.coal_products.find((item: ICoalProduct) => item.name === grade)
    );
  }
}

const warehousesSlice = new WarehouseSlice();
export default warehousesSlice;
