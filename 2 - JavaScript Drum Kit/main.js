// wesbos JS drumkit project 1-project

function playSound(evt){
    const audio = document.querySelector(`audio[data-key="${evt.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${evt.keyCode}"]`);
    if (!audio) return; // stop the function from running all together
    audio.currentTime = 0; // rewind to the start
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();

}
function removeTransition(evt){
    if (evt.propertyName !== 'transform') return; // skip if its not a transform
    this.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
// end project
