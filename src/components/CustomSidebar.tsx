'use client';
import { CustomFlowbiteTheme, Sidebar, Checkbox, Label } from "flowbite-react";
import { useEffect, useState } from "react";
import CheckIcon from '@mui/icons-material/Check';


const tableOfContents = {
  "modules": [
    {
      "title": "Introduction and Packages",
      "submodules": [
        {
          "name": "Introduction",
          "id": "intro",
          "path": "/introduction/introduction",
          "checked": true
        },
        {
          "name": "Installation and Package Management",
          "id": "installation",
          "path": "/introduction/installation",
          "checked": true
        }
      ]
    },
    {
      "title": "Jupyter Notebook",
      "submodules": [
        {
          "name": "Purpose",
          "id": "jupyter_purpose",
          "path": "/jupyter/purpose",
          "checked": false
        },
        {
          "name": "Running Jupyter",
          "id": "jupyter_running",
          "path": "/jupyter/running",
          "checked": false
        },
        {
          "name": "Tour of the Interface",
          "id": "jupyter_tour",
          "path": "/jupyter/tour",
          "checked": false
        },
        {
          "name": "Common Pitfalls",
          "id": "jupyter_pitfalls",
          "path": "/jupyter/pitfalls",
          "checked": false
        }
      ]
    },
    {
      "title": "General Python",
      "submodules": [
        {
          "name": "Variables and Lists",
          "id": "python_variables",
          "path": "/python/variables",
          "checked": false
        },
        {
          "name": "Loops",
          "id": "python_loops",
          "path": "/python/loops",
          "checked": false
        },
        {
          "name": "Dictionaries",
          "id": "python_dictionaries",
          "path": "/python/dictionaries",
          "checked": false
        },
        {
          "name": "Functions",
          "id": "python_functions",
          "path": "/python/functions",
          "checked": false
        }
      ]
    },
    {
      "title": "Numpy",
      "submodules": [
        {
          "name": "Purpose",
          "id": "numpy_purpose",
          "path": "/numpy/purpose",
          "checked": false
        },
        {
          "name": "Linear Algebra Operations",
          "id": "numpy_linear",
          "path": "/numpy/linear",
          "checked": false
        },
        {
          "name": "Min, Max, Argmin, Argmax",
          "id": "numpy_min",
          "path": "/numpy/min",
          "checked": false
        },
        {
          "name": "Other Common Operations",
          "id": "numpy_other",
          "path": "/numpy/other",
          "checked": false
        }
      ]
    },
    {
      "title": "Pandas",
      "submodules": [
        {
          "name": "Purpose",
          "id": "pandas_purpose",
          "path": "/pandas/purpose",
          "checked": false
        },
        {
          "name": "Loading Data",
          "id": "pandas_loading",
          "path": "/pandas/loading",
          "checked": false
        },
        {
          "name": "Understanding Tabular Structure",
          "id": "pandas_tabular",
          "path": "/pandas/tabular",
          "checked": false
        },
        {
          "name": "Columnar Operations",
          "id": "numpy_columnar",
          "path": "/pandas/columnar",
          "checked": false
        },
        {
          "name": "Saving Data",
          "id": "pandas_saving",
          "path": "/pandas/saving",
          "checked": false
        }
      ]
    },
    {
      "title": "Graphing",
      "submodules": [
        {
          "name": "Overview of Matplotlib",
          "id": "graphing_overview",
          "path": "/graphing/overview",
          "checked": false
        },
        {
          "name": "Scatter Plot",
          "id": "graphing_scatter",
          "path": "/graphing/scatter",
          "checked": false
        },
        {
          "name": "3D Scatter Plot",
          "id": "graphing_3d",
          "path": "/graphing/3d",
          "checked": false
        },
        {
          "name": "Line Graph",
          "id": "graphing_linegraph",
          "path": "/graphing/line",
          "checked": false
        },
        {
          "name": "Histogram",
          "id": "graphing_histogram",
          "path": "/graphing/histogram",
          "checked": false
        },
        {
          "name": "Bar Graph",
          "id": "graphing_bar",
          "path": "/graphing/bar",
          "checked": false
        }
      ]
    },
    {
      "title": "Practical",
      "submodules": [
        {
          "name": "Data Collection",
          "id": "practical_collection",
          "path": "/practical/collection",
          "checked": false
        },
        {
          "name": "Cleaning Data",
          "id": "practical_cleaning",
          "path": "/practical/cleaning",
          "checked": false
        },
        {
          "name": "Data Analysis Demo - Outliers",
          "id": "practical_outliers",
          "path": "/practical/outliers",
          "checked": false
        },
        {
          "name": "Visualizations",
          "id": "practical_visualizations",
          "path": "/practical/visualizations",
          "checked": false
        }
      ]
    }

  ]
}


export default function CustomSidebar() {

    const [introductionCompleteState, setIntroductionCompleteState] = useState(false)

    useEffect( () => {
        setIntroductionCompleteState(localStorage.getItem("introduction") == 'true' || false)

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
              tableOfContents.modules.map(module => {
                return (
                <Sidebar.ItemGroup>
                  <Sidebar.Item className="mb-3">
                    {module.title}
                  </Sidebar.Item>
                  {module.submodules.map(submodule => {
                    return (
                      <Sidebar.Item href={submodule.path}>
                        <Checkbox checked={submodule.checked} disabled className="mr-2"  id={submodule.id} /> 
                        <Label htmlFor={submodule.id}>{submodule.name}</Label>
                      </Sidebar.Item>
                    )
                  })}
                  
                </Sidebar.ItemGroup>
                )
              })
            }
            <Sidebar.ItemGroup>
              <Sidebar.Item className="mb-3">
                Introduction and Packages
              </Sidebar.Item>
              <Sidebar.Item href="#">
                    <Checkbox checked disabled className="mr-2"  id="introduction" /> 
                    <Label htmlFor="introduction">Introduction</Label>
              </Sidebar.Item>
              <Sidebar.Item href="#">
                    <Checkbox disabled className="mr-2"  id="installation" /> 
                    <Label htmlFor="installation">Installation and Package Management</Label>
              </Sidebar.Item>

            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#">
                Introduction { introductionCompleteState ? <CheckIcon className="mb-1" /> : ""}
              </Sidebar.Item>
              <Sidebar.Collapse href="#" label="Package Management">
                <Sidebar.Item href="#">
                    Pip
                </Sidebar.Item>
                <Sidebar.Item href="#">
                    Brew
                </Sidebar.Item>
                <Sidebar.Item href="#">
                    Conda
                </Sidebar.Item>
                <Sidebar.Item href="#">
                    Mamba
                </Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Collapse href="#" label="Jupyter Notebook">
                <Sidebar.Item href="#">
                    Overview
                </Sidebar.Item>
                <Sidebar.Item href="#">
                    Usage
                </Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Collapse href="#" label="General Python">
                <Sidebar.Item href="#">
                    Import
                </Sidebar.Item>
                <Sidebar.Item href="#">
                    Variables
                </Sidebar.Item>
                <Sidebar.Item href="#">
                    Looping
                </Sidebar.Item>
                <Sidebar.Item href="#">
                    Lists
                </Sidebar.Item>
                <Sidebar.Item href="#">
                    Dictionaries
                </Sidebar.Item>
                <Sidebar.Item href="#">
                    Functions
                </Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Collapse href="#" label="Numpy">
                <Sidebar.Item href="#">
                    Overview
                </Sidebar.Item>
                <Sidebar.Item href="#">
                    Broadcasting
                </Sidebar.Item>
                <Sidebar.Item href="#">
                    Arrays and Shapes
                </Sidebar.Item>
                <Sidebar.Item href="#">
                    Useful Operations
                </Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Collapse href="#" label="Numpy">
                <Sidebar.Item href="#">
                    Overview
                </Sidebar.Item>
                <Sidebar.Item href="#">
                    Broadcasting
                </Sidebar.Item>
                <Sidebar.Item href="#">
                    Arrays and Shapes
                </Sidebar.Item>
                <Sidebar.Item href="#">
                    Useful Operations
                </Sidebar.Item>
              </Sidebar.Collapse>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      );
}