const users = [
    { id: 1 , name: 'Joao' , age: 20 , isActive: true } , 
    { id: 2 , name: 'Maria' , age: 22 , isActive: false } ,
    { id: 3 , name: 'Gabriel' , age: 35 , isActive: true } ,
    { id: 4 , name: 'Vittoria' , age: 10 , isActive: true }
]
function transformData(lista) {
  return lista.filter(user => user.isActive == true);
}

console.log(transformData(users))

/*foi usado o método ".filter" para filtrar os objetos existentes no array, retornando assim somente os
objetos onde isActive == true, este problema também poderia ser resolvido utilizando a função "for .. of", 
porem ficaria menos enxuto*/