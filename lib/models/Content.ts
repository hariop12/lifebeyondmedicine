export async function getContentModel() {
  const mongoose = (await import("mongoose")).default;

  interface IContent extends mongoose.Document {
    page: string;
    section: string;
    content_key: string;
    content_value: string;
    updatedAt: Date;
  }

  if (mongoose.models.Content) {
    return mongoose.models.Content as mongoose.Model<IContent>;
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

  ContentSchema.index(
    { page: 1, section: 1, content_key: 1 },
    { unique: true }
  );

  return mongoose.model<IContent>("Content", ContentSchema);
}

export type IContent = {
  _id: any;
  page: string;
  section: string;
  content_key: string;
  content_value: string;
  updatedAt: Date;
};
