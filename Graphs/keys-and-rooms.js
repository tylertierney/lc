const canVisitAllRooms = (rooms) => {
  // Adj List of type Map *?*
  // 0 => [1]
  // 1 => [2]
  // 2 => [3]
  // 3 => []

  // Visited (of type Set)
  // {0, 1, 2, 3}

  // Recursive function that starts at room 0
  // This will mark visited rooms in the set

  // At the end, if the size of the visited set
  // is equal to the length of the original array,
  // return true. Otherwise, false.

  const visited = new Set();

  const traverse = (i, edges) => {
    if (visited.has(i)) return;
    visited.add(i);

    edges.forEach((nextRoom) => traverse(nextRoom, rooms[nextRoom]));
    return;
  };

  traverse(0, rooms[0]);

  return visited.size === rooms.length;
};

// const rooms = [[1], [2], [3], []];
const rooms = [[1, 3], [3, 0, 1], [2], [0]];

console.log(canVisitAllRooms(rooms));
