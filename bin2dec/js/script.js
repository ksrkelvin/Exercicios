
let res = document.getElementById('res')


function bin2dec(){
    let input = document.getElementById('input').value
    if(input.length == '' || isBin(input) == false || input < 0){
        res.innerHTML = `<p class="erro">[ERRO]: Valor invalido`
    }else{
        res.innerHTML = `<p> o valor ${input} convertido para decimal é igual a: </p>`
        


        /* convertendo */
        let bin = input
        let dec = 0
        for (let c = 0; c < bin.length; c++){
            dec += Math.pow(2, c) * input[input.length - c - 1]
            
        }
        

        res.innerHTML +=`<p>${dec}</p>`
    }
}

function isBin(input){
    for(let c = 0; c < input.length; c++){
        if(input[c] > 1)
        return false
    }

}