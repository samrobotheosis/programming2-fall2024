//Dictionary for first name: by month
let firstdict = {
    jan: "Super",
    feb: "Ultra",
    mar: "Mega",
    apr: "Total",
    may: "Extreme",
    jun: "Hyper",
    jul: "Xtra",
    aug: "Max",
    sep: "Plus",
    oct: "Ultimate",
    nov: "Supreme",
    dec: "Prime"
};
//Dictionary for middle name: by remainder of age/8
let middledict = {
    0: "Ultron",
    1: "Megatron",
    2: "Sonic",
    3: "Android",
    4: "Machina",
    5: "Guardian",
    6: "Terminator",
    7: "Raptor"
};
//Dictionary for last name: by favorite color
let lastdict = {
    red: "500",
    ora: "5000",
    yel: "10000",
    gre: "v0",
    blu: "7000",
    pur: "100",
    pin: "9000",
    bro: "3000",
    gra: "1000",
    bla: "v1",
    whi: "Infinite"
};
//Generate function
function generate() {
    //Takes the value of the month dropdown
    let first = document.getElementById("month").value;
    //Takes the value of the age input and gets its remainder from 8
    let middle = document.getElementById("age").value % 8;
    //Takes the value of the color dropdown
    let last = document.getElementById("color").value;
    //Setting the blank name tag to those values found in the dictionaries for our selected color, age, and month.
    //if value for color is "red", it will take "500", because the dictionary defines the value for "red" as "500"
    document.getElementById("name").innerHTML = firstdict[first] + " " + middledict[middle] + " " + lastdict[last];
}
