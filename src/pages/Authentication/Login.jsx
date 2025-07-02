import React from 'react';
import { useForm } from 'react-hook-form';
import ProfastLog from '../../components/ProfastLog';

const Login = () => {

  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);
  }

    return (
        <div className='max-w-4xl bg-[#FAFDF0] rounded-2xl p-5'>
            <div>
                <h1 className='text-4xl font-extrabold'>Welcome Back</h1>
                <p>Login with Profast</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 pt-5">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                        <input {...register("email")} type="email" name="email" id="email" placeholder="Enter your email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label htmlFor="password" className="text-sm">Password</label>
                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
                        </div>
                        <input {...register("password")} type="password" name="password" id="password" placeholder="Enter your password" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <button type="submit" className="w-full cursor-pointer px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Sign in</button>
                    </div>
                    <p className="px-6 text-sm text-center dark:text-gray-600">Don’t have any account?
                        <a rel="noopener noreferrer" href="/register" className="hover:underline dark:text-violet-600"> Register</a>.
                    </p>
                </div>
	        </form>
            <div className=' justify-items-center'>
                <p className='text-xl'>or</p>
                <button className="btn bg-white w-full px-16 py-6 text-black border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button>
            </div>
        </div>
    );
};

export default Login;