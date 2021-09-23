function verificar(){
    var data = new Date();
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img');
        img.setAttribute('id', 'foto')



        if(fsex[0].checked){
            genero = 'Homem'
            if((idade >= 0) && (idade < 10)){
                //crianca
                img.setAttribute('src', 'img/criancahomem.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img/jovemhomem.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'img/adultohomem.png')
            } else {
                //idoso
                img.setAttribute('src','img/idosohomem.png')
              
            }


        } else if(fsex[1].checked){
            genero = 'Mulher'
            if((idade >= 0) && (idade < 10)){
                //crianca
                img.setAttribute('src', 'img/criancamulher.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','img/jovemmulher.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src','img/adultomulher.png')
            } else {
                //idoso
                img.setAttribute('src','img/idosomulher.png')
            }
        }
           
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com <strong>${idade}</strong> anos`
        res.appendChild(img)
       
        
    }
}

function reiniciar(){

    window.location.reload()
}