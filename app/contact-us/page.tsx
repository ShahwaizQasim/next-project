"use client"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Name is too short')
        .max(50, 'Name is too long')
        .required('Name is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    phone: Yup.string()
        .matches(/^[0-9+ ()-]+$/, 'Invalid phone number format'),
    subject: Yup.string()
        .required('Please select a subject'),
    message: Yup.string()
        .min(10, 'Message is too short')
        .required('Message is required')
});

export default function ContactPage() {
    const handleSubmit = (values: any, { setSubmitting, resetForm }: any) => {
        // Handle form submission here
        console.log(values);
        setTimeout(() => {
            setSubmitting(false);
            resetForm();
            // Show success message or redirect
        }, 500);
    };

    return (
        <div className="bg-gray-50 min-h-screen">

            <Navbar />

                <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Contact Us</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Have questions about our AI scanner or OMR checker? Get in touch with our team and we'll get back to you as soon as possible.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row bg-white   overflow-hidden max-w-5xl mx-auto">
                        <div className=" text-black p-8 lg:w-2/5">
                            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>

                            <div className="flex items-start mb-6">
                                <div className="text-xl mr-4 mt-1">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold mb-1">Our Location</h4>
                                    <p className="opacity-90">123 Tech Park, Silicon Valley<br />Gurugram, Haryana 122001</p>
                                </div>
                            </div>

                            <div className="flex items-start mb-6">
                                <div className="text-xl mr-4 mt-1">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold mb-1">Phone Number</h4>
                                    <p className="opacity-90">+91 98765 43210</p>
                                </div>
                            </div>

                            <div className="flex items-start mb-6">
                                <div className="text-xl mr-4 mt-1">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold mb-1">Email Address</h4>
                                    <p className="opacity-90">info@smitautograde.com</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="text-xl mr-4 mt-1">
                                    <i className="fas fa-clock"></i>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold mb-1">Working Hours</h4>
                                    <p className="opacity-90">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 lg:w-3/5">
                            <Formik
                                initialValues={{
                                    name: '',
                                    email: '',
                                    phone: '',
                                    subject: '',
                                    message: ''
                                }}
                                validationSchema={ContactSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ isSubmitting, errors, touched }) => (
                                    <Form>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Your Name <span className="text-red-500">*</span>
                                                </label>
                                                <Field
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name && touched.name ? 'border-red-500' : 'border-gray-300'
                                                        }`}
                                                />
                                                <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                                            </div>

                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Email Address <span className="text-red-500">*</span>
                                                </label>
                                                <Field
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email && touched.email ? 'border-red-500' : 'border-gray-300'
                                                        }`}
                                                />
                                                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                            <div>
                                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Phone Number
                                                </label>
                                                <Field
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.phone && touched.phone ? 'border-red-500' : 'border-gray-300'
                                                        }`}
                                                />
                                                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
                                            </div>

                                            <div>
                                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Subject <span className="text-red-500">*</span>
                                                </label>
                                                <Field
                                                    as="select"
                                                    id="subject"
                                                    name="subject"
                                                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.subject && touched.subject ? 'border-red-500' : 'border-gray-300'
                                                        }`}
                                                >
                                                    <option value="">Select a subject</option>
                                                    <option value="AI Scanner Inquiry">AI Scanner Inquiry</option>
                                                    <option value="OMR Checker Support">OMR Checker Support</option>
                                                    <option value="Pricing Information">Pricing Information</option>
                                                    <option value="Technical Support">Technical Support</option>
                                                    <option value="Other">Other</option>
                                                </Field>
                                                <ErrorMessage name="subject" component="div" className="text-red-500 text-sm mt-1" />
                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                                Your Message <span className="text-red-500">*</span>
                                            </label>
                                            <Field
                                                as="textarea"
                                                id="message"
                                                name="message"
                                                rows="5"
                                                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.message && touched.message ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                            />
                                            <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="bg-emerald-600 text-white hover:bg-emerald-800 font-semibold py-3 px-6 rounded-md transition duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                        </button>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </div>
    );
}