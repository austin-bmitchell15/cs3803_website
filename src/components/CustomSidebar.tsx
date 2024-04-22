"use client";
import { Sidebar, Checkbox, Label } from "flowbite-react";
import { useEffect, useState } from "react";
import {
  loadModuleStatus,
  Module,
  Submodule,
  tableOfContentsInit,
} from "@/services/ModuleStatusStorage";
import { usePathname } from "next/navigation";
import isEqual from "lodash.isequal";

export default function CustomSidebar() {
  const [tableOfContents, setTableOfContents] =
    useState<Module[]>(tableOfContentsInit);

  const currentPath = usePathname();

  useEffect(() => {
    const modules: Module[] | null = loadModuleStatus();
    if (modules != null) {
      setTableOfContents(modules);
    }
  }, []);

  if (typeof window !== 'undefined') {

    useEffect(() => {
      window.addEventListener("storage", () => {
        const modules: Module[] | null = loadModuleStatus();
        let equality: boolean = isEqual(modules, tableOfContents);
        if (modules != null && !equality) {
          setTableOfContents(modules);
        }
      });
    }, [window]);
  }


  return (
    <Sidebar className="h-full min-h-full w-auto">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item className="mb-4" href="/">
            PYTHON FOR ENGINEERS
          </Sidebar.Item>
        </Sidebar.ItemGroup>

        {/* Introduction */}
        {tableOfContents &&
          tableOfContents.map((module) => {
            return (
              <Sidebar.ItemGroup key={module.title}>
                <Sidebar.Item className="mb-3">{module.title}</Sidebar.Item>
                {module.submodules.map((submodule) => {
                  return (
                    <Sidebar.Item
                      href={submodule.path}
                      key={submodule.id}
                      active={submodule.path == currentPath}
                      className="text-sm font-medium text-gray-900 dark:text-white"
                    >
                      <Checkbox
                        checked={submodule.checked}
                        disabled
                        className="mr-2"
                        id={submodule.id}
                      />
                      {submodule.name}
                    </Sidebar.Item>
                  );
                })}
              </Sidebar.ItemGroup>
            );
          })}
      </Sidebar.Items>
    </Sidebar>
  );
}
