import { Snippet } from "@/utils/types";

export const ScatterDemoSnippets: Snippet = {
  pythonTemplate: `import os
import base64
from io import BytesIO
os.environ['MPLBACKEND'] = 'AGG'
import pandas as pd
import matplotlib.pyplot as plt
import matplotlib.dates as mdates

# Patch
def ensure_matplotlib_patch():
    _old_show = plt.show

    def show():
        buf = BytesIO()
        plt.savefig(buf, format='png')
        buf.seek(0)
        # Encode to a base64 str
        img = 'data:image/png;base64,' + \
        base64.b64encode(buf.read()).decode('utf-8')
        # Write to stdout
        print(img)
        plt.clf()

    plt.show = show

ensure_matplotlib_patch()
    
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
  imageOutput: true,
};
