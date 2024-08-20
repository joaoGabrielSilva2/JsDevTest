const arr1 = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 35 }
]
const arr2 = [
    { id: 1, age: 25, email:  'john@example.com' },
    { id: 2, email: 'jane@example.com'},
    { id: 3, age: 35 }
]

function mergeArrays(arr1, arr2, chave){
    const mergedArray = []

    const mapa = arr1.reduce((map, obj) => {  map[obj[chave]] = obj
    return map; }, {})

    arr2.forEach(obj => {
        const valorComum = obj[chave]
        if (mapa[valorComum]) {
            Object.assign(mapa[valorComum], obj)
        }   else {
            mergedArray.push(obj)
        }
      })
    Object.values(mapa).forEach(obj => mergedArray.push(obj))
    
    return mergedArray
} 

const resultado = mergeArrays(arr1, arr2, 'id')

console.log (resultado)
