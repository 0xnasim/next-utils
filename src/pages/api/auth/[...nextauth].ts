import NextAuth from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../utils/mongodb";

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise, { databaseName: "demo" }),
  providers: [
    TwitterProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
};
export default NextAuth(authOptions);
