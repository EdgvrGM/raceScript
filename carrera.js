import Corredor from "./corredor.js";

export default class Carrera {
  constructor(distancia) {
    this.distancia = distancia;
    this.d1 = 0;
    this.d2 = 0;
    this.c1 = new Corredor("Tortuga");
    this.c2 = new Corredor("Liebre");
  }

  avance() {
    let x = 1 + Math.floor(Math.random() * 10);
    let y = 1 + Math.floor(Math.random() * 100);

    if (x <= 5) {
      this.d1 += 3;
    } else if (x >= 5 && x <= 8) {
      this.d1 += 1;
    } else {
      this.d1 -= 6;
    }

    if (y <= 20) {
      this.d2 += 0;
    } else if (y >= 21 && y <= 40) {
      this.d2 += 9;
    } else if (y >= 41 && y <= 50) {
      this.d2 -= 12;
    } else if (y >= 51 && y <= 85) {
      this.d2 += 1;
    } else {
      this.d2 -= 2;
    }
  }

  inicio() {
    let victoria = 0;
    let winner = document.getElementById("winner");
    while (victoria == 0) {
      this.avance();
      if (this.d1 < this.distancia && this.d2 < this.distancia) {
        console.log("-------------------------------------------------");
        console.log(`${this.c1.nombre} esta en la posicion ${this.d1}`);
        console.log(`${this.c2.nombre} esta en la posicion ${this.d2}`);
      } else if (this.d1 >= this.distancia) {
        victoria = 1;
      } else if (this.d2 >= this.distancia) {
        victoria = 2;
      } else {
        victoria = 1321412;
      }
    }
    if (victoria == 1) {
      console.log(`${this.c1.nombre} Es el ganador!!`);
      winner.innerHTML = `${this.c1.nombre} es el ganador!!`;
    } else if (victoria == 2) {
      console.log(`${this.c2.nombre} Es el ganador!!`);
      winner.innerHTML = `${this.c2.nombre} es el ganador!!`;
    } else {
      console.log("EMPATE");
      winner.innerHTML = "Empate";
    }
  }
}
