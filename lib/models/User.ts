export async function getUserModel() {
  const mongoose = (await import("mongoose")).default;
  const bcrypt = (await import("bcryptjs")).default;

  interface IUser extends mongoose.Document {
    username: string;
    password: string;
    email: string;
    role: string;
    name?: string;
    comparePassword(candidatePassword: string): Promise<boolean>;
    createdAt: Date;
    updatedAt: Date;
  }

  if (mongoose.models.User) {
    return mongoose.models.User as mongoose.Model<IUser>;
  }

  const UserSchema = new mongoose.Schema<IUser>(
    {
      username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      password: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
      },
      name: {
        type: String,
        trim: true,
      },
      role: {
        type: String,
        default: "admin",
      },
    },
    {
      timestamps: true,
    }
  );

  UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      return next();
    }
    try {
      this.password = await bcrypt.hash(this.password, 10);
      next();
    } catch (error) {
      next(error as Error);
    }
  });

  UserSchema.methods.comparePassword = async function (
    candidatePassword: string
  ) {
    return await bcrypt.compare(candidatePassword, this.password);
  };

  return mongoose.model<IUser>("User", UserSchema);
}

export type IUser = {
  _id: any;
  username: string;
  password: string;
  email: string;
  role: string;
  name?: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
  createdAt: Date;
  updatedAt: Date;
};

export default getUserModel;
