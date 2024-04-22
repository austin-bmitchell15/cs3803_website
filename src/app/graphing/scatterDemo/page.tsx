"use client";
import CodeComponent from "@/components/CodeComponent/Code";
import CodeLesson from "@/components/CodeComponent/CodeLesson";
import SubmoduleContainer from "@/components/SubmoduleContainer";
import { useState } from "react";
import { ScatterDemoSnippets } from "@/data/Graphing/ScatterDemoSnippets";

export default function NumpyCode() {
  const snippet = ScatterDemoSnippets;

  return <CodeLesson snippet={snippet} moduleId="graphing_scatterdemo"/>;
}
