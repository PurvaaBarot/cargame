class Player{
    constructor(){
        this.index=null,
        this.name = null,
        this.distance=0,
        this.rank=null
    }

    getCount(){
        var playerCountref=db.ref("playerCount");
      playerCountref.on("value",function(data){
          playerCount=data.val();
      })
    }

    updateCount(count){
        db.ref("/").update({
            playerCount:count
        })
    }

    update(){
        var playerindex="players/player"+this.index;
        db.ref(playerindex).set({
            name:this.name,
            distance:this.distance,
            rank:this.rank
        })
       // console.log(name)
    }

    static updatecarsAtEnd(rank){
      db.ref("/").update({
         carsAtEnd:rank
      })
    }

    getcarsAtEnd(){
        var carsAtEndref=db.ref("carsAtEnd");
        carsAtEndref.on("value",(data)=>{
            carsAtEnd=data.val();
            this.rank=carsAtEnd;
        })
    }

    static getPlayersInfo(){
        var getPlayersInforef=db.ref("players");
        getPlayersInforef.on("value",function(data)
        {
            allPlayers=data.val()
        })
        }
    }
