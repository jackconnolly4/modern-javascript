var moment = require("moment");

console.log("Hello from Javascript!");

var datetime = moment().startOf("day").fromNow();
console.log(datetime);

var ftime = moment("20120620", "YYYYMMDD").fromNow();
console.log(ftime);
