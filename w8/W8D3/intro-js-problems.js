// function mysteryScoping1() {
//     var x = 'out of block';
//     if (true) {
//         var x = 'in block';
//         console.log(x);
//     }
//     console.log(x);
// }

// mysteryScoping1()
// //in block
// //in block

// function mysteryScoping2() {
//     const x = 'out of block';
//     if (true) {
//         const x = 'in block';
//         console.log(x);
//     }
//     console.log(x);
// }

// mysteryScoping2()
// //in block
// //out of block

// function mysteryScoping3() {
//     const x = 'out of block';
//     if (true) {
//         var x = 'in block';
//         console.log(x);
//     }
//     console.log(x);
// }

// //mysteryScoping3()
// //error because const can't be redefined

// function mysteryScoping4() {
//     let x = 'out of block';
//     if (true) {
//         let x = 'in block';
//         console.log(x);
//     }
//     console.log(x);
// }

// mysteryScoping4()
// //in block
// //out of block

// function mysteryScoping5() {
//     let x = 'out of block';
//     if (true) {
//         let x = 'in block';
//         console.log(x);
//     }
//     let x = 'out of block again';
//     console.log(x);
// }

// mysteryScoping5()
// //error because of using a variable multiple times, could be a mistake


function madLib(verb, adj, noun) {
    console.log(`We shall ${verb} the ${adj} ${noun}`)
};

madLib('make', 'best', 'guac');

function isSubstring(searchString, subString) {
    if (searchString.includes(subString)){
        console.log(true)
    } else {
        console.log(false)
    }
}

isSubstring("time to program", "time")
//true
isSubstring("Jump for joy", "joys")
//false