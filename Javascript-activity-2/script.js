let animals = ["cat", "dog", "elephant", "rhino", "parrot"];
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
let upperAnimals = [];
for (let i = 0; i < animals.length; i++) {
    upperAnimals.push(animals[i].toUpperCase());
}
upperAnimals.splice(3, 2);
console.log(upperAnimals);
console.log("-------------------------");
let scores = [35, 48, 63, 87, 98];
let newScores = [];
for (let i = 0; i < scores.length; i++) {
    newScores.push(scores[i] + 5);
}
for (let i = 0; i < scores.length; i++) {
    if (scores[i] < 50) {
        scores[i] = "Retake";
    }
}
console.log("Old scores (w/ retake): " + scores);
console.log("New scores: " + newScores);
