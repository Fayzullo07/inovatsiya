import { compare } from 'bcryptjs';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import Admin from '@/models/adminModel';
import connectMongoDB from '@/lib/mongodb';

export const POST = async (req: any) => {
    const { username, password } = await req.json();
    await connectMongoDB()
    if (!username || !password) {
        return NextResponse.json({ error: "Please add username or password" });
    }
    try {
        const savedUser = await Admin.findOne({ username: username });

        if (!savedUser) {
            return NextResponse.json({ error: "Invalid email or password 1" });
        }

        const doMatch = await compare(password, savedUser.password);
        console.log(savedUser);

        if (doMatch) {
            const { _id, username } = savedUser;
            return NextResponse.json({
                // msg: "Successfully Login",
                token: jwt.sign({ _id }, 'fayzullo'),
                // user: { _id, username },
            });
        } else {
            return NextResponse.json({ error: "Invalid email or password 2" });
        }
    }
    catch (error) {
        return NextResponse.json({ data: error }, { status: 500 })
    }
}