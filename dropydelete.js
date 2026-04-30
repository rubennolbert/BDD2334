posts = [
  
    {
        "mensaje":  "que buen dia para aprender MongoDB",
        "fecha": new Date(),
        "likes": 0,
        "comentarios": []
    },
    {
        "mensaje":  "MondoDB es una base de daatos NoSQL muy popular",
        "fecha": new Date(),
        "likes": 10,
        "comentarios": [{
            "usuario": "Maria",
            "mensaje": "totalmente de acuerdo, es muy facil de usar"
        },
        {
            "usuario": "Carlos",
            "mensaje": "yo prefiero la bases de datos relacionales"
        }]
    }
 
];

db.posts.drop();
db.posts.insertMany(posts);
print(db.posts.find().count());

