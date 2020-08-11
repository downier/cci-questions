var compose = function() {
  var args = Array.prototype.slice.call(arguments);
  return function(result) {
    for (var i = args.length - 1; i >= 0; i--) {
      console.log(this);
      result = args[i].call(this, result);
    }
    return result;
  };
};

var pipe = function() {
  var args = Array.prototype.slice.call(arguments);
  return function(result) {
    for (var i = 0; i < args.length; i++) {
      result = args[i].call(this, result);
    }
    return result;
  };
};

var greet = function(name) { return 'hi: ' + name; };
var exclaim = function(statement) { return statement.toUpperCase() + '!' ;};
var welcome = compose(greet, exclaim);
console.log(welcome('phillip'));

// .should.equal('hi: PHILLIP!');
// welcome('kia').should.equal('hi: KIA!');
