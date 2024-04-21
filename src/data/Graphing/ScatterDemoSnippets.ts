import { Snippet } from "@/utils/types";

export const ScatterDemoSnippets : Snippet = {
    pythonTemplate: `import pandas as pd
import matplotlib.pyplot as plt
import matplotlib.dates as mdates

data = pd.read_csv("AAPL.csv")
data["Date"] = pd.to_datetime(data["Date"])
plt.scatter(data.Date,data.High)
plt.gca().xaxis.set_major_locator(mdates.DayLocator(interval=14))
plt.gca().xaxis.set_major_formatter(mdates.DateFormatter('%m-%d-%Y'))
plt.gcf().autofmt_xdate()
plt.title("Apple Stocks High Prices By Date")
plt.xlabel("Date")
plt.ylabel("High Prices")
plt.show()`,
    prompt: `Here is an example of the linegraph that was presented in the previous video`,
    pythonExampleCode: undefined,
    expectedOutput: undefined,
}