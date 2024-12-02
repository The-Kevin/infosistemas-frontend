import { IGenericModel } from './generic.interface.ts';
import { IVehicleModel } from './vehicleModel.interface.js';

export interface IVehicleModelYear extends IGenericModel {
    name: string;
    year: number;
    plate: string;
    renavam: string;
    model?: IVehicleModel;
}