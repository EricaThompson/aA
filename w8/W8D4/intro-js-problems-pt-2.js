function titleize(array, cb){
    let titleized = array.map (el => `Mx. ${el} Jingleheimer Schmidt`);
    cb(titleized);
}

titleize(["Mary", "Brian", "Leo"], (array) => {
    array.forEach(name => console.log(name));
});

function Elephant(name, height, tricks) {
    this.name = name
    this.height = height
    this.tricks = tricks
};

Elephant.prototype.trumpet = function(){
    console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
};

Elephant.prototype.grow = function(){
    console.log(eval(this.height) + 12);
};

Elephant.prototype.addTrick = function(trick){
    this.tricks.push(trick);
    console.log(this.tricks)
};

Elephant.prototype.play = function() {
    let random = Math.floor(Math.random() * Math.floor(this.tricks.length))
    console.log(this.tricks[random]);

};

const eleph = new Elephant("eleph", '1', ['jump', 'sing', 'dance']);
eleph.trumpet()
eleph.grow()
eleph.addTrick('juggle')
eleph.addTrick('wink')
eleph.play()

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

Elephant.prototype.paradeHelper = function (elephant){
    console.log(`${this.name} is trotting by!`)
}

console.log(herd.forEach(elephant => elephant.__proto__.paradeHelper))

