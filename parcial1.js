
//use cursos_online

// limpiar
db.cursos.drop()
db.estudiantes.drop()
db.inscripciones.drop()

// cursos

db.cursos.insertMany([
{
    _id: 1,
    titulo: "Introducción a MongoDB",
    descripcion: "Curso básico de bases de datos NoSQL con MongoDB",
    duracion: 20
},
{
    _id: 2,
    titulo: "JavaScript desde cero",
    descripcion: "Curso inicial de programación con JavaScript",
    duracion: 30
},
{
    _id: 3,
    titulo: "Diseño Web",
    descripcion: "Curso de HTML, CSS y diseño responsive",
    duracion: 25
}
])

// estudiantes

db.estudiantes.insertMany([
{
    _id: 1,
    nombre: "Ana López",
    correo: "ana@gmail.com"
},
{
    _id: 2,
    nombre: "Carlos Pérez",
    correo: "carlos@gmail.com"
},
{
    _id: 3,
    nombre: "Lucía Gómez",
    correo: "lucia@gmail.com"
}
])


//inscripciones

db.inscripciones.insertMany([
{
    _id: 1,
    idEstudiante: 1,
    idCurso: 1,
    fechaInscripcion: ISODate("2025-05-10")
},
{
    _id: 2,
    idEstudiante: 2,
    idCurso: 1,
    fechaInscripcion: ISODate("2025-06-15")
},
{
    _id: 3,
    idEstudiante: 3,
    idCurso: 2,
    fechaInscripcion: ISODate("2025-07-20")
}
])


//consultas

db.inscripciones.aggregate([
{
    $match: {
        fechaInscripcion: {
            $gte: ISODate("2025-01-01"),
            $lte: ISODate("2025-12-31")
        }
    }
},
{
    $group: {
        _id: "$idCurso",
        cantidadInscriptos: { $sum: 1 }
    }
}
])