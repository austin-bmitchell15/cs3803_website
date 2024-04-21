import VideoComponent from "@/components/Video";

const videoId: string = "J6pnEXjH328"
const description: string = "Overview of NumPy and what its used for."
const transcript: string = `Welcome to our module on Numpy.  

When performing any data analysis tasks in python, Numpy is the number one tool for math related operations on array-based data. It has simple functions that perform linear algebra, matrix, and statistical operations. 

While it is possible to manually code math operations in Python, there already exists an extensive library of functions in Numpy. These functions are also several times faster than Python operations, which is extremely necessary when working with large datasets.  

As mentioned before, Numpy functions are array-based, which largely contributes to its speed and efficiency. It is heavily optimized to be a better alternative to native python functions. These arrays, which can be represented as datasets, can be easily manipulated and studied using Numpy’s extensive library, making it the ideal tool for data analysis.  

That concludes our brief overview of Numpy. Next, we’ll show you how to get started with Numpy `

const moduleId: string = "numpy_overview"

export default function NumpyOverview() {

    return (
      <div className="ml-5 mt-5 w-full">
          <div className="flex justify-center w-full overflow-y-auto">
            <VideoComponent videoId={videoId} description={description} transcript={transcript} moduleId={moduleId}/>
          </div>
      </div>
    )
  }