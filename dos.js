libros = [
  {"titulo": "El Quijote", "autor": "Miguel de Cervantes"},
  {"titulo": "Cien Años de Soledad", "autor": "Gabriel García Márquez"},
  {"titulo": "La Sombra del Viento", "autor": "Carlos Ruiz Zafón"},
  {
      codigo: 3, 
      nombre: 'Aprenda PHP',
      autor: 'Mario Molina',
      editoriales: ['Planeta']
 },
 {
      codigo: 4, 
      nombre: 'Java en 10 minutos',  
      autor: 'Barros Sergio',
      editoriales: ['Planeta','Siglo XXI']
 },


  {"titulo": "La Sombra del Viento", "autor": "Carlos Ruiz Zafón"}
];

db.libros.drop();
db.libros.insertMany(libros);

console.log(libros);
// print(db.libros.find().count());
// db.libros-delteMany({});
// print(db.libros.find().count());

//////

