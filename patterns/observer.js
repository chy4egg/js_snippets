
// description:
class EventObserver {
  constructor () {
    this.observers = []
  }
  subscribe (fn) {
    this.observers.push(fn)
  }
  unsubscribe (fn) {
    this.observers = this.observers.filter(subscriber => subscriber !== fn)
  }
  broadcast (data) {
    this.observers.forEach((item) => {
      return item(data)
    })
  }
}

// usage:
const Observer = new EventObserver()

// add subscribtion to tick
Observer.subscribe( tick => console.log(tick) )

// emit an action
let tick = 0

setInterval(()=>{
  tick++
  // trigger our tick subscribtion
  Observer.broadcast( tick );
},1000)
