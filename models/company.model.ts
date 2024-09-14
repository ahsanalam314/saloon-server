import mongoose, { Model, Schema } from "mongoose";
import { ICompany } from "./interface/company.model.interface";
import { v4 } from 'uuid';

const CompanySchema: Schema<ICompany> = new mongoose.Schema({
    tenantId: {
        type: String,
        required: true,
        unique: true,
        default: v4
    },
    name: {
        type: String,
        required: true,
    },
    phoneNo: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    buildingName: {
        type: String,
        required: true,
    },
    street: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    createdBy: {
        type: String,
        required: false,
    },
    updatedAt: {
        type: Date,
        required: false,
        default: Date.now
    },
    updatedBy: {
        type: String,
        required: false,
    }
});


const Company: Model<ICompany> = mongoose.model<ICompany>('Company', CompanySchema);

export { Company };