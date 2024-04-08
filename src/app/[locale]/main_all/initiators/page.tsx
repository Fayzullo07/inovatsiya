import Container from "@/components/Core/Container";
import InitiatorsGet from "@/components/GetComponents/InitiatorsGet";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

const Initators = () => {
    return (
        <div className=" bg-slate-50">
            <Container>
                <div className="flex items-center mb-4">
                    <Link href={"/"}>
                        <Button variant={"link"} className="text-lg pl-0">Bosh sahifa</Button>
                    </Link>
                    <ChevronRightIcon size={16} />
                    <div className=" text-lg text-gray-400">Tashabbuskorlar</div>
                </div>
                <div className="flex mb-4 gap-4">

                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 md:gap-6">
                    <InitiatorsGet />
                </div>
            </Container>
        </div>
    )
}

export default Initators;