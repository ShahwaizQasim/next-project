import { NextPage } from 'next'
import "../globals.css"

interface Props { }

const ExamSection: NextPage<Props> = ({ }) => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container lg:px-20 py-10 mx-auto flex md:flex-row gap-10 flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-4 ExamSection-childOne">
                    <div className="examImg"></div>
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pr-2 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ExamSec">
                    <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-emerald-600">
                        Exam Evaluation, Assessment and Learning
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Empowering educational institutions worldwide to become productive and
                        profitable in the new hybrid learning world! With Eval, you get complete range
                        of Examination eValuation, Assessment and Learning management solutions such as
                        OMR, Online Exams,LMS and Question & Test Management.
                    </p>
                    <div className="flex justify-center">
                        <button className="inline-flex  bg-emerald-600 text-white hover:bg-emerald-8000 border-0 py-2 px-6 focus:outline-none  rounded text-sm">
                            Explore
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExamSection