



function preload(){
backgroundImage=loadImage("Images/Hot Air Ballon-01.png")
AirBallon=loadAnimation('Images/Hot Air Ballon-02.png','Images/Hot Air Ballon-03.png','Images/Hot Air Ballon-04.png')






}
var ballon;
var database,position


function setup(){
    database=firebase.database()
    createCanvas(1000,1000);
    ballon= createSprite(250,250,10,10);
   ballon.addAnimaton("ballon1",AirBallon)
    var bp=database.ref('balloon/height')
    bp.on('value',readPosition)
}

function draw(){
    background(backgroundImage);
    if (position!==undefined){
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}
}
function writePosition(x,y){
   database.ref("balloon/height").set({
       'x':position.x+x,
       'y':position.y+y

   })

}
function readPosition(data){
    position=data.val()
    ball.x=position.x
    ball.y=position.y
}

