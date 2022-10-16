class Persone {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

let persone = [
  new Persone("mario", "rossi"),
  new Persone("michele", "rosa"),
  new Persone("antonio", "ossi"),
  new Persone("marco", "tutti"),
  new Persone("maria", "grazia"),
  new Persone("alessia", "riso"),
  new Persone("luca", "ros"),
  new Persone("mirco", "tre"),
  new Persone("nicole", "verdi"),
  new Persone("gianluca", "bianchi"),
  new Persone("mario", "gatti"),
  new Persone("mario", "gatti"),
];

console.log(persone);

class Pagina {
  constructor(items = [], pageSize = 10) {
    this.items = items;
    this.pageSize = pageSize;
  }
  render(tagHtml) {
    // mostrare gli elementi
    /*
numero della pagina : numero indice da a elementi 
    pagina 0 : 0 - 10 = (0 * 10) => (10 * 0 + 9) // 10 esculo
    pagina 0
    pagina 0
    pagina 0
    */
    for (let persona of this.items) {
      let li = document.createElement("li");
      li.innerHTML += persona.name + " " + persona.surname;
      tagHtml.appendChild(li);
    }
  }
}
let pagina1 = new Pagina(persone);
console.log(pagina1);

let ul = document.querySelector("ul");
pagina1.render(ul);
