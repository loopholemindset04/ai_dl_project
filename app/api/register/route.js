import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();

  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const database = client.db("CollegeBuddy");
    const collection = database.collection("login_credentials");

    const existingUser = await collection.findOne({ email: data.email });

    if (existingUser) {
      console.log("user already exists");
      return NextResponse.json({
        success: false,
        message: "User already exists",
      });
    }

    const result = await collection.insertOne(data);
    console.log(result);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}
