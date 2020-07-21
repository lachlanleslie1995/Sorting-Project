import { swap, partition } from "./SortingHelpers";

export const bubbleSort = (values: number[]) => {
  for (var i = values.length - 1; i >= 0; i--) {
    for (var j = values.length - i; j > 0; j--) {
      if (values[j] < values[j - 1]) {
        swap(values, j, j - 1);
      }
    }
  }
  return values;
};

export const quickSort = (
  values: number[],
  leftIndex: number,
  rightIndex: number
) => {
  let index;
  if (values.length > 1) {
    index = partition(values, leftIndex, rightIndex);
    if (leftIndex < index - 1) {
      quickSort(values, leftIndex, index - 1);
    }
    if (rightIndex > index) {
      quickSort(values, index, rightIndex);
    }
  }
  return values;
};

export const selectionSort = (values: number[]) => {
  return values;
};

export const insertionSort = (values: number[]) => {
  return values;
};

export const heapSort = (values: number[]) => {
  return values;
};

export const mergeSort = (values: number[]) => {
  return values;
};
