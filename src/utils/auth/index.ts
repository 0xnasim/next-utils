import { hash, compare } from "bcryptjs";

// Pass in password and get back a hashed password
export async function hashPassword(password: string) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

// Pass in a hashed password and a plaintext password and get back a boolean
export async function verifyPassword(password: string, hashedPassword: string) {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}
