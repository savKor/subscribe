function handleChangeA(val) {
  console.log(
    'Это значение - ' +
      val +
      ', оно является новым значением для g ключа, а это старое значение: ' +
      pelmeni.g,
  )
  return true
}

function handleChangeB(val) {
  console.log(
    'Это значение - ' +
      val +
      ', оно является новым значением для g ключа, а это старое значение: ' +
      pelmeni.g,
  )
}

class EventObserver {
  constructor() {
    this.observers = []
  }

  subscribe(fn) {
    this.observers.push(fn)
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter((subscriber) => subscriber !== fn)
  }

  broadcast(data) {
    this.observers.forEach((subscriber) => subscriber(data))
  }
}
