import { databases } from "@/appwrite";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { $id } = await req.json();

    await databases.deleteDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
      process.env.NEXT_PUBLIC_CONTACTS_COLLECTION_ID!,
      $id
    );
    return NextResponse.json({});
  } catch (error) {
    console.log("ADD_CONTACT_ERROR", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
