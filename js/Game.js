class Game{
    constructor(){}
    
    getState(){
        var gameStateref=db.ref("gameState");
      gameStateref.on("value",function(data){
          gameState=data.val();
      })
    }
    update(state){
        db.ref("/").update({
            gameState:state
        })
    }
     async start(){
        if(gameState === 0){
            player=new Player();
            var playerCountRef=await db.ref("playerCount").once("value"); 
            if(playerCountRef.exists()){
             playerCount=playerCountRef.val();
            player.getCount();
            }
            form=new Form();
            form.window();
        }
        car1 = createSprite(50,200,70,70);
        car1.addImage("car1",car1Img);
        car2 = createSprite(70,200,70,70);
        car2.addImage("car2",car2Img);
        car3 = createSprite(90,200,70,70);
        car3.addImage("car3",car3Img);
        car4 = createSprite(110,200,70,70);
        car4.addImage("car4",car4Img);
        cars=[car1,car2,car3,car4];

      //  car1.scale=0.1;
        //car2.scale=0.1;
        //car3.scale=0.1;
        //car4.scale=0.1;
    }
    play(){
        form.hide();
       // textSize(30);
        //text("Game Start",150,200);

        var i=0;
        var x=425;
        var y;
        Player.getPlayersInfo()
        player.getcarsAtEnd();
        if(allPlayers!==undefined){
            background(groundImg);
            image(trackImg,0,-windowHeight*6,windowWidth,windowHeight*7);
         //  var y=250;
            for(var p in allPlayers){
                y=windowHeight-allPlayers[p].distance;
                cars[i].x=x
                cars[i].y=y
                if((i+1)===player.index){
                    cars[i].shapeColor=("red");
                    fill("red");
                    ellipse(x,y,60,60);

                    camera.position.x=windowWidth/2;
                    camera.position.y=cars[i].y;
                }
                else{
                    cars[i].shapeColor=("yellow");
                }

                i=i+1;
                x=x+225;
          // textSize(15);
            // text(allPlayers[p].name+":"+allPlayers[p].distance,150,y);
              // y=y+20;
            }
        }
        if(touches.length>0|| keyDown(UP_ARROW) && player.index!= null ){
            player.distance=player.distance+50;
            player.update();
           // touches=[];
        }

        if(player.distance>4950){
            gameState=2
            player.rank=player.rank+1
            player.update();
            Player.updatecarsAtEnd(player.rank);
        }
        drawSprites();
    }
  
    end(){
        // var a=createElement("h2","GAME OVER");
        //a.position(windowWidth/2-40,windowHeight/2);
        //var r=createElement("h2",''+ player.rank);
        //r.position(windowWidth/2,windowHeight/2+50);
        //console.log(player.rank);
        camera.position.x=windowWidth/2;
        camera.position.y=windowHeight/2;
        background("lightgreen");  
           textSize(50);
           fill("black");
           
        for(var p in allPlayers){
            if(allPlayers[p].rank===1){
                text("1st:" + allPlayers[p].name, windowWidth/2-50,windowHeight/2-100);
            }
            else if(allPlayers[p].rank===2){
                text("2nd:" + allPlayers[p].name, windowWidth/2-50,windowHeight/2-50);
            }
            else if(allPlayers[p].rank===3){
                text("3rd:" + allPlayers[p].name, windowWidth/2-50,windowHeight/2);
            }
            else if(allPlayers[p].rank===4){
                text("4th:" + allPlayers[p].name, windowWidth/2-50,windowHeight/2+50);
            }
            
        }
    }

}