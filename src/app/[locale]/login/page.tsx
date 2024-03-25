"use client"
import Container from '@/components/Core/Container';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

// Foydalanuvchining autentifikatsiyasini tekshiruvchi funksiya
const checkAuth = async (token: string | null) => {
    try {
        if (!token) {
            throw new Error('Noto\'g\'ri token');
        }
        //   const response = await axios.post('/api/auth/me', { token });
        //   return response.data.user;
    } catch (error) {
        throw new Error('Foydalanuvchi autentifikatsiyadan o\'tmadi');
    }
};


const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState(null);

    const router = useRouter();

    const handleSubmit = (event: any) => {
        event.preventDefault();
        setLoading(true);

        if (!username || !password) {
            toast.warning("Bo'sh maydonlar mavjud");
            return;
        }

        if (username !== "admin" || password !== "12345") {
            toast.warning("Parol yoki Username noto'g'ri");
            return;
        }
        setTimeout(() => {
            setIsAuth(true);
            router.push("admin/messages")
            setLoading(false);
        }, 500)
    };


    return (

        <div className="text-gray-800 flex flex-col justify-center p-4 sm:py-12">
            <Container>
                <div className="relative  sm:max-w-xl mx-auto text-center">
                    <span className="text-2xl font-medium">Login Admin</span>
                    <div className="relative mt-4 bg-white shadow-md sm:rounded-lg text-left">
                        <div className="h-2 bg-green-400 rounded-t-md"></div>
                        <div className="py-6 px-8">
                            <label className="block font-semibold">Username</label>
                            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Email" className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-green-600 rounded-md" />
                            <label className="block mt-3 font-semibold">Password</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-green-600 rounded-md" />
                            <div className="flex justify-between items-baseline">
                                <button onClick={handleSubmit} disabled={loading} className={`mt-4 ${loading ? "bg-green-400 cursor-wait" : "bg-green-500 hover:bg-green-600"} text-white py-2 px-6 rounded-lg `}>{loading ? "Loading" : "Kirish"}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default LoginForm;
