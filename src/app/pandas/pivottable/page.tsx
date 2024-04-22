import VideoComponent from "@/components/Video";

const videoId: string = "Pou8Lb-cdoE";
const description: string = "Pandas: Pivot Tables";
const transcript: string = `The last lesson in this chapter is on Pivot tables. So, what exactly are pivot tables? 

They are a way of creating a new table that summarizes the data in the original dataset. This can be done by choosing a desired aspect such as sum, count, mean, etc..  

From there, there is an easy of comparing data across categories to see how different factors affect different results. It can also be useful for identifying trends and patterns in the dataset.  

It is powerful at minimizing the size of the data.  

The most useful function for this method is the df.pivot_table. It creates a dataframe representation of a picot table for the original dataset.  

Thanks for tuning into the Pandas chapter and we wish you the best of luck in the rest of your data analysis journey. `;

const moduleId: string = "pandas_pivottables";

export default function PandasPivotTables() {
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
