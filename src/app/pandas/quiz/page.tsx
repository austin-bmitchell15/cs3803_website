"use client"

import React from 'react'
import { QuizType } from '@/services/QuizTypes'
import Quiz from '@/components/Quiz'

const string1 = `
words = 'Hello World'
for letter in words:
    print(letter)
`

const quiz: QuizType = [
    {
        question:  "Which of the following methods in pandas is used to drop rows with missing values from a DataFrame?",
        options: ["dropna()", "fillna() ", "isnull()", "drop()"],
        answerOption: 0,
        explanation: `drop() will drop a specific row. fillna() and isnull() will not drop the rows but instead modifying or tell you they exist. dropna() will drop any rows with the NaN's in the dataframe.`
    },
    {
        question:  "T/F: Pandas cannot export to Microsoft Excel because its of how different the model is",
        options: ["True", "False"],
        answerOption: 0,
        explanation: `Although excel data is usually hard to modify in code, pandas is able to import and export dataframes to Excel, although it does require some special Python packages.`
    },
    {
        question:  "Which of the following options does not represent a method for obtaining a columnar statistical description of a DataFrame in pandas?",
        options: ["df.describe()", "df.mean()", "df.mode()", "df.std()"],
        answerOption: 2,
        explanation: `Although all of these give columnar descriptions of the statistical data, they do not support mode operations.`
    }
]

export default function PandasQuiz() {

  return (
    <div className="ml-5 mt-5">
        <h1 className="text-5xl">Pandas Quiz</h1> 
        
        <Quiz quiz={quiz} moduleId='pandas_quiz'/>
    </div>
  )
}
