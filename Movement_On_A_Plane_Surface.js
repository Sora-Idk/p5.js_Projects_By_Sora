//colors
let bg_color = 120;
let player_color = 255;

//canvas size
let canva_size = 400;

function setup() {
  createCanvas(canva_size, canva_size);
  background(bg_color);
}
//grid vars
let grid_size = 40;
let x_grid = 0;
let y_grid = 0;

//cords
let step = grid_size;
let xpos = 0;
let ypos = 0;

function draw() {
  
  player(xpos,ypos);
  grid();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    fill(bg_color);
    rect(xpos,ypos,grid_size)
    fill(player_color)
    if(xpos>=step)
      xpos-=step;
    player(xpos,ypos)
  } 
  else if (keyCode === RIGHT_ARROW) {
    fill(bg_color);
    rect(xpos,ypos,grid_size)
    fill(player_color)
    if(xpos+step<canva_size)
      xpos+=step;
    player(xpos,ypos)
  }
    else if (keyCode === UP_ARROW) {
    fill(bg_color);
    rect(xpos,ypos,grid_size)
    fill(player_color)
    if(ypos>=step)
      ypos-=step;
    player(xpos,ypos)
  }
     else if (keyCode === DOWN_ARROW) {
    fill(bg_color);
    rect(xpos,ypos,grid_size)
    fill(player_color)
    if(ypos+step<canva_size)
      ypos+=step;
    player(xpos,ypos)
  }
}
function player(int){
  rect(xpos,ypos,grid_size)
}

function grid(int){

  if(x_grid<canva_size){
    line(x_grid,0,x_grid,canva_size)
    line(0,y_grid,canva_size,y_grid)
    
    y_grid+=grid_size;
    x_grid+=grid_size;
  }
}