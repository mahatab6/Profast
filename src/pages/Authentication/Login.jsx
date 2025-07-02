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
            <ProfastLog/>
            <div>
                <h1 className='text-4xl font-extrabold'>Welcome Back</h1>
                <p>Login with Profast</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 pt-5">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                        <input {...register("email")} type="email" name="email" id="email" placeholder="Enter your login email address" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
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
                    <p className="px-6 text-sm text-center dark:text-gray-600">Don't have an account yet?
                        <a rel="noopener noreferrer" href="/register" className="hover:underline dark:text-violet-600">Sign up</a>.
                    </p>
                </div>
	        </form>
        </div>
    );
};

export default Login;