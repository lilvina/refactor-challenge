//1. Inside our function, we have a new array called newArray.
//Then on the next line, we have a for loop that is going to iterate over the rows
//and then the second for loop, it's going to iterate over the column but from the last element.
//After that, we are going to push the last element at the first position in newArray and the first element in the last position in newArray.
//After we exit out of our loop, we want to return the new array.
//The time complexity is O(N*N) because it is swapping both elements in each row by using a new array and using two for loops.
//The space complexity is O(N).

//2. In the refactor code, we are given that each row will have two elements: the row integer and the column integer. Now we have to swap the row and column integer.
//We can use a temporary variable instead of creating a new variable and using two for loops.

// [ rows, columns ]
let gameCoordinates = [
    [ 2, 1 ],
    [ 4, 3 ],
    [ 6, 5 ],
    [ 8, 7 ],
    [ 10, 9 ],
  ];
  
function transposeArray(array) {
    //refactor version
    for(let i = 0; i < array.length; i++) {
      let swap = array[i][0] //store values in swap variable
      array[i][0] = array[i][1] //changes previous stored value
      array[i][1] = swap //assigning swap to array[i][1]
    }
    return array
    //time complexity: O(N)
    //space complexity: O(1)
    // const newArray = [];
  
    // for (let i = 0; i < array.length; i++) {
    //   newArray.push([]);
  
    //   for (let j = array[i].length - 1; j >= 0; j--) {
    //     newArray[i].push(array[i][j]);
    //   }
    // };
    
    // return newArray;
}
  
  console.log(transposeArray(gameCoordinates));
  // [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ] ]