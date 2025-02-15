import Image from "next/image";
import Navbar from "./components/Navbar";
import Sections from "./components/GradeSection";
import ExamSection from "./components/ExamSection";
import PictureSection from "./components/PictureSection";
import Footer from "./components/Footer";
import GradeSections from "./components/GradeSection";

export default function Home() {
  return (
    <>
      <div className="">
        <Navbar />
        <Sections />
        <ExamSection />
        <PictureSection />
        <Footer />
      </div>
    </>
  );
}
