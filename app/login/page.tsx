"use client"
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { BsGithub } from 'react-icons/bs';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';

export function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e: any) => {
        e.preventDefault();
        const res = await signIn('credentials', {
            redirect: false,
            email,
            password,
        });

        if (res?.error) {
            setError('Invalid credentials');
        } else {
            window.location.href = '/';
        }
    };
    return (
        <div className="min-h-screen bg-white">
            <div className="flex min-h-screen">
                <div className="hidden md:flex w-1/2 p-0 h-screen relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute  top-20 left-20 w-40 h-40 rounded-full bg-teal-500 opacity-10"></div>
                        <div className="absolute  right-[90px]  bottom-[-0px] w-60 h-60 rounded-full bg-teal-400 opacity-10"></div>
                        <div className="absolute  top-2/2 left-[50%] w-80 h-80 rounded-full bg-teal-300 opacity-10"></div>
                    </div>

                    <div className="  w-full h-full flex items-center justify-center ">
                        <Image src={"/logo-main.png"} alt='' width={430} height={500} />
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8 lg:p-12">
                    <div className="w-full max-w-md">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-teal-800 tracking-tight">Log in to your account</h2>
                            <p className="text-gray-600 mt-2">Continue where you left off</p>
                        </div>

                        <form className="space-y-5" onSubmit={handleLogin}>
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-teal-800 font-medium">
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full border-gray-300 focus:ring-teal-500 focus:border-teal-500"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <Label htmlFor="password" className="text-teal-800 font-medium">
                                        Password
                                    </Label>
                                    <a href="#" className="text-teal-600 text-sm hover:underline">
                                        Forgot your password?
                                    </a>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-full border-gray-300 focus:ring-teal-500 focus:border-teal-500"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            {error && <p className="text-red-500 text-center">{error}</p>}

                            <Button
                                type="submit"
                                className="w-full bg-gradient-to-r from-[#0B9748] to-[#0B9748] hover:from-teal-500 hover:to-emerald-600 text-white py-2 shadow-md hover:shadow-lg transition-all duration-200"
                            >
                                Log In
                            </Button>
                        </form>

                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-white px-2 text-gray-500">Or log in with</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <Button
                                variant="outline"
                                className="w-full hover:bg-gray-50 border-gray-300 hover:border-gray-400 transition-all duration-200"
                                onClick={() => signIn('github')}
                            >
                                <span className="flex items-center gap-2 justify-center">
                                    <BsGithub />
                                    Github
                                </span>
                            </Button>
                            <Button
                                variant="outline"
                                className="w-full hover:bg-gray-50 border-gray-300 hover:border-gray-400 transition-all duration-200"
                                onClick={() => signIn('google')}
                            >
                                <span className="flex items-center gap-2 justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                    </svg>
                                    Google
                                </span>
                            </Button>
                        </div>

                        <p className="text-sm text-gray-600 text-center mt-8">
                            Don't have an account? <Link href="/signup" className="text-teal-600 hover:underline font-medium">Sign up here</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;