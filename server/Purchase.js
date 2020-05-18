class Purchase {
  constructor(code, value, date) {
    this.code = code;
    this.value = value;
    this.date = date;
    this.cashbackRate = 0.2;
    this.cashbakValue = value * this.cashbackRate;
  }
}
