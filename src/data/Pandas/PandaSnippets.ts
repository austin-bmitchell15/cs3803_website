import { Snippet } from "@/utils/types";

export const PandaSnippets : Snippet = {
    prompt: `We are providing a dataset for Apple Stocks with date, opening price, high price, low price, closing price, adjusted closing price, and volume. With the given dataset, get rolling averages for each week using Panda operations.`,
    pythonTemplate: `import pandas as pd 

    data = pd.read_csv("AAPL.csv")
    # User Code starts here

    #User Code ends here
    print(rolling_average)`,
    pythonExampleCode: `import pandas as pd 

    data = pd.read_csv("AAPL.csv")
    data['Date'] = pd.to_datetime(data['Date'])
    data.set_index('Date',inplace=True)
    rolling_average = data.resample('W').mean().rolling(window=7).mean()
    rolling_average = rolling_average.dropna()
    print(rolling_average)`,
    expectedOutput: undefined,
}