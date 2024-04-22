import TablePreview from "@/components/TablePreview";
import { Content } from "@/services/TableTypes";
import React from "react";
const pandasContent: Content = [
  {
    title: "Common Dataframe Operations",
    items: [
      {
        func: "df.head()",
        what_it_does:
          "Gives the first n rows of the data frame. The default n value is 5.",
      },
      {
        func: "df.tail()",
        what_it_does:
          "Gives the last n rows of the data frame. The default n value is 5 ",
      },
      {
        func: "df.sample()",
        what_it_does: "Returns a random sample of the data frame.",
      },
    ],
  },
  {
    title: "Stat Functions",
    items: [
      {
        func: "df.sum()",
        what_it_does: "Returns sums of each column",
      },
      {
        func: "df.mean()",
        what_it_does: "Returns means of desired axis",
      },
      {
        func: "df.count()",
        what_it_does:
          "Counts the number of not empty values for each row, or column if you specify the axis parameter as axis='columns', and returns a Series object with the result for each row (or column).",
      },
      {
        func: "df.std()",
        what_it_does: "Returns standard deviation of desired axis",
      },
      {
        func: "df.median()",
        what_it_does: "Returns median of desired axis",
      },
    ],
  },
  {
    title: "Data Cleanup Functions",
    items: [
      {
        func: "df.isna()",
        what_it_does: "Returns a Boolean of whether there are missing values",
      },
      {
        func: "df.fillna()",
        what_it_does: "Replaces null values with a desired value",
      },
      {
        func: "df.dropna()",
        what_it_does: "Removes rows with null values",
      },
      {
        func: "df.assign()",
        what_it_does: "Adds a new column to a data frame",
      },
      {
        func: "df.rename()",
        what_it_does: "Way of changing names of rows or labels",
      },
      {
        func: "df.drop()",
        what_it_does: "Removes specific row or column",
      },
      {
        func: "df.sort_values()",
        what_it_does: "Sorts the  data frame based on specific label",
      },
    ],
  },
  {
    title: "Combining Functions",
    items: [
      {
        func: "df.concat()",
        what_it_does: "Concatenates multiple dataframes along a desired axis",
      },
      {
        func: "df.merge()",
        what_it_does:
          "Based on specified lefts and right merges two dataframes together",
      },
      {
        func: "df.join()",
        what_it_does:
          "Inserts columns from another dataframe into an existing one",
      },
    ],
  },
  {
    title: "Exporting Functions",
    items: [
      {
        func: "df.to_csv()",
        what_it_does: "Converts dataframe to CSV",
      },
      {
        func: "df.to_sql()",
        what_it_does: "Converts dataframe to SQL table",
      },
      {
        func: "df.to_excel()",
        what_it_does: "Converts dataframe to Excel file table",
      },
      {
        func: "df.to_json()",
        what_it_does: "Converts dataframe to json file",
      },
    ],
  },
];
export default function PandasTable() {
  return <TablePreview content={pandasContent} moduleId="pandas_table" />;
}
