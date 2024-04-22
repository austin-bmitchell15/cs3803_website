"use client";
import CodeComponent from "@/components/CodeComponent/Code";
import { AAPLData } from "@/data/APPLE";
import { saveSubmoduleStatus } from "@/services/ModuleStatusStorage";
import { Snippet } from "@/utils/types";
import { Button, Card } from "flowbite-react";
import { useState } from "react";

interface CodeLessonProps {
  snippet: Snippet;
  moduleId: string;
}

export default function CodeLesson({ snippet, moduleId }: CodeLessonProps) {
  const [numberOfRuns, setNumberOfRuns] = useState<number>(0);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [stdout, setStdout] = useState<string>("");
  const [stderr, setStderr] = useState<string>("");

  const packages = {
    official: ["numpy", "pandas", "matplotlib"],
  };

  

  return (
    <div className="flex justify-center h-full">
      <div className="flex flex-col h-full">
        {/* Prompt and its additional content */}
        <div className="flex flex-col h-full p-4 space-y-4">
          <Prompt text={snippet.prompt} />
          {snippet.expectedOutput && (
            <ExampleOutput text={snippet.expectedOutput} />
          )}
          {numberOfRuns >= 5 && snippet.pythonExampleCode && (
            <Button
              className="text-black bg-graybg"
              onClick={() => setShowAnswer((prevState) => !prevState)}
            >
              {showAnswer ? "Hide Answer" : "Reveal Answer"}
            </Button>
          )}
          {snippet.pythonExampleCode && (
            <RevealedAnswer
              text={snippet.pythonExampleCode}
              isOpen={showAnswer}
            />
          )}
          {snippet.imageOutput && (
            <ImageOutput stdout={stdout} stderr={stderr} />
          )}
        </div>
      </div>
      <div className="flex flex-col p-4 space-y-4">
        <h3 className="text-right font-bold">Attempt #{numberOfRuns}</h3>
        <CodeComponent
          code={snippet.pythonTemplate}
          packages={packages}
          data={AAPLData}
          imageOutput={snippet.imageOutput}
          numberOfRuns={numberOfRuns}
          setNumberOfRuns={setNumberOfRuns}
          setStdout={setStdout}
          setStderr={setStderr}
          expectedOutput={snippet.expectedOutput}
          moduleId={moduleId}
        />
      </div>
    </div>
  );
}

function Prompt({ text }: { text: string }) {
  return (
    <Card className="max-w-lg max-h-80 mr-20">
      <h5 className="text-normal font-bold tracking-tight text-gray-900 dark:text-white">
        Task
      </h5>
      <p className="font-3xl  text-gray-700 dark:text-gray-400">{text}</p>
    </Card>
  );
}

function ExampleOutput({ text }: { text: string }) {
  return (
    <Card className="max-h-80 mr-20">
      <h5 className="text-normal font-bold tracking-tight text-gray-900 dark:text-white">
        Expected Output
      </h5>
      <pre className="mt-4 text-left text-black">
        <code>{text}</code>
      </pre>
    </Card>
  );
}

function RevealedAnswer({ text, isOpen }: { text: string; isOpen: boolean }) {
  return (
    <>
      {isOpen && (
        <Card className="p-2">
          <h5 className="text-normal font-bold tracking-tight text-gray-900 dark:text-white">
            Answer
          </h5>
          <pre className="mt-4 text-left text-black">
            <code>{text}</code>
          </pre>
        </Card>
      )}
    </>
  );
}

function ImageOutput({ stdout, stderr }: { stdout: string; stderr: string }) {
  return (
    <>
      <h2 className="font-bold">Output:</h2>
      {!stderr ? (
        stdout && stdout.startsWith("data:image/png;base64,") ? (
          <img src={stdout} className="mt-4" />
        ) : (
          <h4>No image yet. Click run to see the result.</h4>
        )
      ) : (
        <pre className="mt-4 text-left">
          <code className="text-red-500">{stderr}</code>
        </pre>
      )}
    </>
  );
}
