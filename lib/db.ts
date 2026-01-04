import connectDB from "./mongodb";
import { getUserModel, type IUser } from "./models/User";
import { getBookingModel, type IBooking } from "./models/Booking";
import { getContentModel, type IContent } from "./models/Content";
import { getInquiryModel, type IInquiry } from "./models/Inquiry";

// User functions
export async function getUser(username: string): Promise<IUser | null> {
  await connectDB();
  const User = await getUserModel();
  return await User.findOne({ username });
}

export async function getUserById(id: string): Promise<IUser | null> {
  await connectDB();
  const User = await getUserModel();
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
  const User = await getUserModel();
  const user = new User(userData);
  await user.save();
  return user;
}

// Booking functions
export async function getBookings(): Promise<IBooking[]> {
  await connectDB();
  const Booking = await getBookingModel();
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
  const Booking = await getBookingModel();
  const booking = new Booking(bookingData);
  await booking.save();
  return booking;
}

export async function updateBooking(
  id: string,
  updates: Partial<IBooking>
): Promise<IBooking | null> {
  await connectDB();
  const Booking = await getBookingModel();
  return await Booking.findByIdAndUpdate(id, updates, { new: true });
}

export async function deleteBooking(id: string): Promise<boolean> {
  await connectDB();
  const Booking = await getBookingModel();
  const result = await Booking.findByIdAndDelete(id);
  return !!result;
}

// Content functions
export async function getContent(page?: string): Promise<IContent[]> {
  await connectDB();
  const Content = await getContentModel();
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
  const Content = await getContentModel();
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
  const Inquiry = await getInquiryModel();
  return await Inquiry.find().sort({ createdAt: -1 });
}

export async function createInquiry(inquiryData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<IInquiry> {
  await connectDB();
  const Inquiry = await getInquiryModel();
  const inquiry = new Inquiry(inquiryData);
  await inquiry.save();
  return inquiry;
}

export async function updateInquiryStatus(
  id: string,
  status: string
): Promise<IInquiry | null> {
  await connectDB();
  const Inquiry = await getInquiryModel();
  return await Inquiry.findByIdAndUpdate(id, { status }, { new: true });
}

export async function deleteInquiry(id: string): Promise<boolean> {
  await connectDB();
  const Inquiry = await getInquiryModel();
  const result = await Inquiry.findByIdAndDelete(id);
  return !!result;
}

// Stats function for dashboard
export async function getStats() {
  await connectDB();
  const Booking = await getBookingModel();
  const Inquiry = await getInquiryModel();

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

export async function initDatabase() {
  await connectDB();
}
