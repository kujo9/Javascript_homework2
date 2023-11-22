function displayFood(x) {
    for (foodType in x) {
      if (x.hasOwnProperty(foodType)) {
        console.log(`Favorite ${foodType}:`);
  
        if (Array.isArray(x[foodType])) {
          for (let i = 0; i < x[foodType].length; i++) {
            console.log(`  ${x[foodType][i]}`);
          }
        } else {
          console.log(`  ${x[foodType]}`);
        }
      }
    }
  }
displayFood(person3)

// exercice2
function Person(name, age) {
    self.name = name;
    self.age = age;
  
    self.printInfo = () => {
      console.log(`${self.name} is ${self.age} years old.`);
    };
  
    this.incrementAge = () => {
      self.age++;
    };
  }
  // Creating two people using the class
   people1 = new Person('1', 39);
   people2 = new Person('2', 20);

   //Printing their infos
   people1.printInfo();
   people2.printInfo();

  //incrementing age by 3years
person1.incrementAge();
person1.incrementAge();
person1.incrementAge();

//exercice3


function checkLength(word) {
    return result(1,2) => {
      if (word.length > 10) {
        1("Big word");
      } else {
        2("Small word");
      }
    };
  }
  
