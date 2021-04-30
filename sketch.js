var cat;
var catAnimation;
var catImg1;
var catImg2;
var mouse;
var mouseImg1;
var mouseImg2;
var mouseAnimation;
var bckgrnd;
var bckImg; 

function preload() {


bckImg = loadImage("images/garden.png")
catAnimation = loadAnimation("images/cat2.png", "images/cat3.png");
mouseAnimation = loadAnimation("images/mouse2.png", "images/mouse2.png");
catImg1 = loadAnimation("images/cat1.png");
catImg2 = loadAnimation("images/cat4.png");
mouseImg1 = loadAnimation("images/mouse1.png");
mouseImg2 = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);


    cat = createSprite(800,700,20,20);
    cat.addAnimation(catImg1);
    cat.scale = 0.2

    mouse = createSprite(200,700,20,20);
    mouse.addAnimation(mouseImg1);
    mouse.scale = 0.2

}

function draw() {

    background(bckImg);

    cat.collide(mouse)

    if(keyDown("LEFT_ARROW")){
        cat.addAnimation("runningcat",catAnimation);
        cat.velocityX = -4;
        mouse.addAnimation("singingmouse",mouseAnimation);
    }


    if(cat.isTouching(mouse)){
     cat.changeAnimation("final cat",catImg2);
     mouse.changeAnimation("final mouse",mouseImg2);
    }
    drawSprites();
}