const { getStatus } = require("./Status");
class Purchase {
  constructor(code, value, date) {
    this.code = code;
    this.value = value;
    this.date = date;
    this.cashbackRate = 0.02;
    this.cashbackValue = value * this.cashbackRate;
    this.status = getStatus();
  }
}
module.exports = Purchase;
