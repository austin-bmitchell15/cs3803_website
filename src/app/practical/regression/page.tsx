import VideoComponent from "@/components/Video";

const videoId: string = "PfkW-FIpDj0";
const description: string =
  "Demonstration of the using data analysis for regression problem in Python.";
const transcript: string = `Welcome to our last module where we demonstrate how all of the tools we showcased in past modules can be used to analyze a sample dataset. In this lesson, we will graph Apple’s stock prices, and calculate a simple linear regression. 

Starting with the first step, we import our data set using Pandas, and change our Date column to have numerical values to make it easier to work with in the future.  

The second step involves plotting the closing price of the Apple stock over time so we can visualize it. The output should look like this. 

In the third step, we set our X and Y variables to calculate our regression later. In the first line, we get the index column of the data frame and convert it to a Numpy array. Then, we reshape the Numpy array into column format by using “.reshape(-1, 1)” The –1 just tells Numpy that we will take any size for the amount of rows when reshaping, and the 1 just means we want to reshape the data into 1 column. The next line just sets the Y variable to the closing stock price column. 

In the fourth step, we calculate the actual regression. The first line adds a column of ones to the left of the X variable to account for the bias term. The second line uses the normal equation method to directly compute the optimal parameters that minimize the mean squared error between the predicted and actual values. 

In the fifth step, we compute evaluation metrics for the linear regression model, such as Mean Squared Error (MSE) and R-squared, and then we print them out. We calculate the evaluation metrics by using these Numpy functions and the equations for MSE and r squared. Here is the output. 

In the sixth step, we plot the Apple stock prices over time with the Linear regression. The output should look like this.  

Thanks for tuning in to our lessons on data analysis. We wish you the best of luck! `;

const moduleId: string = "practical_regression";

export default function Regression() {
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
