let db = db.getSiblingDB("biblioteca");
mylibros = db.libros.find({});
console.log(mylibros);