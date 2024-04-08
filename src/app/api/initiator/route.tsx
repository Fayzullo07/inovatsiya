import connectMongoDB from "@/lib/mongodb";
import Initiators from "@/models/initiatorModel";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: any) => {
    const { photo, firstname, lastname, birthday, birthplace, addressResidential, workplace } = await req.json();
    await connectMongoDB()

    try {
        await Initiators.create({
            photo,
            firstname,
            lastname,
            birthday,
            birthplace,
            addressResidential,
            workplace
        });

        return NextResponse.json({ message: "Created Initiators succesfully" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ data: null }, { status: 500 })
    }
}


export const GET = async (req: NextRequest) => {
    await connectMongoDB();
    try {
        let initiators = await Initiators.find({});

        return NextResponse.json({ initiators }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ initiators: null }, { status: 500 })
    }
}


