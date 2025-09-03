// functions
function Car() {
    return "BMW M3";
}
Car();
// Function types
// Callback as a param
function abce(name, callback) { }
abce("Asad", function (value) {
    console.log(value);
});
// Optional params
function isHuman(name, age, gender) {
    if (gender === void 0) { gender = "Not to be disclosed"; }
    console.log(name, age, gender);
}
isHuman("Asad", 19);
isHuman("Asad", 19, "Male");
