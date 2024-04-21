"use client"

import Image from "next/image";
import { Button, Navbar } from "flowbite-react";
import CustomSidebar from "@/components/CustomSidebar";
import { saveSubmoduleStatus } from "@/services/ModuleStatusStorage";


export default function Home() {
  // const imageUrl = "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  const imageUrl = "https://images.pexels.com/photos/6589064/pexels-photo-6589064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

  return (
    <>
      <div className="flex h-[calc(100vh-200px)]">
        <div className="w-full mx-20 text-center flex flex-col items-center pa-20 rounded-xl"
          style={{backdropFilter: `blur(100px)`,backgroundImage: `url(${imageUrl})`, backgroundSize: `cover`, backgroundPosition: `center`}}
        >
          <div className="bg-gray-800 w-full my-60 py-20 flex flex-col items-center">
          <h1 className="text-4xl ">Python for Scientists</h1>
          
          <p className="mt-5 mx-32">Unlock the power of Python for data analysis with our tutorials and resources. Whether your a beginner eager to learn the basics or an experimented analyst looking to deepen your skills, this course offers a path to mastery.</p>

          <Button className="mt-5">Get Started</Button>
          </div>
          
        </div>

      </div>

    </>
  );
}
