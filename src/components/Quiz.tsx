"use client"

import React, { useEffect, useState } from 'react'
import { QnAType, QuizType } from '@/services/QuizTypes'
import { Button, Card, Label, ListGroup, Modal, Radio } from "flowbite-react";
import { Module, loadModuleStatus, saveSubmoduleStatus } from '@/services/ModuleStatusStorage';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { CopyBlock, paraisoLight } from 'react-code-blocks';


const REQUIRED_SCORE: number = 0.8

export default function QuizComponent({ quiz, moduleId }: { quiz: QuizType, moduleId: string}) {
  const [checkedMode, setCheckedMode] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState(Array.from({length: quiz.length}, () => -1))
  const [viewedQuestionIndex, setViewedQuestionIndex] = useState(0)

  const updateIndex = (i: number, newValue: number) => {
    const newArray = selectedOption.slice();
    newArray[i] = newValue;
    setSelectedOption(newArray);
  };
  
  useEffect(() => {
    if (checkedMode == true) {

      setShowModal(true)
    }
  }, [checkedMode])

  const retakeQuiz  = () => {
    setShowModal(false)
    // router.refresh()
    window.location.reload()
  }

  return (
    <div>
    <div className="flex mt-7 w-full">
    <div className="w-1/3">
      <ListGroup className="w-60">
        {quiz.map((q, i) => {
          return (
          <ListGroup.Item key={i} className={checkedMode ? (selectedOption[i] == q.answerOption ? "text-green-700": "text-red-500") : ""} active={i == viewedQuestionIndex} onClick={() => setViewedQuestionIndex(i)}>Question {i}</ListGroup.Item>)
        })}
      </ListGroup>
      {checkedMode ? 
      <Button className="mt-4" color="warning" onClick={retakeQuiz}>Redo</Button>
      :
      <Button className="mt-4" color="warning" onClick={() => setCheckedMode(true)}>Submit Quiz</Button>
      }
    </div>
    <div className="w-2/3 ml-10 mr-5">
      {!checkedMode 
        ? <QuestionView question={quiz[viewedQuestionIndex]} selectOption={(option:number) => updateIndex(viewedQuestionIndex, option)} selectedOption={selectedOption[viewedQuestionIndex]}/>
        : <SubmittedQuestionView question={quiz[viewedQuestionIndex]} selectedAnswer={selectedOption[viewedQuestionIndex]} />
      }
    </div>
    </div>
    <div>
      {showModal && <ModalComponent 
                      setShowModal={setShowModal} 
                      optionsAnswered={selectedOption} 
                      correctAnswers={quiz.map(q => q.answerOption)} 
                      moduleId={moduleId}/> }
    </div>
  </div>
  )
}

function ModalComponent({setShowModal, optionsAnswered, correctAnswers, moduleId} : {setShowModal: any, optionsAnswered: number[], correctAnswers: number[], moduleId: string}) {
  
  var n_correct = 0;

  for (var i = 0; i < optionsAnswered.length; i++) {
    if (optionsAnswered[i] == correctAnswers[i])
      n_correct += 1
  }

  const router = useRouter()
  const pathname = usePathname()

  const passed = n_correct / correctAnswers.length > REQUIRED_SCORE

  if (passed) {
    saveSubmoduleStatus(moduleId)
  }
  const retakeQuiz  = () => {
    setShowModal(false)
    // router.refresh()
    window.location.reload()
  }

  const [nextPath, setNextPath] = useState<string>("")
  const [prevPath, setPrevPath] = useState<string>("")

  useEffect( () => {
    const tableOfContents: Module[] | null = loadModuleStatus()
    if (tableOfContents != null) {
        var submodulePaths = []
        for (var i = 0; i < tableOfContents.length; i++) {
            for (var j = 0; j < tableOfContents[i].submodules.length; j++) {
                submodulePaths.push(
                    tableOfContents[i].submodules[j].path
                )
            }
        }

        let currIndex: number = submodulePaths.indexOf(pathname)
        setNextPath(submodulePaths[currIndex  + 1])
        setPrevPath(submodulePaths[currIndex  - 1])
    }
    
    
}, [])


  return (
    <Modal show={true} onClose={() => setShowModal(false)}>
        <Modal.Header>Results</Modal.Header>
        <Modal.Body>
          
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          Your Score: {n_correct} / {correctAnswers.length}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button color={passed ? "light" : "failure"} onClick={retakeQuiz}>Try Again</Button>
          
          {passed ? 
            <Button color="success" onClick={() => router.push(nextPath)}>
              Next Lesson
            </Button>
            :
            <Button color="gray" onClick={() => router.push(prevPath)}>
              Back To Lesson
            </Button>
          }
        </Modal.Footer>
      </Modal>
  )
}

function QuestionView({question, selectOption, selectedOption}:{question: QnAType, selectOption: any, selectedOption: number}) {
  const handleRadioChange = (event: { target: { value: any; }; }) => {
    selectOption(event.target.value)
  }

  return (
    <Card className="max-w-5xl max-h-sm max-h-90 overflow-auto p-4">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {question.question} 
      </h5>

      { question.codeSnippet && 
        <CopyBlock text={question.codeSnippet} language='python' theme={paraisoLight}/>
      }


      <div>
      <fieldset className="flex max-w-md flex-col gap-4">
        {/* <legend className="mb-4">Choose your favorite country</legend> */}
        {question.options.map((opt, i) => (
          <div key={i} className="flex items-center gap-2">
            <Radio id={opt} key={i} name={question.question} value={i} checked={selectedOption == i} onChange={handleRadioChange}/>
            <Label htmlFor={opt}>{opt}</Label>
          </div>
        ))}
        
      </fieldset>
        
      </div>
    </Card>
  )
}

function SubmittedQuestionView({question, selectedAnswer} : {question: QnAType, selectedAnswer: number}) {
  var textColors = Array.from({length: question.options.length}, () => "text-gray-700")
  for (var i = 0; i < question.options.length; i++) {
    if (i == question.answerOption) {
      textColors[i] = "text-green-700"
    } else if (selectedAnswer == i) {
      textColors[i] = "text-red-700"
    } 
  }
  
  return (
      <Card className="max-w-5xl max-h-sm max-h-90 overflow-auto p-4">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {question.question} 
        </h5>
  
        { question.codeSnippet && <pre className="font-normal bg-gray-500 text-white-700 pb-5 pl-4 dark:text-gray-400">
          {question.codeSnippet}
        </pre> }
  
        <p className="px-2 text-gray-600">
        {question.explanation}
        </p>
        <div>
        <fieldset className="flex max-w-md flex-col gap-4">
          {/* <legend className="mb-4">Choose your favorite country</legend> */}
          {question.options.map((opt, i) => (
            <div key={i} className="flex items-center gap-2">
              <Radio id={opt} key={i} name={question.question} value={i} checked={selectedAnswer == i} disabled/>
              {/* {checkedMode ? ((i == question.answerOption) ? <p>Hwllo</p> : <p>Clapped</p>) : <p>COnfused</p>} */}
              <Label className={textColors[i]} htmlFor={opt}>{opt}</Label>
            </div>
          ))}
          
        </fieldset>
          
        </div>
      </Card>
  )
}
