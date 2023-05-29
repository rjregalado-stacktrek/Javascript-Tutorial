let people = [
  { id: 125, name: "Melissa", age: 25 },
  { id: 250, name: "Karla", age: 27 },
  { id: 215, name: "Alex", age: 26 },
  { id: 101, name: "Rommel", age: 24 }
];

function filterByID(people, Id) {
  
  let filteredId = [];

  for (let i = 0; i < people.length; i++) {
    if (people[i].id >= Id) {
      filteredId.push(people[i]);
    }
  }

  return filteredId;
}

console.log(filterByID(people, 125));