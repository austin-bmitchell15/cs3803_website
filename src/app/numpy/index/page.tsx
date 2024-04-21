import VideoComponent from "@/components/Video";

const videoId: string = "GbAXZmn56So"
const description: string = "Overview of NumPy and what its used for."
const transcript: string = `Welcome back to our lesson on Numpy.  

Last time, we showed you how to install Numpy, and how to create a simple 1 Dimensional array. However, in Numpy, you can also create 2 dimensional arrays, and even 3 dimensional arrays. We will only go over 2 dimensional arrays and below, but feel free to look at Numpy’s official documentation for more information on 3D arrays.  

To create a 2D array, simply reformat array initialization to be like the example shown at the bottom. The idea of a 2D array, is to have multiple arrays inside of an array. These 2D arrays can essentially be treated as matrices, and Numpy has several functions dedicated to handling matrices, like matmul, or otherwise known as matrix multiplication. Check out our common Numpy functions or Numpy’s official documentation for more functions to use on matrices. 

To access data from these arrays, Numpy allows you to index them, pulling values from specific positions in the array. Like python, numpy arrays have positions starting from the number 0, meaning that the first number in the array has the position “0”. If you take a look at the example on the left, and print it out, you will see that only the second value in the array was shown, when we gave the index value “1”. Multiple values can be accessed at the same time as well, by “slicing” the array. In the same example, you can see that the format with the colon includes all the values between the 2 given indices. Notice how the second position in the format is not included in the output, and is +1 to the index you want to stop on. 

2D arrays can be accessed in a similar way, by using a “row comma column” format. If you take a look at the example on the right, the value in the first row and the first column is printed out when given the index values “0, 0”. Slicing is also done in a similar fashion, as shown in this example, with a comma being the only difference.  

That concludes our lesson on 2D arrays and array indexing. Next, we’ll teach you about array shapes.`

const moduleId: string = "numpy_index"

export default function NumpyIndexing() {

    return (
      <div className="ml-5 mt-5 w-full">
          <div className="flex justify-center w-full overflow-y-auto">
            <VideoComponent videoId={videoId} description={description} transcript={transcript} moduleId={moduleId}/>
          </div>
      </div>
    )
  }