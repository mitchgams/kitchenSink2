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
        alert("Sorry " + name + ", you aren't old enough to view this page!");
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
