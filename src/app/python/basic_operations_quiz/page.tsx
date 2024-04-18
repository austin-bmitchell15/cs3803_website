"use client"

import React, { useState } from 'react'
import QuizComponent from '@/components/Quiz'
import { QuizType } from '@/services/QuizTypes'
import Quiz from '@/components/Quiz'
import { Button } from 'flowbite-react'

const string1 = `
words = 'Hello World'
for letter in words:
    print(letter)
`

const quiz: QuizType = [
    {
        question:  "How many times does this loop run?",
        codeSnippet: string1,
        options: ["SyntaxError", "11", "Infinite Loop", "2"],
        answerOption: 1,
        explanation: `The “range(10)” function returns a sequence of numbers, starting from 0, and increments by 1 (by default), and stops before the specified number. This for loop will loop through this sequence, set “num” to the current number of the loop, and print it out to the console. `
    },
    {
        question:  "How many times will this loop run?",
        codeSnippet: string1,
        options: ["SyntaxError", "11", "Infinite Loop", "2"],
        answerOption: 1,
        explanation: `The “range(10)” function returns a sequence of numbers, starting from 0, and increments by 1 (by default), and stops before the specified number. This for loop will loop through this sequence, set “num” to the current number of the loop, and print it out to the console. `
    },
    {
        question:  "How many times loop run?",
        codeSnippet: string1,
        options: ["SyntaxError", "11", "Infinite Loop", "2"],
        answerOption: 1,
        explanation: `The “range(10)” function returns a sequence of numbers, starting from 0, and increments by 1 (by default), and stops before the specified number. This for loop will loop through this sequence, set “num” to the current number of the loop, and print it out to the console. `
    }
]

export default function BasicOperationsQuiz() {

  return (
    <div className="ml-5 mt-5">
        <h1 className="text-5xl">Basic Operation Quiz</h1> 
        
        <Quiz quiz={quiz} moduleId='python_quiz'/>
    </div>
  )
}
