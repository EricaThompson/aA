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

