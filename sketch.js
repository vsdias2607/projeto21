var jungleImg, jungle;
var rockImg, rock;
var explorador, exploradorImg;
var gameState = "play"
var invisibleBlockGroup


function preload(){
    jungleImg = loadImage("jungle.png");
    rockImg  = loadImage("rock.png");
    exploradorImg = loadImage("explorador.png");
}

function setup() {
    createCanvas(600,600);

    jungle = createSprite(300,300);
    jungle.addImage("jungle",jungleImg);
    jungle.velocity = 1;

    rock = createSprite(300,300,50,50); 
    rock.scale = 0.3;
    rock.addImage("rock", rockImg);

    explorador = createSprite(200,200,50,50); 
    explorador.scale = 0.3;
    explorador.addImage("explorador", rockImg);
}

function draw() {
    background(255);
  If(jungle.y> 500)
  {
    jungle.y = 300
  }

  If (gameState==="play")
  {
        If(keyDown("space"))
     {
        explorador.velocityY = -10;
     }   
  }
  If(rock.isTouching(explorador))
  {
    explorador.velocity = 0;
  }
  If(invisibleBlockGroup.isTouching(explorador || explorador> 600))
  {
    explorador.destroy();
    gameState = "end"
  }

  drawSprites();
}
    If(gameState=== "end")
    {
        strocke("yellow");
        fill("yellow");
        textSize(30);
        text("Game Over", 230,250)
    }

    //atribuir tempo de vida para a porta, escalador e bloco invisivel
        rock.lifetime= 800;
        explorador.lifetime= 800;
        invisibleBlockGroup.lifetime= 800;
    // adicione cada obstaculo ao grupo obstacleGroup.add(obstacle);
        rockGroup.add(rock);
        invisibleBlockGroup.debug = false;
        invisibleBlockGroup.add(invisibleBlock);





