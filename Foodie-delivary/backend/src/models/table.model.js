import { model, Schema } from 'mongoose';
import { reservationSchema } from './reservation.model.js';

export const tableSchema = new Schema(
  {
    name: { type: String, required: true },
    capacity: { type: Number, required: true },
    isAvailable: { type: Boolean, default: false },
    location: { type: String, required: true },
    reservation: {type: reservationSchema, required: false}
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);

export const TableModel = model("Table", tableSchema);