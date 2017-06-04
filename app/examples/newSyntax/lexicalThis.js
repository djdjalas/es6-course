const person = {
  name: 'Alex',
  cars: ['ferrari', 'lambo'],
  toString: function() {
    // log(`${this.name} has ${this.cars}`)
    this.cars.forEach(car => {
      log(`${this.name} has ${car}`);
    });
  }
}

person.toString();
