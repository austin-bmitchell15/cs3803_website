import VideoComponent from "@/components/Video";

const videoId: string = "wydA6288V6U"
const description: string = "Graphing: Scatter Plot Demo"
const transcript: string = ``

const moduleId: string = "graphing_scatter"

export default function ScatterDemo() {

    return (
      <div className="ml-5 mt-5 w-full">
        <div className="mb-10">
          <h1 className="text-5xl">Graphing: Scatter Plot Demo</h1> 
          </div>
          <div className="flex justify-center w-full overflow-y-auto">
            <VideoComponent videoId={videoId} description={description} transcript={transcript} moduleId={moduleId}/>
          </div>
      </div>
    )
  }