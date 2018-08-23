
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
    this.observers.forEach(subscriber => subscriber(data))
  }
}

// usage:
const Observer = new EventObserver()

// a changing something
let tick = 0

// subscribe to tick
Observer.subscribe((tick) => {
  console.log('subscribed to tick', tick)
})

setInterval(()=>{
  tick++
  Observer.broadcast( {tick: 'tick is changed!'} );
  // unsubscribe from tick
  if (tick >= 3) {
    //todo: unsubscribtion doesn't work!
    Observer.unsubscribe((tick) => {
      console.log('unsubscribed from tick', tick)
    })
  }
},1000)


