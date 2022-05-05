var mapUrl =
  "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/[5.3782,32.709,59.31,71.5008]/350x450?access_token=pk.eyJ1IjoieWlsaW4zMjEiLCJhIjoiY2wycHpnbWF4MWZoNjNqa3plN3BzeWg3aCJ9.j4PtoNFD1O1O2WxYWXnOJg";
var myMap;
var dots = [];
var textContent = "Ukrainians Displaced #";
function preload() {
  myMap = loadImage(mapUrl);
}
var ian1;
var ian2;
var ian3;
var ian4;
function setup() {

let cnv= createCanvas(windowWidth,windowHeight);
cnv.parent("canvasContainer1")


  // createCanvas(windowWidth, windowHeight);
  background(100);
  imageMode(CENTER);
  image(myMap, windowWidth / 2, windowHeight / 2);
  textSize(15);
  textAlign(CENTER);
  fill(20);
  // text("Ukrainians Displaced By The Russian Invasion", windowWidth / 2, 50);
  rectMode(CENTER);
  ian1 = new ian(400, 290, 160, 160);
  ian1.text = "Russia: 549,805 Refugees";
  ian2 = new ian(240, 380, 45, 40);
  ian2.text = "Poland: 2,825,463 Refugees";
  ian3 = new ian(290, 365, 45, 30);
  ian3.text = "Belarus: 23,759 Refugees";
  ian4 = new ian(240, 415, 40, 10);
  ian4.text = "Slovakia: 342,813 Refugees";
  ian5 = new ian(235, 430, 30, 10);
  ian5.text = "Hungary: 471,080 Refugees";
  ian6 = new ian(267, 440, 31, 31);
  ian6.text = "Romania: 394,555 Refugees";
  ian7 = new ian(287, 420, 10, 10);
  ian7.text = "Moldova: 426,964 Refugees";
  ian8 = new ian(300, 400, 65, 31);
  ian8.text = "Ukraine: 7,100,000 Refugees";
}
function draw() {
  background(255);
  image(myMap, windowWidth / 2, windowHeight / 2);
  ian1.show();
  ian2.show();
  ian3.show();
  ian4.show();
  ian5.show();
  ian6.show();
  ian7.show();
  ian8.show();
  text(textContent, 100, 70);
}
function mousePressed() {
  var dot = new Dot(mouseX, mouseY, 10, color(20));
  console.log(mouseX, mouseY);
  dot.show();
  ian1.detect();
  ian2.detect();
  ian3.detect();
  ian4.detect();
  ian5.detect();
  ian6.detect();
  ian7.detect();
  ian8.detect();
}
class ian {
  constructor(posx, posy, width, height) {
    this.posx = posx;
    this.posy = posy;
    this.width = width;
    this.height = height;
    this.isClicked = false;
    this.text = "";
  }
  show() {
    noFill();
    rect(this.posx, this.posy, this.width, this.height);
    fill("black");
    if (this.isClicked == true) {
      textContent = this.text;
    }
  }
  detect() {
    if (
      abs(mouseX - this.posx) < this.width / 2 &&
      abs(mouseY - this.posy) < this.height / 2
    ) {
      this.isClicked = true;
    } else {
      this.isClicked = false;
    }
  }
}
