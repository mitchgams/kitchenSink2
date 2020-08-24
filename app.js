let firstName = "Mitchell";
const stateCount = 50;
let fivePlusFour = 5+4;

/***************
 * Function displaying Hello
 */
function sayHello() {
    alert("Hello World!");
}

sayHello();

/*********************
 * checkAge checks to make sure you
 * are 21 or older
 */
function checkAge(name, age) {
    if(age < 21) {
        console.log("Sorry " + name + ", you aren't old enough to view this page!");
    }
}
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

let favoriteVegetables = ["Okra", "Asparagus", "Spinach", "Artichokes", "Brussell Sprouts", "Cabbage"];
let pet = {
    name: "Carl",
    breed: "Pitbull"
};
console.log(pet.name + " is a " + pet.breed);

let people = [
    { name:"Susan", age:27 },
    { name:"Carl", age:20 },
    { name:"Billy", age:34 },
    { name:"Meagan", age:25 },
    { name:"Mike", age:18 }
];
for(i = 0; i < people.length; i++){
    checkAge(people[i].name, people[i].age);
}

/*********************
 * getLength() checks the length of a given string
 */
function getLength(string) {
    return string.length;
}

let strLength = getLength("Hello World");
if(strLength%2 < 1) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!");
}