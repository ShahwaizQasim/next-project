"use client";
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { BsGithub } from 'react-icons/bs';
import Navbar from '../components/Navbar';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { Sucess } from '../components/Alert';

const Signup = () => {
    const formik = useFormik({
        initialValues: {
            fullName: '',
            phoneNumber: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            fullName: Yup.string()
                .required('Full name is required')
                .min(3, 'Full name should be at least 3 characters'),
            phoneNumber: Yup.string()
                .required('Phone number is required')
                .matches(
                    /^[0-9]{10}$/,
                    'Phone number should be 10 digits'
                ),
            email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
            password: Yup.string()
                .required('Password is required')
                .min(8, 'Password should be at least 8 characters'),
        }),
        onSubmit: async (values) => {
            try {
                const response = await axios.post('/api/signup', values);
                console.log(response);

                if (response.status === 200) {
                    console.log('User signed up successfully:', response.data);
                    Sucess("User signed up successfully", "success")
                }
            } catch (error: any) {
                console.log(error)
            }
        },
    });

    return (
        <div className="min-h-screen ">
            <div className="flex min-h-[calc(100vh-64px)]">
                <div className="hidden md:flex w-1/2 bg-gradient-to-r from-[#DBD34] via-[#649173] to-[#DBD5A4] p-8 flex-col justify-between relative overflow-hidden">
                    <div className="relative z-10">
                        <h1 className="text-4xl font-bold text-black mb-6">Welcome to SmitGrade</h1>
                        <p className="text-xl text-black max-w-md">
                            Join our platform and unlock your educational potential with personalized learning experiences.
                        </p>
                    </div>

                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute z-20 top-20 left-20 w-40 h-40 rounded-full bg-teal-500 opacity-10"></div>
                        <div className="absolute z-20 right-[90px]  bottom-[-0px] w-60 h-60 rounded-full bg-teal-400 opacity-10"></div>
                        <div className="absolute z-20 top-2/2 left-[50%] w-80 h-80 rounded-full bg-teal-300 opacity-10"></div>
                    </div>

                    <div className="relative mt-[-80px]  z-10 flex justify-center ">
                        <Image src={"/logo-main.png"} alt='' width={430} height={500} />
                    </div>

                    <div className="text-black text-sm relative z-10">
                        &copy; {new Date().getFullYear()} SmitGrade. All rights reserved.
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8 lg:p-12">
                    <div className="w-full max-w-md">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-teal-800">Sign up for your account</h2>
                            <p className="text-gray-600 mt-2">Start your educational journey today</p>
                        </div>

                        <form onSubmit={formik.handleSubmit} className="space-y-5">
                            <div className="space-y-2">
                                <Label htmlFor="fullName" className="text-teal-800 font-medium">
                                    Full Name
                                </Label>
                                <Input
                                    id="fullName"
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full border-gray-300"
                                    value={formik.values.fullName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.fullName && formik.errors.fullName ? (
                                    <div className="text-red-600 text-sm">{formik.errors.fullName}</div>
                                ) : null}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="phoneNumber" className="text-teal-800 font-medium">
                                    Phone Number
                                </Label>
                                <Input
                                    id="phoneNumber"
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    className="w-full border-gray-300"
                                    value={formik.values.phoneNumber}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                                    <div className="text-red-600 text-sm">{formik.errors.phoneNumber}</div>
                                ) : null}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-teal-800 font-medium">
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full border-gray-300"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <div className="text-red-600 text-sm">{formik.errors.email}</div>
                                ) : null}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password" className="text-teal-800 font-medium">
                                    Password
                                </Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Create a strong password"
                                    className="w-full border-gray-300"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.password && formik.errors.password ? (
                                    <div className="text-red-600 text-sm">{formik.errors.password}</div>
                                ) : null}
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-[#0B9748] hover:bg-emerald-500 text-black py-2"
                            >
                                Sign Up
                            </Button>
                        </form>

                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-white px-2 text-gray-500">Or sign up with</span>
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
                            Already have an account? <Link href="login" className="text-teal-600 hover:underline">Log in here</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
