import connectMongoDB from "@/lib/mongodb";
import News from "@/models/newsModel";
import { NextResponse } from "next/server";

export const POST = async (req: any) => {
    const { img, title, desc } = await req.json();
    await connectMongoDB()
    try {
        await News.create({ img, title, desc })
        return NextResponse.json({ message: "Created new succesfully" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ data: null }, { status: 500 })
    }
}

export const GET = async () => {
    await connectMongoDB();
    try {
        const news = await News.find();
        return NextResponse.json({ news }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ news: null }, { status: 500 })
    }
}

