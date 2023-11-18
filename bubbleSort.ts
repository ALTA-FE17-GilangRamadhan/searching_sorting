function bubbleSort(arr: number[]): number[] {
  let i: number, j: number;
  let len: number = arr.length;

  let isSwapped: boolean = false;

  for (i = 0; i < len; i++) {
    isSwapped = false;

    for (j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }

    if (!isSwapped) {
      break;
    }
  }

  return arr;
}

console.log(bubbleSort([243, 45, 23, 356, 3, 5346, 35, 5]));
