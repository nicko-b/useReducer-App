var evenOccurrence = function(arr) {
    var number = [];
    var count = [];
    var previousNumber;
    
    arr.sort();
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== prev) {
        number.push(arr[i]);
        count.push(1);
      } else {
        count[count.length-1]++;
      }
      prev = arr[i];
     }
    return [number, count];
  }
  var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
  //look up array filter