class Person {
  constructor(name, address) {
    this.name = name
    this.address = address
  }
  getInfo() {
    return `${this.name} ${this.address}`
  }
}

module.exports = Person
