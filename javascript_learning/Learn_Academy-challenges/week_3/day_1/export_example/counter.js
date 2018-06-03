class Counter {
  constructor() {
    this.value = 0;
  }
  getValue() {
    return this.value;
  }
  increase() {
    this.value++;
  }
  decrease() {
    this.value--;
  }
}

module.exports = Counter;
