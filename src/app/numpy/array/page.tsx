import VideoComponent from "@/components/Video";

const videoId: string = "Vcaz1tyWfts"
const description: string = "Installing and using Numpy array."
const transcript: string = `Now that you know the importance and versatility of Numpy, We’ll show you how to setup and get started. 

First, for Mac users, go to the terminal and for windows users, go to the command line interface. In this menu, enter the command “pip install numpy”. If this command does not work, try ”pip3 install numpy”. This command will install the Numpy library for python onto your machine. This only needs to be done once for each instance of Python on your machine. Next, make sure to import numpy at the top of the python file by including the line “import numpy as np”. The “as np” is included to allow you to call numpy functions with “np.<insert function name>” instead of “numpy.<insert function name>” 

Now that we have Numpy setup, here are some of the arrays we can create. All we need to do is call np.array, np.ones, or np.zeros, depending on what type of array we want to create. Np.array allows you to fill an array with custom values, np.ones creates an array with ones, and np.zeros creates an array of just zeros. 

There are many things we can do to manipulate and study these array, and now that you know the setup, our next lesson will highlight some of Numpy’s useful functionalities. `

const moduleId: string = "numpy_array"

export default function NumpyArray() {

    return (
      <div className="ml-5 mt-5 w-full">
          <div className="flex justify-center w-full overflow-y-auto">
            <VideoComponent videoId={videoId} description={description} transcript={transcript} moduleId={moduleId}/>
          </div>
      </div>
    )
  }