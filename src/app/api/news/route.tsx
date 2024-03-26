import connectMongoDB from "@/lib/mongodb";
import News from "@/models/newsModel";
import { NextRequest, NextResponse } from "next/server";

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


export const GET = async (req: NextRequest) => {
    const search = req.nextUrl.searchParams.get('search');

    await connectMongoDB();
    try {
        let news;
        // Agar `search` parametri bo'sh bo'lsa, barcha ma'lumotlarni qidirish
        if (!search) {
            news = await News.find({});
        } else {
            // Agar `search` parametri bo'sh bo'lmasa, MongoDB'dan ma'lumotlarni qidirish
            news = await News.find({
                $or: [
                    { title: { $regex: search, $options: 'i' } }, // title ustuni bo'yicha qidirish
                    // { desc: { $regex: search, $options: 'i' } } // desc ustuni bo'yicha qidirish
                ]
            });
        }
        return NextResponse.json({ news }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ news: null }, { status: 500 })
    }
}


