var cat, mouse;
var garden;
var gardenImg, cat1Img, mouse1Img, catimg2, mouseimg2;

function preload() {
    gardenImg = loadImage("garden.png");
    cat1Img = loadImage("cat1.png");
    mouse1Img = loadImage("mouse1.png");
    catimg2 = loadAnimation("cat2.png","cat3.png");
    mouseimg2 = loadAnimation("mouse2.png","mouse3.png");
    catimg3 = loadImage("cat4.png");
    mouseimg3 = loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    garden = createSprite(500,400,100,100);
    garden.addImage("gardenImage",gardenImg);
    cat = createSprite(800,600,20,20);
    cat.addImage("catSitting",cat1Img)
    cat.scale = 0.2;
    mouse = createSprite(300,600,20,20);
    mouse.addImage("mousePresent",mouse1Img);
    mouse.scale = 0.2;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x-mouse.x<(cat.width-mouse.width)/3){
        mouse.addImage("mouseCollided",mouseimg3);
        mouse.changeImage("mouseCollided");
        cat.addImage("catCollided",catimg3);
        cat.changeImage("catCollided");
        cat.velocityX = 0
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode===RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing", mouseimg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
  }

  if(keyCode===LEFT_ARROW){
    cat.addAnimation("catWalking",catimg2);
    cat.changeAnimation("catWalking");
    cat.velocityX = -5
  }

}
