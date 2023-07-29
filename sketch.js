var  gover,goverImg;

function preload(){
goverImg.loadImage("gameover.png");
  
}

function setup() {
    createCanvas(600,200);
    gover=createSprite(50,160,20,60);
 gover.addImage(goverImg);
 gover.scale=0.6; 
}

function draw() {
 drawSprites ();
}