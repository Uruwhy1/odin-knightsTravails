function knightMoves(start, end) {
  if (start[0] === end[0] && start[1] === end[1]) return [start];

  const queue = [[start]];

  const visited = new Set();
  visited.add(start.toString());
}

// Check if either x or y go outside from the board (0 to 7)
const isValidMove = (x, y) => x >= 0 && x < 8 && y >= 0 && y < 8;

// possible ways in which the knight can move
const possibleMoves = [
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
  [-2, -1],
  [-2, 1],
  [-1, 2],
];



// Example
const start = [0, 0];
const end = [5, 5];
knightMoves(start, end);
