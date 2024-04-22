"use client";
import CodeComponent from "@/components/CodeComponent/Code";
import CodeLesson from "@/components/CodeComponent/CodeLesson";
import SubmoduleContainer from "@/components/SubmoduleContainer";
import { NumpySnippets } from "@/data/Numpy/NumpySnippets";
import { PandaSnippets } from "@/data/Pandas/PandaSnippets";
import { useState } from "react";

export default function NumpyCode() {
  const snippet = NumpySnippets;

  return <CodeLesson snippet={snippet} moduleId="numpy_coding_lesson" />;
}
