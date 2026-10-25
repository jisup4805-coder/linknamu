import { MongoClient } from "mongodb";

const url = process.env.MONGODB_URL;

if (!url) {
  throw new Error(".env.local에 MONGODB_URL이 설정되어 있지 않습니다.");
}

// 개발 모드의 핫 리로드에서 연결이 계속 늘어나지 않도록 전역에 캐시합니다.
const globalForMongo = globalThis as unknown as {
  mongoClientPromise?: Promise<MongoClient>;
};

const clientPromise =
  globalForMongo.mongoClientPromise ?? new MongoClient(url).connect();

if (process.env.NODE_ENV !== "production") {
  globalForMongo.mongoClientPromise = clientPromise;
}

export async function getClicksCollection() {
  const client = await clientPromise;
  return client.db("linknamu").collection<{ _id: string; count: number }>("clicks");
}
