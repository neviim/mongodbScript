db.getCollection('carros').find(
   {
        'carro': {
            'data': {
                'tracao': 'FR',
                'ano': '2015' 
            }
        }
    }
)