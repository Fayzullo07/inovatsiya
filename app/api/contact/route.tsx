import connectMongoDB from "@/lib/mongodb";
import Contact from "@/models/contactModel";
import { NextResponse } from "next/server";

export async function POST(req: any) {
    const { name, phone, desc } = await req.json();
    await connectMongoDB()
    await Contact.create({ name, phone, desc })
    return NextResponse.json({ message: "Sented message succesfully" }, { status: 201 })
}

export async function GET() {
    await connectMongoDB();
    const messages = await Contact.find();
    return NextResponse.json({ messages }, { status: 200 })
}

