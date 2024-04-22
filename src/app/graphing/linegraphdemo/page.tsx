"use client";
import CodeComponent from "@/components/CodeComponent/Code";
import CodeLesson from "@/components/CodeComponent/CodeLesson";
import SubmoduleContainer from "@/components/SubmoduleContainer";
import { LinegraphsDemoSnippets } from "@/data/Graphing/LinegraphsDemoSnippets";
import { useState } from "react";

export default function NumpyCode() {
  const snippet = LinegraphsDemoSnippets;

  return <CodeLesson snippet={snippet} />;
}
