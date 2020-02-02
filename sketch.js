let flypic;
let flysentence = "The shadow of a fly"
let s;

let mirro;
let mirrortext = "In those days, the world of mirrors and our world were not, as they are now, separate and unconnected. They were, moreover, quite different from one another; neither the creatures nor the colors nor the shapes of the two worlds were the same. The two kingdoms— the specular and the human— lived in peace, and one could pass back and forth through mirrors."
let m;

let dow;
let sentence1 = "A crack in the ceiling"
var scribble;
let goodlook;

function preload() {
  dow = loadImage('windows-8.jpg');
  flypic = loadImage('windows-5.jpg')
  mirror = loadImage('windows-7.jpg')
  goodlook = loadFont('Absortile.ttf')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250);
  imageMode(CORNERS);
  image(dow,0,0,width/2,height/2);



  scribble = new Scribble();              // global mode
  scribble.bowing = 2;          // changes the bowing of lines
  scribble.roughness = 2;       // changes the roughness of lines

  s = new Fly(random((width/2)*3,width*3),random(0,height/2), random(-2,2), random(-2,2));


  noStroke();

  textFont(goodlook);
  textSize(14);
  textAlign(CENTER);
  fill("black");
  text(sentence1,width/6,height/18)
}

function draw() {

    if(frameCount>1000 && frameCount < 1100){
     image(flypic,width/2,0,width,height/2);
     noStroke();
     textFont(goodlook);
     textSize(14);
     textAlign(CENTER);
     fill("black");
     text(flysentence,width-width/5,height/2-30)
    }

    if (frameCount>1100){
        s.drawfly();
        s.movefly();

    }



 if(frameCount > 300 && frameCount % int(random(10,20)) == 0){
    //strokeWeight();
    let c = get(random(0,width), random(0,height));
    c[3] = random(10,100);
    stroke(c);
    scribble.scribbleLine(0+random(0,10), random(0,height/2), width/2-random(0,10), random(0,height/2));

 }

 if (frameCount > 1600 && frameCount< 1700){
       image(mirror,0,height/2,width/2,height);




 }
 if(frameCount > 1700 && frameCount % int(random(10,20)) == 0){
 let c = get(random(0,width), random(0,height));

 c[3] = 30;
  print(c);

 fill(c);
 noStroke();
 let di = random(1,100);
 ellipse(random(0,width/2), random(height/2,height), di, di);
}

if(frameCount >1800 && frameCount <=1801){
    noStroke();
    textFont(goodlook);
    textSize(20);
    textAlign(LEFT);
    fill("black");
    text(mirrortext,width/2+30,height/2+30,width/2-30,height/2-30)
}


}



class Fly {

  constructor(x,y,mx,my){
    this.x = x;
    this.y = y;
    this.mx=mx;
    this.my=my;

  }

  drawfly(){
    fill(0,0,0,10);
    noStroke();
    push();
    scale(1/3);
    quad(this.x, this.y, this.x+random(30,40), this.y-random(10,20), this.x+ random(19,29), this.y+random(13,23),this.x-random(10,20), this.y+random(20,36));
    pop();
    //rect(this.x,this.y, 25, 25);

  }

  movefly(){
    this.x += random(-15,15);
    this.y += random(-15,15);
  }



}
