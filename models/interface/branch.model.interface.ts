import { Document } from 'mongoose';

export interface IBranch extends Document {
    companyId: Object;
    name: string;
    address: string;
    contact: string;
    details: string;
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    updatedBy: string;
}