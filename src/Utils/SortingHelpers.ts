export const swap = (
  values: number[],
  leftIndex: number,
  rightIndex: number
) => {
  var temp = values[leftIndex];
  values[leftIndex] = values[rightIndex];
  values[rightIndex] = temp;
};

export const partition = (
  values: number[],
  leftIndex: number,
  rightIndex: number
) => {
  let pivot = values[Math.floor((rightIndex + leftIndex) / 2)];
  let i = leftIndex;
  let j = rightIndex;
  while (i <= j) {
    while (values[i] < pivot) {
      i++;
    }
    while (values[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(values, i, j);
      i++;
      j--;
    }
  }
  return i;
};
