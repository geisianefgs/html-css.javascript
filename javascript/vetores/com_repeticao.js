numero = [1,2,12]

for(i = 0; i < numero.length; i++){
    console.log(`Posição ${i} valor ${numero[i]}`)
}
console.log()

for(i in numero){
    console.log(`Posição ${i} valor ${numero[i]}`) //versão simplificada que mostra os valore e posição
}
console.log()
for (i of numero){
    console.log(i) //versão simplificada que mostra apenas os valores
}