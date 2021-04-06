function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("img")
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    


    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`
    if( hora >= 0 && hora < 12){
        //Bom dia
        msg.innerHTML += "<p>Bom dia hora de um bom café</p>"
        img.src = "/assets/fmanha.png"
        document.body.style.backgroundColor = "#cdefed"
    }else if(hora >= 12  && hora <= 18){
        //Boa tarde
        msg.innerHTML += "<p>Boa tarde aguente firme falta pouco</p>"
        img.src = "/assets/ftarde.png"
        document.body.style.backgroundColor = "#b99f84"
    }else{
        //Boa noite
        msg.innerHTML += "<p>Bom noite mais um dia concluido</p>"
        img.src = "/assets/fnoite.png"
        document.body.style.backgroundColor = "#013164"
    }
}

