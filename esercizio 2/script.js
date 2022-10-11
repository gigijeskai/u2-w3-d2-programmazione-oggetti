// class pagina {
//   items = [];
//   pageSize = [];

//   addInArray(persona) {}
// }

class Persona {
  constructor(nome, cognome, anni) {
    this.nome = nome;
    this.cognome = cognome;
    this.anni = anni;
  }
  createListPersone() {
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML += this.nome;
    li.innerHTML += this.cognome;
    li.innerHTML += this.anni;

    let persone = document.querySelector("#persone");
    persone.appendChild(ul);
  }

  // addInArray() {
  //   let item = [];
  //   let pageSize = [];

  // }
}

function aggiungiPersona() {
  let persone = new Persona(document.querySelector("#nome").value, document.querySelector("#cognome").value, document.querySelector("#anni").value);
  persone.createListPersone();
}
