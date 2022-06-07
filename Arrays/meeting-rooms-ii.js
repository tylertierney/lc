const minMeetingRooms = (intervals) => {};

// 0 overlaps => 1 room
// 1 overlap => 2 rooms
// 2 overlaps => 3 rooms

const intervals = [
  [1, 10],
  [2, 7],
  [3, 19],
  [8, 12],
  [10, 20],
  [11, 30],
];
console.log(minMeetingRooms(intervals));
