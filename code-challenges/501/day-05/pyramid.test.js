function writeLevel(n) {
  let line = '';
  for (let i = 1; i <= n; i++) {
    line += '*';
  }
  return line;
}

function createPyramidUpsideDown(num) {
  if (num === 0) {
    return;
  }
  while (num !== 0) {
    console.log(writeLevel(num));
    num--;
  }
}

function createPyramid(num) {
  val = 1;
  while(val !== num) {
    console.log(writeLevel(val));
    val++;
  }
}

function createPyramidStack(num) {
  createPyramidUpsideDown(num);
  createPyramid(num);
}

createPyramidStack(15);