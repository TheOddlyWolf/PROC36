var Ball, database;
var position;position2;
var Ball2;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  Ball = createSprite(250,250,10,10);
  Ball.shapeColor = "red";

  Ball2 = createSprite(250,250,10,10);
  Ball2.shapeColor = "Blue";

  var BallPosition = database.ref('bola/posicion');
  BallPosition.on("value", readPosition, showError);

  var BallPosition2 = database.ref('bola2/posicion2');
  BallPosition2.on("value",readPosition2, showError);
}                      

function draw(){
  background("white");
  
    if(keyDown(LEFT_ARROW)){
      writePosition(-3,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(3,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-3);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+3);
    }

   if(keyDown(65)){
      writePosition2(-3,0);
   }
    else if(keyDown(68)){
    writePosition2(3,0);
    }
    else if(keyDown(87)){
      writePosition2(0,-3);
   }
    else if(keyDown(83)){
    writePosition2(0,+3);
   }
    drawSprites();
  
}

function writePosition(x,y){
  database.ref('bola/posicion').set({'x':position.x + x, 'y':position.y + y});
  
}

function writePosition2(x,y){
  database.ref('bola2/posicion2').set({'x':position2.x + x, 'y':position2.y + y});

}

function readPosition(data){
  position = data.val();
  console.log(position.x);
  Ball.x = position.x;
  Ball.y = position.y;

}

function readPosition2(data){
  position2 = data.val();
  console.log(position2.x);
  Ball2.x = position2.x;
  Ball2.y = position2.y;
}


function showError(){
  console.log("Error al escribir en la base de datos");
}
