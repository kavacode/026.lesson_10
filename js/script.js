class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Apartment {
  constructor() {
    this.residents = [];
  }
  addResident(person) {
    this.residents.push(person);
  }
}

class House {
  constructor(maxApartments) {
    this.apartments = [];
    this.maxApartments = maxApartments;
  }
  addApartment(apartment) {
    if (this.apartments.length < this.maxApartments) {
      this.apartments.push(apartment);
    } else {
      console.log("Error: The maximum number of apartments has been exceeded.");
    }
  }
}
const person1 = new Person("Serhii", "male");
const person2 = new Person("Eva", "female");
const person3 = new Person("Johny", "other");
console.log(person1);
console.log(person2);
console.log(person3);

const apartment1 = new Apartment();
apartment1.addResident(person1);
console.log(apartment1);

const apartment2 = new Apartment();
apartment2.addResident(person2);
apartment2.addResident(person3);
console.log(apartment2);

const house = new House(5);
house.addApartment(apartment1);
house.addApartment(apartment2);
console.log(house);
