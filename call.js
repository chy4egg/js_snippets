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