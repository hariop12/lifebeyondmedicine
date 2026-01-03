import mongoose from "mongoose";
import User from "../lib/models/User";

const MONGODB_URI = process.env.MONGODB_URI;
async function seedAdmin() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(MONGODB_URI);
    console.log("✅ Connected to MongoDB");

    // Check if admin already exists
    const existingAdmin = await User.findOne({ username: "admin" });

    if (existingAdmin) {
      console.log("⚠️  Admin user already exists");
      console.log("Username: admin");
      await mongoose.connection.close();
      process.exit(0);
    }

    // Create default admin
    const admin = new User({
      username: "admin",
      password: "admin123",
      email: "admin@lifebeyondmedicine.com",
      name: "Administrator",
      role: "admin",
    });

    await admin.save();
    console.log("✅ Default admin created successfully");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("Username: admin");
    console.log("Password: admin123");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("⚠️  Please change the password after first login");

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding admin:", error);
    await mongoose.connection.close();
    process.exit(1);
  }
}

seedAdmin();
