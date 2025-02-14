import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { BsGithub } from 'react-icons/bs';
import { FaGoogle } from 'react-icons/fa';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface SignUpPopupProps {
    open: boolean;
    onClose: () => void;
}

const SignUpPopup = ({ open, onClose }: SignUpPopupProps) => {
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
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden">
                <DialogHeader className="p-3">
                    <DialogTitle className="text-xl font-semibold text-teal-800">
                        Sign up for your SmitGrade account
                    </DialogTitle>
                </DialogHeader>

                <div className="px-6 py-4">
                    <form onSubmit={formik.handleSubmit} className="space-y-4">
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
                            className="w-full bg-emerald-400 hover:bg-emerald-500 text-black"
                        >
                            Sign Up
                        </Button>
                    </form>

                    <div className="relative my-6">
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
                                <FaGoogle />
                                Google
                            </span>
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default SignUpPopup;
