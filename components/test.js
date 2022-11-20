let str = "abaacacaacda";
let log = console.log;

let str2 = "fakfakfakakfap";
// get string, check it against itself and check for multiple occurences //

function findUniqueSubStr(str) {
  let arr = Array.from(str);
  log(arr);

  // filter thru array and check against another instance of itself.
  //
  let revised = arr.filter((item, index) => {
    return arr.indexOf(item) !== index;
  });

  return revised.join("");
}

log(findUniqueSubStr(str));

class Employees {
  constructor(employeeName, id, vacationPTO) {
    this.employeeName = employeeName;
    this.id = id;
    this.clockIn = () => {
      // clock in code
    };
    this.clockOut = () => {
      // clock out
    };
    this.vacationPTO = vacationPTO;
  }
}
