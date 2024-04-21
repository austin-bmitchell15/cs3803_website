export type Submodule = {
    name: string,
    id: string,
    path: string,
    checked: boolean
}

export type Module = {
    title: string,
    submodules: Submodule[]
}

const MODULE_KEY: string = 'modules';

export function loadModuleStatus() : Module[] | null {
    if (localStorage.getItem(MODULE_KEY) == null) {
        localStorage.setItem(MODULE_KEY, JSON.stringify(tableOfContentsInit))
    }

    const savedModules:string | null = localStorage.getItem(MODULE_KEY)
    

    if (savedModules != null) {
        return JSON.parse(savedModules)
    } else {
        return savedModules
    }
}

export function saveSubmoduleStatus(id: string) {
    // TODO: make sure to revalidate / reload the table of contents value
    const modStatusRaw = loadModuleStatus()
    if (modStatusRaw == null) {
        return
    }

    const tableOfContents: Module[] = modStatusRaw
    console.log("hello: " + id)

    for (var i = 0; i < tableOfContents.length; i++) {
        for (var j  = 0; j < tableOfContents[i].submodules.length; j++) {
            if (tableOfContents[i].submodules[j].id == id) {
                console.log("found: ")
                tableOfContents[i].submodules[j].checked = true
                console.log(tableOfContents)
            }
        }
    }
    

    localStorage.setItem(MODULE_KEY, JSON.stringify(tableOfContents))
}

export const tableOfContentsInit = [
    {
        "title": "Introduction and Packages",
        "submodules": [
            {
                "name": "Introduction",
                "id": "intro",
                "path": "/introduction/introduction",
                "checked": false
            },
            {
                "name": "Installation and Package Management",
                "id": "installation",
                "path": "/introduction/installation",
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
            },
            {
                "name": "Numpy Quiz",
                "id": "numpy_quiz",
                "path": "/numpy/quiz",
                "checked": false
            }
        ]
    },
    {
        "title": "Pandas",
        "submodules": [
            {
                "name": "Overview",
                "id": "pandas_overview",
                "path": "/pandas/overview",
                "checked": false
            },
            {
                "name": "Installation and Data Import",
                "id": "pandas_import",
                "path": "/pandas/import",
                "checked": false
            },
            {
                "name": "Data Frame",
                "id": "pandas_dataframe",
                "path": "/pandas/dataframe",
                "checked": false
            },
            {
                "name": "Pivot Tables",
                "id": "pandas_pivottables",
                "path": "/pandas/pivottables",
                "checked": false
            },
            {
                "name": "Pandas Quiz",
                "id": "pandas_quiz",
                "path": "/pandas/quiz",
                checked: false
            }
        ]
    },
    {
        "title": "Graphing",
        "submodules": [
            {
                "name": "Overview",
                "id": "graphing_overview",
                "path": "/graphing/overview",
                "checked": false
            },
            {
                "name": "Line Graphs",
                "id": "graphing_linegraphs",
                "path": "/graphing/linegraphs",
                "checked": false
            },
            {
                "name": "Histogram",
                "id": "graphing_histogram",
                "path": "/graphing/histogram",
                "checked": false
            },
            {
                "name": "Scatter Plot",
                "id": "graphing_scatter",
                "path": "/graphing/scatter",
                "checked": false
            },
            
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
