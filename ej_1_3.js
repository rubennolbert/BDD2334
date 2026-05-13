
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




db.libros.drop();
db.libros.insertOne(
    {
        _id: 1, 
        titulo: 'El aleph',
        autor: 'Borges',
        editorial: ['Siglo XXI','Planeta'],
        precio: 20,
        cantidad: 50 
    }
);
db.libros.insertOne(
    {
        _id: 2, 
        titulo: 'Martin Fierro',
        autor: 'Jose Hernandez',
        editorial: ['Siglo XXI'],
        precio: 50,
        cantidad: 12
    }
);
db.libros.insertOne(
    {
        _id: 3, 
        titulo: 'Aprenda PHP',
        autor: 'Mario Molina',
        editorial: ['Siglo XXI','Planeta'],
        precio: 50,
        cantidad: 20
    }
);
db.libros.insertOne(
    {
        _id: 4, 
        titulo: 'Java en 10 minutos',
        editorial: ['Siglo XXI'],
        precio: 45,
        cantidad: 1 
    }
);