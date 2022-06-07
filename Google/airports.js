// https://www.youtube.com/watch?v=qz9tKlF431k&t=32s&ab_channel=Cl%C3%A9mentMihailescu

const airports = [
  "BGI",
  "CDG",
  "DEL",
  "DOH",
  "DSM",
  "EWR",
  "EYW",
  "HND",
  "ICN",
  "JFK",
  "LGA",
  "LHR",
  "ORD",
  "SAN",
  "SFO",
  "SIN",
  "SIN",
  "TLV",
  "BUD",
];

const routes = [
  ["DSM", "ORD"],
  ["ORD", "BGI"],
  ["BGI", "LGA"],
  ["SIN", "CDG"],
  ["CDG", "SIN"],
  ["CDG", "BUD"],
  ["DEL", "DOH"],
  ["DEL", "CDG"],
  ["TLV", "DEL"],
  ["EWR", "HND"],
  ["HND", "ICN"],
  ["HND", "JFK"],
  ["ICN", "JFK"],
  ["JFK", "LGA"],
  ["EYW", "LHR"],
  ["LHR", "SFO"],
  ["SFO", "SAN"],
  ["SFO", "DSM"],
  ["SAN", "EYW"],
];

const startingAirport = "LGA";

const findMinimumRoutes = (airports, routes, startingAirport) => {
  const res = [];
  const indegrees = new Set();
  const outdegrees = new Set();

  routes.forEach(([from, to]) => {
    outdegrees.add(from);
    indegrees.add(to);
  });

  outdegrees.forEach((out) => {
    if (!indegrees.has(out)) {
      res.push(out);
    }
  });

  return res;
};

console.log(findMinimumRoutes(airports, routes, startingAirport));
