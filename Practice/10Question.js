"use strict";
// 10. Write a function that accepts a value of type Days enum and returns a message like "Today is Monday".
Object.defineProperty(exports, "__esModule", { value: true });
var Days;
(function (Days) {
    Days[Days["Monday"] = 0] = "Monday";
    Days[Days["Tuesday"] = 1] = "Tuesday";
    Days[Days["Wednesday"] = 2] = "Wednesday";
    Days[Days["Thursday"] = 3] = "Thursday";
    Days[Days["Friday"] = 4] = "Friday";
    Days[Days["Saturday"] = 5] = "Saturday";
    Days[Days["Sunday"] = 6] = "Sunday";
})(Days || (Days = {}));
function whatstoday(day) {
    console.log(`Today is ${Days[day]}`);
}
whatstoday(Days.Sunday);
