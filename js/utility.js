function hideElementById(elementId) {
const element = document.getElementById(elementId);
element.classList.add('hidden');
    
}
function showElementById(elementId) {
const element = document.getElementById(elementId);
element.classList.remove('hidden');
    
}

function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('bg-orange-400');
    // console.log(element);
    
}
function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.remove('bg-orange-400');
    // console.log(element);  
}

// update score 
function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
    
}

// set score
function setTextElementValueById(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText = value;

};
function getElementTextById(elementId) {
    const element = document.getElementById(elementId)
    const text = element.innerText;
    return text;
    
}
function getARandomAlphabet() {
    //get or create an alpabate array
    // const apphabets = ['a', 'b',...];
    const alpabateString = 'abcdefghijklmnopqrstuvwxyz';
    const alpabates = alpabateString.split('');
    // console.log(alpabates);

    //get a random index between o-25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    

    const alpabate = alpabates[index]; //ekhane alpabates string ar index die je number add kore console log korlo eta boji nai
    // console.log(index, alpabate);
    return alpabate;

    
}