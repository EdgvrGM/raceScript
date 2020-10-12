import Carrera from "./carrera.js";

class Main {
  constructor() {
    this.race = new Carrera(90);
  }
  iniciarCarrera() {
    this.race.inicio();
  }
}
let app = new Main();
app.iniciarCarrera();
