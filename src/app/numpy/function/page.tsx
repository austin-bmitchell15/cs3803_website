import VideoComponent from "@/components/Video";

const videoId: string = "Hb3UNbme-Q0"
const description: string = "Learning common Numpy functions and operations"
const transcript: string = `Now that you know most of the necessary information about Numpy, here are some examples that use specific functions to analyze a simple matrix.  

Np.mean finds the mean of an array. If used on a matrix, it will average the entire matrix. To specify the function to return the means of each column, add the parameter “axis=0” to the function. To specify the function to return the means of each row, add the parameter “axis=1” to the function. 

Np.min finds the minimum value in the entire array. Adding axis parameters tells the function to look at the row or column of the 2D array. For example, adding “axis=0” tells the function to return the minimum values in each column, and adding “axis=1” tells the function to return the minimum values in each row. 

Np.max finds the maximum value in the entire array. Adding axis parameters to these functions will have the same effect as adding axis parameters in np.min. 

Numpy isn’t limited to just these functions either. There are many more useful functions to use. A quick google search will show you how to perform a specific function in data analysis using Numpy. Check out our common Numpy functions or Numpy’s documentation for more information. 

Thanks for following our Numpy module! Visit our other modules to better aid your data analysis needs. `

const moduleId: string = "numpy_function"

export default function NumpyFunction() {

    return (
      <div className="ml-5 mt-5 w-full">
          <div className="flex justify-center w-full overflow-y-auto">
            <VideoComponent videoId={videoId} description={description} transcript={transcript} moduleId={moduleId}/>
          </div>
      </div>
    )
  }