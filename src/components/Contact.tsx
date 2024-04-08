"use client"
import Container from "./Core/Container";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { messagePostAPI } from "@/api/AdminRequest";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        desc: "",
        role: "service",
    });

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });
    };
    const mutation = useMutation(
        {
            mutationFn: async () => {
                return messagePostAPI(formData);
            },
            onSuccess: () => {
                toast.success("Yuborildi");
                setFormData({ ...formData, name: "", phone: "", desc: "" })
            }
        }
    );

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!formData.name) {
            toast.warning("Name")
            return
        }

        if (!formData.phone) {
            toast.warning("Phone")
            return
        }

        if (!formData.desc) {
            toast.warning("Izoh")
            return
        }
        mutation.mutate();
    };
    return (
        <div id="contact" className="pb-5 sm:pb-10">
            <Container>
                <div className="flex justify-between items-center py-5 md:py-10" >
                    <h2 className="text-3xl font-bold text-maincolor" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">{"Bog'lanish"}</h2>
                </div>
                <div id="map" className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                        width="100%" height="480" loading="lazy"></iframe>
                </div>
                <div className="px-6 md:px-12">
                    <div
                        className="block rounded-lg bg-white px-6 py-12 shadow-xl  md:py-16 md:px-5 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
                        <div className="flex flex-wrap">
                            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-5">
                                        <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                                            Ism familiya
                                        </label>
                                        <input type="text" name="name" id="name" placeholder="Ism familiya"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
                                            Telefon raqamingiz
                                        </label>
                                        <input type="tel" name="phone" id="phone" placeholder="+998 XX XXX XX XX"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="desc" className="mb-3 block text-base font-medium text-[#07074D]">
                                            Xabar
                                        </label>
                                        <textarea name="desc" id="desc" placeholder="Xabaringizni yozing..."
                                            value={formData.desc}
                                            onChange={handleInputChange}
                                            className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" required />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={mutation.isPending}
                                        className="mb-6 w-full rounded bg-maincolor text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal   lg:mb-0">
                                        {!mutation.isPending ? "Yuborish" : "Loaning..."}
                                    </button>
                                </form>
                            </div>
                            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                                <div className="flex flex-wrap">
                                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                                        <div className="flex items-start">
                                            <div className="shrink-0">
                                                <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                        stroke="currentColor" className="h-6 w-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ml-6 grow">
                                                <p className="mb-2 font-bold text-xl ">
                                                    Technical support
                                                </p>
                                                <p className="text-sm text-neutral-500">
                                                    example@gmail.com
                                                </p>
                                                <p className="text-sm text-neutral-500">
                                                    1-600-890-4567
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                                        <div className="flex items-start">
                                            <div className="srink-0">
                                                <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                        stroke="currentColor" className="w-7 h-7">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ml-6 grow">
                                                <p className="mb-2 font-bold text-xl">
                                                    Address
                                                </p>
                                                <p className="text-sm text-neutral-500">
                                                    abcd, <br />
                                                    xyz <br />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
                                        <div className="align-start flex">
                                            <div className="shrink-0">
                                                <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">


                                                </div>
                                            </div>
                                            <div className="ml-6 grow">
                                                <p className="mb-2 font-bold text-xl">Land Line</p>
                                                <p className="text-neutral-500"> (0421) 431 2030
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
                                        <div className="align-start flex">
                                            <div className="shrink-0">
                                                <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                        stroke="currentColor" className="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ml-6 grow">
                                                <p className="mb-2 font-bold text-xl">Mobile</p>
                                                <p className="text-neutral-500"> +91 123456789
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Contact;