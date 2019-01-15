function bubbleSort(array) {
  let currentLength = array.length;

  while (currentLength > 1) {
    for (let i = 0; i < currentLength - 1; i++) {
      if (array[i] > array[i + 1]) {
        array = swap(array, i);
      }
    }
    currentLength--;
  }
  return array;
}

function swap(array, i) {
  [array[i], array[i + 1]] = [array[i + 1], array[i]];
  return array;
}
