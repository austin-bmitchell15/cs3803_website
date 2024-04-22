"use client";

import React, { useState } from "react";
import QuizComponent from "@/components/Quiz";
import { QuizType } from "@/services/QuizTypes";
import Quiz from "@/components/Quiz";
import { Button } from "flowbite-react";
import { generateRandomNumbers } from "@/services/Random";

const quiz: QuizType = [
  {
    question:
      "Which of the following is the most efficient way to define a numpy array of shape of [224, 224, 3] filled with 1's?",
    options: [
      "np.ones(224, 224, 3)",
      "np.ones((224, 224, 3)",
      "np.zeros((224, 224, 3)",
      "np.array([[[1 for _ in range(3)] for _ in range(224)] for _ in range(224)])",
    ],
    answerOption: 1,
    explanation: `np.ones is an easy method to define an array filled with nums. You specify the expected shape using a tuple as the paramter to the method.`,
  },
  {
    question:
      "How can you concatenate two NumPy arrays along the rows (vertically) in Python?",
    options: [
      "np.concatenate((arr1, arr2), axis=0)",
      "np.concatenate((arr1, arr2), axis=1)",
      "np.hstack((arr1, arr2))",
      "np.vstack(arr1, arr2)",
    ],
    answerOption: 0,
    explanation: `Concentanting along the x axis will ensure that the stacking is done vertically. Although you can use vstack, the parameters are incorrect because the arrays should be nested in an array, not just listed as parameters.`,
  },
  {
    question:
      "Given an array with the shape (100, 100, 3), how can you rearrange its axes to reshape it into an array with the shape (3, 100, 100) without altering the data itself? ",
    options: [
      "np.transpose(data, (0, 1, 2))",
      "np.reshape(data, (3, 100, 100))",
      "np.swapaxes(data, 0, 2)",
      "np.transpose(data, (2, 1, 0))",
    ],
    answerOption: 3,
    explanation: `Although reshape and swapaxes seem to work, they do not ensure that the data itself is kept in the same expected structure. This is a common occurences when reading image data and its important you remember the use of the transpose function.`,
  },
  {
    question: "How do you compute the determinant of a matrix in NumPy?",
    options: [
      "np.linalg.inv(matrix)",
      "np.linalg.eig(matrix)",
      "np.linalg.det(matrix)",
      "np.linalg.trace(matrix)",
    ],
    answerOption: 2,
    explanation: `".det" is the function you can use to compute the determinant of a matrix.`,
  },
  {
    question: "What is the correct way to create a numpy array? ",
    options: [
      "np.object([1, 2, 3, 4, 5])",
      "np.array([1, 2, 3, 4, 5])",
      "np.createarray([1, 2, 3, 4, 5])",
      "np.arr([1, 2, 3, 4, 5])",
    ],
    answerOption: 1,
    explanation: `Even if the data structure is 2d or 3d, numpy still calls it an array, and you should create it using "np.array([...])".`,
  },
  {
    question: "Which of the following arrays is a two dimensional array?",
    options: ["[[1, 2, 3,], [4, 5, 6]] ", "[1, 2, 3, 4, 5] ", "5", "[1, 2, 3]"],
    answerOption: 0,
    explanation: `A useful heuristic for determining how deep your array's dimensions are is by inspecting the number of "[" characters at the start of the array definition`,
  },
  {
    question:
      "What is the correct way to print out the fifth item in an array, assuming the array is stored in the variable 'a'?",
    options: ["print(a[5])", "print(a[2])", "Print(a[4])", "print(a[0])"],
    answerOption: 2,
    explanation:
      "Numpy arrays are 0-indexed, meaning you start counting at zero. If you are trying to get the n-th element, you should index to n - 1.",
  },
  {
    question:
      "What is the correct way to print out the number 4 from the array below?",
    codeSnippet: "a = np.array([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]])",
    options: [
      "print(a[1, 3])",
      "print(a[1, 2])",
      "print(a[0, 2])",
      "print(a[0, 3])",
    ],
    answerOption: 3,
    explanation:
      "When indexing a 2d array, you first go to the i-th row and then the j-th column. Because 4 is in the first row and the 4th element, you should do [0, 3]. It is also possible to index by doing [0][3].",
  },
  {
    question:
      "What is the correct way to print out the numbers [2, 3, 4] from the array below?",
    codeSnippet: `a = np.array([1, 2, 3 , 4, 5, 6, 7, 8, 9])`,
    options: [
      "print(a[1:3])",
      "print(a[2:4])",
      "print(a[1:4])",
      "print(a[1:5])",
    ],
    answerOption: 2,
    explanation:
      "You can use the ':' operator to select values in between the indexes of i and j. Remember that value at the jth index is not included, but the ith index value is included.",
  },
  {
    question:
      "What is the correct way to print out the seventh item in an array, assuming the array is stored in the variable 'a'?",
    options: ["print(a[6])", "print(a[7])", "print(a[8])", "print(a[9])"],
    answerOption: 0,
    explanation:
      "Remember that to access the i-th value, you must index for the i - 1 item because numpy is 0-indexed.",
  },
  {
    question: `What is the correct way to print out the number 10 from the array below?`,
    codeSnippet: `a = np.array([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]])`,
    options: [
      "print(a[0, 4])",
      "print(a[1, 4])",
      "print(a[0, 3])",
      "print(a[1, 3])",
    ],
    answerOption: 1,
    explanation: `You must select the second row and the 5th element. This is done by indexing 0 and 4.`,
  },
  {
    question:
      "What is the correct way to print out the numbers [6, 7, 8, 9] from the array below?",

    codeSnippet: "a = np.array([1, 2, 3 , 4, 5, 6, 7, 8, 9])",
    options: [
      "print(a[4:7])",
      "print(a[5:9])",
      "print(a[6:9])",
      "print(a[5:8])",
    ],
    answerOption: 3,
    explanation:
      "You want to select the values between the 6th value and the 9th value. This work works with the selecting n - 1 using, so indexing 5 to 8. Remember the last index isn't included.",
  },
  {
    question:
      "Which NumPy function is used to find the maximum value in an array?",
    options: [`np.max()`, `np.maximum()`, `np.argmax()`, "np.amax() "],
    answerOption: 0,
    explanation: `'np.maximum()' and 'np.amax()' are not valid commands. 'np.argmax()' returns the index of the maximum value. 'np.maximum()' returns the largest value in the array.`,
  },
  {
    question: "How do you import NumPy in Python",
    options: [
      "import np",
      "from numpy import *",
      "import numpy as np",
      "All of the above",
    ],
    answerOption: 2,
    explanation: `The defacto convention is importing numpy as np so that everywhere in your code you can write 'np' instead of 'numpy'`,
  },
];

export default function NumpyQuiz() {
  let indices: number[] = generateRandomNumbers(quiz.length, 3);
  const filteredQuiz = quiz.filter((_, i) => indices.includes(i));
  return (
    <div className="ml-5 mt-5">
      <h1 className="text-5xl">Numpy Quiz</h1>

      <Quiz quiz={filteredQuiz} moduleId="numpy_quiz" />
    </div>
  );
}
