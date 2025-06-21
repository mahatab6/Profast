import React from 'react';

const Register = () => {
    return (
        <div className='max-w-4xl bg-[#FAFDF0] rounded-2xl p-5'>
            <div>
                <h1 className='text-4xl font-extrabold'>Create an Account</h1>
                <p>Register with Profast</p>
            </div>
            <form noValidate="" action="" className="space-y-8 pt-5">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="Enter your login email address" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label htmlFor="password" className="text-sm">Password</label>
                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
                        </div>
                        <input type="password" name="password" id="password" placeholder="Enter your password" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <button type="button" className="w-full cursor-pointer px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Sign in</button>
                    </div>
                    <p className="px-6 text-sm text-center dark:text-gray-600">Don't have an account yet?
                        <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-600">Sign up</a>.
                    </p>
                </div>
	        </form>
        </div>
    );
};

export default Register;