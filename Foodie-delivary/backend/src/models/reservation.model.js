import { model, Schema } from 'mongoose';

export const reservationSchema = new Schema(
  {
    name: { type: String, required: true },
    phone:{ type: String,},
    email:{ type: String,},
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

export const ReservationModel = model("Reservation", reservationSchema);