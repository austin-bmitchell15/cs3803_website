"use client";
import CodeComponent from "@/components/CodeComponent/Code";
import CodeLesson from "@/components/CodeComponent/CodeLesson";
import SubmoduleContainer from "@/components/SubmoduleContainer";
import { PandaSnippets } from "@/data/Pandas/PandaSnippets";
import { useState } from "react";

export default function PandasCode() {
  const snippet = PandaSnippets;

  return <CodeLesson snippet={snippet} moduleId="pandas_coding_lesson"/>;
}
