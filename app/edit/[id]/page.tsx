import EditUser from "@/components/Members/EditUser";

const getUserById = async (id: any) => {
    try {
        const res = await fetch(`http://localhost:3000/api/users/${id}`, { cache: 'no-store' })

        if (!res.ok) {
            throw new Error('Failed to fetch users')
        }

        return res.json()
    } catch (error) {
        console.log("Error", error);
    }
}
const Edit = async ({ params }: { params: any }) => {
    const { id } = params;
    const { user } = await getUserById(id)
    const { username, desc } = user;

    return (
        <EditUser id={id} username={username} desc={desc} />
    )
}

export default Edit;