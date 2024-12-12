function findMissingNumber(arr) {
  // Sorting the array to ensure it's in the correct order
  arr.sort((a, b) => a - b);

  // Determining the smallest and largest numbers
  const start = arr[0];
  const end = arr[arr.length - 1];

  // Calculating the ideal sum of the sequence
  const idealSum = ((end - start + 1) * (start + end)) / 2;

  // Calculating the actual sum of the elements in the array
  const actualSum = arr.reduce((acc, num) => acc + num, 0);

  // Returning the missing number
  return idealSum - actualSum;
}

console.log(findMissingNumber([3, 0, 2, 4])); // Output: 1
console.log(findMissingNumber([3106, 3102, 3104, 3105, 3107])); // Output: 3103
