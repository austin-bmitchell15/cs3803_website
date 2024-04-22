import VideoComponent from "@/components/Video";

const videoId: string = "wydA6288V6U";
const description: string = "Graphing: Scatter Plot Demo";
const transcript: string = `All right so this time around we're going to be making one more representation of that same Apple stock market data set for this one we're going to be making a scatter plot which is going to follow a very very similar um format and structure as the line graph. 

Did there'll only be one word of a change in our actual um one line of a difference in terms of our actual code so we're going to begin by having those same three Imports that we had for the line graph and we are going to since we are using that same data set where you're going to go ahead and use that pd. read CSV load in the string of the file name for it and from there we can go ahead  

Start following that same format of making sure that dates are datetime objects um by indexing into the date column the next step is where we're going to have that major difference um so we want to go ahead and do PLT dos scatter instead of doing PLT do plot on that previous one and here we'll use the dot operator to choose our colum s that we want of date and high and then the  

Last thing the rest of the way is going to be the similar concept that we use for line graph by making sure that we have that pretty format by using the major locator major formatter Auto format um and then anytime we're making any sortage graphs we want to have title X label y Lael and so this time we're also doing um high prices uh versus date so that's why we're going to call Apple stocks high prices by date and then the last step is just having um it be able to have that uh show that representation  

This time around since we are working with Visual Studio code we can go ahead and hit that play sign and see our representation that we have and as you can see this is very similar to that line graph representation that we had and we can see one more um way of looking at that same data set that we've been looking at and so thank you everyone for tuning in to our scatter plot um demonstration. `;

const moduleId: string = "graphing_scatter";

export default function ScatterDemo() {
  return (
    <div className="ml-5 mt-5 w-full">
      <div className="mb-10">
        <h1 className="text-5xl">Graphing: Scatter Plot Demo</h1>
      </div>
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
