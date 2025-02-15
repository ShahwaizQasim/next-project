import { NextPage } from 'next'

interface Props { }

const PictureSection: NextPage<Props> = ({ }) => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container lg:px-20 py-10 mx-auto flex md:flex-row flex-col items-center">
                <div className="lg:flex-grow relative bottom-8 md:w-1/2 lg:pr-2 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center PictureSec">
                    <h1 className="title-font sm:text-3xl lg:text-4xl mb-4 font-medium text-[#3D31B9]">
                        Picture Capture
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Empowering educational institutions worldwide to become productive and
                        profitable in the new hybrid learning world! With Eval, you get complete range
                        of Examination eValuation, Assessment and Learning management solutions such as
                        OMR, Online Exams,LMS and Question & Test Management.
                    </p>
                    <div className="flex justify-center pictureSecButton">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm">
                            Explore
                        </button>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-4 PicSection-childTwo">
                    <div className="pictureImg"></div>
                </div>
            </div>
        </section>
    )
}

export default PictureSection