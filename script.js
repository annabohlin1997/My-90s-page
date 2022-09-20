function changeText() {
    let myElement = document.createElement('h2');
    myElement.innerHTML = 'The answer is 3! Did you get it right?';

    document.getElementById('guess').appendChild(myElement);
}

let button = document.getElementById('button');
button.addEventListener('click', changeText);

new cursoreffects.fairyDustCursor({colors: ["#d8bfd8", "#005d82dd", "#ffffff"]});