export async function getBookingModel() {
  const mongoose = (await import("mongoose")).default;

  interface IBooking extends mongoose.Document {
    name: string;
    email: string;
    phone: string;
    service: string;
    date: string;
    time: string;
    message?: string;
    status: "pending" | "confirmed" | "completed" | "cancelled";
    createdAt: Date;
    updatedAt: Date;
  }

  if (mongoose.models.Booking) {
    return mongoose.models.Booking as mongoose.Model<IBooking>;
  }

  const BookingSchema = new mongoose.Schema<IBooking>(
    {
      name: {
        type: String,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
      },
      phone: {
        type: String,
        required: true,
        trim: true,
      },
      service: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
      time: {
        type: String,
        required: true,
      },
      message: {
        type: String,
        default: "",
      },
      status: {
        type: String,
        enum: ["pending", "confirmed", "completed", "cancelled"],
        default: "pending",
      },
    },
    {
      timestamps: true,
    }
  );

  return mongoose.model<IBooking>("Booking", BookingSchema);
}

export type IBooking = {
  _id: any;
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message?: string;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  createdAt: Date;
  updatedAt: Date;
};
