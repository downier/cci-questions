function evenOccurrence (arr) {
  var holder = {};
  for(var i = 0; i < arr.length; i++) {
    for(var z = 0; z < arr.length; z++) {
      if(arr[i] === arr[z]){
        if(holder[arr[i]]) {
          holder[arr[i]]++
        } else {
          holder[arr[i]] = 1;
        }
      }
    }
  }
  for(var o = 0; o < arr.length; o++){
    if(holder[arr[o]] % 2 === 0) {
      return arr[o];
    }
  }
  return null;
}
function evenOccurrence (arr) {

  var result = null;
  var count = 0;

  for (var i = 0; i < arr.length; i++) {
    for (var z = 0; z < arr.length; z++) {
      if (arr[i] === arr[z]) {
        count++;
      }
    }
    if (count % 2 === 0) {
      return arr[i];
    }
    count = 0;
  }
  return result;
}

var array = [ 1, 3, 3, 3, 2, 4, 4, 2, 5 ];
console.log(evenOccurrence(array))
