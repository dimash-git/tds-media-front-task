import { databases } from "@/appwrite";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const data = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
      process.env.NEXT_PUBLIC_CONTACTS_COLLECTION_ID!
    );
    const contacts = data.documents;

    return NextResponse.json({ contacts });
  } catch (error) {
    console.log("LIST_CONTACTS_ERROR", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
