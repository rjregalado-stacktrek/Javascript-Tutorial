function bubbleSort(array) {
    const length = array.length;
  
    for (let i = 0; i < length - 1; i++) {
      // Last i elements are already in place, so we can reduce the inner loop iterations
      for (let j = 0; j < length - 1 - i; j++) {
        // Compare adjacent elements
        if (array[j] > array[j + 1]) {
          // Swap the elements
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }
  
    return array;
  }
  
  const unsortedArray = [5, 3, 8, 2, 1, 4];
  const sortedArray = bubbleSort(unsortedArray);
  
  console.log(sortedArray);  // Output: [1, 2, 3, 4, 5, 8]