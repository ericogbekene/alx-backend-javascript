export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw new Error('Name must be a string');
    else if (!Array.isArray(students)) throw new Error('Students must be an array');
    else if (typeof length !== 'number') throw new Error('Length must be a number');
    else {
      this._name = name;
      this._length = length;
      this._students = students;
    }
  }

  // getters for name

  get name() {
    return this._name;
  }

  // getters for length
  get length() {
    return this._length;
  }

  // getter for students
  get students() {
    return this._students;
  }

  // setter for name
  set name(newName) {
    this._name = newName;
  }

  // setter for name
  set length(newLength) {
    this._length = newLength;
  }

  // setter for name
  set students(newStudents) {
    this._name = newStudents;
  }
}
