class Persona {
  constructor(nome, cognome, anni) {
    this.nome = nome;
    this.cognome = cognome;
    this.anni = anni;
  }
  createListPersone() {
    let lista = document.createElement("ol");
    let li = document.createElement("li");
    lista.appendChild(li);

    li.innerHTML += `${this.nome}${this.cognome}${this.anni}`;
    // li.innerHTML += this.cognome;
    // li.innerHTML += this.anni;

    let persone = document.querySelector("#persone");
    persone.appendChild(lista);
  }
}

function aggiungiPersona() {
  document.querySelector("#persone").innerHTML = "";
  let persone = new Persona(document.querySelector("#nome").value, document.querySelector("#cognome").value, document.querySelector("#anni").value);

  persone.createListPersone();
}
