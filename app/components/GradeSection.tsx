import { NextPage } from 'next'

interface Props { }

const GradeSections: NextPage<Props> = ({ }) => {
    return <>
        
        <section className=" body-font GradeSection">
            <div className="container lg:px-20 py-4 mx-auto flex md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-4 GradeSection-childOne">
                    <div className="gradeImg"></div>
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pr-2 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center GradeSec">
                    <h1 className="title-font sm:text-3xl lg:text-4xl text-2xl mb-4 font-medium text-[#003C46]">
                        Deliver and Grade Your Assessments Anywhere
                    </h1>
                    <p className="mb-8 leading-relaxed mt-2">
                        Gradescope helps you seamlessly administer and grade all of your assessments,
                        whether online or in-class. Save time grading and get a clear picture of how your
                        students are doing.
                    </p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default GradeSections