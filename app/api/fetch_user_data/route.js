import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  const client = new MongoClient(process.env.MONGODB_URI);
  const data = await request.json();

  try {
    await client.connect();
    const db = client.db("CollegeBuddy");
    const collection = db.collection("User_Data");

    const result = await collection.insertOne(data);
    console.log(result);
    return NextResponse.json(result);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}
