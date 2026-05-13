db.medicamentos.drop();
db.medicamentos.insertOne(
    {
        _id: 1, 
        nombre: 'Sertal',
        laboratorio: 'Roche',
        precio: 5.2,
        cantidad: 100 
    }
);
db.medicamentos.insertOne(
    {
        _id: 2, 
        nombre: 'Buscapina',
        laboratorio: 'Roche',
        precio: 4.10,
        cantidad: 200 
    }
);
db.medicamentos.insertOne(
    {
        _id: 3, 
        nombre: 'Amoxidal 500',
        laboratorio: 'Bayer',
        precio: 15.60,
        cantidad: 100 
    }
);
db.medicamentos.insertOne(
    {
        _id: 4, 
        nombre: 'Paracetamol 500',
        laboratorio: 'Bago',
        precio: 1.90,
        cantidad: 200 
    }
);
db.medicamentos.insertOne(
    {
        _id: 5, 
        nombre: 'Bayaspirina',
        laboratorio: 'Bayer',
        precio: 2.10,
        cantidad: 150 
    }
);
db.medicamentos.insertOne(
    {
        _id: 6, 
        nombre: 'Amoxidal jarabe',
        laboratorio: 'Bayer',
        precio: 5.10,
        cantidad: 50 
    }
);

let rdo = db.medicamentos.find().sort({laboratorio: 1, nombre: 1}).limit(2);
rdo.forEach(function(medicamento){
    print(medicamento.nombre + " - " + medicamento.laboratorio);
});

//limit establece la cantidad de elementos a traer

//pagina 38