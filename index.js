class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  confronta(persona) {
    if (this.age < persona.age) {
      document.querySelector("#risposta").innerHTML += `<p>${this.name} ha ${this.age} anni ed è più giovane di ${persona.name} di ${persona.age} anni</p>`;
    } else {
      document.querySelector("#risposta").innerHTML += `<p>${this.name} ha ${this.age} anni ed è più grande di ${persona.name} di ${persona.age} anni</p>`;
    }
  }
}

let persona1 = new Person("Mario", 24);
let persona2 = new Person("michele", 25);
let persona3 = new Person("Antonio", 23);

persona1.confronta(persona2);
persona1.confronta(persona3);
