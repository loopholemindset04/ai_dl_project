import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();

  const client = new MongoClient(process.env.MONGODB_URI);

  try {
    await client.connect();
    const database = client.db("CollegeBuddy");
    const collection = database.collection("login_credentials");

    const existingUser = await collection.findOne({
      email: data.email,
      password: data.password,
    });

    if (existingUser) {
      console.log("Login Succesful");

      return NextResponse.json({ success: true, message: "Login successful" });
    }

    console.log("Login Failed");
    return NextResponse.json({ success: false, message: "Login Failed" });
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}
