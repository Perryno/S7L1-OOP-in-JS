class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
}
const andrea = new User("Andrea", "Caforio", 21, "Parona");
const kri = new User("Kristi", "Samarxiu", 23, "Gravellona Toce");

function anni(anno1, anno2) {
  if (anno1.age >= anno2.age) {
    console.log(anno1.firstName + " è più vecchio di " + anno2.firstName);
  } else {
    console.log(anno1.firstName + " è più giovane di " + anno2.firstName);
  }
}
console.log(andrea);
anni(kri, andrea);
anni(andrea, kri);
