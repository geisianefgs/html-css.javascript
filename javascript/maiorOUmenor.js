let v = [1, 2, 3]

let maior = v[0]
let menor = v[0]

for (let p = 1; p < v.length; p++){
    if(v[p] > maior){
        maior = v[p]
    }
    if(v[p] < menor){
        menor = v[p]
    }
}

console.log(`Maior número é ${maior} e o menor número é ${menor}`)

