// Sketch - random squares

let x_coordinate = 100.0;
let plot_x = 10.0;

function setup() {
  let canvas = createCanvas(500, 500);
  canvas.class("canvas");
}

function draw() {
  let r = randomColorValue();
  let g = randomColorValue();
  let b = randomColorValue();

  x_noise = noise(x_coordinate) * 500;

  fill(r, g, b);
  rect(plot_x, x_noise, 10);

  x_coordinate++;

  plot_x++;

  if (plot_x > 500) {
    noLoop();
  }
}

function randomColorValue() {
  return random() * 255;
}
