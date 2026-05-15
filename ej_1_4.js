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

cantMax = db.medicamentos.find().sort({cantidad: -1}).limit(1);
let miCant = cantMax.next().cantidad;
let rdo = db.medicamentos.find({cantidad:miCant}).sort({cantidad: -1});
rdo.forEach(function(medicamento){
    print(medicamento.nombre + " - " + medicamento.laboratorio);
});

//limit establece la cantidad de elementos a traer

//pagina 38





db.articulos.drop()
db.articulos.insertOne(
    {
        _id: 1, 
        nombre: 'MULTIFUNCION HP DESKJET 2675',
        rubro: 'impresora',
        precio: 3000,
        stock: 20 
    }
);
db.articulos.insertOne(
    {
        _id: 2, 
        nombre: 'MULTIFUNCION EPSON EXPRESSION XP241',
        rubro: 'impresora',
        precio: 3700,
        stock: 5 
    }
);
db.articulos.insertOne(
    {
        _id: 3, 
        nombre: 'LED 19 PHILIPS',
        rubro: 'monitor',
        precio: 4500,
        stock: 2
    }
);
db.articulos.insertOne(
    {
        _id: 4, 
        nombre: 'LED 22 PHILIPS',
        rubro: 'monitor',
        precio: 5700,
        stock: 4
    }
);
db.articulos.insertOne(
    {
        _id: 5, 
        nombre: 'LED 27 PHILIPS',
        rubro: 'monitor',
        precio: 12000,
        stock: 1
    }
);
db.articulos.insertOne( 
    {
        _id: 6, 
        nombre: 'LOGITECH M90',
        rubro: 'mouse',
        precio: 300,
        stock: 4
    }
);