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
    <div className="flex justify-center h-screen">
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
  );
}
