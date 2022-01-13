const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    switch (userInput) {
        case 'rock':
            return 'rock';
            break;
        case 'paper':
            return 'paper';
            break;
        case 'scissors':
            return 'scissors';
            break;
        case 'bomb':
            return 'bomb';
            break;
    }
}

const getComputerChoice = () => {
    let random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}
// console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
        return 'You win by default';
    }
    if (userChoice === computerChoice) {
        return 'Game is tie';
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    } else if (userChoice === 'rock') {
        if (computerChoice === 'scissors') {
            return 'You won!';
        } else {
            return 'Computer won!';
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'You won!';
        } else {
            return 'Computer won!';
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'paper') {
            return 'You won!';
        } else {
            return 'Computer won!';
        }
    } else {
        return 'That is not a valid item';
    }
}

const playGame = (selectedValue) => {
    const userChoice = getUserChoice(selectedValue);
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    document.getElementById('cpu').innerHTML=`The computer chooses ${computerChoice}`;
    document.getElementById('result').innerHTML=`${determineWinner(userChoice, computerChoice)}`;
    console.log('The computer threw:' + computerChoice);
    // console.log(determineWinner(userChoice, computerChoice));
};



let btn = document.getElementById('submit');
btn.addEventListener('click', e = () =>{
    let input = document.getElementById('ff').value;
    playGame(input);
} );
