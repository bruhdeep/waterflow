"use client";
import error from 'next/error';
import { useRouter } from 'next/navigation';
import React, {useEffect, useState} from 'react'

const LoginForm = () => {

    const router = useRouter();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if(username === '' || password === ''){
            setError('Invalid credentials. Please fill in both input sections.');
        }else{
            setError(null);
            setTimeout(() => {
                e.preventDefault();
                router.push('/');
              }, 1000);
        }
    };



  return (
    <div className='flex flex-wrap justify-center my-[2%] font-mono'>
        <div className="w-[300px] flex flex-col p-4 rounded-md text-black bg-white">
            <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center pb-6">Login to your account</div>
            <form className="flex flex-col gap-3 m-auto w-[95%]" onSubmit={handleLogin}>
                <div className="block relative"> 
                <label htmlFor="username" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Username</label>
                <input type="text" value={username} id="username" className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="block relative"> 
                <label htmlFor="password" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Password</label>
                <input type="text" value={password} id="password" className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
                <button type="submit" className="bg-[#00df9a] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal">
                    Login
                </button>
            </form>
        </div>
    </div>
    
  )
}

export default LoginForm
function setError(arg0: string) {
    throw new Error('Function not implemented.');
}

