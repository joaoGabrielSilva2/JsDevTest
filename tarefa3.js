const fruits = [
    'apple' , 'pineapple' , 'orange' , 'pineapple' , 'orange' , 'apple',  'orange', 'apple' , 'pineapple'
]

function countOccurrences(lista) {
    let count = {}
    lista.forEach(item => {
        count[item] = lista.filter(x => x == item).length
    })
    return(count)
}

const howMuchFruits = countOccurrences(fruits)
console.log(howMuchFruits)

/* O método "forEach" faz o trabalho de contar os itens do array, e "para cada" item repetido, adiciona um no
seu respectivo atributo do objeto "count"*/