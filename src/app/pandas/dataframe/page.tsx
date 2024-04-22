import VideoComponent from "@/components/Video";

const videoId: string = "gKA5yz54uuw";
const description: string = "Pandas: Data Frame";
const transcript: string = `We've mentioned data frames quite a few times now. But let’s dive into what they are.  

Data frames are two-dimensional structures with rows and columns enabling a table like structure to be formed. The columns are generally referred to as column names whereas the rows are referred to as indices.  

Column to column there can be different types of dataframes. There is no requirement or constraint that a data frame can only hold one type of data type. Additionally, you don’t have to make special adjustments to the alignment of the data when trying to do certain operations. Pandas automatically conduct the alignment.  

With indexing, there are two important functions when it comes to indexing. One way is using the df.loc() function. This will be able to take in and return either a single row, set of rows, a single cell, or a group of cells. For example,”firstRow = df.loc[1] returns data corresponding with the data with the row index 1. “ df.loc[[1,4]] returns data with the row index of 1 and 4. df.loc[1,’Name’] would give a single cell with the row index of 1 and column as ‘Name’. FirstGroup =  df.loc[[1, 3], ['Name', 'Age']] would give cells with the row index 1 or 3 and column of Name and Age.  

These same aspects can also be identified with the df.iloc() function. df.iloc[1] will return the data corresponding with the row index 1, df.iloc[[1,4]] returns data with the row index 1 and 4. df.iloc[1,4] returns data in the row corresponding with the row index 1 and the column corresponding with the column index 4. iloc takes integer-based indexing and loc does column label-based indexing.  

That concludes our lesson on dataframes and indexing. Thanks for tuning in. `;

const moduleId: string = "pandas_dataframe";

export default function PandasDataFrame() {
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
