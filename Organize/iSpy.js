function spyOn(fn) {
  var count = 0;
  var returnedVal = [];
  var argumentsUsed = [];


  var spy = function() {
    count++;
    //var args = Array.prototype.slice.call(arguments);
    //iterate through arguments array and push each one individually
    //args.forEach((argument) => argumentsUsed.push(argument))
    var value = fn(...args);
    //var value = fn.apply(args);
    argumentsUsed.push(...args)
    returnedVal.push(value);
    return value;
  }

  spy.callCount = function(){
    return count;
    //return count of # of times invoked
  }
  spy.wasCalledWith = function(arg){
    //check if supplied arg was used in previous invocation
    if(argumentsUsed.includes(arg)) {
      return true;
    }
    return false
  }
  spy.returned = function(val){
    //if spy was invoked
      //if result === val
    if(returnedVal.includes(val)) { // fix if to check if val matches spy() result
      return true;
    }
    return false;
  }

  return spy;
}

var spy = spyOn(function(str) {
      return str + ' world';
    });

console.log(spy())
