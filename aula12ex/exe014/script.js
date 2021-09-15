function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()

    if (hora > 0 && hora < 12){
        //BOM DIA
        img.src = 'img/fotomanha.png'
        document.body.style.background = "#f7be84"
        msg.innerHTML = `Agora são ${hora}:${min} da manha!.`
    } else if(hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = 'img/fototarde.png'
        document.body.style.background = "#fd752b"
        msg.innerHTML = `Agora são ${hora}:${min} da tarde!.`
    }else{
        //BOA NOITE
        img.src = 'img/fotonoite.png'
        document.body.style.background = "#4c4357"
        msg.innerHTML = `Agora são ${hora}:${min} da noite!.`
    }
}
