const myName = "Sam G";
let age = 390209;

console.log(myName);
console.log(age);

console.log("Hello, my name is " + myName + " and I am " + age + ".");

function reveal() {
    const myspan = document.getElementById("name");
    myspan.innerText = myName;
}
