import VideoComponent from "@/components/Video";

// const videoUrl: string = "https://www.youtube.com/embed/A0_47vV3iSE?si=3KwIsOEOTx4X00Vd"
const videoId: string = "A8xakK_QcDY"
const description: string = "Introduction to Pandas"
const transcript: string = `Welcome to our chapter on Pandas. In the realm of data analysis, Pandas is an incredibly useful library that can be used in several different contexts. Pandas are best when working with tabular data. It can be thought of as the types of data we use and place into Excel tables or CSVs. The library then converts them into data frames or vice versa.  

With the usage of this library, rather than looping through the data it can be down in constant time.  For example, the median can be calculated in constant time with a simple df.median(). This will then find the median for all the columns in your table. Similar functions can also be used for mean, standard deviation and other important statistical measures. 

Pandas are extremely useful in data cleanup. Different conditions can be applied and can eliminate certain rows and columns or if there are instances where multiple rows should be changed to a certain value. Through the usage of Pandas indexing, a desired condition can be checked and then have the new values assigned to corresponding parts of the dataframe. These are all tasks that can be done without the usage of loops. As a result, these are done in extremely efficient times. 

Much of the data that is commonly used is in the form of CSV tabular data or can easily be converted into some form of tabular data.  

That wraps up our introduction to Pandas. Next, we will have a brief intro into the process of using Pandas.`

const moduleId: string = "pandas_overview"

export default function PandasIntroduction() {

    return (
      <div className="ml-5 mt-5 w-full">
        <div className="mb-10">
          <h1 className="text-5xl">Pandas: Overview</h1> 
          </div>
          <div className="flex justify-center w-full overflow-y-auto">
            <VideoComponent videoId={videoId} description={description} transcript={transcript} moduleId={moduleId}/>
          </div>
      </div>
    )
  }