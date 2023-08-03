// Definir la clase Libro
class Libro {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
  }
}

// Crear instancias de libros
const libro1 = new Libro("El Quijote", "Cervantes");
const libro2 = new Libro("Odisea", "Homero");

// Crear un array de libros
const infoLibros = [libro1, libro2];

// Función para imprimir la lista de libros
function imprimirLibros(lista) {
  console.log("Información de Libros:");
  lista.forEach((libro) => {
    console.log(`   Título: ${libro.titulo}`);
    console.log(`   Autor: ${libro.autor}`);
    console.log("----------------------");
  });
}

// Llamar a la función para imprimir la lista de libros
imprimirLibros(infoLibros);