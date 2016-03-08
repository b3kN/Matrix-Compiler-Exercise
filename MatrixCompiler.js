var initMatrix = [],
    first = [0,1,0,0,0,1,0,0],
    second = [0,0,0,0,0,0,0,0],
    third = [0,0,0,1,0,0,0,1],
    fourth = [0,0,0,0,0,0,0,0];

initMatrix.push(first,second,third, fourth);

var colPos = [],
    final = [];

for (var c = 0; c < initMatrix.length; c++) {
  var addNewLine = true,
      addBlankLine = true;
  for (var d = 0; d < initMatrix[c].length; d++) {
    if (initMatrix[c][d] == 1) {
      colPos.push(d);
      addBlankLine = false;
      if (addNewLine) {
        addNewLine = false;
        var newLine = [];
        for (var e = 0; e < initMatrix[c].length; e++) {
          newLine.push(1);
        }
        final.push(newLine);
      }
    }
  }
  if (addBlankLine) {
    final.push(initMatrix[c]);
  }
}

for (var x = 0; x < final.length; x++) {
  for (var w = 0; w < final[x].length; w++) {
    for (var i = 0; i < colPos.length; i++) {
      if (colPos[i] == w) {
        final[x][w] = 1;
      }
    }
  }
}