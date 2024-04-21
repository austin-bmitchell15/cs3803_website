import VideoComponent from "@/components/Video";

const videoId: string = "uVw4uL-Kds4"
const description: string = "Graphing: Line Graph Demo"
const transcript: string = ``

const moduleId: string = "graphing_linegraphs"

export default function GraphingOverview() {

    return (
      <div className="ml-5 mt-5 w-full">
        <div className="mb-10">
          <h1 className="text-5xl">Graphing: Line Graph Demo</h1> 
          </div>
          <div className="flex justify-center w-full overflow-y-auto">
            <VideoComponent videoId={videoId} description={description} transcript={transcript} moduleId={moduleId}/>
          </div>
      </div>
    )
  }