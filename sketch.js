let img;
let speed = 0.08;
let n = null;
let x = 0;
let y = 0;
let vw = 21 / 100;
let vh = 6.2 / 100;
let sliceWidth;
let sliceHeight;
let iw;
let ih;
let yAdd;
let tweak;
let strokeOpacity = 0;
let textElement = document.getElementById("current-verb");
let canvasParent = document.getElementById("p5canvas");

let timer;

canvasParent.addEventListener("click", clickHandler);

function preload() {
  img = loadImage("image/verbs.jpeg");
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("#p5canvas");
  setupValues();
  textFont("IBM Plex Mono");

  autoTimer();
}

function autoTimer() {
  clearInterval(timer);
  animate();
  timer = setInterval(animate, 5000);
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}

function setupValues() {
  sliceWidth = vw * img.width;
  sliceHeight = vh * img.height;
  iw = (width / sliceWidth) * img.width;
  ih = (iw / img.width) * img.height;
  yAdd = height / 4;
  textHeight = yAdd + iw / 39;
  tweak = yAdd * 0.01;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setupValues();
}

function draw() {
  background(255);
  if (n) {
    x = lerp(x, (iw * verbs[n].x) / 100, speed);
    y = lerp(y, (ih * verbs[n].y) / 100, speed);
    image(img, -x + width / 20, -y + yAdd, iw, ih);

    strokeOpacity = lerp(strokeOpacity, 100, speed / 8);
    stroke(177, 85, 40, strokeOpacity);
    strokeWeight(height / 200);
    line(0, yAdd - tweak, width, yAdd - tweak);
    line(0, textHeight - tweak, width, textHeight - tweak);
  }
}

// function to get random new number from array
function getNewVerbIndex() {
  let newVal = floor(random(verbs.length));
  if (newVal === n) {
    getNewVerbIndex();
  } else {
    n = newVal;
  }
}

function clickHandler() {
  animate();
  clearInterval(timer);
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}

function animate() {
  getNewVerbIndex();
  textElement.innerHTML = verbs[n].verb;
  strokeOpacity = 0;
}

let verbs = [
  {
    verb: "to roll",
    x: 7.5,
    y: 6.6,
  },
  {
    verb: "to crease",
    x: 7.5,
    y: 10.7,
  },
  {
    verb: "to fold",
    x: 7.5,
    y: 13.8,
  },
  {
    verb: "to store",
    x: 7.5,
    y: 16.5,
  },
  {
    verb: "to bend",
    x: 7.5,
    y: 20.2,
  },
  {
    verb: "to shorten",
    x: 7.5,
    y: 23.4,
  },
  {
    verb: "to twist",
    x: 7.5,
    y: 26.6,
  },
  {
    verb: "to dapple",
    x: 7.5,
    y: 30.1,
  },
  {
    verb: "to crumple",
    x: 7.5,
    y: 32.9,
  },
  {
    verb: "to shave",
    x: 7.5,
    y: 36.2,
  },
  {
    verb: "to tear",
    x: 7.5,
    y: 39.4,
  },
  {
    verb: "to chip",
    x: 7.5,
    y: 42.8,
  },
  {
    verb: "to split",
    x: 7.5,
    y: 46,
  },
  {
    verb: "to cut",
    x: 7.5,
    y: 49,
  },
  {
    verb: "to sever",
    x: 7.5,
    y: 52.9,
  },
  {
    verb: "to drop",
    x: 7.5,
    y: 55,
  },
  {
    verb: "to remove",
    x: 7.5,
    y: 59,
  },
  {
    verb: "to simplify",
    x: 7.5,
    y: 62.2,
  },
  {
    verb: "to differ",
    x: 7.5,
    y: 65.5,
  },
  {
    verb: "to disarrange",
    x: 7.5,
    y: 68.6,
  },
  {
    verb: "to open",
    x: 7.5,
    y: 72,
  },
  {
    verb: "to mix",
    x: 7.5,
    y: 75.2,
  },
  {
    verb: "to splash",
    x: 7.5,
    y: 78.3,
  },
  {
    verb: "to knot",
    x: 7.5,
    y: 81.3,
  },
  {
    verb: "to spill",
    x: 7.5,
    y: 84.9,
  },
  {
    verb: "to droop",
    x: 7.5,
    y: 87.8,
  },
  {
    verb: "to flow",
    x: 7.5,
    y: 91.1,
  },
  {
    verb: "to curve",
    x: 27.2,
    y: 6.2,
  },
  {
    verb: "to lift",
    x: 27.2,
    y: 9.9,
  },
  {
    verb: "to inlay",
    x: 27.2,
    y: 12.8,
  },
  {
    verb: "to impress",
    x: 27.2,
    y: 16.5,
  },
  {
    verb: "to fire",
    x: 27.2,
    y: 19.8,
  },
  {
    verb: "to flood",
    x: 27.2,
    y: 23.2,
  },
  {
    verb: "to smear",
    x: 27.2,
    y: 25.9,
  },
  {
    verb: "to rotate",
    x: 27.2,
    y: 29.3,
  },
  {
    verb: "to swirl",
    x: 27.2,
    y: 32.2,
  },
  {
    verb: "to support",
    x: 27.2,
    y: 35.9,
  },
  {
    verb: "to hook",
    x: 27.2,
    y: 39,
  },
  {
    verb: "to suspend",
    x: 27.2,
    y: 42.2,
  },
  {
    verb: "to spread",
    x: 27.2,
    y: 45.6,
  },
  {
    verb: "to hang",
    x: 27.2,
    y: 48.8,
  },
  {
    verb: "to collect",
    x: 27.2,
    y: 51.9,
  },
  {
    verb: "of tension",
    x: 27.2,
    y: 54.8,
  },
  {
    verb: "of gravity",
    x: 27.2,
    y: 58.2,
  },
  {
    verb: "of entropy",
    x: 27.2,
    y: 61.3,
  },
  {
    verb: "of nature",
    x: 27.2,
    y: 65.2,
  },
  {
    verb: "of grouping",
    x: 27.2,
    y: 68.7,
  },
  {
    verb: "of layering",
    x: 27.2,
    y: 71.3,
  },
  {
    verb: "of felting",
    x: 27.2,
    y: 74.4,
  },
  {
    verb: "to grasp",
    x: 27.2,
    y: 77.4,
  },
  {
    verb: "to tighten",
    x: 27.2,
    y: 80.7,
  },
  {
    verb: "to bundle",
    x: 27.2,
    y: 83.9,
  },
  {
    verb: "to heap",
    x: 27.2,
    y: 87.1,
  },
  {
    verb: "to gather",
    x: 27.2,
    y: 90.9,
  },
  {
    verb: "to scatter",
    x: 57.5,
    y: 7.2,
  },
  {
    verb: "to arrange",
    x: 57.5,
    y: 10.9,
  },
  {
    verb: "to repair",
    x: 57.5,
    y: 14.2,
  },
  {
    verb: "to discard",
    x: 57.5,
    y: 17,
  },
  {
    verb: "to pair",
    x: 57.5,
    y: 20.6,
  },
  {
    verb: "to distribute",
    x: 57.5,
    y: 23.6,
  },
  {
    verb: "to surfeit",
    x: 57.5,
    y: 26.9,
  },
  {
    verb: "to compliment",
    x: 57.5,
    y: 29.4,
  },
  {
    verb: "to enclose",
    x: 57.5,
    y: 33.1,
  },
  {
    verb: "to surround",
    x: 57.5,
    y: 36.2,
  },
  {
    verb: "to encircle",
    x: 57.5,
    y: 39.5,
  },
  {
    verb: "to hide",
    x: 57.5,
    y: 42.6,
  },
  {
    verb: "to cover",
    x: 57.5,
    y: 46.1,
  },
  {
    verb: "to wrap",
    x: 57.5,
    y: 49.2,
  },
  {
    verb: "to dig",
    x: 57.5,
    y: 52.4,
  },
  {
    verb: "to tie",
    x: 57.5,
    y: 55.3,
  },
  {
    verb: "to bind",
    x: 57.5,
    y: 58.9,
  },
  {
    verb: "to weave",
    x: 57.5,
    y: 62,
  },
  {
    verb: "to join",
    x: 57.5,
    y: 65.5,
  },
  {
    verb: "to match",
    x: 57.5,
    y: 68.4,
  },
  {
    verb: "to laminate",
    x: 57.5,
    y: 71.6,
  },
  {
    verb: "to bond",
    x: 57.5,
    y: 75.1,
  },
  {
    verb: "to hinge",
    x: 57.5,
    y: 78.3,
  },
  {
    verb: "to mark",
    x: 57.5,
    y: 81.4,
  },
  {
    verb: "to expand",
    x: 57.5,
    y: 84.7,
  },
  {
    verb: "to dilute",
    x: 57.5,
    y: 88,
  },
  {
    verb: "to light",
    x: 57.5,
    y: 90.9,
  },
  {
    verb: "to modulate",
    x: 77,
    y: 7.5,
  },
  {
    verb: "to distill",
    x: 77,
    y: 10.8,
  },
  {
    verb: "of waves",
    x: 77,
    y: 14.1,
  },
  {
    verb: "of electromagnetic",
    x: 77,
    y: 17,
  },
  {
    verb: "of inertia",
    x: 77,
    y: 20.7,
  },
  {
    verb: "of ionization",
    x: 77,
    y: 23.7,
  },
  {
    verb: "of polarization",
    x: 77,
    y: 27.2,
  },
  {
    verb: "of refraction",
    x: 77,
    y: 30.2,
  },
  {
    verb: "of simulataneity",
    x: 77,
    y: 33.3,
  },
  {
    verb: "of tides",
    x: 77,
    y: 36.7,
  },
  {
    verb: "of reflection",
    x: 77,
    y: 39.6,
  },
  {
    verb: "of equilibrium",
    x: 77,
    y: 42.7,
  },
  {
    verb: "of symmetry",
    x: 77,
    y: 46.3,
  },
  {
    verb: "of friction",
    x: 77,
    y: 49.3,
  },
  {
    verb: "to stretch",
    x: 77,
    y: 52.2,
  },
  {
    verb: "to bounce",
    x: 77,
    y: 55.4,
  },
  {
    verb: "to erase",
    x: 77,
    y: 58.7,
  },
  {
    verb: "to spray",
    x: 77,
    y: 61.9,
  },
  {
    verb: "to systematize",
    x: 77,
    y: 64.8,
  },
  {
    verb: "to refer",
    x: 77,
    y: 67.8,
  },
  {
    verb: "to force",
    x: 77,
    y: 70.9,
  },
  {
    verb: "of mapping",
    x: 77,
    y: 74.3,
  },
  {
    verb: "of location",
    x: 77,
    y: 77.1,
  },
  {
    verb: "of context",
    x: 77,
    y: 80.7,
  },
  {
    verb: "of time",
    x: 77,
    y: 84,
  },
  {
    verb: "of carbonization",
    x: 77,
    y: 87.1,
  },
  {
    verb: "to continue",
    x: 77,
    y: 90,
  },
];
