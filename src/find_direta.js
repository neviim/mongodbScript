// https://specify.io/how-tos/find-documents-in-mongodb-using-the-mongo-shell
// ---

db.getCollection('carros').find({})

// ---

db.getCollection('carros').find({'carro.data.categoria': 'N500'})

// ---

db.getCollection('carros').find({
  'carro.data.construtor': { $nin: ["Ford", "Chevrolet"] }
})