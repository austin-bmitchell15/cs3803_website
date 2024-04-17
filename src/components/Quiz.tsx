"use client"

import React, { useEffect, useState } from 'react'
import { QnAType, QuizType } from '@/services/QuizTypes'
import { Badge, Button, Card, Modal } from "flowbite-react";

const REQUIRED_SCORE: number = 0.8

export default function QuizComponent({ quiz }: { quiz: QuizType, }) {
  const [checkedMode, setCheckedMode] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false);
  const [questionAnsweredCorrect, setQuestionAnsweredCorrect] = useState(Array.from({length: quiz.length}, () => false))

  const updateIndex = (i: number, newValue: boolean) => {
    const newArray = questionAnsweredCorrect.slice();
    newArray[i] = newValue;
    setQuestionAnsweredCorrect(newArray);
  };
  
  useEffect(() => {
    if (checkedMode == true) {

      setShowModal(true)
    }
  }, [checkedMode])

  return (
    <div>
      <Button className="mt-5" color="warning" onClick={() => setCheckedMode(true)}>Check Answers</Button>
      <div className="w-full">
        <div className="flex flex-wrap">
          {quiz.map((q, i) => (
            <div className="my-5 ml-4">
              <Question question={q} key={'question_' + i} checkedMode={checkedMode} markCorrectness={(correctnessStatus) => updateIndex(i, correctnessStatus)} />
            </div>
          ))}

        </div>

      </div>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        {/* <Modal.Header>Your Score: {questionAnsweredCorrect.filter(Boolean).length} / {questionAnsweredCorrect.length}</Modal.Header> */}
        <Modal.Header>Results</Modal.Header>
        <Modal.Body>
          {/* <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
              companies around the world are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
              to ensure a common set of data rights in the European Union. It requires organizations to notify users as
              soon as possible of high-risk data breaches that could personally affect them.
            </p>
          </div> */}
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          Your Score: {questionAnsweredCorrect.filter(a => a == true).length} / {questionAnsweredCorrect.length}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button color="light" onClick={() => setShowModal(false)}>Try Again</Button>
          
          {questionAnsweredCorrect.filter(Boolean).length / questionAnsweredCorrect.length  > REQUIRED_SCORE ? 
            <Button color="success" onClick={() => setShowModal(false)}>
              Next Lesson
            </Button>
            :
            <Button color="gray" onClick={() => setShowModal(false)}>
              Back To Lesson
            </Button>
          }
        </Modal.Footer>
      </Modal>
  </div>
  )
}

function Question({ question, checkedMode, markCorrectness }: { question: QnAType, checkedMode: boolean, markCorrectness: any }) {
  const [selectedOption, setSelectedOption] = useState<number>(-1)

  useEffect(() => {
    markCorrectness(selectedOption == question.answerOption)
  }, [selectedOption])

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
