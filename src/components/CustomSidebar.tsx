'use client';
import { CustomFlowbiteTheme, Sidebar, Checkbox, Label } from "flowbite-react";
import { useEffect, useState } from "react";
import CheckIcon from '@mui/icons-material/Check';
import { loadModuleStatus, Module, Submodule } from "@/services/ModuleStatusStorage";
import { usePathname } from 'next/navigation'


export default function CustomSidebar() {

    const [introductionCompleteState, setIntroductionCompleteState] = useState(false)

    const [tableOfContents, setTableOfContents] = useState<Module[]>()

    const currentPath = usePathname()

    useEffect( () => {
        setIntroductionCompleteState(localStorage.getItem("introduction") == 'true' || false)
        const modules: Module[] | null = loadModuleStatus()
        if (modules != null) {
          setTableOfContents(modules)
        }
    }, [])

    return (
        <Sidebar className="h-full min-h-full w-auto">
            
          <Sidebar.Items>
          
            <Sidebar.ItemGroup>
            <Sidebar.Item className="mb-4" href="/">
              TABLE OF CONTENTS
            </Sidebar.Item>
            </Sidebar.ItemGroup>

            {/* Introduction */}
            {
              tableOfContents && tableOfContents.map(module => {
                return (
                <Sidebar.ItemGroup key={module.title}>
                  <Sidebar.Item className="mb-3">
                    {module.title}
                  </Sidebar.Item>
                  {module.submodules.map(submodule => {
                    return (
                      <Sidebar.Item href={submodule.path} key={submodule.id}  active={submodule.path == currentPath} >
                        <Checkbox checked={submodule.checked} disabled className="mr-2"  id={submodule.id}/> 
                        <Label htmlFor={submodule.id}>{submodule.name}</Label>
                      </Sidebar.Item>
                    )
                  })}
                  
                </Sidebar.ItemGroup>
                )
              })
            }
          </Sidebar.Items>
        </Sidebar>
      );
}