function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  let splitArray = split(array);
  let left = splitArray[0];
  let right = splitArray[1];

  return merge(mergeSort(left), mergeSort(right));
}

function split(wholeArray) {
  const midPoint = Math.floor(wholeArray.length / 2);
  const left = wholeArray.slice(0, midPoint);
  const right = wholeArray.slice(midPoint);
  return [left, right];
}

function merge(left, right) {
  let newArr = [];
  // let newArrLength = left.length + right.length;
  let leftIdx = 0,
    rightIdx = 0;

  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      newArr.push(left[leftIdx]);
      leftIdx++;
    } else {
      newArr.push(right[rightIdx]);
      rightIdx++;
    }
  }

  while (leftIdx < left.length) {
    newArr.push(left[leftIdx]);
    leftIdx++;
  }

  while (rightIdx < right.length) {
    newArr.push(right[rightIdx]);
    rightIdx++;
  }
  // while (newArrLength) {
  //   if (left[0] === undefined) {
  //     newArr.push(...right);
  //     break;
  //   }
  //   if (right[0] === undefined) {
  //     newArr.push(...left);
  //     break;
  //   }
  //   if (left[0] < right[0]) {
  //     newArr.push(left.shift());
  //   } else {
  //     newArr.push(right.shift());
  //   }
  //   newArrLength--;
  // }

  return newArr;
}
