class Game {
  constructor() {}


  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  start() {

    form = new Form();
    form.display();

    player = new Player();
    playerCount = player.getCount();



  }


  play(){
    form.hide();

    Player.getPlayersInfo();

    if(allPlayers != undefined){
      imageMode(CENTER);
      image(trackImage,width/2,height/2,width-10,height-20)
    }

  }
}