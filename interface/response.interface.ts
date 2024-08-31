export interface IApiResponse<T> {
    success: boolean;
    message?: string;
    data?: T;
    error?: any
}