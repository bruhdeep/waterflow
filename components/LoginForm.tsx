import React from 'react'

const LoginForm = () => {
  return (
    <div className='flex flex-wrap justify-center my-[2%] font-mono'>
        <div className="w-[300px] flex flex-col p-4 rounded-md text-black bg-white">
            <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center pb-6">Login to your account</div>
            <form className="flex flex-col gap-3 m-auto w-[95%]">
                <div className="block relative"> 
                <label htmlFor="email" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Email</label>
                <input type="text" id="email" className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" />
                </div>
                <div className="block relative"> 
                <label htmlFor="password" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Password</label>
                <input type="text" id="password" className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0" />
                </div>
                <div>
                <a className="text-sm text-[#7747ff]" href="#">
                    Forgot your password?
                </a>
                </div>
                <button type="submit" className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal">
                    Submit
                </button>
            </form>
        </div>
    </div>
    
  )
}

export default LoginForm
