var canvas;
var trackImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage;

var database, gameState;
var form, player, playerCount, gameType;
var allPlayers, car1, car2, fuels, powerCoins, obstacles;
var cars = [];

function preload() {
  trackImage = loadImage("two/cityImg.jpg");
//   car1_img = loadImage("assets/car1.png");
//   car2_img = loadImage("assets/car2.png");
//   track = loadImage("assets/track.jpg");
//   fuelImage = loadImage("assets/fuel.png");
//   powerCoinImage = loadImage("assets/goldCoin.png");


}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){

}

function draw() {
  background(18,132,102);
   if (playerCount === 1 && gameType==="SinglePlayer") {
     game.update(1);
   }

  if (gameState === 1) {
     game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
