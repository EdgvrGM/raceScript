class Corredor {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

let c1 = new Corredor("Mauricio");
let c2 = new Corredor("Sebastian");

class Carrera {
  constructor(distancia) {
    this.distancia = distancia;
    this.d1 = 0;
    this.d2 = 0;
  }

  avance() {
    let x = 1 + Math.floor(Math.random() * 6);
    let y = 1 + Math.floor(Math.random() * 6);

    switch (x) {
      case 1:
        this.d1 += 3;
        break;
      case 2:
      case 3:
        this.d1 += 1;
        break;
      case 4:
      case 5:
      case 6:
        this.d1 += 2;
        break;
    }
    switch (y) {
      case 1:
        this.d2 += 3;
        break;
      case 2:
      case 3:
        this.d2 += 1;
        break;
      case 4:
      case 5:
      case 6:
        this.d2 += 2;
        break;
    }
  }
  inicio() {
    let victoria = 0;
    let winner = document.getElementById("winner");
    while (victoria == 0) {
      this.avance();
      if (this.d1 < this.distancia && this.d2 < this.distancia) {
        console.log("-------------------------------------------------");
        console.log(`${c1.nombre} esta en la posicion ${this.d1}`);
        console.log(`${c2.nombre} esta en la posicion ${this.d2}`);
      } else if (this.d1 >= this.distancia) {
        victoria = 1;
      } else if (this.d2 >= this.distancia) {
        victoria = 2;
      } else {
        victoria = 1321412;
      }
    }
    if (victoria == 1) {
      console.log(`${c1.nombre} Es el ganador!!`);
      winner.innerHTML = `${c1.nombre} es el ganador!!`;
    } else if (victoria == 2) {
      console.log(`${c2.nombre} Es el ganador!!`);
      winner.innerHTML = `${c2.nombre} es el ganador!!`;
    } else {
      console.log("EMPATE");
      winner.innerHTML = "Empate";
    }
  }
}

let app = new Carrera(100);
app.inicio();
