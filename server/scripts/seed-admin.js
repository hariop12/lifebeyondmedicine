const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const MONGO_URI =
  "mongodb+srv://mnc4umnc_db_user:rHXfJcT4wLCCFJsf@lifebeyondmedicine.6jk7ma2.mongodb.net/";

const adminSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    name: String,
    password: String,
    role: String,
  },
  { timestamps: true }
);

const Admin = mongoose.model("Admin", adminSchema);

(async function () {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");

    const exists = await Admin.findOne({
      email: "admin@lifebeyondmedicine.com",
    });
    if (exists) {
      console.log("Admin already exists");
      process.exit(0);
    }

    const hash = await bcrypt.hash("admin123", 10);

    await Admin.create({
      username: "admin",
      email: "admin@lifebeyondmedicine.com",
      name: "Administrator",
      password: hash,
      role: "admin",
    });

    console.log("Admin created successfully");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
