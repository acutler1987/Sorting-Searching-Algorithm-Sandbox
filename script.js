'use strict';

let arr = [
  'Alice',
  4,
  17,
  6,
  true,
  8,
  'Jonas',
  2,
  7,
  'Methuselah',
  5,
  33,
  false,
  81,
  0,
];

///////////// Recursion...
const countDown = function (num) {
  console.log(num);
  const newNum = num - 1;
  if (newNum > 0) {
    countDown(newNum);
  }
};
// countDown(33);

///////////////////// Linear Search...

const linSearch = function (arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      console.log(`found at position ${[i]}`);
      return 0;
    }
  }
  console.log('not found');
  return 1;
};
// linSearch(arr, true);

///////////////////// Binary Search: will only work if sorted...

let sortedArr = arr.sort();
console.log(sortedArr);

const biSearch = function (arr, key) {
  let startIndex = 0;
  let endIndex = arr.length - 1;
  while (startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);
    if (arr[middleIndex] === key) {
      console.log(`Found at position ${middleIndex}`);
      return 0;
    } else if (arr[middleIndex] < key) {
      console.log('Searching to the right...');
      startIndex = middleIndex + 1;
    } else if (arr[middleIndex] > key) {
      console.log('Searching to the left...');
      endIndex = middleIndex - 1;
    } else {
      console.log('Target was not found yet, looping another iteration...');
    }
  }
  console.log('Target was not found in this array.');
  return 1;
};
biSearch(sortedArr, 0);

const binarySearch = (array, target) => {
  let startIndex = 0;
  let endIndex = array.length - 1;
  while (startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);
    if (target === array[middleIndex]) {
      return console.log('Target was found at index ' + middleIndex);
    }
    if (target > array[middleIndex]) {
      console.log('Searching the right side of Array');
      startIndex = middleIndex + 1;
    }
    if (target < array[middleIndex]) {
      console.log('Searching the left side of array');
      endIndex = middleIndex - 1;
    } else {
      console.log('Not Found this loop iteration. Looping another iteration.');
    }
  }

  console.log('Target value not found in array');
};
// binarySearch(sortedArr, 0);

//////////////////// Selection Sort...
