const canAttend = (intervals) => {
  if (intervals.length < 2) return true;

  intervals.sort((a, b) => a[0] - b[0]);

  let endPrevious = intervals[0][1];
  let i = 1;
  while (i < intervals.length) {
    const startCurrent = intervals[i][0];
    if (startCurrent < endPrevious) {
      return false;
    }
    endPrevious = intervals[i][1];
    i++;
  }

  return true;
};

// const intervals = [
//   [0, 30],
//   [30, 60],
// ];

const intervals = [
  [7, 10],
  [2, 4],
];

// const intervals = [];

console.log(canAttend(intervals));
