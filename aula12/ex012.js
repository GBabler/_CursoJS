var agoraHora = new Date()
var agoraMin = new Date()
var agoraSec = new Date()
var hora = agoraHora.getHours()
var min = agoraMin.getMinutes()
var sec = agoraSec.getSeconds()

console.log(`Agora sao exatamente ${hora}:${min}:${sec}`)

if(hora <= 12){

    console.log('Bom Dia')

}else if(hora > 12 && hora < 18){
    console.log('Boa tarde')
}else{
    console.log('Boa noite')
}