import { ID, databases } from "@/appwrite";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { contact } = await req.json();
    const { name, email, phone, gender } = contact;
    console.log(contact);

    const { $id } = await databases.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
      process.env.NEXT_PUBLIC_CONTACTS_COLLECTION_ID!,
      ID.unique(),
      {
        name,
        email,
        phone,
        gender,
      }
    );
    return NextResponse.json({ id: $id });
  } catch (error) {
    console.log("ADD_CONTACT_ERROR", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
