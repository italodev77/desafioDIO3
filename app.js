class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "ataque desconhecido";
    }
    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

const heroi1 = new Heroi("teste", 50, "mago");
const heroi2 = new Heroi("teste2", 30, "guerreiro");
const heroi3 = new Heroi("teste3", 1000, "monge");
const heroi4 = new Heroi("teste4", 25, "ninja");

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
