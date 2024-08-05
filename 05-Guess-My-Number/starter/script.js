'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.secretnumber').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
document.querySelector('.message').textContent = '🎉 Correct SecretNumber!'
*/
let score = 20;
let secretNumber;
let highestScore = 0;
const forgivenCharacters = `-!"#$%&/()=?¡*][¨_:;!°,.-{}+´¿'}]`;
const startGame = function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = "?";
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    console.log("Started")
}   

startGame();

const checkInput = function() {
    const guess_value = document.querySelector('.guess').value;
    console.log(guess_value);
    if (guess_value !== ''){
        const value = String(guess_value);
        if (guess_value) {
            const value = String(guess_value);
            console.log(value);
            for (let i = 0; i < value.length; i++) {
                if (String(forgivenCharacters).indexOf(value[i])) {
                    console.log("Index "+ forgivenCharacters.indexOf(value[i]));
                    return false;
                }
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}

const updateMessage = function(message) {
    document.querySelector('.message').textContent = `${message}`;
}
const losePoint = function() {
    console.log(score, typeof score);
    score--;
    document.querySelector('.score').textContent = score;
}
const updateHighScore = function() {
    if (score > highestScore) {
        highestScore = score;
        console.log('updateHighScore');
        document.querySelector('.highscore').textContent = highestScore;
    }
}

const checkLose = function() {
    // if (score === 0) {
    //     updateMessage('💥 Perdiste');
    //     return;
    // }
}

const win = function() {
    updateMessage('✅ Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
}


document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    if (checkInput() !== true) {
        if(!guess) {
            updateMessage('⛔ Game Over!');
            return;
        }
    
        if (guess === secretNumber) {
            updateHighScore();
            win();
            return;
        }
        
        if (guess > secretNumber) {
            updateMessage('📈 Too High!');
            losePoint();
            checkLose();
            return;
        }
    
        if (guess < secretNumber) {
            updateMessage('📉 Too Low!');
            losePoint();
            checkLose();
            return;
        }
    }
})

document.querySelector('.again').addEventListener('click', function() {
    startGame();
    updateMessage('Start guessing...');
});