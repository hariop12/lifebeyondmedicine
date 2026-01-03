import { getUser, getUserById } from "./models/db";

export interface User {
  id: string;
  username: string;
  email: string;
  role: string;
}

export async function authenticateUser(
  username: string,
  password: string
): Promise<User | null> {
  const user = await getUser(username);

  if (user && (await user.comparePassword(password))) {
    // Return user without password field
    return {
      id: user._id.toString(),
      username: user.username,
      email: user.email,
      role: user.role,
    };
  }
  return null;
}

export async function verifySession(token: string): Promise<User | null> {
  try {
    // In production, use JWT or similar
    const decoded = Buffer.from(token, "base64").toString("utf-8");
    const userId = decoded;

    const user = await getUserById(userId);

    if (user) {
      return {
        id: user._id.toString(),
        username: user.username,
        email: user.email,
        role: user.role,
      };
    }
  } catch (error) {
    console.error("Session verification failed:", error);
  }
  return null;
}

export function createSession(userId: string): string {
  return Buffer.from(userId).toString("base64");
}
