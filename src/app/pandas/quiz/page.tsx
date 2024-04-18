"use client"

import React from 'react'
import { QuizType } from '@/services/QuizTypes'
import Quiz from '@/components/Quiz'
import {generateRandomNumbers} from "@/services/Random"

const quiz: QuizType = [
    {
        question:  "Which of the following methods in pandas is used to drop rows with missing values from a DataFrame?",
        options: ["dropna()", "fillna() ", "isnull()", "drop()"],
        answerOption: 0,
        explanation: `drop() will drop a specific row. fillna() and isnull() will not drop the rows but instead modifying or tell you they exist. dropna() will drop any rows with the NaN's in the dataframe.`
    },
    {
        question:  "T/F: Pandas cannot export to Microsoft Excel because its of how different the model is",
        options: ["True", "False"],
        answerOption: 0,
        explanation: `Although excel data is usually hard to modify in code, pandas is able to import and export dataframes to Excel, although it does require some special Python packages.`
    },
    {
        question:  "Which of the following options does not represent a method for obtaining a columnar statistical description of a DataFrame in pandas?",
        options: ["df.describe()", "df.mean()", "df.mode()", "df.std()"],
        answerOption: 2,
        explanation: `Although all of these give columnar descriptions of the statistical data, they do not support mode operations.`
    },
    {
        question: "What is Pandas primarily used for?",
        options: ["Web development", "Data analysis and manipulation", "Machine learning", "Graphic design"],
        answerOption: 1,
        explanation: `Pandas is the primary tool for data analysis. Other tools like Flask and Pytorch are for web development and machine learning respectively. `
    },
    {
        question: "Which of the following data types can Python have?",
        options: [
            "Integers", "Floating Points", "Strings", "All of the above"
        ],
        answerOption: 3,
        explanation: `Python is extremely flexible and works with a multitude of different data types.`
    },
    {
        question: "What method is used to create a DataFrame from a dictionary in Pandas?",
        options: ["df_from_dict()", "create_dataframe()", "pd.DataFrame()", "make_dataframe()"],
        answerOption: 2,
        explanation: `The other functions do not exist. Pandas is commonly imported as 'pd' as you've seen in the video.`
    },
    {
        question: "What method is used to calculate the median of numerical columns in a DataFrame in Pandas?",
        options: ["median()", "calc_median()", "compute_median()", "get_median()"],
        answerOption: 0,
        explanation: `Taking the median of a column of dataframe is as simple as calling '.median()'. Similarly, you can take the mean, standard deviation, and other statistical operations. `
    },
    {
        question: "Which method is used to read a CSV file into a Pandas DataFrame?",
        options: ["read_csv()", "load_csv()", "import_csv()", "open_csv()"],
        answerOption: 0,
        explanation: `All importing of files is prefixed with 'read_' and the file type you are reading.`
    },
    {
        question: "How do you access the first 5 rows of a DataFrame in Pandas?",
        options: ["df.head()", "df.first()", "df.start()", "df.top()"],
        answerOption: 0,
        explanation: `Passing an integer 'n' to the head value will pick the first 'n' rows. The other options are not valid Pandas. `
    },
    {
        question: "Which method is used to drop missing values from a DataFrame in Pandas?",
        options: ["remove_missing()", "drop_null()", "dropna()", "clean_missing()"],
        answerOption: 2,
        explanation: `The other functions are not valid Pandas. The dropna() method is extremely useful when cleaning your messy dataset.`
    },
    {
        question: "How do you select a single column from a DataFrame in Pandas?",
        options: ["df.column('column_name')", "df.get('column_name')", "df.select_column('column_name')", "df['column_name']"],
        answerOption: 3,
        explanation: `In addition to accessing through df['column_name'], you can also access the column name using 'df.column_name'. `
    },
    {
        question: "What Pandas function is used to create a pivot table from a DataFrame?",
        options: ["pivot_table()", "create_pivot()", "make_pivot_table()", "generate_pivot()"],
        answerOption: 0,
        explanation: `Just like excel, you can do pivot tables in Pandas.`
    },
    {
        question: "What method is used to merge two DataFrames in Pandas?",
        options: ["join()", "concat()", "merge()", "combine()"],
        answerOption: 2,
        explanation: `Merging dataframes can be extremely tricky and is different than join and concat. We recommend reading more of the official Pandas docs to understand fully the nuances of combining multiple dataframes.`
    }
]

export default function PandasQuiz() {
  let indices: number[] = generateRandomNumbers(quiz.length, 3)
  const filteredQuiz = quiz.filter((_, i) => indices.includes(i))

  return (
    <div className="ml-5 mt-5">
        <h1 className="text-5xl">Pandas Quiz</h1> 
        
        <Quiz quiz={filteredQuiz} moduleId='pandas_quiz'/>
    </div>
  )
}
