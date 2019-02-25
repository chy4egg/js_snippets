// a module
const Module = (function () {
  // a private prop
  let privateProp = 0;

  // a private prop changer
  function changePrivateProp(newValue) {
    privateProp = newValue;
  }

  // a private prop returner
  function privatePropLog() {
    return privateProp;
  }

  // only this will be available for the module users
  return {
    changeProp(newValue) {
      changePrivateProp(newValue);
    },

    logProp() {
      return privatePropLog();
    }
  };
}());

console.clear();
console.log(Module.logProp()); // 0
console.log(Module.changeProp(10)); // ok
console.log(Module.logProp()); // 10
