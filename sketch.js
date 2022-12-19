var numeroaleatorio;
var score = 0;
var trex, trex_running;
var trexmorto
var fundo, imagemdefundo;
var gameover, imagemdogameover
var nuvem, imagemdanuvem;
var cactus, imagemdocactus1, imagemdocactus2, imagemdocactus3, imagemdocactus4, imagemdocactus5, imagemdocactus6;
var state = 1;
var cactusgrupo
var nuvensgrupo
var pulosom, checksom, mortesom
var restart, restartimagem
function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  imagemdefundo = loadImage("ground2.png");
  imagemdanuvem = loadImage("cloud.png");
  imagemdocactus1 = loadImage("obstacle1.png")
  imagemdocactus2 = loadImage("obstacle2.png")
  imagemdocactus3 = loadImage("obstacle3.png")
  imagemdocactus4 = loadImage("obstacle4.png")
  imagemdocactus5 = loadImage("obstacle5.png")
  imagemdocactus6 = loadImage("obstacle6.png")
  restartimagem = loadImage("restart.png")
  trexmorto = loadAnimation("trex_collided.png")
  checksom = loadSound(" checkpoint.mp3")
  mortesom = loadSound("die.mp3")
  pulosom = loadSound("jump.mp3")

  imagemdogameover = loadImage("gameOver.png")


}

function setup() {
  createCanvas(600, 200);
  fundo = createSprite(50, 158);
  trex = createSprite(100, 150);
  restart = createSprite(300, 150);
  trex.scale = 0.5;
  gameover.visible = false;
  restart.visible = false;
  gameover = createSprite(300, 100);

  trex.addAnimation("correndo", trex_running);
  trexmorto.addAnimation("morto",trexmorto)
  fundo.addAnimation("fundinho", imagemdefundo);
  gameover, addImage("fim", imagemdogameover);
  restart = addImage("restart", restartimagem);
  fundo.velocityX = -5;
  
  trex.bouceOff.fundo
  arvoregrupo = new Group();
  nuvensgrupo = new Group();
}






function draw() {



  background("white")
  if (state == 1) {

    text("Score: = " + score, 500, 50);
    score = score + 1;
    if (fundo.x < 0) {
      fundo.x = fundo.width / 2;
      if(score%100==0){
       checksom.play();}
    };
    trex.collide(fundo);
    if (cactus.isTouching(trex)) {
      state = 0
    }


    if (keyDown("space") && trex.y > 100) {
      
      trex.velocityY = - 10
   pulosom.play();
      
    }
    spawncactus();
    spawnnuvem();
  
  }

  if (state = 0){
    ground.velocityX = 0;
    trex.velocityX = 0;
    cactusgrupo.setVelocityXEach(0);
    nuvensgrupo.setVelocityXEach(0);
    gameover.visible = true;
    restart.viseible = true;
  cactusgrupo.setLifetimeEach(-1);
  nuvensgrupo.setLifetimeEach(-1);
  trex.changeAnimation("morreu", trexmorto);
  mortesom.play();}

 if(mousePressedOver(restart)){
 score = 0 ;
 state = 1;
 trex.changeAnimation(trex_running)   
 cactusgrupo.destroyEach();
 nuvensgrupo.destroyEach()
 gameover.visible = false

 }





  
  drawSprites();
  
}






function spawnnuvem() {

  if (frameCount % 60 == 0) {
    nuvem = createSprite(550, Math.round(random(0, 200)));
    nuvensgrupoGroup.add(nuvem);
    nuvem.velocityX = -3;
    nuvem.addAnimation("nuvenzinha", imagemdanuvem);

    nuvem.lifetime = 200;

    nuvem.depth = trex.depth;
    trex.depth = trex.depth + 1;

  }

}

function spawncactus() {
  numeroaleatorio = Math.round(random(1, 6));


  if (frameCount % 200 == 0) {
    cactus = createSprite(600, 130);
    cactusGroup.add(cactus);
    numeroaleatorio = Math.round(random(1, 6));
    cactus.velocityX = (-2 + score/100)
    cactus.lifetime = 300;
    cactus.scale = 0.7

    switch (numeroaleatorio) {
      case 1:
        cactus.addImage(imagemdocactus1);
        break;


      case 2:
        cactus.addImage(imagemdocactus2);
        break;


      case 3:
        cactus.addImage(imagemdocactus3);
        break;


      case 4:
        cactus.addImage(imagemdocactus4);
        break;


      case 5:
        cactus.addImage(imagemdocactus5);
        break;


      case 6:
        cactus.addImage(imagemdocactus6);
        break;










    }

  };



}

