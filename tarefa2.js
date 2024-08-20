async function fetchUserData() {
    const users = await fetch('https://jsonplaceholder.typicode.com/users/')
    const resultadoConvertido = await users.json()
    const newUsers = resultadoConvertido.filter(user => user.username.startsWith('K'))
    console.log(newUsers)
}

fetchUserData()

/*foi utilizada uma função assincrona com dois modulos de espera (await), sendo o primeiro para que o programa
conseguisse recolher os dados da API e o segundo para converter esses dados para o formato de array. Após 
isso, utilizei novamente o método "filter" para fazer a distinção dos dados recolhidos, e entregar apenas os 
desejados*/

/*Não existe na API um objeto que tenha o "username" iniciado em "C", então eu usei a letra "K" para
demonstrar o funcionamento do codigo*/