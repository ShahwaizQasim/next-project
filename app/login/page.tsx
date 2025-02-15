"use client"
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { BsGithub } from 'react-icons/bs';
import Navbar from '../components/Navbar';
import { signIn } from 'next-auth/react';

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
            window.location.href = '/dashboard'; 
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="flex min-h-[calc(100vh-64px)]">
                <div className="hidden md:flex w-1/2 bg-teal-700 p-8 flex-col justify-between relative overflow-hidden">
                </div>

                <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8 lg:p-12">
                    <div className="w-full max-w-md">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-teal-800">Log in to your account</h2>
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

                            {error && <p className="text-red-500 text-center">{error}</p>}

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
                                    </svg>
                                    Google
                                </span>
                            </Button>
                        </div>

                        <p className="text-sm text-gray-600 text-center mt-8">
                            Don't have an account? <a href="/signup" className="text-teal-600 hover:underline">Sign up here</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
