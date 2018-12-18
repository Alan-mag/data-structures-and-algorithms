function mazeSolver(key, visited = {}, finalVal, maze,) {
  if (key === finalVal) {
    return 'found ', finalVal;
  }
  visited[key] = true;
  console.log(maze)
  console.log
  maze[key].forEach(element => {
    if (!visited[element]) {
      mazeSolver(element, visited, finalVal)
    }
  });
}

let maze = {
  "5": [12],
  "9": [10, 16],
  "10": [9, 11],
  "11": [10, 12],
  "12": [5, 11],
  "16": [9, 23],
  "23": [16, 24],
  "24": [23, 25],
  "25": [24, 26, 32],
  "26": [25, 27],
  "27": [26, 34],
  "32": [25, 39],
  "34": [27],
  "37": [38, 44],
  "38": [37, 39],
  "39": [32, 38],
  "44": [37, 51]
}

mazeSolver(5, {}, 44, maze);

