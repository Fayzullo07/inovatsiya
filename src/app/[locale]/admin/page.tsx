import AdminPage from "@/components/AdminPage";
import AuthProvider from "@/components/Core/AuthProvider";
import { auth } from "@/configs/auth";
import { redirect } from "next/navigation";


const Admin = async () => {
    const session = await auth()

    if (session) redirect(`/uz/login`);

    return (
        <AuthProvider session={session}>
            <AdminPage />
        </AuthProvider>
    )
}

export default Admin;