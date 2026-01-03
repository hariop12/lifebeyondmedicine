declare global {
  // eslint-disable-next-line no-var
  var mongoConnection: {
    conn: typeof import("mongoose") | null;
    promise: Promise<typeof import("mongoose")> | null;
  };
}

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

let cached = global.mongoConnection;

if (!cached) {
  cached = global.mongoConnection = { conn: null, promise: null };
}

async function connectDB() {
  // Skip connection during build time
  if (
    typeof window === "undefined" &&
    process.env.NEXT_PHASE === "phase-production-build"
  ) {
    return null;
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = import("mongoose").then((mongoose) => {
      return mongoose.default.connect(MONGODB_URI!, opts).then((m) => {
        console.log("✅ MongoDB Connected");
        return m;
      });
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    console.error("❌ MongoDB Error:", e);
    throw e;
  }

  return cached.conn;
}

export default connectDB;
export { connectDB };
