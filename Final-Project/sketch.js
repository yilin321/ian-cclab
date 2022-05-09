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
  let cnv=createCanvas(700, 700)
  // cnv.parent = "canvasContainer1";

  background(100);
  imageMode(CENTER);
  image(myMap, 0, height/2);
  textSize(15);
  textAlign(CENTER);
  fill(20);
  // text("Ukrainians Displaced By The Russian Invasion", windowWidth / 2, 50);
  rectMode(CENTER);
  // ian1 = new ian(440, 310, 160, 160);
  // ian1.text = "Russia: 549,805 Refugees";
  // ian2 = new ian(270, 375, 45, 40);
  // ian2.text = "Poland: 2,825,463 Refugees";
  // ian3 = new ian(320, 365, 45, 30);
  // ian3.text = "Belarus: 23,759 Refugees";
  // ian4 = new ian(270, 410 ,40, 10);
  // ian4.text = "Slovakia: 342,813 Refugees";
  // ian5 = new ian(270, 430, 30, 10);
  // ian5.text = "Hungary: 471,080 Refugees";
  // ian6 = new ian(300, 440, 31, 31);
  // ian6.text = "Romania: 394,555 Refugees";
  // ian7 = new ian(330, 425, 10, 10);
  // ian7.text = "Moldova: 426,964 Refugees";
  // ian8 = new ian(340, 400, 65, 31);
  // ian8.text = "Ukraine: 7,100,000 Refugees";

  ian1 = new ian(width/1.5, height/2.5, width / 3, height/3);
  ian1.text = "Russia: 549,805 Refugees";
  ian2 = new ian(width/2.6, height/1.7, width/15, height/22);
  ian2.text = "Poland: 2,825,463 Refugees";
  ian3 = new ian(width/2.2, height/1.8, width/15, height/22);
  ian3.text = "Belarus: 23,759 Refugees";
  ian4 = new ian(width/2.6, height/1.6, width/15, height/50);
  ian4.text = "Slovakia: 342,813 Refugees";
  ian5 = new ian(width/2.6, height/1.53, width/15, height/50);
  ian5.text = "Hungary: 471,080 Refugees";
  ian6 = new ian(width/2.4, height/1.47, width/15, height/22);
  ian6.text = "Romania: 394,555 Refugees";
  ian7 = new ian(width/2.15, height/1.52, width/50, height/50);
  ian7.text = "Moldova: 426,964 Refugees";
  ian8 = new ian(width/2, height/1.62, width/9, height/30);
  ian8.text = "Ukraine: 7,100,000 Refugees";

}
function draw() {
  background(255);
  image(myMap, width / 2, height / 2);
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
    fill("red");
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
