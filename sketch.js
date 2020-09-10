var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = null;
var plinkos = [];
var divisions = [];
var avil = 1;
var unused = 5;
var divisionHeight=300;
var score =0;
var ground;
var turns = 1;
var a;
var b;
var c;
var d;
var e;
var aa =[0,80];
var bb =[80,160];
var cc =[160,240];
var dd =[240,320];
var ee =[320,400];
var ff =[400,480];
var gg =[480,560];
var hh =[560,640];
var ii =[640,720];
var jj =[720,800];










function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 25; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 25; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    a = 50*(Math.round(random(2,3)));
    console.log(a);
    b = 50*(Math.round(random(3,4)));
    console.log(a);
    c = 50*(Math.round(random(5,6)));
    console.log(a);
    d = 50*(Math.round(random(7,8)));
    console.log(a);
    e = 50*(Math.round(random(9,12)));
    console.log(a);
    
}
 


function draw() {
  background("rgb(255, 255, 204)");
  textSize(30)
  fill("black");
  noStroke();
 text("Score : "+score,20,30);
 text("Turns left : " + unused,620,30);
 textSize(40)
 text(a,5,750);
 text(b,85,720);
 text(c,165,690);
 text(d,245,660);
 text(e,325,630);
 text(e,405,630);
 text(d,485,660);
 text(c,565,690);
 text(b,645,720);
 text(a,725,750);

 
 
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   ground.display();
  

   if(turns === 6&&avil === 1){
    textSize(100);
    stroke("maroon");
    strokeWeight(10);
    fill("red");
    text("Game Over",100,480);

  }
  
  if(particles != null){  
    if(particles.body.position.y > 700){
      if(particles.body.position.x > aa[0] && particles.body.position.x < aa[1]){
        score = score + a;
      }
      if(particles.body.position.x > bb[0] && particles.body.position.x < bb[1]){
        score = score + b;
      }
      if(particles.body.position.x > cc[0] && particles.body.position.x < cc[1]){
        score = score + c;
      }
      if(particles.body.position.x > dd[0] && particles.body.position.x < dd[1]){
        score = score + d;
      }
      if(particles.body.position.x > ee[0] && particles.body.position.x < ee[1]){
        score = score + e;
      }
      if(particles.body.position.x > ff[0] && particles.body.position.x < ff[1]){
        score = score + e;
      }
      if(particles.body.position.x > gg[0] && particles.body.position.x < gg[1]){
        score = score + d;
      }
      if(particles.body.position.x > hh[0] && particles.body.position.x < hh[1]){
        score = score + c;
      }
      if(particles.body.position.x > ii[0] && particles.body.position.x < ii[1]){
        score = score + b;
      }
      if(particles.body.position.x > jj[0] && particles.body.position.x < jj[1]){
        score = score + a;
      }
      particles = null;
    avil = 1;
    
  }
  
  if(particles != null){
    particles.display();
 }
 
}

}
function mousePressed(){
  if((turns <= 5&&avil === 1)&&(mouseX > 0 && mouseX < 800)){
    turns++
  particles = new Particle(mouseX, 10,10);

  avil = 0;
  unused = unused - 1;
  }
  
   
}