// Given an array of strings,
// return the string that reoccurs most often.

function noRepeat(arr) {
  if (Array.isArray(arr) && !arr.length) {
    return '';
  }
  let max = 0;
  let value;
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]){
      map[arr[i]]++;
    } else {
      map[arr[i]] = 1;
    }
    if (map[arr[i]] > max) {
      max = map[arr[i]];
      value = arr[i];
    }
  }
  return value
}

module.exports = noRepeat;