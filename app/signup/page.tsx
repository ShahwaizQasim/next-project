"use client"
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { BsGithub } from 'react-icons/bs';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="flex min-h-[calc(100vh-64px)]">
                <div className="hidden md:flex w-1/2 bg-teal-600 p-8 flex-col justify-between relative overflow-hidden">
                    <div className="relative z-10">
                        <h1 className="text-4xl font-bold text-white mb-6">Welcome to SmitGrade</h1>
                        <p className="text-xl text-teal-100 max-w-md">
                            Join our platform and unlock your educational potential with personalized learning experiences.
                        </p>
                    </div>

                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-teal-500 opacity-20"></div>
                        <div className="absolute bottom-40 right-10 w-60 h-60 rounded-full bg-teal-400 opacity-20"></div>
                        <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full bg-teal-300 opacity-10"></div>
                    </div>

                    <div className="relative z-10">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md mx-auto">
                            <path fill="#D1FAE5" d="M45.7,-62.8C59.9,-50.8,72.7,-38.6,79.2,-23.1C85.7,-7.5,85.8,11.4,79.4,27.7C73,44,60.2,57.8,45.3,67.3C30.4,76.9,13.4,82.2,-3.8,86.9C-20.9,91.7,-38.2,96,-51.6,87.8C-65,79.7,-74.4,59.3,-77.6,41.2C-80.8,23.1,-77.8,7.4,-76.4,-10.2C-75.1,-27.8,-75.5,-47.4,-65.8,-60.5C-56.1,-73.7,-36.4,-80.4,-19.5,-79.2C-2.5,-78.1,10.6,-69.1,24.3,-74.1C37.9,-79,51.1,-97.9,53.9,-96.4C56.7,-94.8,49.3,-72.9,45.7,-62.8Z" transform="translate(100 100)" />
                        </svg>
                    </div>

                    <div className="text-teal-200 text-sm relative z-10">
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
                                className="w-full bg-emerald-400 hover:bg-emerald-500 text-black py-2"
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
                            Already have an account? <a href="#" className="text-teal-600 hover:underline">Log in here</a>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Signup;