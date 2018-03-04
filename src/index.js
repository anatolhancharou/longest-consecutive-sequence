module.exports = function longestConsecutiveLength(array) {
  // your solution here
  var length = array.length;
  if (length === 0) return 0;
  var setFromArray = new Set(array);
  var max = 1;
  
  for (var i = 0; i < length; i++) {
    var count = 0;
    if (!setFromArray.has(array[i]-1)) {
      var value = array[i];
      while (setFromArray.has(value)) {
        value++;
        count++;
      }
      if (count > max) {
        max = count;
      }
    }    
  }
  
  return max;
}
