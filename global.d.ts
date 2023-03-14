import { MongoClient } from "mongodb";

declare global {
  var _mongoClientPromise: Promise<MongoClient>;
  var mongoose = Promise<typeof mongoose>;
}
