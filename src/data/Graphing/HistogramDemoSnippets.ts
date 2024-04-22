import { Snippet } from "@/utils/types";

export const HistogramDemoSnippets : Snippet = {
    pythonTemplate: `import os
import base64
from io import BytesIO
os.environ['MPLBACKEND'] = 'AGG'
import pandas as pd
import matplotlib.pyplot as plt

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
data.hist(column="Close")
plt.title('Histogram of Closing Prices for Apple Stocks')
plt.xlabel('Closing Prices')
plt.ylabel('Frequency')

plt.show()`,
    prompt: `Here is an example of the histogram that was presented in the previous video`,
    pythonExampleCode: undefined,
    expectedOutput: undefined,
    imageOutput: true,
}