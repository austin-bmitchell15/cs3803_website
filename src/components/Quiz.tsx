"use client"

import React, { useState } from 'react'
import { QnAType, QuizType } from '@/services/QuizTypes'
import { Badge, Button, Card } from "flowbite-react";

export default function QuizComponent({ quiz }: { quiz: QuizType, }) {
  const [checkedMode, setCheckedMode] = useState<boolean>(false)


  return (
    <div>
      <Button className="mt-5" color="warning" onClick={() => setCheckedMode(true)}>Check Answers</Button>
      <div className="w-full">
        <div className="flex flex-wrap">
          {quiz.map((q, i) => (
            <div className="my-5 ml-4">
              <Question question={q} key={'question_' + i} checkedMode={checkedMode} />
            </div>
          ))}

        </div>

      </div>
  </div>
  )
}

function Question({ question, checkedMode }: { question: QnAType, checkedMode: boolean }) {
  const [selectedOption, setSelectedOption] = useState<number>(-1)

  return (
    <Card className="max-w-sm max-h-sm max-h-90 overflow-auto p-4">
      {checkedMode && question.answerOption != selectedOption && 
        <div className="flex flex-wrap gap-2">
          <Badge color="failure">Incorrect</Badge>
        </div>
      }
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {question.question} 
      </h5>

      <pre className="font-normal bg-gray-500 text-white-700 pb-5 pl-4 dark:text-gray-400">
        {question.codeSnippet}
      </pre>

      {(question.explanation && checkedMode) && 
        <p className={"text-gray-700"}><p className="font-bold">Explanation: </p>{question.explanation}</p>
      }


      <div>
        {question.options.map((opt, i) => (
          <Button key={question + "_" + i} className="my-1" size="lg" color={
            (checkedMode ? (i == question.answerOption ? "success" : (i == selectedOption ? "failure" : "light") ) : (i == selectedOption ? "blue":  "light"))
            // (selectedOption == i ? (checkedMode ? (selectedOption == question.answerOption ? "green" : "red") : "blue"): (i == question.answerOption "green" : ?"gray") )
          } onClick={() => setSelectedOption(i)}>{opt}</Button>
        ))}
      </div>
    </Card>
  )

}
