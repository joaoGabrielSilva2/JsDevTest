const items = [
    {name: 'apple', category: 'fruit'},
    {name: 'carrot', category: 'vegetable'},
    {name: 'pineapple', category: 'fruit'},
    {name: 'brocolli', category: 'vegetable'},
    {name: 'orange', category: 'fruit'}
]

const fruits = (items.filter(item => item.category == 'fruit'))
const vegetables =  (items.filter(item => item.category == 'vegetable'))

const result ={
    fruit:  fruits,
    vegetable: vegetables
}

console.log (result)

/*Foram criadas as variaveis fruits e vegetables para armazenar os resultados das funções filter, e em seguida foi
criado o objeto result, para entregar a saída solicitada.*/
