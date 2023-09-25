// array should be sorted

const binarySearch = (arr, target) => {
  let right = arr.length + 1;
  let left = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

console.log(binarySearch([1, 3, 6, 12, 30, 43, 56, 76, 87, 99], 76));
