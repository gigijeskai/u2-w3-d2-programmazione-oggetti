class Persona {
  constructor(nome, cognome, anni) {
    this.nome = nome;
    this.cognome = cognome;
    this.anni = anni;
  }
  createTablePersone() {
    let table = document.createElement("table");
    let tr = document.createElement("tr");
    table.appendChild(tr);
    let td = document.createElement("td");
    tr.appendChild(td);
    td.innerHTML += this.nome;
    td.innerHTML += this.cognome;
    td.innerHTML += this.anni;

    let persone = document.querySelector("#persone");
    persone.appendChild(table);
  }
}

function aggiungiPersona() {
  let persone = new Persona(document.querySelector("#nome").value, document.querySelector("#cognome").value, document.querySelector("#anni").value);
  persone.createTablePersone();
}
