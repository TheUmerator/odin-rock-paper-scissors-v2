// console.log('and were live');

// step 1
// function that gets computer choice
// returns rock, paper, or scissors
// randomized

// step 2
/*
- function that gets user choice
-returns rock, paper or scissor
- user selected, r,p,s
*/

/* step 3
function that plays a round
uses the choices functions 
write main logic that dictates which is bigger

whoever wins, return the name
if draw, return draw

*/

/* step 4
function that plays the game
uses the round function

game is of 5 rounds
keep track of round number

stop after round count is 5

best of 5

announce the winner

*/

function getComputerChoice() {
    // 1 2 3
    // randomize those 3 numbers
    // switch statement to return r p or s
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(3);
    let value = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);

    switch (value) {

        case 1:
            return 'r';
            break;

        case 2:
            return 'p';
            break;

        case 3:
            return 's';
            break;

    }
}