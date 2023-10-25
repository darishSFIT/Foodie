import { model, Schema } from "mongoose";
import { tableSchema } from "./table.model";

export const daySchema = new Schema(
    {
      date: { type: Date, },
      tables: [tableSchema]
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

export const DayModel = model("Day", daySchema);