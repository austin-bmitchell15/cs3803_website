"use client";

import React, { PropsWithChildren, useEffect, useState } from "react";
import { Button } from "flowbite-react";
import { loadModuleStatus, Module } from "@/services/ModuleStatusStorage";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function SubmoduleContainer(props: { children: any }) {
  const { children } = props;

  // const [tableOfContents, setTableOfContents] = useState<Module[]>([])
  const [submodulePathOrdering, setSubmodulePathOrdering] = useState<string[]>(
    [],
  );
  const [submoduleTitleList, setSubmoduleTitleList] = useState<string[]>([]);
  const [currentModuleIndex, setCurrentModuleIndex] = useState<number>(-2);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const tableOfContents: Module[] | null = loadModuleStatus();
    if (tableOfContents != null) {
      var submodulePaths = [];
      var submoduleTitles = [];
      for (var i = 0; i < tableOfContents.length; i++) {
        for (var j = 0; j < tableOfContents[i].submodules.length; j++) {
          submodulePaths.push(tableOfContents[i].submodules[j].path);
          submoduleTitles.push(tableOfContents[i].submodules[j].name);
        }
      }

      setSubmodulePathOrdering(submodulePaths);
      setSubmoduleTitleList(submoduleTitles);

      setCurrentModuleIndex(submodulePaths.indexOf(pathname));
    }
  }, []);

  function routerPush(newIndex: number) {
    setCurrentModuleIndex(newIndex);
    router.push(submodulePathOrdering[newIndex]);
  }

  return (
    <div className="flex flex-col flex-grow items-center justify-between p-4 border rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">
        {submoduleTitleList[currentModuleIndex]}
      </h2>
      <div className="flex-1">{children}</div>
      <div className="flex justify-between w-full mt-4">
        <Button
          color="gray"
          onClick={() => routerPush(currentModuleIndex - 1)}
          disabled={currentModuleIndex - 1 < 0}
        >
          Prev
        </Button>
        <Button
          color="gray"
          onClick={() => routerPush(currentModuleIndex + 1)}
          disabled={currentModuleIndex + 1 >= submodulePathOrdering.length}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
