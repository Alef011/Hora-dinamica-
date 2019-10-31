function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date
var hora = 23
msg.innerHTML = `Agora Vacaria, são ${hora}hrs.`
if(hora >=0 && hora < 12){
  img.src = 'demnha.png'
  document.body.style.background = '#f1d6cd'
} else if (hora >= 12 && hora <= 18){
  img.src = 'detarde.png'
  document.body.style.background = '#cdddb6'
} else{
  img.src = 'denoite.png'
  document.body.style.background = '#091c1f'
}
}
