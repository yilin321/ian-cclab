

let angle1 = 50;
let angle2 = 50;
let angleV1 = 90;
let angleV2 = 180;

function setup() {
  createCanvas(400, 400);
  background(100);
}

function draw() {
  background(50, 5);
 
  //tree
  noStroke()
  fill('brown');
  //rect(top left x, top left y, width, height)
  rect(60,250,20,100);
  fill('green');
  //ellipse(x point, y point, width, height)
  ellipse(70,270,70,70);
  
  //tree
  fill('brown');
  //rect(top left x, top left y, width, height)
  rect(250,70,20,50);
  fill('green');
  //ellipse(x point, y point, width, height)
  ellipse(260,40,70,70);
  
   fill('brown');
  //rect(top left x, top left y, width, height)
  rect(330,110,20,50);
  fill('green');
  //ellipse(x point, y point, width, height)
  ellipse(340,90,70,70);
  
   //tree
  noStroke()
  fill('brown');
  //rect(top left x, top left y, width, height)
  rect(150,300,20,100);
  fill('green');
  //ellipse(x point, y point, width, height)
  ellipse(160,310,70,70);
  
  stroke('white')
  strokeWeight(1)
  beginShape(LINES);
vertex(400, 310);
vertex(100, 0);
vertex(0, 75);
vertex(310, 400);
endShape();
  
  fill('blue')
  strokeWeight(14)
line (200,210,210,200)
  line(230,240,240,230)
  line(200,210,230,240)
  line(210,200,240,230)


  
  translate(width / 2, height / 2);
  fill(0,0,90,90);
  stroke(252, 238, 33, 200);
  let ampx = (1 * width) / 2;
  let ampy = (1 * height) / 2;
  let x = map(cos(angle1), -10, 25, -ampx, ampx);
  let y = map(sin(angle2), -10, 25, -ampy, ampy);
  strokeWeight(10);
  line(0, 0, x, y);
  angle1 -= angleV1;
  angle2 -= angleV2;
  
}