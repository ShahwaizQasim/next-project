import { NextPage } from 'next'
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Footer from '../components/Footer';

interface Props { }

const AboutUs: NextPage<Props> = ({ }) => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto px-14">
                <h1 className='text-4xl font-semibold mt-10 text-[#16A34A]'>About Us</h1>
                <p className='mt-5'>Vir Softech is at the forefront of the revolution in business-led IT process transformation. We assist our customers in realizing their vision and scaling up through workflow transformations that produce superior business results at the lowest possible cost and in the shortest amount of time.
                    Vir Softech is a tech leader in four domains that include enterprise content management & digital imaging, print technology based products & services, design & artwork process automation and EVAL - educational evaluation, assessments and, learning solutions.
                    We have revolutionized technology and built solutions for firms of all sizes including fortune 500 companies, banks, government departments, private sector, agencies, schools, universities and coaching institutions.
                    Trust us to transform.</p>
                <h1 className='text-4xl font-semibold mt-10 text-[#16A34A]'>Our Mission</h1>
                <p className='mt-5'>Transforming education by automating exam grading, reducing errors, and providing
                    instant results</p>
                <p>Our Goal is:</p>
                <ul style={{ listStyleType: "disc" }} className='pl-8'>
                    <li><span className='font-semibold'>Enhance Efficiency</span> – Reduce grading time by automating paper checking.</li>
                    <li><span className='font-semibold'>Ensure Accuracy</span> – Minimize human errors with AI-based evaluation.</li>
                    <li><span className='font-semibold'>Simplify the Process</span> – Provide an easy-to-use web-based solution for institutions.</li>
                </ul>
                <h1 className='text-4xl font-semibold mt-10 text-[#16A34A]'>How It Works?</h1>
                <ol className=' list-decimal pl-8 mt-5'>
                    <li><span className='font-semibold'>Upload Answer Sheet</span> – Simply scan and upload the OMR sheet.</li>
                    <li><span className='font-semibold'>AI Processing</span> – The system uses AI & OCR technology to detect correct and incorrect answers</li>
                    <li><span className='font-semibold'>Instant Result</span> Get an automated score and a detailed performance report.</li>
                </ol>
                <h1 className='text-4xl font-semibold mt-12 text-[#16A34A]'>Our Team Members</h1>
                <div className="flex flex-wrap -m-4 mt-7">
                    <div className="p-4 lg:w-1/2 md:w-full">
                        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                            <div className="w-[150px] h-[150px] sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0" style={{
                                overflow: 'hidden'
                            }}>
                                <img src="/Adil.png" alt="adil_picture" />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                                    Adil Malik
                                </h2>
                                <p className="leading-relaxed text-base">
                                    Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                                    taxidermy. Gastropub indxgo juice poutine.
                                </p>
                                <a href={'https://github.com/adilmalik01'} target='blank' className="mt-3 text-indigo-500 inline-flex items-center">
                                    View Github
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/2 md:w-full">
                        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                            <div className="w-[150px] h-[150px] sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0" style={{
                                overflow:'hidden'
                            }}>
                                <img src="/shahwaiz.jpg" alt="adil_picture" />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-semibold mb-3">
                                    Syed Shahwaiz Qasim
                                </h2>
                                <p className="leading-relaxed text-base">
                                    Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                                    taxidermy. Gastropub indxgo juice poutine.
                                </p>
                                <a href={'https://github.com/shahwaizqasim'} target='blank' className="mt-3 text-indigo-500 inline-flex items-center">
                                    View Github
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/2 md:w-full">
                        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                            <div className="w-[150px] h-[150px] sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0" style={{
                                overflow: 'hidden'
                            }}>
                                <img src="/kunal.jpg" alt="adil_picture" />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                                    Kunal
                                </h2>
                                <p className="leading-relaxed text-base">
                                    Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                                    taxidermy. Gastropub indxgo juice poutine.
                                </p>
                                <a href={'https://github.com/kunal637'} target='blank' className="mt-3 text-indigo-500 inline-flex items-center">
                                    View Github
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/2 md:w-full">
                        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                            <div className="w-[150px] h-[150px] sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0" style={{
                                overflow:'hidden'
                            }}>
                                <img src="/riaz.jpg" alt="riaz_picture" />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-semibold mb-3">
                                   Riaz Ahmed
                                </h2>
                                <p className="leading-relaxed text-base">
                                    Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                                    taxidermy. Gastropub indxgo juice poutine.
                                </p>
                                <a href={'https://github.com/riazahmed'} target='blank' className="mt-3 text-indigo-500 inline-flex items-center">
                                    View Github
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs;