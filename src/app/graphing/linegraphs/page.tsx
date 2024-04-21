import VideoComponent from "@/components/Video";

const videoId: string = "uVw4uL-Kds4"
const description: string = "Graphing: Line Graph Demo"
const transcript: string = `All right so we're going to go ahead and begin a live demo of creating a line graph using data from pandas as well as impot web to create the visualization so our first step that we want to take is we want to go ahead and begin all of our import statements so the first one we want to do is we want to go ahead and import pandas as PD as we mentioned in earlier chapter now because we are going to be using um a sub module of the uh matplot lib Library we have to import that as import matplot li. pyplot as PLT because we are working with dates and we want to make sure that it gets um correctly formatted and everything we have to include an import.  

Date as MDES so now we're going to go ahead and start working with our actual code for the purposes of this block of code and each of the other demos um for graphing we are going to be using an Apple stock market data set that we used on an earlier coding activity for the purposes of correct formatting in terms of the data frame we have to make sure that we convert it all to a datetime object so the first thing that we want to do is go ahead and make sure that all the dates that are in the date column are correctly modified to a datetime object. 

And so we can do this by indexing um into our data frame into the date column for the purposes of this graph we want to have date be compared to the high prices for each of those dates um and so that's going to be our line that we have where it says PLT do plot and have those two columns selected now for the next three lines we just want to make sure that the overall uh x-axis that we have is well formatted in a way that's readable for us to see and so that's why we're going to have these three lines of set major locator set major formatter and auto format xate and then we want to finish out by making sure that we're including proper practice of creating graphs by making sure we have a title an x-axis label y AIS label. 

So we included each of those on three aspects and the final thing that you want to do when you're working with any sorts of um python visualizations is you want to have it mention the show line so here we have the PLT doow to make sure that we're actually able to visualize our graph that we have created now we're be ready to begin to actually see what this is going to be looking like so we can go over here um currently I'm us using visual studio code um so I can easily run that with the play sign and CR graph and so here's a visual representation of Apple stocks high prices by date visualization that we have created and so we can easily see this through our X axis Y AXIS.  

And the nice graph we have created so thank you so much for tuning in to seeing the line graph demo.`

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