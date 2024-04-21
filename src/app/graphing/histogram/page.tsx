import VideoComponent from "@/components/Video";

const videoId: string = "KluzPyhYgRQ"
const description: string = "Graphing: Histogram Demo"
const transcript: string = ``

const moduleId: string = "graphing_histogram"

export default function HistogramDemo() {

    return (
      <div className="ml-5 mt-5 w-full">
        <div className="mb-10">
          <h1 className="text-5xl">Graphing: Histogram Demo</h1> 
          </div>
          <div className="flex justify-center w-full overflow-y-auto">
            <VideoComponent videoId={videoId} description={description} transcript={transcript} moduleId={moduleId}/>
          </div>
      </div>
    )
  }