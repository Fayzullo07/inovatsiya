"use client"
import Image from "next/image";
import Container from "./Core/Container";
import React, { useState } from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [desc, setDesc] = useState("");

    const [loading, setLoading] = useState(false);



    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!name || !phone || !desc) {
            alert("Empty")
            return
        }

        try {
            setLoading(true);
            const res = await fetch(`/api/contact`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ name, phone, desc })
            });

            if (res.ok) {
                setLoading(false)
                setName("");
                setPhone("");
                setDesc("");
            } else {
                throw new Error("Failed to sented message");
            }
        } catch (error) {
            console.log("Error: ", error);

        }
    };

    return (
        <div id="contact">
            <Container>
                <div className="text-center pt-6">
                    <h2 className=" text-4xl font-semibold">{"Bog'lanish"}</h2>
                </div>
                <div className="text-gray-100 px-8 py-12">
                    <div className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
                        <div className="flex flex-col justify-between">
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-bold leading-tight">{"Aloqa uchun ma'lumotlar yuboring!"}</h2>

                            </div>
                            <div className="mt-8 text-start">
                                <Image
                                    src="/contact.png"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }} // optional
                                    alt="Image"
                                />
                            </div>
                            <div className="text-gray-700 mt-8">
                                {"Xabar qoldiring biz sizga aloqaga chiqamiz."}
                            </div>
                        </div>
                        <div className="">
                            <div>
                                <span className="text-sm text-gray-600 font-bold">Ismingiz nima?</span>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text" placeholder="" />
                            </div>
                            <div className="mt-8">
                                <span className="text-sm text-gray-600 font-bold">Telefon raqamingiz</span>
                                <input
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="tel" />
                            </div>
                            <div className="mt-8">
                                <span className="text-sm text-gray-600 font-bold">Har qanday izohingiz</span>
                                <textarea
                                    value={desc}
                                    onChange={(e) => setDesc(e.target.value)}
                                    className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                            </div>
                            <div className="mt-8">
                                <button
                                    className="text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                                    onClick={handleSubmit}
                                >
                                    {loading ? "Loading. . . " : "Yuborish"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Contact;