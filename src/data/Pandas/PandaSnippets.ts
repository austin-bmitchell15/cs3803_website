import { Snippet } from "@/utils/types";

export const PandaSnippets: Snippet = {
  prompt: `We are providing a dataset for Apple Stocks with date, opening price, high price, low price, closing price, adjusted closing price, and volume. With the given dataset, get rolling averages for each week using Panda operations.`,
  pythonTemplate: `import pandas as pd 

data = pd.read_csv("AAPL.csv")
# User Code starts here

#User Code ends here
rolling_average = rolling_average.head()
print(rolling_average)`,
  pythonExampleCode: `import pandas as pd 

data = pd.read_csv("AAPL.csv")

# User Code starts here

data['Date'] = pd.to_datetime(data['Date'])
data.set_index('Date',inplace=True)
rolling_average = data.resample('W').mean().rolling(window=7).mean()
rolling_average = rolling_average.dropna()

#User Code ends here
rolling_average = rolling_average.iloc()[:, :3]
rolling_average = rolling_average.head()
print(rolling_average)`,
  expectedOutput: `                  Open        High         Low
Date                                          
2023-06-04  171.065001  172.440000  170.117428
2023-06-11  173.131001  174.556286  171.992000
2023-06-18  175.736715  177.137429  174.563143
2023-06-25  177.979859  179.411429  176.882857
2023-07-02  180.132430  181.720572  179.166286`,
  imageOutput: false,
};


