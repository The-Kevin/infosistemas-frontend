import { IGenericModel } from './generic.interface.ts';
import { IVehicleModel } from './vehicleModel.interface.js';

export interface IBrand extends IGenericModel {
    name: string;
    vehicleModels: IVehicleModel[];
}