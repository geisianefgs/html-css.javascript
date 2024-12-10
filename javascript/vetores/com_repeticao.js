numero = [2, 1, 9, 0, 3]

for(pos = 0; pos <= numero.length; pos++){
    console.log(`Posição ${pos} valor ${numero[pos]}`)
}

for(pos in numero){
    console.log(`Posição ${pos} valor ${numero[pos]}`) //versão simplificada de respetição
}