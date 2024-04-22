import VideoComponent from "@/components/Video";

const videoId: string = "KluzPyhYgRQ";
const description: string = "Graphing: Histogram Demo";
const transcript: string = `Our next demo we will be using the same data set that we used for the previous line graph for this one we want to be creating a histogram so we'll follow a similar process we'll Begin by first importing pandas SPD then we're going to import matplot li. Pyplot PLT  

Now going into the actual code we want to begin by first importing in our and loading in our data set with pd. read CSV now for this one let's make a histogram of each of the closing prices for the Apple stocks and so this is something that we can actually create using pandas itself to create the element of actually labeling that's when we're going to need to use matplotlib. 

That's why we'll just do data. hist and then we'll specify the column and then we'll go ahead with the same procedure that we did for the line graph by having in a title X label and a y Label and lastly we just want to see a visual representation so we want to see PLT show and then it'll actually show us it and in this one we're also using visual studio code so we can go ahead click on the play sign  

Now we can see our lovely representation of our data that we have and seeing through a histogram how it's evenly represented and distributed and so thank you us for tuning in for the histogram demo and we hope you learn something in this video. `;

const moduleId: string = "graphing_histogram";

export default function HistogramDemo() {
  return (
    <div className="ml-5 mt-5 w-full">
      <div className="flex justify-center w-full overflow-y-auto">
        <VideoComponent
          videoId={videoId}
          description={description}
          transcript={transcript}
          moduleId={moduleId}
        />
      </div>
    </div>
  );
}
