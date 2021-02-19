const faker = require("faker");

console.log(
  faker.name.firstName(),
  faker.name.lastName(),
  faker.address.streetAddress()
);

const users = new Array(30)
  .fill("")
  .map((val) => `${faker.name.firstName()} ${faker.name.lastName()}`);
