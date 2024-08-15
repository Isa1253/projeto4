let palavra;
let som;
let imagem;






function setup() {
  createCanvas(600, 600);
palavra = tokito();
som.loop();



}
function preload(){
  imagem = loadImage("imagem.png")
som = loadSound("som.mp3");
}

function draw() {
  muichiro();
  tokito();
let maximo = width;
let minimo = 0;
let aparecer = map(mouseX,0,width,1,palavra.length);
let inicio = palavra.substring(0, aparecer);
text(inicio, 300,300);
}

function muichiro(){
background("yellow");
image(imagem,0,0,600,600);
  fill ("lightyellow");
textSize(80);
textAlign(CENTER,CENTER);
}

function tokito(){
  let palavras = ["my not responsibility" , "nda" , "happier than ever" ,"hit me hard and soft"];
  return random(palavras);
}