// Clase Padre
class Persona {
  constructor(info) {
    this.nombre = info.nombre;
    this.edad = info.edad;
    this.posicion = info.posicion;
    this.equipo = info.equipo;
    this.estadisticas = info.estadisticas;
    this.lesionada = info.lesionada;
    this.internacional = info.internacional;
  }

  presentarse() {
    return `¡Hola! Soy ${this.nombre}, tengo ${this.edad} años y juego como ${this.posicion} en el equipo ${this.equipo}.`;
  }

  mostrarEstadisticas() {
    return `${this.nombre} ha marcado ${this.estadisticas.goles} goles, ha dado ${this.estadisticas.asistencias} asistencias y ha jugado ${this.estadisticas.partidosJugados} partidos.`;
  }
}

// Clase Hija
class Jugadora extends Persona {
  constructor(info) {
    super(info);
    this.lesionada = info.lesionada;
    this.internacional = info.internacional;
  }

  entrenar() {
    return `${this.nombre} está entrenando para mejorar su rendimiento en el equipo.`;
  }

  revisarLesion() {
    if (this.lesionada) {
      return `${this.nombre} está lesionada y no puede jugar en este momento.`;
    } else {
      return `${this.nombre} no está lesionada y está lista para jugar.`;
    }
  }
}

// Objeto de ejemplo
const jugadoraAlexMorgan = {
  nombre: "Alexandra Patricia Morgan",
  edad: 34,
  posicion: "DL", // Delantera
  equipo: "San Diego Wave Fútbol Club",
  estadisticas: {
    goles: 120,
    asistencias: 60,
    partidosJugados: 201,
  },
  lesionada: false,
  internacional: true,
};


// Crear instancia de Jugadora
const alex = new Jugadora(jugadoraAlexMorgan);

// Mostrar resultados
console.log(alex.presentarse());
console.log(alex.mostrarEstadisticas());
console.log(alex.entrenar());
console.log(alex.revisarLesion());
