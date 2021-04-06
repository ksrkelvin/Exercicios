function tabuada(){
    let res = document.getElementById('res')
    let input = document.getElementById('num').value
    let table = document.getElementById('seltab')

    table.style.display = 'flex'
    table.innerHTML = ''
    table.style.border = '1px solid gray'

    if(input.length == ''){
        res.innerHTML = `<p class="erro">Não foi possivel realizar a tabuada de vazio</p>`
    }else{
        for( let c = 1 ; c <= 10; c++){
            n = Number(input)

            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`

            table.appendChild(item)
            
        }
    }

}