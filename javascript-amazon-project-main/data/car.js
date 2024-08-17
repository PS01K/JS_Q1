class Car {
  #brand;
  #model;
  speed = 0;
  isTruckOpen = false;

  constructor (carDetails) {
    this.#brand = carDetails.brand;
    this.#model = carDetails.model;
  }

  displayInfo () {
    const truckStatus = this.isTruckOpen ? 'open' : 'closed';

    return `${this.#brand} ${this.#model}, Speed: ${this.speed} km/h, Trunk: ${truckStatus}`
  }

  go() {
    if (!this.isTruckOpen) {
      this.speed += 5;
    }
    
    if (this.speed > 200) {
      this.speed = 200;
    }
  }

  brake() {
    this.speed -= 5;

    if (this.speed < 0) {
      this.speed = 0;
    }
  }

  openTrunk() {
    if (this.speed === 0) {
      this.isTruckOpen = true;
    }
  }

  closeTrunk() {
    this.isTruckOpen = false;
  }
}

class RaceCar extends Car {
  accelaration;

  constructor(carDetails) {
    super(carDetails);
    this.accelaration = carDetails.accelaration;
  }

  go() {
    this.speed += this.accelaration;

    if (this.speed > 300) {
      this.speed = 300;
    }
  }

  openTrunk() {
    console.log('Race cars do not have trunk.');
  }

  closeTrunk() {
    // console.log('Race cars do not have trunk.');
    this.openTrunk();
  }
}

const rc1 = new RaceCar({ brand: 'McLaren', model: 'F1', accelaration: 20 });
rc1.go();
rc1.openTrunk();
rc1.closeTrunk();
console.log(rc1.displayInfo());

const car1 = new Car({brand: 'Toyota', model: 'Corolla'});
const car2 = new Car({brand: 'Tesla', model: 'Model 3'});

car1.go();
car1.go();

car1.openTrunk();
car2.openTrunk();

car2.go();

console.log(car1.displayInfo());
console.log(car2.displayInfo());