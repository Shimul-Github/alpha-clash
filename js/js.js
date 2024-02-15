// display home and playground off and on
// function play() {
//     // console.log('play started'); 
//     // hide the home screen to add a class of hidden to it by js after click
//     const homeScreen = document.getElementById('home-screen');
//     // console.log(homeScreen.classList)
//     homeScreen.classList.add('hidden');



//     // show the play ground
//     const playGroundSection = document.getElementById('play-ground');
//     console.log(playGroundSection);
//     playGroundSection.classList.remove('hidden');
// }

function handleKeyboardButtonPress () {
    // console.log(event.key);
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);
    //stop the game if pressed  'esc'
    if(playerPressed === 'Escape'){
        gameOver();
    };

    //key player is expected  to press
    const currentAlphabetElement = document.getElementById('current-alpabate');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    //check right or wrong key pressed
    if(playerPressed === expectedAlphabet){
        console.log('you got a point');

        const currentScore = getTextElementValueById('current-score');  
        // console.log(currentScore); 
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore); 


        //------------------------------------------------
    //     //update score
    //     // 1.get the current score
    //     const currentScoreElement = document.getElementById('current-score');
    //     const currentScoreText = currentScoreElement.innerText;
    //    const currentScore = parseFloat(currentScoreText);
    //     console.log(currentScore);
    // const currentScore = getTextElementValueById('currentScore');


    //     //2. increse the score by 1
    //    const newScore = currentScore + 1;
    //     // 3. show the updated score
    //     currentScoreElement.innerText = newScore;
        // start a new round
        // console.log('you pressed correct', expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame(); 
    }else{
        console.log('Please type in right way');

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);
        if(updatedLife === 0){
            console.log('Game Over');

            gameOver();
        }


        //-------------------
        // //step -1: get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseFloat(currentLifeText);

        // //step 2: reduce the life count
        // const newLife = currentLife -1 ;
        // //step 3: display the life count
        // currentLifeElement.innerText = newLife;
    }
    // console.log('buttonPressed');
    
}
//capture keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress)


function continueGame() {
// step 1 gernerate random alpabate
    const alpabate = getARandomAlphabet();
    // console.log('Your Random Alpabet', alpabate);

    //set randomly generated alpabate to the screen
    const currentAlpabateElement = document.getElementById('current-alpabate');
    currentAlpabateElement.innerText = alpabate;

    //set Backgruond Color on kbd random alpabate
    setBackgroundColorById(alpabate);
    // to add data theme of keboard or whole webscreen add data-theme = 'light' to html out of en;


    
}
function play() {
    //hide everything show only the playground
    hideElementById('home-screen');
    //player first scree theke khelte asuk ba playagain click kore asuk play ground e asle onno kono screen ar show korbe na sodhu playground er screen e show korbe
    hideElementById('final-score');
    showElementById('play-ground');

    //reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame();  
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');
    //update final score
    //1.get the final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);
    //clear the last selected alphabet highlight

    const currentAlphabet = getElementTextById('current-alpabate');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);


    // const yourScore = document.getElementById('your-score');
    // console.log(yourScore);
    // const yourScoreText = yourScore.innerText;
    // console.log(yourScoreText);
    // // yourScoreText.innerText = currentScore.innerText;
    // currentScore.innerText = yourScoreText;

};
