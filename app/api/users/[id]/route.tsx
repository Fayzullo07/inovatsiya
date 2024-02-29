import connectMongoDB from "@/lib/mongodb";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

export async function PUT(req: any, { params }: { params: any }) {
    const { id } = params;
    const { username, desc } = await req.json();
    await connectMongoDB();
    await User.findByIdAndUpdate(id, { username, desc });
    return NextResponse.json({ message: "User updated" }, { status: 200 })
}

export async function GET(req: any, { params }: { params: any }) {
    const { id } = params;
    await connectMongoDB();
    const user = await User.findOne({ _id: id });
    return NextResponse.json({ user }, { status: 200 })
}