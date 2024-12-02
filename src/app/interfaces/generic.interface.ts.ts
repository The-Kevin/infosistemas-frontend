export interface IGenericHttpBadRequestResponse {
    message: string[];
    error: string;
    statusCode: number;
}
export interface IGenericModel {
    id: string;
    createdAt: Date;
    updatedAt: Date | null;
}
export interface GenericListMetadata {
    totalItems: number;
    itemCount: number;
    totalPages: number;
    currentPage: number;
}

export interface IGenericList<T> {
    data: T[]
    meta: GenericListMetadata
}