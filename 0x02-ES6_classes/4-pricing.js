import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number' || (currency instanceof Currency !== true)) throw new Error('Invalid type of arguments passed');
    else {
      this._amount = amount;
      this._currency = currency;
    }
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

  // getters
  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof newAmount !== 'number') throw new Error('Invalid type of argument passed');
    else this._amount = newAmount;
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    // newCurrency = Currency()
    this._currency = newCurrency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.nameProperty} (${this._currency.codeProperty})`;
  }
}
