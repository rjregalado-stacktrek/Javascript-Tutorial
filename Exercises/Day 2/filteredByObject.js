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