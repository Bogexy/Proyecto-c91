var box;

function setup() { //todas las caracteristicas principales
  createCanvas(600,600);//crear lienzo
  box = createSprite(300,300,60,60);
  
}

function draw() //cargar lo que se va a mostrar en el programa
{
  background("cyan");
  if (keyDown("w"))
  {
    box.position.y = box.position.y -5;
    background("red");
  }

  if (keyDown("s"))
  {
    box.position.y = box.position.y +10/2;
    background("blue");
  }

  if (keyDown("a"))
  {
    box.position.x = box.position.x -5;
    background("green");
  }

  if (keyDown("d"))
  {
    box.position.x = box.position.x +5;
    background("magenta");
  }

  
  


  drawSprites();
}




