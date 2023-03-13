function creaOggetto() {
  let nomeAnimale = document.getElementById("nomeAnimale").value;
  let nomeCompratore = document.getElementById("nomeCompratore").value;
  let specieAnimale = document.getElementById("specieAnimale").value;
  let razza = document.getElementById("razza").value;

  class Animali {
    constructor(nomeAnimale, nomeCompratore, specieAnimale, razza) {
      this.nomeAnimale = nomeAnimale;
      this.nomeCompratore = nomeCompratore;
      this.specieAnimale = specieAnimale;
      this.razza = razza;
    }
  }
  let animale = new Animali(nomeAnimale, nomeCompratore, specieAnimale, razza);
  console.log(Animali);
  console.log(animale);
  let arrayObj = [];

  const container = document.getElementById("container");

  const contenuto = JSON.stringify(animale);
  console.log(contenuto);
  container.innerHTML += contenuto + `<br/>`;
}
