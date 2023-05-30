
let people = [
    { id: 101, name: "John", age: 25 },
    { id: 225, name: "Peter", age: 18 },
    { id: 312, name: "Matthew", age: 30 },
    { id: 112, name: "Paul", age: 21 }
  ];
  
  function filterById(people, minId) {
    let result = [];
  
    for (let i = 0; i < people.length; i++) {
      if (people[i].id >= minId) {
        result.push(people[i]);
      }
    }
  
    return result;
  }
  
  
  console.log(filterById(people, 110));

  /*
//ALTERNATIVE SOLUTION

var filterById1 = people.filter((personId, minId) => {
    return personId.id >= minId;
})

console.log(filterById1);



 // Using filter() on an Array of Objects
  
  var creatures = [
  {name: "Shark", habitat: "Ocean"},
  {name: "Whale", habitat: "Ocean"},
  {name: "Lion", habitat: "Savanna"},
  {name: "Monkey", habitat: "Jungle"}
];

var aquaticCreatures =  creatures.filter((creature) => {
  return creature.habitat == "Ocean";
});

console.log(aquaticCreatures);



// Modifying each word
let words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
var arr = [];
const modifiedWords = words.filter((word, index, arr) => {
  arr[index+1] += " extra";
  console.log(arr)
  return word.length < 6;
});

//console.log(modifiedWords);


// Appending new words
words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
const appendedWords = words.filter((word, index, arr) => {
  arr.push("new");
  //console.log(arr)
  return word.length < 6;
});
console.log(appendedWords);
*/