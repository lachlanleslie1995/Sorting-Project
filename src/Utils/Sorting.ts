export const bubbleSort = (values: number[]) => {
  for (var i = values.length - 1; i >= 0; i--) {
    for (var j = values.length - i; j > 0; j--) {
      if (values[j] < values[j - 1]) {
        var tmp = values[j];
        values[j] = values[j - 1];
        values[j - 1] = tmp;
      }
    }
  }
  return values;
};

export const quickSort = (values: number[]) => {
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
