import Image from "next/image";
import Navbar from "./components/Navbar";
import Sections from "./components/Sections";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Sections/>
    </main>
  );
}
