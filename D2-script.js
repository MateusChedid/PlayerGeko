const playPause = document.querySelector(".playPause")
const back = document.querySelector(".back")
const next = document.querySelector(".next")
const meuAudio = document.querySelector("audio")
const capa = document.querySelector(".capa")
const nomeMusica = document.querySelector(".nomeMusica")
const autorMusica = document.querySelector(".autorMusica")

let initConfig = false;
var index = 1;

//Lista de titulos de musicas
titulos = {
  1: "piriquitinho",
  // 1: "Purpose",
  2: "Enchanted",
  3: "Dragon Castle",
  4: "Filaments",
  5: "Traveling Symphony",
  6: "Stars",
  7: "Omega"
}

//Lista de autores de cada musica
autores = {
  1: "roveto",
  // 1: "Jonny Easton",
  2: "Keys Of Moon 🇺🇸",
  3: "Makai Symphony",
  4: "Scott Buckley",
  5: "SavfkMusic",
  6: "Scott Buckley",
  7: "Scott Buckley"
}

var qntdMusicas = Object.keys(titulos).length

//Função inicial que configura a primeira tela
function init_config() {
  if (!initConfig) {
    meuAudio.src = `music${index}.mp3`;
    capa.src = `image${index}.png`;
    nomeMusica.textContent = titulos[index]; 
    autorMusica.textContent = autores[index]; 
    initConfig = true;
  }
  
}

//Função para pausar-despausar a música
playPause.addEventListener('click',function(){
  if (meuAudio.paused) {
    playPause.src = 'pause.png'
    playPause.style.height = '25px'
    meuAudio.play();
  } else {
    playPause.src = 'play.png'
    playPause.style.height = '30px'
    meuAudio.pause();
  }
})

//Função para passar para a próxima música
function proxima(){
  if (index < qntdMusicas){
    if (back.src != 'play-back.png'){
      back.src = 'play-back.png'
      back.style.cursor = 'pointer'
    }
    index += 1;
    atualizar(index);
  }
  if(index == qntdMusicas){
    next.src = 'play-forward (2).png'
    next.style.cursor = 'default'
    
  }
}

//Função para voltar para a música anterior música
function voltar(){
  if (index > 1) {
    if (next.src != 'play-forward.png'){
      next.src = 'play-forward.png'
      next.style.cursor = 'pointer'
    }
    index -= 1;
    atualizar(index);
  } 
  if(index == 1){
    back.src = 'play-back (2).png'
    back.style.cursor = 'default'
  }
}

//Função chamada sempre que uma nova musica é iniciada
function atualizar(index) {
  meuAudio.src = `music${index}.mp3`;
  capa.src = `image${index}.png`;
  nomeMusica.textContent = titulos[index]; 
  autorMusica.textContent = autores[index]; 
  meuAudio.play();
  playPause.src = 'pause.png';
  playPause.style.height = '25px';
}

//Passa para a próxima musica automaticamente
meuAudio.addEventListener('ended', function() {
  proxima();
})


init_config();
next.addEventListener('click',proxima);
back.addEventListener('click',voltar);
