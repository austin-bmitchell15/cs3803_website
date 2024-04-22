"use client";

import React from "react";
import { saveSubmoduleStatus } from "@/services/ModuleStatusStorage";
import YouTube from "react-youtube";

const opts = {
  width: "840",
  height: "473",
};

export default function VideoComponent({
  videoId,
  description,
  transcript,
  moduleId,
}: {
  videoId: string;
  description: string;
  transcript: string | undefined;
  moduleId: string;
}) {
  function endVideo() {
    saveSubmoduleStatus(moduleId);
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        {/* <!-- Children elements --> */}
        <p className="text-xl mt-10 mb-4">{description}</p>
        <YouTube videoId={videoId} onEnd={endVideo} opts={opts} />

        {transcript && (
          <div className="mb-4">
            <p className="text-2xl my-4">Transcript</p>
            <div className="flex justify-center max-w-4xl">
              <div className="bg-black rounded-lg p-8 text-white text-center overflow-y-auto max-h-80">
                <div className="whitespace-pre-wrap text-left">
                  {transcript}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    // <div className="flex items-center ">
    //     <p className="text-lg">"This video introduces loops in Python."</p>
    //     <iframe width="560" height="315" src={videoUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    // </div>
    // <div className="relative overflow-hidden bg-gray-900 rounded-lg shadow-md">
    //     <iframe className="absolute inset-0 w-full h-full" src={videoUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
    // </div>
    // <div className="flex justify-center items-center h-screen">

    //     <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
    //         <div>

    //         </div>
    //     </div>
    // </div>
  );
}
