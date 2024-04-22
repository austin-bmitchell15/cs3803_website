import VideoComponent from "@/components/Video";

const videoId: string = "erEyufuT_pw";
const description: string = "Graphing: Overview";
const transcript: string = `Welcome to our chapter on Graphing with Python. With data analysis, the visualization aspects are equally as important as the processing and the computations that are conducted on it. Python has several libraries that can be used to create powerful and insightful visual representations of the data that is being worked with.   

There are multiple libraries that can be used for creating different types of graphs. To name just a few of the libraries there are Matplotlib, Seaborn, Plotly, PlotNine, and Bokeh. Out of these Matplotlib is the most commonly used. Each of the different libraries have different specialties and use cases for each one of them. For this chapter's purposes, we will use Matplotlib.  

Matplotlib can make several different types of graphs for both 2-D and 3-D. Users can make scatter plots, line graphs, pie charts, box and whisker plots, histograms, contours, and more.  

This can be useful in multiple aspects throughout the Data Analysis process. In the beginning, to understand the dataset users can plot histograms, box and whisker plots, or violin plots to see the distribution of the data. This can determine what needs to be what aspects of the data need to be changed for outliers or so on. Then, say for example, some ML algorithm is run, users could have a potential 3-D surface plot for it.  `;

const moduleId: string = "graphing_overview";

export default function GraphingOverview() {
  return (
    <div className="ml-5 mt-5 w-full">
      <div className="mb-10">
        <h1 className="text-5xl">Graphing: Overview</h1>
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
