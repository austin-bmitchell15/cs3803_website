import VideoComponent from "@/components/Video";

// const videoUrl: string = "https://www.youtube.com/embed/A0_47vV3iSE?si=3KwIsOEOTx4X00Vd"
const videoId: string = "AQUEXlgUHxU";
const description: string = "Introduction to the course";
const transcript: string = `[Slide 1] Welcome to our course on Data Analysis, Manipulation, and Visualization with Python. This course will dive into the various concepts that are important when working with big data. 

[Slide 2] Some might wonder why these aspects are essential. Well, in the world of big data, there is an emphasis on what can be done with data in several fields. Scientists and engineers are often on the cusp of making major breaking breakthroughs.  But they can spend hours trying to conduct data analysis using different techniques. However, this can be inefficient. One of the most efficient methods that has been rapidly on the rise is Python, with its efficient data analysis, manipulation, and visualization tools. These are tools that are quick to learn and easy to pick up even for those without much of a computer science background.  

[Slide 3] This course is for all different types of scientists working with large data. But don’t worry if you don’t fall into the category but are still interested, this is a great course for you. Data analysis has applications in any field such as sports or business.   

[Slide 4] The main objective of this course will be to empower scientists to gain a wide range of techniques to use for data analysis.  

The first objective will be to guide through the idea of installing different packages that need to be installed such as Numpy, Pandas, Matplotlib, and more.  

The next object will be to gain familiarity with Numpy (powerful N-dimensional array objects that facilitate efficient data manipulation and storage), Pandas (a tool designed for working tabular data operations for data cleaning, pre-processing and statistical analysis), and Matplotlib (a powerful data visualization tool).  

The last objective will be to have hands-on experience using these tools.   

[Slide 5] (Outlining of current user experience) This course will assume users have basic knowledge in Linear Algebra and data analysis. Concepts, such as matrix/vector manipulation and graphing, will be used to demonstrate the capabilities of the different Python libraries.`;

const moduleId: string = "intro";

export default function Introduction() {
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
