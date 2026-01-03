import mongoose from "mongoose";

export interface IContent extends mongoose.Document {
  page: string;
  section: string;
  content_key: string;
  content_value: string;
  updatedAt: Date;
}

const ContentSchema = new mongoose.Schema<IContent>(
  {
    page: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
    content_key: {
      type: String,
      required: true,
    },
    content_value: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create compound index for unique page/section/key combination
ContentSchema.index({ page: 1, section: 1, content_key: 1 }, { unique: true });

export default mongoose.models.Content ||
  mongoose.model<IContent>("Content", ContentSchema);
