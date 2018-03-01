module.exports = function longestConsecutiveLength(array) {
  // your solution here
  array.sort(function (a, b) { return a - b; });
  var length = array.length;
  if (length === 0) return 0;
      
  var max = 1;
  var count = 1;
  
  for (i = 0; i < length - 1; i++) {
    if (array[i] === array[i+1]) continue;
    if (array[i] + 1 === array[i+1]) {
      count++;
    } else {
      count = 1;
    }
    if (count > max) {
      max = count;
    }
  }
  return max;
}

