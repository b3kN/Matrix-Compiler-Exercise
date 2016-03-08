var initMatrix = [],
    first = [0,1,0,0,0,1,0,0],
    second = [0,0,0,0,0,0,0,0],
    third = [0,0,0,1,0,0,0,1],
    fourth = [0,0,0,0,0,0,0,0];

// Push series lines to initial matrix
initMatrix.push(first, second, third, fourth);

var colPos = [],    // Array to determine locations of found 1 values.
    final = [];     // Array to contain the final matrix array.

for (var c = 0; c < initMatrix.length; c++) {
  var addNewLine = true,    // Boolean to determine if a new line should be created.
      addBlankLine = true;  // Boolean to determine if any 1s were found in series.
  for (var d = 0; d < initMatrix[c].length; d++) {
      
    // If character in series is equal to 1:
    if (initMatrix[c][d] == 1) {
        
      // Note the position of column,
      // and identify that a blank line is not needed.
      colPos.push(d);
      addBlankLine = false;
      
      // If this is the first 1 found, create new series.
      if (addNewLine) {
          
        // Set the new line boolean to false since new line being created.
        addNewLine = false;
        
        // Create new series and make each value 1.
        var newLine = [];
        for (var e = 0; e < initMatrix[c].length; e++) {
          newLine.push(1);
        }
        
        // Push new series to the final matrix array.
        final.push(newLine);
      }
    }
  }
  
  // If series contained all 0s, add mentioned series to final matrix.
  if (addBlankLine) {
    final.push(initMatrix[c]);
  }
}

// For each position found in the colPos array,
// if the value/position is equal to position in series of matrix,
// then update that value to 1.
for (var x = 0; x < final.length; x++) {
  for (var w = 0; w < final[x].length; w++) {
    for (var i = 0; i < colPos.length; i++) {
      if (colPos[i] == w) {
        final[x][w] = 1;
      }
    }
  }
}
