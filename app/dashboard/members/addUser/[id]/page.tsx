import EditUser from "../../@Modals/EditUser";

const getUserById = async (id: any) => {
    try {
        const res = await fetch(`${process.env.BACKEND_API}/api/users/${id}`, { cache: 'no-store' })

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