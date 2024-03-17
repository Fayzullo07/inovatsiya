import connectMongoDB from "@/lib/mongodb";
import Messages from "@/models/messageModel";
import { NextResponse } from "next/server";

export const POST = async (req: any) => {
    const { name, phone, desc } = await req.json();
    await connectMongoDB()
    try {
        await Messages.create({ name, phone, desc })
        return NextResponse.json({ message: "Sented message succesfully" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ data: null }, { status: 500 })
    }
}

export const GET = async () => {
    await connectMongoDB();
    try {
        const messages = await Messages.find();
        return NextResponse.json({ messages }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ messages: null }, { status: 500 })
    }

}

