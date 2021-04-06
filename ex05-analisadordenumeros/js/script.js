let res = document.getElementById("resArea")
let items = []


/* Adicionar */


function adicionar(){
    let input = document.getElementById("input")
    let values = document.getElementById("values")
    let view = document.getElementById('viewArea')
    let inp = Number(input.value)  // converter input para numero 



    /* limpar resultados */
    res.innerHTML = ''

   /*  Tratando erros  */
    if(input.length == "" || inp < 0 || inp > 100 ){
        res.innerHTML = `<p class="erro"> [ERRO]: Não foi possivel adicionar valor.  E: Valor invalido `

    }else{
        if(items.length == 0){
            items.push(inp)
            values.text = `o valor ${inp} foi adicionado`
            tableAdd(inp)
        }else{  // adicionando valores na tabela
                if( items.indexOf(inp) > -1){
                    res.innerHTML = `<p class="erro"> [ERRO]: Não foi possivel adicionar valor.  E: valor ja adicionado`
                    
                }else{
                    items.push(inp)
                    tableAdd(inp)
                    }
                
        }   
        
        
           
        
        //apagar valor escrito no input e deixar com focu
        input.value = ''
        input.focus()

        view.style.display = "block" // deixando view area visivel
    }
}

function tableAdd(inp){
    let opt = document.createElement('option')
    opt.text = `O valor ${inp} foi adicionado`
    opt.value = `val${inp}`
    values.appendChild(opt)
}


/* Finalizar */


function finalizar(){
    let t = tamanho(items)
    let g = maior(items)
    let p = menor(items)
    let s = soma(items)
    let m = media(items)


    res.innerHTML = `<p>Ao todo temos ${t} numeros cadastrados</p>`
    res.innerHTML += `<p>O maior numero cadastrado foi ${g}</p>`
    res.innerHTML += `<p>O menor numero cadastrado foi ${p}</p>`
    res.innerHTML += `<p>A soma dos numeros cadastrados foi ${s}</p>`
    res.innerHTML += `<p>A media dos numeros cadastrados é ${m}</p>`
}






/* Funções */

/* Quantidade */
function tamanho(i){
    return i.length
}

/* Maior Numero */

function maior(items){
    let m = items[0]
    for(i of items){
        if(i >= m){
            m = i      
        }
    }
    return m
    
}

function menor(items){
    let m = items[0]
    for(let i = 0 ; i <= items.length ; i++){
        if(items[i] <= m){
            m = items[i]
        }
    }
    return m
}

function soma(items){
    let s = 0
    for(i of items){
        s += i  
    }
    return s
}

function media(items){
    return soma(items)/items.length
}