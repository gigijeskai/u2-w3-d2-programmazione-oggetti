class Persona {
  constructor(nome, cognome, anni) {
    this.nome = nome;
    this.cognome = cognome;
    this.anni = anni;
  }
  createListPersone() {
    let lista = document.createElement("ul");
    let li = document.createElement("li");
    li.innerHTML += `${this.nome}${this.cognome}${this.anni}`;
    lista.appendChild(li);

    let persone = document.querySelector("#persone");
    persone.appendChild(lista);
  }
}

function aggiungiPersona() {
  let persone = new Persona(document.querySelector("#nome").value, document.querySelector("#cognome").value, document.querySelector("#anni").value);

  persone.createListPersone();
}
