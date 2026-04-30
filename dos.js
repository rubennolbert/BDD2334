// Función para sumar dos variables
function sumar(a, b) {
    return a + b;
}

// Ejemplo de uso
console.log(sumar(5, 3)); // Resultado: 8

libros = [
  {"titulo": "El Quijote", "autor": "Miguel de Cervantes"},
  {"titulo": "Cien Años de Soledad", "autor": "Gabriel García Márquez"},
  {"titulo": "La Sombra del Viento", "autor": "Carlos Ruiz Zafón"}
];

db.libros.drop();
db.libros.insertMany(libros);
