db.libros.drop();

db.libros.insertMany(
 [
    {
        _id: 1,
        codigo: 3, 
        nombre: 'Aprenda PHP',
        autor: 'Mario Molina',
        editoriales: ['Planeta']
    },
    {
        _id: 1,
        codigo: 4, 
        nombre: 'Java en 10 minutos',
        autor: 'Barros Sergio',
        editoriales: ['Planeta','Siglo XXI']
    }
 ]
)

db.libros.find();