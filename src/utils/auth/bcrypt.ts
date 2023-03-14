import bcrypt from "bcryptjs";

export const createHash = async (password: string) => {
  const hashedPW = await bcrypt.hash(password, 10).then((hash) => {
    return hash;
    // Store hash in your password DB.
  });
  return hashedPW;
};

export const compareHash = async (password: string, dbHash: string) => {
  bcrypt.compare(password, dbHash, function (err, result) {
    if (err) err;
    return result;
  });
};
