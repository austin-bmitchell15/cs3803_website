import CodeComponent from "@/components/CodeComponent/Code";
import { AAPLData } from "@/data/APPLE";
import { Snippet } from "@/utils/types";
import { Card } from "flowbite-react";

interface CodeLessonProps {
  snippet: Snippet;
}

export default function CodeLesson({ snippet }: CodeLessonProps) {
  const packages = {
    official: ["numpy", "pandas", "matplotlib"],
  };

  return (
    <div className="flex justify-between">
      <div className="flex flex-col w-2/3">
        <Prompt text={snippet.prompt} />
      </div>
      <div className="w-2/3 flex justify-center">
        <CodeComponent
          code={snippet.pythonTemplate}
          packages={packages}
          data={AAPLData}
          imageOutput={snippet.imageOutput}
        />
      </div>
    </div>
  );
}

function Prompt({ text }: { text: string }) {
  return (
    <Card href="#" className="max-w-sm max-h-80 mr-20">
      <h5 className="text-normal font-bold tracking-tight text-gray-900 dark:text-white">
        Task
      </h5>
      <p className="font-3xl  text-gray-700 dark:text-gray-400">{text}</p>
    </Card>
  );
}
