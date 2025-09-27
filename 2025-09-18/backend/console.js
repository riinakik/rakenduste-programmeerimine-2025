console.error("error!");
console.warn("warn!");
console.info("info");
const users = [
  { id: 1, name: "Liis" },
  { id: 2, name: "Marie" },
];
console.table(users);
console.time("loop");
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("loop");
console.assert(2 + 2 === 5, "not 5");
console.assert(2 + 2 === 4, "ok");
console.group("group");
console.log("one");
console.log("two");
console.groupEnd();
console.count("click");
console.count("click");
console.count("click");
