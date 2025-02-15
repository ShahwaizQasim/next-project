"use client"
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { BsGithub } from 'react-icons/bs';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="flex min-h-[calc(100vh-64px)]">
                <div className="hidden md:flex w-1/2 bg-teal-700 p-8 flex-col justify-between relative overflow-hidden">
                    <div className="relative z-10">
                        <h1 className="text-4xl font-bold text-white mb-6">Welcome Back</h1>
                        <p className="text-xl text-teal-100 max-w-md">
                            Log in to continue your educational journey with SmitGrade.
                        </p>
                    </div>

                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-teal-600 opacity-20"></div>
                        <div className="absolute bottom-40 left-10 w-60 h-60 rounded-full bg-teal-500 opacity-20"></div>
                        <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-teal-400 opacity-10"></div>
                    </div>

                    <div className="relative z-10">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md mx-auto">
                            <path fill="#D1FAE5" d="M38.5,-64.2C49.9,-55.9,59.2,-45.2,63.4,-33.2C67.7,-21.1,66.8,-7.7,66.4,6.8C66.1,21.2,66.2,36.8,58.5,44.9C50.8,53,35.3,53.7,21.9,57C8.5,60.3,-3,66.3,-16.2,67.1C-29.4,67.9,-44.3,63.4,-52.2,53.7C-60.1,44,-61,29.1,-65.1,14.2C-69.2,-0.7,-76.4,-15.6,-75.6,-30.8C-74.7,-46.1,-65.8,-61.7,-52.5,-69.6C-39.1,-77.5,-21.4,-77.6,-5.5,-70.6C10.5,-63.6,27,-72.5,38.5,-64.2Z" transform="translate(100 100)" />
                        </svg>
                    </div>

                    <div className="text-teal-200 text-sm relative z-10">
                        &copy; {new Date().getFullYear()} SmitGrade. All rights reserved.
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8 lg:p-12">
                    <div className="w-full max-w-md">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-teal-800">Log in to your account</h2>
                            <p className="text-gray-600 mt-2">Continue where you left off</p>
                        </div>

                        <form className="space-y-5">
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-teal-800 font-medium">
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full border-gray-300"
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
                                    className="w-full border-gray-300"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-emerald-400 hover:bg-emerald-500 text-black py-2"
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
                            <Button variant="outline" className="w-full">
                                <span className="flex items-center gap-2 justify-center">
                                    <BsGithub />
                                    Github
                                </span>
                            </Button>
                            <Button variant="outline" className="w-full">
                                <span className="flex items-center gap-2 justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                    </svg>
                                    Google
                                </span>
                            </Button>
                        </div>

                        <p className="text-sm text-gray-600 text-center mt-8">
                            Don't have an account? <a href="#" className="text-teal-600 hover:underline">Sign up here</a>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default LoginPage;