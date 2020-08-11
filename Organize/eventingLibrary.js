// Example usage:
// var obj = mixEvents({ name: 'Alice', age: 30 });
// obj.on('ageChange', function(){ // On takes an event name and a callback function
//   console.log('Age changed');
// });
// obj.age++;
// obj.trigger('ageChange'); // This should call our callback! Should log 'age changed'.

// Make an eventing system mix -in that adds.trigger() and.on() to any input object.

// Caveats:
// - mixEvents should return the original object it was passed after extending it.
// - If we repeatedly call.on with the same event name, it should
// continue to call the old function as well.That is to say, we can have multiple
// listeners for an event.
// - If obj.trigger is called with additional arguments, pass those to the
// listeners.
// - It is not necessary to write a way to remove listeners.

var mixEvents = function (obj) {
  //Your code here
  var events = {};

  //capture additional args ex.. car.trigger('exit-freeway', 30)
  obj.trigger = function (event) {
    var args = Array.prototype.slice.call(arguments, 1);
    //call our callback func provided by obj.on
    if (events[event]) {
      for (var i = 0; i < events[event].length; i++) {
        events[event][i].apply(this, args);
      }
    }
  };


  // Register a callback to be fired on this event.
  obj.on = function (event, callback) {
    //add event to our events holder
    //test if event already exists
    if (!events[event]) {
      events[event] = [];
    }
    //register the callback on the event
    events[event].push(callback);
  };
  return obj;
};