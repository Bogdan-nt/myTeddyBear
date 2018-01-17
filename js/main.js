const background_music = "./sounds/background_song.mp3";
const fail_music = "./sounds/fail.mp3";
const final_music = "./sounds/final.mp3";
const step_music = "./sounds/step.mp3";
const audio = document.createElement("audio");
const step_audio = document.createElement("audio");

function playMusic() {
    const playButton = document.getElementById("play_button");
    audio.paused ? audio.play() : audio.pause();
    audio.paused ? playButton.style.setProperty("filter", "grayscale(60%)") :
        playButton.style.setProperty("filter", "none");

}

function resetGame() {
    console.log("reset");
}

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("id", event.target.id);
}

function drop(event) {
    event.preventDefault();
    const component = document.getElementById(event.dataTransfer.getData("id"));
    if (checkIfContainerHasOtherChildren(event.target) &&
        checkIfContainerIsValid(component, event.target)) {
        event.target.appendChild(component);
        startStepAudio(step_music);
    }
    if(checkIfGameIsOver()) {
        setTimeout(startVideoPresentation, 1000);
        startStepAudio(final_music);
    }
}

function startVideoPresentation() {
    console.log("video");
    [].slice.call(document.getElementsByClassName('video_link'))
        .forEach(item => item.style.setProperty("display", "block"));
}

function checkIfGameIsOver() {
    return [].slice.call(document.getElementsByClassName('container_component'))
        .map(item => item.children.length === 1)
        .filter(it => it === false).length === 0;
}

function checkIfContainerIsValid(component, container) {
    return (container.id.indexOf(component.id) !== -1 &&
        container.className === 'container_component') ||
        container.className === 'button_container_form';
}

function checkIfContainerHasOtherChildren(container) {
    return container.children.length === 0;
}

function startBackgroundMusic() {
    audio.autoplay = true;
    audio.volume = 0.2;
    audio.load();
    audio.addEventListener("load", () => audio.play(), true);
    audio.src = background_music;
}

function startStepAudio(music) {
    step_audio.autoplay = true;
    step_audio.load();
    step_audio.addEventListener("load", () => audio.play(), true);
    step_audio.src = music;
}

window.onload = function () {
    startBackgroundMusic();
};

document.addEventListener("DOMContentLoaded", function(event) {
    new ModalVideo(".video_link");
});
