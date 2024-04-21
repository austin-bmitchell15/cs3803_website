import { Snippet } from "@/utils/types";

export const HistogramDemoSnippets : Snippet = {
    pythonTemplate: `import pandas as pd
import matplotlib.pyplot as plt

data = pd.read_csv("AAPL.csv")
data.hist(column="Close")
plt.title('Histogram of Closing Prices for Apple Stocks')
plt.xlabel('Closing Prices')
plt.ylabel('Frequency')

plt.show()`,
    prompt: `Here is an example of the histogram that was presented in the previous video`,
    pythonExampleCode: undefined,
    expectedOutput: undefined,
}