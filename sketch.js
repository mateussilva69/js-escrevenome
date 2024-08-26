function setup() {
    createCanvas(600, 400);
    background("black")
  }
  
  function draw() {
    stroke("yellow");
    fill("cyan");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  
  