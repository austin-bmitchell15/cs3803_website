import { Snippet } from "@/utils/types";

export const NumpySnippets: Snippet = {
  prompt: `Given this 2D array, print out the numbers “7, 8, 9” in one line.`,
  pythonTemplate: `import numpy as np
arr = np.array([[1, 2, 3, 4, 5], 
                [6, 7, 8, 9, 10]])

#User Code Starts here


#User Code Ends here`,
  pythonExampleCode: `import numpy as np

arr = np.array([[1, 2, 3, 4, 5], 
                [6, 7, 8, 9, 10]])

#User Code Starts here

print(arr[1, 1:4])

#User Code Ends here`,
  expectedOutput: `[7 8 9]`,
  imageOutput: false,
};
