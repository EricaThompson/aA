function titleize(array, cb){
    let titleized = array.map (el => `Mx. ${el} Jingleheimer Schmidt`);
    cb(titleized);
}

titleize(["Mary", "Brian", "Leo"], (array) => {
    array.forEach(name => console.log(name));
});



