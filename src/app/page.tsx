"use client"

import Image from "next/image";
import { Navbar } from "flowbite-react";
import CustomSidebar from "@/components/CustomSidebar";
import { saveSubmoduleStatus } from "@/services/ModuleStatusStorage";


export default function Home() {
  function func() {
    saveSubmoduleStatus('jupyter_purpose')
  }
  return (
    <>
      <h1>Test</h1>
      <button onClick={func}>Fun</button>
    </>
  );
}
