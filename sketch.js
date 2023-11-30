function setup() {
  createCanvas(700, 500);
}

function drawBackButton() {
  // Back button
  fill(color(255,255,255))
  rect(10, 10, 100, 40);
  textSize(16);
  fill(color(0,0,0))
  text("Back", 30, 30);
}
let shapes = [];
let goals = [];
let ispushed = 0;

let screenState = 1;
let start = 1;
let score = 0;
let time = 30;
let end = 0;
let circles = 0;
let clicked = 0;
let finalScore = 0;
const distanceThreshold = 15;
let totalRed = 0;
let totalGreen = 0;
let difference = 0;
let currentTime = 15;
let startTime = 15;
let endTime = 0;
let backgroundChanged = false;


let currentShape = 0;


let circleGoalX = 100;
let circleGoalY = 250

let squareGoalX = 400
let squareGoalY = 250

let triangleGoalX = 250
let triangleGoalY = 250


function draw()
{
  if (screenState == 1)
    {
      background(56,129,255);
  noStroke()
      frameRate(12);
      //text("X: "+mouseX, 0, 100);
      //text("Y: "+mouseY, 0, 200);
 
      textSize(50);
      fill(color(0,0,0))
      text("Motor Skill Mentor", 150, 100)

      textSize(20);
 
      fill(color(255,255,255))
      circle(100,270,150)
      fill(color(0,0,0))
      text("clicking game", 40, 275);
      if ((mouseX < 175) && (mouseX > 25) && (mouseY < 345) && (mouseY > 195) && ((mouseIsPressed == true)))
      {
        screenState = 2;
      }
 
      fill(color(255,255,255))
      circle(350,270,150)
      fill(color(0,0,0))
      text("sorting game", 290, 275);
      if (((mouseX < 425) && (mouseX > 275) && (mouseY < 345) && (mouseY > 195) && (mouseIsPressed == true)))
      {
        screenState = 3;
      }
 
      fill(color(255,255,255))
      circle(600,270,150)
      fill(color(0,0,0))
      text("tracing game", 540, 275);
      if (((mouseX < 675) && (mouseX > 525) && (mouseY < 345) && (mouseY > 195) && (mouseIsPressed == true)))
      {
        screenState = 4;
      }
 
    }
 
  if (screenState == 2)
    {
      background(255,253,197);
      frameRate(12);
     
     
      if (start == 1)
        {
          frameRate(12);
       
         fill(color(0,0,0))
         textSize(50);
         text("Clicking Game", 180, 100);
         textSize(20);
         text("Instructions: Click the circles as they appear on the screen. Try and click as \nmany as possible before the time is up!", 20, 150);
         
           drawBackButton();
      if (((mouseX > 10) && (mouseX < 110) && (mouseY < 50) && (mouseY > 10) && (mouseIsPressed == true))){
        screenState = 1;
      }
          fill(color(255,255,255));
          rect(300, 250, 100);
          fill(color(0,0,0))
          text("Start!", 325, 305);
         
         
          if (((mouseX < 400) && (mouseX > 300) && (mouseY < 350) && (mouseY > 250) && (mouseIsPressed == true)))
            {
              start = 2;
            }
        }
      if (start == 2)
        {
          background(255,253,197);
          frameRate(12);
         
           drawBackButton();
      if (((mouseX > 10) && (mouseX < 110) && (mouseY < 50) && (mouseY > 10) && (mouseIsPressed == true))){
        screenState = 2;
        start = 1;
        time = 30;
        score = 0;
      }
          fill(color(0,0,0))
          text("Time: " + Math.round(time), 300, 50);
          text("Score: " + score, 300, 100);
          time = time - 0.085;
         
          //text("X: "+mouseX, 0, 100);
          //text("Y: "+mouseY, 0, 200);
         
          if (circles == 0)
            {
             x = random(50,650);
             y = random(125,450);
             circles = circles + 1;
            }
         
          if (clicked == 0);
          {
            fill(color(96,255,255))
            circle(x, y, 75);
          }
         
          //
         
          if (((mouseX < (x + 35)) && (mouseX > (x - 35)) && (mouseY < (y + 35)) && (mouseY > (y - 35)) && (mouseIsPressed == true)))
            {
              clicked = 1;
              circles = circles - 1;
              score = score + 1;
            }
         
         
         
          if ((time == 0) || (time < 0))
            {
              time = 30;
              finalScore = score;
              screenState = 5;
            }
        }
    }
 
  if (screenState == 3)
{
  background(220);
  frameRate(12)
 
 
  if (currentShape == 0) {
  fill(255,255,255)
  circle(mouseX, mouseY, 50)
   
if (disty(mouseX, mouseY, circleGoalX, circleGoalY) < 30) {
  circleGoalX = 999
  currentShape = 1
  background(220,255,220)
}
  }
 
  if (currentShape == 1) {
fill(255,255,255)
square(mouseX, mouseY,50)
   
    if (disty(mouseX, mouseY, squareGoalX, squareGoalY) < 30) {
  squareGoalX = 999
  currentShape = 2
  background(220,255,220)
}
  }
 
  if (currentShape == 2) {
fill(255,255,255)
  triangle(mouseX, mouseY, mouseX - 40, mouseY + 50, mouseX + 40, mouseY + 50)
        if (disty(mouseX, mouseY, triangleGoalX, triangleGoalY) < 30) {
  triangleGoalX = 999
  currentShape = 3
  background(220,255,220)
}
   
  }

 if (currentShape == 3) {
   background(100,200,100)
 }

 
  fill(color(0,0,0))
  textSize(35)
  text("Sorting Game", 400, 50)
  textSize(15)
  text("Drag each shape to its corresponding goal.", 400, 75)
 
 
  // Goals
  fill(0,0,0)
  circle(circleGoalX, circleGoalY, 50)
  square(squareGoalX, squareGoalY, 50)
  triangle(triangleGoalX, triangleGoalY, triangleGoalX - 40, triangleGoalY + 50, triangleGoalX + 40, triangleGoalY + 50)
 
 

   
  fill(color(255, 255, 255));
  rect(250, 30, 100, 40);
  fill(color(0, 0, 0));
  text("Reset", 275, 55);
 
if (
mouseX < 350 &&
mouseX > 250 &&
mouseY < 70 &&
mouseY > 30 &&
mouseIsPressed == true
  ) {

  currentShape = 0
   
 
         
  circleGoalX = random(100, 600);
  circleGoalY = random(100, 400);

  squareGoalX = random(100, 600);
  squareGoalY = random(100, 400);

  triangleGoalX = random(100, 600);
  triangleGoalY = random(100, 400);
 
 
  while (disty(circleGoalX, circleGoalY, squareGoalX, squareGoalY) < 100 || disty(circleGoalX, circleGoalY, triangleGoalX, triangleGoalY) < 100 || disty(triangleGoalX, triangleGoalY, squareGoalX, squareGoalY) < 100 ) {
   
   
  circleGoalX = random(100, 600);
  circleGoalY = random(100, 400);

  squareGoalX = random(100, 600);
  squareGoalY = random(100, 400);

  triangleGoalX = random(100, 600);
  triangleGoalY = random(100, 400);
  }
}
 
        //text("X: "+mouseX, 0, 100);
      //text("Y: "+mouseY, 0, 200);
     
 
  drawBackButton();
 
  if (mouseX > 10 && mouseX < 100 && mouseY > 10 && mouseY < 45 && mouseIsPressed == true) {
    screenState = 1;
  }
 
}



function mousePressed() {
  for (let shape of shapes) {
    shape.mousePressed();
  }
}

function mouseReleased() {
  for (let shape of shapes) {
    shape.mouseReleased();
  }

     
    }
 
  if (screenState == 4)
    {
      background(56,129,0);
      frameRate(12);
     
      drawBackButton();
      if (((mouseX > 10) && (mouseX < 110) && (mouseY < 50) && (mouseY > 10) && (mouseIsPressed == true))){
        screenState = 1;
      }
     
       background(211);
      frameRate(12);


     
      strokeWeight(0);
      textSize(50);
      fill(color(0,0,0))
      text("Tracing Game", 200, 100);
      textSize(20);
         text("Instructions: There are 3 figures, click on any of them. Then try and trace\nas percise as you can before the time is up!", 20, 160);

      drawBackButton();
      if (((mouseX > 10) && (mouseX < 110) && (mouseY < 50) && (mouseY > 10) && (mouseIsPressed == true))){
        screenState = 1;
      }
     
      textSize(20);
 
      fill(color(255,255,255))
      rect(25, 225, 150, 150)
      fill(color(0,0,0))
      text("Rectangle", 55, 305);
      if ((mouseX < 175) && (mouseX > 25) && (mouseY < 375) && (mouseY > 225) && ((mouseIsPressed == true)))
      {
        screenState = 8;
        currentTime = 15;
       
      }
 
      fill(color(255,255,255))
      triangle(275, 375, 350, 225, 425, 375);
     
      fill(color(0,0,0))
      text("Triangle", 315, 315);
      if (((mouseX < 425) && (mouseX > 275) && (mouseY < 375) && (mouseY > 225) && (mouseIsPressed == true)))
      {
        screenState = 9;
        currentTime = 15;
      }
 
      fill(color(255,255,255))
      circle(600,300,150)
      fill(color(0,0,0))
      text("Circle", 570, 300);
      if (((mouseX < 675) && (mouseX > 525) && (mouseY < 375) && (mouseY > 225) && (mouseIsPressed == true)))
      {
        screenState = 10;
        currentTime = 15;
      }
     

     
    }
 
  if (screenState == 5)
    {
      frameRate(12);
     
      textSize(50);
      if (finalScore > 0)
        {
          background(205,255,221);
          fill(color(0,0,0))
          text("Congratulations!", 170, 100);
          text("Your score was: " + finalScore, 150, 250);
        }
      else
        {
          background(255,211,211);
          fill(color(0,0,0))
          text("Too Bad! Try Again?", 100, 100);
        }
     
      fill(color(255,255,255))
      rect(170, 350, 100, 40);
      textSize(16);
      fill(color(0,0,0))
      text("Home", 200, 370);
     
      fill(color(255,255,255))
      rect(390, 350, 100, 40);
      textSize(16);
      fill(color(0,0,0))
      text("Play Again", 400, 370);
     
      if (((mouseX > 390) && (mouseX < 490) && (mouseY < 390) && (mouseY > 350) && (mouseIsPressed == true)))
      {
        screenState = 2;
      }
     
      if (((mouseX > 170) && (mouseX < 270) && (mouseY < 390) && (mouseY > 350) && (mouseIsPressed == true)))
      {
        screenState = 1;
      }
     
      //text("X: "+mouseX, 0, 100);
      //text("Y: "+mouseY, 0, 200);
     
      score = 0;
    }
 
  if (screenState == 6)
    {
     
     
      fill(color(255,255,255))
      rect(170, 350, 100, 40);
      textSize(16);
      fill(color(0,0,0))
      text("Home", 200, 370);
    }
 
  if (screenState == 7)
    {
     
     
      fill(color(255,255,255))
      rect(170, 350, 100, 40);
      textSize(16);
      fill(color(0,0,0))
      text("Home", 200, 370);
    }
 
   if (screenState == 8) {
     
    if (!backgroundChanged) {
      background(211);
      backgroundChanged = true;
    }
   
   
    fill(color(211));
    strokeWeight(0);
    rect(303, 30, 80, 30);
     fill(color(0,0,0));
    strokeWeight(0);
    textSize(20);


     text("Time: " + Math.round(currentTime), 305, 50);
    currentTime = currentTime - 0.085;
   
    frameRate(12);
    strokeWeight(3);
    setLineDash([20, 20]);
    stroke(102);
    noFill();
    rect(175, 125, 350, 250);
   
    textSize(30);




      strokeWeight(7);
      if (mouseIsPressed === true) {
      const distance1 = calculateDistance(mouseX, mouseY, 175, 125, 175, 375);
        const distance2 = calculateDistance(mouseX, mouseY, 175, 125, 525, 125);
        const distance3 = calculateDistance(mouseX, mouseY, 525, 125, 525, 375);
        const distance4 = calculateDistance(mouseX, mouseY, 175, 375, 525, 375);
     
      if (distance1 < distanceThreshold || distance2 < distanceThreshold || distance3 < distanceThreshold || distance4 < distanceThreshold) {
        stroke(0, 255, 0);
        totalGreen += calculateRedValue(mouseX, mouseY, pmouseX, pmouseY);
       
      } else {
        stroke(250, 0, 0);
        totalRed += calculateRedValue(mouseX, mouseY, pmouseX, pmouseY);
      }
     
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
     
      fill(0);
      difference = totalGreen * 100/(totalGreen + totalRed);
     
   
     if ((currentTime == 0) || (currentTime < 0)) {
       currentTime = 15;
     
      frameRate(12);


        textSize(30);
        screenState = 11;
     }
   
    drawingContext.setLineDash([]);
    noStroke(0);
    strokeWeight(2);
    drawBackButton();
      if (((mouseX > 10) && (mouseX < 110) && (mouseY < 50) && (mouseY > 10) && (mouseIsPressed == true))){
        screenState = 4;
        backgroundChanged = false;
      }
   
  }
   if (screenState == 9) {
     
    if (!backgroundChanged) {
      background(211);
      backgroundChanged = true;
    }
    fill(color(211));
    strokeWeight(0);
    rect(303, 30, 80, 30);
     fill(color(0,0,0));
    strokeWeight(0);
    textSize(20);


     text("Time: " + Math.round(currentTime), 305, 50);
    currentTime = currentTime - 0.085;
   
    frameRate(12);
    strokeWeight(3);
    setLineDash([20, 20]);
    stroke(102);
    noFill();
    triangle(175, 375, 350, 125, 525, 375);
   
    textSize(30);


      strokeWeight(7);
    if (mouseIsPressed === true) {
      const distance1 = calculateDistance(mouseX, mouseY, 175, 375, 350, 125);
      const distance2 = calculateDistance(mouseX, mouseY, 350, 125, 525, 375);
      const distance3 = calculateDistance(mouseX, mouseY, 525, 375, 175, 375);
     
      if (distance1 < distanceThreshold || distance2 < distanceThreshold || distance3 < distanceThreshold) {
        stroke(0, 255, 0);
        totalGreen += calculateRedValue(mouseX, mouseY, pmouseX, pmouseY);
       
      } else {
        stroke(250, 0, 0);
        totalRed += calculateRedValue(mouseX, mouseY, pmouseX, pmouseY);
      }
     
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
      fill(0);
      difference = totalGreen * 100/(totalGreen + totalRed);
 
      if ((currentTime == 0) || (currentTime < 0)) {
       currentTime = 15;
     
      frameRate(12);


        textSize(30);
        screenState = 11;
     }
     
     drawingContext.setLineDash([]);
    noStroke(0);
    strokeWeight(1);
    drawBackButton();
      if (((mouseX > 10) && (mouseX < 110) && (mouseY < 50) && (mouseY > 10) && (mouseIsPressed == true))){
        screenState = 4;
        backgroundChanged = false;
      }
   }
 
  if (screenState == 10) {
     
     if (!backgroundChanged) {
      background(211);
      backgroundChanged = true;
    }
    fill(color(211));
    strokeWeight(0);
    rect(303, 30, 80, 30);
     fill(color(0,0,0));
    strokeWeight(0);
    textSize(20);


     text("Time: " + Math.round(currentTime), 305, 50);
    currentTime = currentTime - 0.085;
   
    frameRate(12);
    strokeWeight(3);
    setLineDash([20, 20]);
    stroke(102);
    noFill();
    circle(350,250,300);
   
    textSize(30);


      strokeWeight(7);
    if (mouseIsPressed === true) {
    const distanceFromCenter = dist(mouseX, mouseY, 350, 250); // Distance from center of the circle
    if (distanceFromCenter <= 150 + distanceThreshold && distanceFromCenter >= 150 - distanceThreshold) {
      stroke(0, 255, 0);
      totalGreen += calculateRedValue(mouseX, mouseY, pmouseX, pmouseY);
    } else {
      stroke(250, 0, 0);
      totalRed += calculateRedValue(mouseX, mouseY, pmouseX, pmouseY);
    }


    line(mouseX, mouseY, pmouseX, pmouseY);
  }
      fill(0);
      difference = totalGreen * 100/(totalGreen + totalRed);
      stroke(255,255,255);
     
    if ((currentTime == 0) || (currentTime < 0)) {
       currentTime = 15;
     
      frameRate(12);


        textSize(30);
        screenState = 11;
     }
   
    drawingContext.setLineDash([]);
    noStroke(0);
    strokeWeight(1);
    drawBackButton();
      if (((mouseX > 10) && (mouseX < 110) && (mouseY < 50) && (mouseY > 10) && (mouseIsPressed == true))){
        screenState = 4;
        backgroundChanged = false;
      }


   }
  if (screenState == 11)
    {
      frameRate(12);
      textSize(30);
      if ( difference > 80)
          {
            background(200, 219, 215);
            fill(color(0,0,0));
      strokeWeight(0);
            text("Congratulations!", 230, 100);
            text(`Your Success Rate Was: ${difference.toFixed(0)}%`, 150, 200);
          }
        else
          {
            background(219, 186, 186);
            fill(color(0,0,0));
            strokeWeight(0);
            text("Too Bad! Try Again?", 200, 100);
            text(`Your Success Rate Was: ${difference.toFixed(0)}%`, 150, 200);
          }
     
      fill(color(255))
      rect(170, 350, 100, 40);
      textSize(16);
      fill(color(0,0,0))
      text("Home", 200, 375);
     
      if ((mouseX < 270) && (mouseX > 170) && (mouseY < 390) && (mouseY > 350) && ((mouseIsPressed == true)))
      {
//         DELETE COMMENTS WHEN INTEGRATED
        screenState = 1;
        difference = 0;
      totalGreen = 0;
      totalRed = 0;
        backgroundChanged = false;
       
      }
      fill(color(255))
      rect(390, 350, 100, 40);
      textSize(16);
      fill(color(0,0,0))
      text("Play Again", 400, 375);
     
      if ((mouseX > 390) && (mouseX < 490) && (mouseY < 390) && (mouseY > 350) && (mouseIsPressed == true))
      {
        screenState = 4;
        difference = 0;
      totalGreen = 0;
      totalRed = 0;
        backgroundChanged = false;
      }
     
     
    }
 
}


function setLineDash(list) {
  drawingContext.setLineDash(list);
}


function calculateRedValue(x1, y1, x2, y2) {
  let redValue = 0;


  let numPoints = dist(x1, y1, x2, y2);
  for (let i = 0; i <= numPoints; i++) {
    let x = lerp(x1, x2, i / numPoints);
    let y = lerp(y1, y2, i / numPoints);
    let c = get(int(x), int(y));
    redValue += red(c);
  }


  return redValue;
}


function calculateDistance(x, y, x1, y1, x2, y2) {
  const numerator = Math.abs((y2 - y1) * x - (x2 - x1) * y + x2 * y1 - y2 * x1);
  const denominator = Math.sqrt(Math.pow(y2 - y1, 2) + Math.pow(x2 - x1, 2));
  return numerator / denominator;
}


function disty(x1, y1, x2, y2) {
  // Using the Euclidean distance formula: distance = sqrt((x2 - x1)^2 + (y2 - y1)^2)
  const deltaX = x2 - x1;
  const deltaY = y2 - y1;

  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  return distance;
}