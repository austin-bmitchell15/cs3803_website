"use client";

import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";

export default function Home() {
  // const imageUrl = "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  const imageUrl =
    "https://images.pexels.com/photos/6589064/pexels-photo-6589064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  const router = useRouter();

  return (
    <>
      <div className="flex h-[calc(100vh-200px)] overflow-auto">
        <div
          className="w-full mx-20 text-center flex flex-col items-center justify-center pa-20 rounded-xl"
          style={{
            backdropFilter: `blur(100px)`,
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: `cover`,
            backgroundPosition: `center`,
          }}
        >
          <div className="bg-gray-800/85 w-full py-16 my-2 flex flex-col items-center shadow-md">
            <h1 className="text-4xl font-bold ">Python for Scientists</h1>

            <p className="mt-5 mx-32">
              Unlock the power of Python for data analysis with our tutorials
              and resources. Whether your a beginner eager to learn the basics
              or an experimented analyst looking to deepen your skills, this
              course offers a path to mastery.
            </p>
            <hr className="w-80 h-1 mx-auto my-10 bg-gray-400/70 border-0 rounded"></hr>

            <div className="w-full flex flex-row items-center justify-center y-2">
              <div className="mx-2">
                <img
                  className="rounded-lg mx-5 shadow-md"
                  src="https://i.imgur.com/SBky9Ko.png"
                />
              </div>
              <div className="flex flex-col w-96">
                <h3 className="font-semibold text-2xl">
                  We&apos;ll Track Your Progress!
                </h3>
                <p className="mt-2">
                  When you complete a video or an assignment, your progress will
                  be tracked with checkmarks.
                </p>
              </div>
            </div>

            <Button
              className="mt-5"
              onClick={() => router.push("/introduction/introduction")}
            >
              <span className="text-lg">Get Started</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
