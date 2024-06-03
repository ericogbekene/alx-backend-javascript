export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string' || typeof name !== 'string') throw new Error('Invalid arguments');
    else {
      this._code = code;
      this._name = name;
    }
  }

  // getter and setter function
  get codeProperty() {
    return this._code;
  }

  set codeProperty(newCode) {
    if (typeof newCode !== 'string') throw new Error('Code must be a string');
    else {
      this._code = newCode;
    }
  }

  get nameProperty() {
    return this._name;
  }

  set nameProperty(newName) {
    if (typeof newCode !== 'string') throw new Error('Code must be a string');
    else {
      this._name = newName;
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
