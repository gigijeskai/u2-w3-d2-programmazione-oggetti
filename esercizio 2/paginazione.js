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
];

console.log(persone);

class Pagina {
  constructor(items = [], pageSize = 10) {
    this.items = items;
    this.pageSize = pageSize;
  }
  render(tagHtml) {
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

// la classe pagina mi riempie un array con un limite di 10 elementi
// il metodo render prende come parametro un elemento html, per ogni elemento dell'array,
// crea un li con dentro i valori di nome e cognome del singolo elemento dell'array
// alla fine appendo li al contenitore dell'html
