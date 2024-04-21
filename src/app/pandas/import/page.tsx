import VideoComponent from "@/components/Video";

const videoId: string = "E-UfAm23AVw"
const description: string = "Installing and Importing Data in Pandas"
const transcript: string = `Welcome back to our chapter on Pandas. Last time, we talked about the importance of using Pandas. Now, let's begin talking about what needs to be done to make sure Pandas are correctly setup on your computer and on your file 

The first step is we need to go into our terminal for Mac users and Command Line for Windows users and enter in a command. The command we need to enter is “pip install pandas” or sometimes when they doesn't work we can also try “pip3 install pandas”. 

What this does is brings the pandas library onto your computer. This only needs to be done the first time that you use the library. 

Now, we also need to include one line in our actual code itself to bring it into the file. At the top when we include the list of imports, we need to include a line that says “import pandas  as pd”. We include the part that says as pd so that instead of having to type out pandas every time we can simply say pd. Pd is what is commonly used but in reality any thing can be used their.  

There are four main types of files that can be used to load data from. They can come from CSV files, Excel files, JSON Files or SQL Database files. Regardless of which of these the data is coming from they can be imported into the data frame using a similar command. CSV files can have their data extracted into a data frame using “df = pd. read_csv(“filestring”). Excel files use df = read_excel(“filestring), JSON files use read_json(), and SQL databse files use df = read_sql(“filestring”).   

Additionally, users can populate a Python dictionary and turn a dictionary into a data frame using df = pd.Dataframe(dictName) 

Once our data has been put into a database format, we can then begin the process of cleanup and analysis. We will begin going over this next time.`

const moduleId: string = "pandas_overview"

export default function PandasImport() {

    return (
      <div className="ml-5 mt-5 w-full">
        <div className="mb-10">
          <h1 className="text-5xl">Pandas: Installation and Data Import</h1> 
          </div>
          <div className="flex justify-center w-full overflow-y-auto">
            <VideoComponent videoId={videoId} description={description} transcript={transcript} moduleId={moduleId}/>
          </div>
      </div>
    )
  }