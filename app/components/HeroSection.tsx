import { NextPage } from 'next'
import "../globals.css"

interface Props { }

const HeroSection: NextPage<Props> = ({ }) => {
    return (
        <section className="text-gray-600 body-font section-one">
            <div className="container lg:px-20 py-10 mx-auto flex md:flex-row flex-col items-center section-one-childOne">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center HeroSec">
                    <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">
                        AI-Powered OMR Grading System
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Upload your OMR sheet and let AI grade it instantly with high accuracy!
                    </p>
                    <div className="flex justify-center HeroButton">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm">
                            Button
                        </button>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-4 section-one-childTwo">
                    <div className="img"></div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection