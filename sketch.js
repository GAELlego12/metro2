const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var slingShot;
var metro,metroImg;
var fondo,fondoImg;
var fondo2,fondo2Img;
var roca,rocaImg;
var mueble,muebleImg;
var banco,bancoImg;
var cubeta,cubetaImg;
var libros,librosImg;
var puente,puenteImg;
var m1,m1Img;
var m2,m2Img;
function preload(){
  metroImg = loadImage("metro.png");
  fondoImg = loadImage("1.png");
  fondo2Img = loadImage("2.png");
  rocaImg = loadImage("roca.png");
  muebleImg = loadImage("mueble.png");
  bancoImg = loadImage("banco.png");
 cubetaImg = loadImage("cubeta.png");
librosImg = loadImage("libros.png");
puenteImg = loadImage("puente.png");
m1Img = loadImage("m1.png");
m2Img = loadImage("m2.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
  fondo2 = createSprite(11600,500);
fondo2.addImage("fondo2",fondo2Img); 
  fondo = createSprite(3900,500);
fondo.addImage("fondo",fondoImg); 
  metro = new Metro(875,950,10,10);
fondo.scale  = 1;
roca = createSprite(2940,690);
roca.addImage("roca",rocaImg); 
mueble = createSprite(2640,790);
mueble.addImage("mueble",muebleImg); 
mueble.debug = false;
mueble.setCollider("rectangle", 0, 0, 350, 480); 
banco = createSprite(2374,890);
banco.addImage("banco",bancoImg); 
cubeta = createSprite(2174,890);
cubeta.addImage("cubeta",cubetaImg); 
cubeta.debug = false;
cubeta.setCollider("rectangle", 0, 0, 150, 240); 
libros = createSprite(1974,940);
libros.addImage("libros",librosImg); 
libros.debug = false;
libros.setCollider("rectangle", 0, 0, 150, 120); 
puente = createSprite(10974,840);
puente.addImage("puente",puenteImg); 
m1 = createSprite(12974,40);
m1.addImage("m1",m1Img); 
m2 = createSprite(12974,640);
m2.addImage("m2",m2Img); 
}

function draw() {
  
background("skyblue");
 //hace que no salga de la pantalla
edges= createEdgeSprites();
metro.collide(edges);
metro.collide(roca);
metro.collide(mueble);
metro.collide(banco);
metro.collide(cubeta);
metro.collide(libros);
metro.collide(puente);
metro.collide(m1);
metro.collide(m2);
metro.velocityY = metro.velocityY + 0.6

if (keyDown("up")) {
metro.y = metro.y -36;
}
if (keyDown("left")) {
  metro.mirrorX(-1);
 fondo.x = fondo.x +8;
 fondo2.x = fondo2.x +8;
 roca.x = roca.x +8;
mueble.x = mueble.x +8;
banco.x = banco.x +8;
cubeta.x = cubeta.x +8;
libros.x = libros.x +8;
puente.x = puente.x +8;
m1.x = m1.x +8;
m2.x = m2.x +8;
}

if (keyDown("right")) {
  metro.mirrorX(+1);
fondo.x = fondo.x -8;
fondo2.x = fondo2.x -8;
roca.x = roca.x -8;
mueble.x = mueble.x -8;
banco.x = banco.x -8;
cubeta.x = cubeta.x -8;
libros.x = libros.x -8;
puente.x = puente.x -8;
m1.x = m1.x -8;
m2.x = m2.x -8;
}
if (keyDown("shift")) {

  if (keyDown("left")) {
    metro.mirrorX(-1);
   fondo.x = fondo.x +8;
   fondo2.x = fondo2.x +8;
   roca.x = roca.x +8;
  mueble.x = mueble.x +8;
  banco.x = banco.x +8;
  cubeta.x = cubeta.x +8;
  libros.x = libros.x +8;
  puente.x = puente.x +8;
  m1.x = m1.x +8;
m2.x = m2.x +8;
  }
  
  if (keyDown("right")) {
    metro.mirrorX(+1);
  fondo.x = fondo.x -8;
  fondo2.x = fondo2.x -8;
  roca.x = roca.x -8;
  mueble.x = mueble.x -8;
  banco.x = banco.x -8;
  cubeta.x = cubeta.x -8;
  libros.x = libros.x -8;
  puente.x = puente.x -8;
  m1.x = m1.x -8;
  m2.x = m2.x -8;
  }
}
drawSprites();

}