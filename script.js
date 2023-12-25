let buttons = document.querySelectorAll('.key');
let sounds = document.querySelectorAll('audio');


document.addEventListener('keydown', (event)=> {    
    let key = event.key.toUpperCase().charCodeAt().toString();
    

    for (let button of buttons) {
        if (key === button.getAttribute('data-key')) {
            button.classList.add('playing');
        }
    }
    for (let sound of sounds) {
        if (key === sound.getAttribute('data-key')) {
            sound.play();
        }
    }
    
});
window.addEventListener('keyup', () => {
    for (let button of buttons) {
        button.classList.remove('playing');
    } 
});

