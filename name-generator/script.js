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
function generate() {
    let first = document.getElementById("month").value;
    let middle = document.getElementById("age").value % 8;
    let last = document.getElementById("color").value;
    document.getElementById("name").innerHTML = firstdict[first] + " " + middledict[middle] + " " + lastdict[last];
}
