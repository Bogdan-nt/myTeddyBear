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
    // TODO: Check Write Position Between Container and Component
    event.preventDefault();
    const id = event.dataTransfer.getData("id");
    event.target.appendChild(document.getElementById(id));
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
