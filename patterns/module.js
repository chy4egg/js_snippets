
var Module = (function(){

  var privateProp = 10;

  function privatePropLog() {
    console.log(privateProp);
  }

  return {
    privatePropLog: privatePropLog
  }

}());

console.clear();
console.log( Module.privateProp ); // private
console.log( Module.privatePropLog() ); // ok