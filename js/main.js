const source = "./sounds/background_song.mp3";
const audio = document.createElement("audio");

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
    }
    if(checkIfGameIsOver()) {
        setTimeout(startVideoPresentation, 1000);
    }
}

function startVideoPresentation() {
    console.log("video")
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
    audio.load();
    audio.addEventListener("load", () => audio.play(), true);
    audio.src = source;
}

window.onload = function () {
    startBackgroundMusic();
};
