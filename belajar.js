window.onload = function() {
    alert('Selamat datang di website Muhammad Alvin!');
};

confirm("Apakah Anda ingin melanjutkan?");
prompt("Saya Belajar:");
Date(10);
parseInt("200");
parseFloat("99.99");
setTimeout(function() {
    alert("Ini adalah pesan setelah 2 detik");
}, 2000);

// Variabel dasar
var myInteger = 12; // 32-bit number
var myLong = 9310141419482; // 64-bit number
var myFloat = 5.5; // 32-bit floating-point number
var myDouble = 9310141419482.22; // 64-bit floating-point number
var myBoolean = true; // 1-bit true/false
var myBoolean2 = false;
var myNotANumber = NaN;
var NaN_Example = 0 / 0; // NaN: Division by Zero is not possible
var notDefined; // undefined: we didn't define it to anything yet
window.alert(notDefined); // undefined
var myNull = null;

// Array dan Object
var myArray = ["zero", "one", "two"];
var favoriteFruits = ["apple", "orange", "strawberry"];
var carsInParkingLot = ["Toyota", "Ferrari", "Lexus"];
var employees = ["Billy", "Bob", "Joe"];
var primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
var randomVariables = [2, "any type works", undefined, null, true, 2.51];

window.alert(myArray[0]); // "zero"
var elementNumber = 1;
window.alert(myArray[elementNumber]); // "one"

var myObject = {};