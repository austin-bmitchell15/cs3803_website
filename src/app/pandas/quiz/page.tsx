"use client"

import React, { useState } from 'react'
import QuizComponent from '@/components/Quiz'
import { QuizType } from '@/services/QuizTypes'
import Quiz from '@/components/Quiz'

const quiz: QuizType = [
    {
        question:  "Which of the following is the most efficient way to define a numpy array of shape of [224, 224, 3] filled with 1's?",
        options: ["np.ones(224, 224, 3)", "np.ones((224, 224, 3)", "np.zeros((224, 224, 3)", "np.array([[[1 for _ in range(3)] for _ in range(224)] for _ in range(224)])"],
        answerOption: 1,
        explanation: `np.ones is an easy method to define an array filled with nums. You specify the expected shape using a tuple as the paramter to the method.`
    },
    {
        question:  "How can you concatenate two NumPy arrays along the rows (vertically) in Python?",
        options: ["np.concatenate((arr1, arr2), axis=0)", "np.concatenate((arr1, arr2), axis=1)", "np.hstack((arr1, arr2))", "np.vstack(arr1, arr2)"],
        answerOption: 0,
        explanation: `Concentanting along the x axis will ensure that the stacking is done vertically. Although you can use vstack, the parameters are incorrect because the arrays should be nested in an array, not just listed as parameters.`
    },
    {
        question:  "Given an array with the shape (100, 100, 3), how can you rearrange its axes to reshape it into an array with the shape (3, 100, 100) without altering the data itself? ",
        options: ["np.transpose(data, (0, 1, 2))", "np.reshape(data, (3, 100, 100))", "np.swapaxes(data, 0, 2)", "np.transpose(data, (2, 1, 0))"],
        answerOption: 3,
        explanation: `Although reshape and swapaxes seem to work, they do not ensure that the data itself is kept in the same expected structure. This is a common occurences when reading image data and its important you remember the use of the transpose function.`
    },
    {
        question:  "How do you compute the determinant of a matrix in NumPy?",
        options: ["np.linalg.inv(matrix)", "np.linalg.eig(matrix)", "np.linalg.det(matrix)", "np.linalg.trace(matrix)"],
        answerOption: 2,
        explanation: `".det" is the function you can use to compute the determinant of a matrix.`
    }
]

export default function NumpyQuiz() {

  return (
    <div className="ml-5 mt-5">
        <h1 className="text-5xl">Numpy Quiz</h1> 
        
        <Quiz quiz={quiz} moduleId='numpy_quiz'/>
    </div>
  )
}
