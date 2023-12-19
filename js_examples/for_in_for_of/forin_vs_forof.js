const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// Expected output:
// "a: 1"
// "b: 2"
// "c: 3"

const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}
