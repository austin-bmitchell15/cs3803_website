import VideoComponent from "@/components/Video";

const videoId: string = "tNxclvxEcwo"
const description: string = "Understanding Numpy array shapes and dimensions"
const transcript: string = `Now that you know the basic array creation and access functions in Numpy, it’s important to discuss array shapes in Numpy before moving on to specific functions. 

Numpy arrays have an attribute called “shape” that returns the number of elements in each dimension. 

Take a look at the example on the left. Printing out the shape of the array returns the value 5, since there are 5 values in the array. 

Next, take a look at the example on the right. Printing out the shape of this array returns 2 numbers, 2 and 3. Since 2 numbers were returned, we know that the array is 2 dimensional. The number 2 that was returned tells us that there are 2 rows, or 2 elements in the first dimension. The number 3 that was returned tells us that there are 3 columns, or 3 elements in the second dimension. 

Knowing the shape of an array is particularly useful when you want to know the number of rows and columns in a dataset, which can also be interpreted as the number of datapoints in the same dataset. Looking at this example dataset, we can see that there are 3 columns and 100 rows. With this information, we can easily deduce that there are 99 datapoints, and 3 characteristics for each datapoint using np.shape. 

That concludes our lesson on Numpy Shapes. Next, we’ll show specific functions being used on arrays.`

const moduleId: string = "numpy_shape"

export default function NumpyShape() {

    return (
      <div className="ml-5 mt-5 w-full">
          <div className="flex justify-center w-full overflow-y-auto">
            <VideoComponent videoId={videoId} description={description} transcript={transcript} moduleId={moduleId}/>
          </div>
      </div>
    )
  }