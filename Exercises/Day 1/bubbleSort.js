function bubbleSort(array) {
    const length = array.length; // 6
  
    for (let i = 0; i < length - 1; i++) {
      // Last i elements are already in place, so we can reduce the inner loop iterations
      for (let j = 0; j < length - 1 - i; j++) {
        // Compare adjacent elements
        if (array[j] > array[j + 1]) {
          // Swap the elements
          //array[0] > array[1] // 5 > 3

          // swap the value [3,5,8,2,1,4], [3,5,8]

          //let temp = array[j]; // temp = 5
          //array[j] = array[j+1]; // array[0] = 3
          //array[j+1] = temp; // array[1] = 5 

          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }
  
    return array;
  }
  
  const unsortedArray = ["c", "d", "e", "f", "a", "b"]; // index: start from 0 to 5
  console.log(unsortedArray[0]) // 5

  const sortedArray = bubbleSort(unsortedArray);
  
  console.log(sortedArray);  // Output: [1, 2, 3, 4, 5, 8]



