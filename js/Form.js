class Form {
  constructor() {
    this.playButton = createButton("Play");
    this.titleImg = createImg("two/gamebg.jpg", "game title");
    this.title = createElement('h1');
    this.singlePlayerImg = createImg("two/sp.png", "game title");
    this.singlePlayer = createButton('Single Player');
    this.multiPlayerImg = createImg("two/mpg.jpg", "game title");
    this.multiPlayer = createButton('Multi Player')
    this.greeting = createElement("h2");
    this.question = createElement('h2');
    this.question2 = createElement('h2');

    this.player1 = createImg('pics/soldierOne.png');
    this.player2 = createImg('pics/fisherman.png');
    this.player3 = createImg('pics/woodC.png');

    this.input1 = createInput('ENTER PLAYER NUMBER');

    this.sP1 = createButton('1');
    this.sP2 = createButton('2');
    this.sP3  = createButton('3');

    this.start1 = createButton('GO');
   




  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.question.hide();
    this.singlePlayer.hide();

    this.player1.hide();
    this.player2.hide();
    this.player3.hide();
    this.question2.hide();
    this.input1.hide();
    this.start1.hide();
    this.sP1.hide();
    this.sP2.hide();
    this.sP3.hide();
    this.titleImg.hide();
  }

  display(){
    this.title.html('Fighters on War');
    this.title.position(width/2-50,20);
    this.title.size(300,300);
    this.titleImg.position(110, 100);

    this.question.html('CHOOSE GAME TYPE');
    this.question.position(width/2-100,height/3);

    this.singlePlayer.position(width/3-50,height/2+100);
    this.singlePlayerImg.position(width/3-50,height/2-100);
    this.singlePlayerImg.size(150,150);

    this.multiPlayer.position(width/2+190,height/2+100);
    this.multiPlayerImg.position(width/2+200,height/2-100);
    this.multiPlayerImg.size(150,150);

    this.playButton.position(width / 2 - 90, height / 4);
    this.greeting.position(width / 2 - 300, height / 2 - 100);

    this.singlePlayer.class("customButton");
    this.multiPlayer.class("customButton");
    this.question.class("gameTitle");
    this.titleImg.class("gameTitle");
    this.title.class("gameTitle");
    this.playButton.class("customButton");
    this.greeting.class("greeting");

   


    this.singlePlayer.mousePressed(()=>{

     
      this.question.hide();

      this.singlePlayer.hide();
      this.singlePlayerImg.hide();
      this.multiPlayer.hide();
      this.multiPlayerImg.hide();

      this.sP1.position(width/3-50,height/3+80);
      this.sP1.class('customButton');
      this.sP1.size(50,50);

      this.sP2.position(width/2+120,height/3+80);
      this.sP2.class('customButton');
      this.sP2.size(50,50);

      this.sP3.position(width-200,height/3+80);
      this.sP3.class('customButton');
      this.sP3.size(50,50);


       this.player1.position(width/3-300,height/3-50); 
       this.player1.size(300,300);

       this.player2.position(width/2-100,height/3-50); 
       this.player2.size(300,300);

       this.player3.position(width/2+250,height/3-50); 
       this.player3.size(300,300);

       this.question2.class('gameTitle')
       this.question2.html('CHOOSE A SINGLE PLAYER');
       this.question2.position(width/2-100,height/3-100);

       this.input1.class('customButton')
       this.input1.position(width/2-200,height/2+140);

       this.start1.class('customButton1')
       this.start1.position(width/2,height/2+150);
       this.start1.size(50,50);

       
      this.start1.mousePressed(()=>{
          playerCount = playerCount + 1;
          gameType = "SinglePlayer";
          player.updateGameType(gameType);
          console.log(playerCount);
          player.name = this.input1.value();
          player.index = playerCount;
          player.addPlayer();
          player.updateCount(playerCount);
          this.hide();
      })
    })

  }
   
  
}