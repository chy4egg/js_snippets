//func.call(context, arguments)

//uses call to get Array.join method with non-array entity (arguments)
function printArgs() {
  var argsToPrint = [].join.call(arguments, ':');
  console.log( argsToPrint );
}

printArgs(1,2,3);