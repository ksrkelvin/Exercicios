function count(){
    let init = document.getElementById('init').value
    let end = document.getElementById("end").value
    let interval = document.getElementById("interval").value
    let res = document.getElementById("res")

    res.innerHTML =''
    
    //Error handling
    if(init.length == ''  ||  end.length == ''  ||  interval.length == ''){
        res.innerHTML = ` <p id="erro"> [ERRO] : Faltam dados</p>`


    }else{
        res.innerHTML = "Contando:  <br>"
        let i = Number(init)
        let f = Number(end)
        let p = Number(interval)
        
        if(p <= 0 ){
            res.innerHTML = `<p id="erro"> [ERRO] : Intervalo deve ser diferente de 0, conciderando intervalo 1</p>`
            p = 1
        }


        if(i < f){
            countCresc(i, f, p)
            

        }else{
            countDecresc(i, f, p)
        }
        res.innerHTML += `\u{1F3C1}`


}
}


//Growing count

function countCresc(i, f, p){

    for(let c = i; c <= f ; c += p){
        res.innerHTML += `${c} \u{1F449}`

    }
    

}


//Decreasing count

function countDecresc(i, f, p){

    for(let c = i; c >= f; c-= p){
    
        res.innerHTML += ` ${c} \u{1F449}`

    }
    

}