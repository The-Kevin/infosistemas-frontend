import { IBrand } from './brands.interface';
import { IGenericModel } from './generic.interface.ts';
import { IVehicleModelYear } from './vehicleModelYear.interface';

export interface IVehicleModel extends IGenericModel {
    name: string;
    brand: IBrand;

    vehicleModelYears: IVehicleModelYear[];
}
