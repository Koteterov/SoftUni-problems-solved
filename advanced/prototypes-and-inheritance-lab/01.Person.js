function Person(first, last) {
    this.firstName = first;
    this.lastName = last;
    Object.defineProperty(this, "fullName", {
      set: function (value) {
        let [firstName, lastName] = value.split(" ");
        if ((firstName, lastName)) {
          this.firstName = firstName;
          this.lastName = lastName;
        }
      },
      get: function () {
        return `${this.firstName} ${this.lastName}`;
      },
    });
  }
  
  
  // OR
  // class Person {
  //   constructor(first, last) {
  //     this.firstName = first;
  //     this.lastName = last;
  //   }
  //   set fullName(value) {
  //     let [firstName, lastName] = value.split(" ");
  //     if ((firstName, lastName)) {
  //       this.firstName = firstName;
  //       this.lastName = lastName;
  //     }
  //   }
  //   get fullName() {
  //     return `${this.firstName} ${this.lastName}`;
  //   }
  // }
  
  let person = new Person("Peter", "Ivanov");
  console.log(person.fullName); //Peter Ivanov
  person.firstName = "George";
  console.log(person.fullName); //George Ivanov
  person.lastName = "Peterson";
  console.log(person.fullName); //George Peterson
  person.fullName = "Nikola Tesla";
  console.log(person.firstName); //Nikola
  console.log(person.lastName); //Tesla
  
  // let person = new Person("Albert", "Simpson");
  // console.log(person.fullName); //Albert Simpson
  // person.firstName = "Simon";
  // console.log(person.fullName); //Simon Simpson
  // person.fullName = "Peter";
  // console.log(person.firstName);  // Simon
  // console.log(person.lastName);  // Simpson
  