"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 9. Create an enum for Days of the week and print Days.Monday.
var weeks;
(function (weeks) {
    weeks["Monday"] = "Monday it is";
    weeks["Tuesday"] = "Tuesday it is";
    weeks["Wednesday"] = "Wednesday it is";
    weeks["Thursday"] = "Thursday it is";
    weeks["Friday"] = "Friday it is";
    weeks["Saturday"] = "Saturday it is";
    weeks["Sunday"] = "Sunday it is";
})(weeks || (weeks = {}));
console.log(weeks.Monday);
console.log(weeks.Tuesday);
console.log(weeks.Wednesday);
console.log(weeks.Friday);
console.log(weeks.Sunday);
