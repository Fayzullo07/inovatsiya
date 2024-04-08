import { useState } from "react";
import Container from "./Core/Container"
import Modal from "./Core/Modal";
import { useMutation } from "@tanstack/react-query";
import { messagePostAPI } from "@/api/AdminRequest";
import { useLocale } from "next-intl";
import { toast } from "react-toastify";

const RegMembers = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        desc: "",
        role: "member",
        isLegal: true
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
                document.getElementById('closeDialog')?.click();
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
        <div>
            <Container >
                <div className="p-1 border-[3px] border-maincolor rounded-2xl sm:rounded-full bg-white">

                    <div className="py-2 px-1 sm:px-6 sm:py-6 border-[3px] bg-white border-maincolor rounded-2xl sm:rounded-full bg-gradient-to-r from-maincolor from-10% to-green-500 to-90%">

                        <div className="flex items-center justify-between flex-wrap">
                            <div className="grid gap-2 text-center sm:text-start">
                                <h1 className="text-3xl text-white font-semibold">{"Azo bo'lish"}</h1>
                                <p className=" text-lg text-white">{"Biz ning assatsiyaga a'zo bo'lish uchun ariza qoldiring"}</p>
                            </div>
                            <div className="rounded-full p-1 border border-maincolor">
                                <div className="flex items-center rounded-full bg-white ">
                                    <input value={formData.phone}
                                        onChange={handleInputChange} name="phone" type="tel" className="px-2 sm:px-4 py-2 focus:outline-none bg-transparent w-full rounded-full" placeholder="+998 XX XXX XX XX" />
                                    <Modal button={<button className="px-2 sm:px-5 py-1 sm:py-2 text-lg text-white bg-maincolor rounded-full hover:scale-105 duration-300 m-1">Button</button>}>
                                        <form onSubmit={handleSubmit}>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 md:gap-6">
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


                                            <div className="mb-5">
                                                <label className="mb-3 block text-base font-medium text-[#07074D]">
                                                    Yuridik shaxs yoki jismoniy?
                                                </label>
                                                <div className="flex items-center space-x-6">
                                                    <div className="flex items-center">
                                                        <input type="radio" name="radio1" id="radioButton1" className="h-5 w-5"
                                                            checked={formData.isLegal === true}
                                                            onChange={() => setFormData({ ...formData, isLegal: !formData.isLegal })}
                                                        />
                                                        <label htmlFor="radioButton1" className="pl-3 text-base font-medium text-[#07074D]">
                                                            Yuridik shaxs
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input type="radio" name="radio1" id="radioButton2" className="h-5 w-5"
                                                            checked={formData.isLegal === false}
                                                            onChange={() => setFormData({ ...formData, isLegal: !formData.isLegal })}
                                                        />
                                                        <label htmlFor="radioButton2" className="pl-3 text-base font-medium text-[#07074D]">
                                                            Jismoniy shaxs
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <button
                                                    disabled={mutation.isPending}
                                                    className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                                    {!mutation.isPending ? "Yuborish" : "Loading. . ."}
                                                </button>
                                            </div>
                                        </form>


                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default RegMembers;