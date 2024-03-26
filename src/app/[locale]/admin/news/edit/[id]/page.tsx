"use client"
import { newGetOneAPI, newPostAPI } from "@/api/AdminRequest";
import UploadImage from "@/utils/UploadImage";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ImageIcon, UserIcon, XIcon } from "lucide-react";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
const UpdateNew = ({ params }: { params: any }) => {
    const { id } = params;
    const router = useRouter();
    const [photo, setPhoto] = useState("");
    const locale = useLocale();
    const [isPicker, setIsPicker] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [formData, setFormData] = useState({
        img: "",
        title: "",
        desc: ""
    });

    const { data, isLoading } = useQuery({
        queryKey: ["new", id],
        queryFn: async () => {
            return await newGetOneAPI({ id });
        }
    });



    const handleInputChange = (e: any) => {
        const { name, value } = e.target;


        setFormData({ ...formData, [name]: value });
    };

    const mutation = useMutation(
        {
            mutationFn: async () => {
                return newPostAPI(formData);
            },
            onSuccess: () => {
                router.push(`/${locale}/admin/news`)
            }
        }
    );


    const handleSubmit = () => {
        if (!formData.title) {
            toast.warning("Title");
            return;
        }

        setFormData({ ...formData, img: photo })
        mutation.mutate();
    };

    return (
        <div className="shadow p-2 bg-white rounded-xl">
            <div className="mb-5">

                {!photo ? (

                    <div
                        className="container border-[5px] border-dashed border-green-500 cursor-pointer flex justify-center p-8"
                        onClick={() => (isPicker ? setIsPicker(false) : setIsPicker(true))}
                        title="Choose Image"
                    >

                        <ImageIcon size={"50"} strokeWidth={1} />

                    </div>
                ) : (
                    <div className="border-[5px] border-dashed border-green-500 min-h-10 relative p-1">
                        <div className=" absolute right-0 ">
                            <XIcon className=" cursor-pointer" onClick={() => setPhoto("")} />
                        </div>

                        <div className="max-w-xl h-auto mx-auto flex justify-center">
                            <Image
                                src={photo || data?.data.news.img}
                                width={0}
                                height={0}
                                // className=" transition hover:scale-110 duration-300"
                                sizes="100vw"
                                style={{ width: 'auto', height: 'auto' }} // optional
                                alt="Image"
                            />
                        </div>
                    </div>
                )}
            </div>
            <div className="mb-5">
                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
                <input
                    name="title"
                    value={formData.title || data?.data.news.title}
                    onChange={handleInputChange}
                    type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter title . . ." required />
            </div>
            <div className="mb-5">
                <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900">Desc</label>
                <input
                    name="desc"
                    value={formData.desc}
                    onChange={handleInputChange}
                    type="text" id="content" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter title . . ." required />
            </div>

            <button onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            {/* FileStack */}
            {isPicker && (
                <UploadImage
                    setPhoto={setPhoto}
                    setIsPicker={setIsPicker}
                    setDisabled={setDisabled}
                />
            )}
        </div>

    )
}

export default UpdateNew;