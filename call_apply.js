// func.call(context, arguments)

// uses call to get Array.join() method with non-array entity (arguments)
function printArgs() {
  var args = [].join.call(arguments, ':');
  console.log( args );
}
printArgs(1,2,3);

//the same with Array.slice()
function printArgs2() {
  var args = [].slice.call(arguments);
  console.log( args ); // ['Hello', 'my', 'world']
  console.log( args.join(' ') ); // 'Hello my world'
}
printArgs2('Hello', 'my', 'world');

// Apply - the same as call, but works with an array of parameters:
function testApply(arr) {
  // we can find a maximum value of the array using Math.max method:
  var max = Math.max.apply(null, arr);
  // we use null as context here because we don't need the context (this) in our case. Math.max doesn't use 'this'.
  console.log( max ); // 7
}
testApply([1,6,7,2,1,5,3,6,7,5]);