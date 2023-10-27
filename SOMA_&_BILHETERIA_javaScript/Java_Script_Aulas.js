console.log("DIGITE NO COMANDO SOMA, SUB ou MULT")
const comando = "soma"
    let a = 5
    let b = 10

    switch (comando) {
        case "soma":
            console.log(a + b)
            break
        case "sub":
            console.log(a - b)
            break
         case "multi":
        console.log(a * b)
        break
        default: 
        console.log("Invalid")
}
// OUTRA TESTE
console.log("***********************************************")
console.log("")

let pessoa0 = {name: "Victoria", idade: 17, dinheiro: 34.0}
let pessoa1 = {name: "Maria", idade: 18, dinheiro: 35.0}
let pessoa2 = {name: "João", idade: 19, dinheiro: 36.0}
let pessoa3 = {name: "Pedro", idade: 25, dinheiro: 37.0}
let pessoas = [pessoa0, pessoa1, pessoa2, pessoa3]

let filme = {name: "JAck chan", idadeMin: 18, custo: 20.00}

for (let i = 0; i < pessoas.length; i++) {
    pessoa_atual = pessoas[i]
    console.log(pessoa_atual.name)
    if (pessoa_atual.idade > filme.idadeMin){
        if (pessoa_atual.dinheiro > filme.custo) {
            console.log("pode assistir o filme")
            console.log("*****************************")
        } else {
            console.log("não pode assistir o filme")
            console.log("*****************************")
        }
    } else  {
        console.log("voce nao tem idade para assistir o filme")
        console.log("*********************************")
    }
}