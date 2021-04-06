function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtAno").value
    var res = document.querySelector("#res")

    if(fano == "" || fano > ano){
        res.innerHTML = `<p id="erro"> [ERRO]: Ano ${fano} Invalido</p>`
    }else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = 'homen'
            
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', './assets/menino.png')
            }else if(idade < 22){
                //joven
                img.setAttribute('src', './assets/hjovem.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', './assets/hadulto.png')
            }else{
                //idoso
                img.setAttribute('src', './assets/idoso.png')
            }

        }else if(fsex[1].checked){
            genero = 'mulher'

            if (idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', './assets/menina.png')
            }else if(idade < 22){
                //joven
                img.setAttribute('src', './assets/mjovem.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', './assets/madulto.png')
            }else{
                //idoso
                img.setAttribute('src', './assets/idosa.png')
            }
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}