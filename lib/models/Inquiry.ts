export async function getInquiryModel() {
  const mongoose = (await import("mongoose")).default;

  interface IInquiry extends mongoose.Document {
    name: string;
    email: string;
    subject: string;
    message: string;
    status: "unread" | "read" | "replied";
    createdAt: Date;
    updatedAt: Date;
  }

  if (mongoose.models.Inquiry) {
    return mongoose.models.Inquiry as mongoose.Model<IInquiry>;
  }

  const InquirySchema = new mongoose.Schema<IInquiry>(
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
      subject: {
        type: String,
        required: true,
        trim: true,
      },
      message: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        enum: ["unread", "read", "replied"],
        default: "unread",
      },
    },
    {
      timestamps: true,
    }
  );

  return mongoose.model<IInquiry>("Inquiry", InquirySchema);
}

export type IInquiry = {
  _id: any;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: "unread" | "read" | "replied";
  createdAt: Date;
  updatedAt: Date;
};
