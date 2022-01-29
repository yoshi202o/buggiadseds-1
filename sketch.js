 var bg;
 var player;
function preload (){
 bg = loadImage("pastizales.jpg");  
 player = loadImage("jugador.jpg")
}


function setup (){
createCanvas(1900,950);
p1 = createSprite(200,850)
g1= createSprite(950,950,1900,50)
g1.shapeColor="brown"
g2 =new Plataform (900,800,200,300)
}


function draw (){
background(20,20,10);
image(bg, 0,0,displayWidth*5, displayHeight);
//moviemto jugador
if (keyDown("RIGHT")){
    p1.x += 13
}

if (keyDown("LEFT")){
    p1.x -= 13
}


     

p1.velocityY += 0.8
p1.collide(g1,jump)
p1.collide(g2,jump)
console.log(p1.collide)
drawSprites();


}

function jump(){
    if (keyDown("space")){
        p1.velocityY = p1.velocityY -17
    }
    
}