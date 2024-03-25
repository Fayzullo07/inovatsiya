import connectMongoDB from "@/lib/mongodb";
import News from "@/models/newsModel";
import { NextResponse } from "next/server";


export const GET = async (req: any, { params }: { params: any }) => {
    await connectMongoDB();
    const { id } = params;
    try {
        const news = await News.findById(id);
        return NextResponse.json({ news }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ news: null }, { status: 500 });
    }
};


