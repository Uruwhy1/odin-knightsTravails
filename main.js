function knightMoves(start, end) {
  if (start[0] === end[0] && start[1] === end[1]) return `You made it in 0 moves!\n[${start}]`;

  const queue = [[start]];

  const visited = new Set(); // set = arrays without repeated values
  visited.add(start.toString());

  // BFS
  while (queue.length > 0) {
    const path = queue.shift();
    const currentPos = path[path.length - 1];

    // explore all possible moves
    for (let move of possibleMoves) {
      const nextX = currentPos[0] + move[0];
      const nextY = currentPos[1] + move[1];

      if (isValidMove(nextX, nextY)) {
        const nextPos = [nextX, nextY];

        // if position == end position, return the path
        if (nextPos[0] === end[0] && nextPos[1] === end[1]) {
          const fullPath = [...path, nextPos];

          // add linebreak after every move
          const moves = fullPath.map(pos => `[${pos.join(', ')}]`).join('\n');
          return `You made it in ${fullPath.length - 1} moves! Here's your path:\n${moves}`;
        }
        

        // if position is not visited, add to queue
        if (!visited.has(nextPos.toString())) {
          visited.add(nextPos.toString());
          queue.push([...path, nextPos]);
        }
      }
    }
  }
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
const end = [2, 2];
console.log(knightMoves(start, end));
