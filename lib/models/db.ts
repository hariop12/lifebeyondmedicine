import connectDB from "../mongodb";
import User, { type IUser } from "./User";
import Booking, { type IBooking } from "./Booking";
import Content, { type IContent } from "./Content";
import Inquiry, { type IInquiry } from "./Inquiry";

// Initialize database connection
export async function initDatabase() {
  await connectDB();
  console.log("Database initialized");
}

// User functions
export async function getUser(username: string): Promise<IUser | null> {
  await connectDB();
  return await User.findOne({ username });
}

export async function getUserById(id: string): Promise<IUser | null> {
  await connectDB();
  return await User.findById(id);
}

export async function createUser(userData: {
  username: string;
  password: string;
  email: string;
  name?: string;
  role?: string;
}): Promise<IUser> {
  await connectDB();
  const user = new User(userData);
  await user.save();
  return user;
}

// Booking functions
export async function getBookings(): Promise<IBooking[]> {
  await connectDB();
  return await Booking.find().sort({ createdAt: -1 });
}

export async function createBooking(bookingData: {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message?: string;
  status?: string;
}): Promise<IBooking> {
  await connectDB();
  const booking = new Booking(bookingData);
  await booking.save();
  return booking;
}

export async function updateBooking(
  id: string,
  updates: Partial<IBooking>
): Promise<IBooking | null> {
  await connectDB();
  return await Booking.findByIdAndUpdate(id, updates, { new: true });
}

export async function deleteBooking(id: string): Promise<boolean> {
  await connectDB();
  const result = await Booking.findByIdAndDelete(id);
  return !!result;
}

// Content functions
export async function getContent(page?: string): Promise<IContent[]> {
  await connectDB();
  if (page) {
    return await Content.find({ page }).sort({ section: 1, content_key: 1 });
  }
  return await Content.find().sort({ page: 1, section: 1, content_key: 1 });
}

export async function updateContent(
  page: string,
  section: string,
  key: string,
  value: string
): Promise<IContent> {
  await connectDB();
  const content = await Content.findOneAndUpdate(
    { page, section, content_key: key },
    { page, section, content_key: key, content_value: value },
    { new: true, upsert: true }
  );
  return content;
}

// Inquiry functions
export async function getInquiries(): Promise<IInquiry[]> {
  await connectDB();
  return await Inquiry.find().sort({ createdAt: -1 });
}

export async function createInquiry(inquiryData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<IInquiry> {
  await connectDB();
  const inquiry = new Inquiry(inquiryData);
  await inquiry.save();
  return inquiry;
}

export async function updateInquiryStatus(
  id: string,
  status: string
): Promise<IInquiry | null> {
  await connectDB();
  return await Inquiry.findByIdAndUpdate(id, { status }, { new: true });
}

export async function deleteInquiry(id: string): Promise<boolean> {
  await connectDB();
  const result = await Inquiry.findByIdAndDelete(id);
  return !!result;
}

// Stats function for dashboard
export async function getStats() {
  await connectDB();

  const [
    totalBookings,
    pendingBookings,
    confirmedBookings,
    totalInquiries,
    unreadInquiries,
  ] = await Promise.all([
    Booking.countDocuments(),
    Booking.countDocuments({ status: "pending" }),
    Booking.countDocuments({ status: "confirmed" }),
    Inquiry.countDocuments(),
    Inquiry.countDocuments({ status: "unread" }),
  ]);

  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);

  const todayBookings = await Booking.countDocuments({
    createdAt: { $gte: todayStart },
  });

  return {
    totalBookings,
    pendingBookings,
    confirmedBookings,
    totalInquiries,
    unreadInquiries,
    todayBookings,
  };
}
