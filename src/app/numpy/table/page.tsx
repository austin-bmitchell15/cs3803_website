import TablePreview from "@/components/TablePreview";
import { Content } from "@/services/TableTypes";

const numpyContent: Content = [
  {
    title: "Common Numpy Operations",
    items: [
      { func: "np.array()", what_it_does: "Creates a new NumPy array." },
      {
        func: "np.zeros()",
        what_it_does:
          "Returns a new array of given shape and type, filled with zeros.",
      },
      {
        func: "np.ones()",
        what_it_does:
          "Returns a new array of given shape and type, filled with ones.",
      },
      {
        func: "np.arange()",
        what_it_does: "Returns evenly spaced values within a given interval.",
      },
      {
        func: "np.linspace()",
        what_it_does:
          "Returns evenly spaced numbers over a specified interval.",
      },
      {
        func: "np.reshape()",
        what_it_does:
          "Gives a new shape to an array without changing its data.",
      },
      {
        func: "np.append()",
        what_it_does: "Appends values to the end of an array.",
      },
      {
        func: "np.concatenate()",
        what_it_does: "Joins a sequence of arrays along an existing axis.",
      },
      {
        func: "np.sum()",
        what_it_does: "Sum of array elements over a given axis.",
      },
      {
        func: "np.mean()",
        what_it_does: "Computes the arithmetic mean along the specified axis.",
      },
      {
        func: "np.median()",
        what_it_does: "Computes the median along the specified axis.",
      },
      {
        func: "np.std()",
        what_it_does:
          "Computes the standard deviation along the specified axis.",
      },
      {
        func: "np.var()",
        what_it_does: "Computes the variance along the specified axis.",
      },
      {
        func: "np.min()",
        what_it_does:
          "Returns the minimum of an array or minimum along an axis.",
      },
      {
        func: "np.max()",
        what_it_does:
          "Returns the maximum of an array or maximum along an axis.",
      },
      { func: "np.dot()", what_it_does: "Dot product of two arrays." },
      { func: "np.cross()", what_it_does: "Cross product of two arrays." },
      { func: "np.sort()", what_it_does: "Returns a sorted copy of an array." },
      {
        func: "np.argsort()",
        what_it_does: "Returns the indices that would sort an array.",
      },
      {
        func: "np.unique()",
        what_it_does: "Finds the unique elements of an array.",
      },
      {
        func: "np.linalg.inv()",
        what_it_does: "Computes the multiplicative inverse of a matrix.",
      },
      {
        func: "np.linalg.det()",
        what_it_does: "Computes the determinant of an array.",
      },
      {
        func: "np.linalg.eig()",
        what_it_does:
          "Computes the eigenvalues and right eigenvectors of a square array.",
      },
      {
        func: "np.linalg.eigh()",
        what_it_does:
          "Computes the eigenvalues and eigenvectors of a Hermitian or symmetric matrix.",
      },
      {
        func: "np.linalg.solve()",
        what_it_does:
          "Solves a linear matrix equation, or system of linear scalar equations.",
      },
      {
        func: "np.linalg.svd()",
        what_it_does: "Performs singular value decomposition.",
      },
      {
        func: "np.linalg.pinv()",
        what_it_does: "Computes the Moore-Penrose pseudoinverse of a matrix.",
      },
      {
        func: "np.linalg.norm()",
        what_it_does: "Computes the norm of a vector or matrix.",
      },
      {
        func: "np.linalg.qr()",
        what_it_does: "Computes the QR decomposition of a matrix.",
      },
      {
        func: "np.linalg.cholesky()",
        what_it_does: "Computes the Cholesky decomposition of a matrix.",
      },
    ],
  },
];

import React from "react";

export default function NumpyTablePage() {
  return <TablePreview content={numpyContent} moduleId="numpy_table" />;
}
