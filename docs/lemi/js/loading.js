let audioList = [
    "other/1.mp3",
    "other/2.mp3"
];

var last_audio = ""; 

function playAudio(a) {
    function getFullName(audio) {
        var out = audio.replace("content/", "");
        out = out.replace(".mp3", "");
        return out;
    }
    function setMusicTitle(audio) {
        var label = document.getElementById("currentMusicLabel");
        label.innerHTML = getFullName(audio);
    }
    var music = document.getElementById("bgmusic");

    music.src = a;

    music.load();
    music.play();

    setMusicTitle(a);

    last_audio = a;
}

function nextAudio() {
    var next_id = getRandomInt(audioList.length);
        var m = document.getElementById("bgmusic");

    while (last_audio.endsWith(audioList[next_id]))
        next_id = getRandomInt(audioList.length);

    playAudio(audioList[next_id]);
}

function toggleAudio() {
    var music = document.getElementById("bgmusic");
    var pauseButton = document.getElementById("pauseMusicButtonLabel");

    music.paused ? music.play() :  music.pause();
    pauseButton.innerHTML = music.paused ? "Resume" : "Pause";
}

function audioVolumeChanged() {
    var slider = document.getElementById("musicVolume");
    var music = document.getElementById("bgmusic");

    music.volume = slider.value / 1000;
}

function initializeAudio() {
    var music = document.getElementById("bgmusic");
    music.volume = 0.02;
    music.onended = nextAudio;

    playAudio(audioList[getRandomInt(audioList.length)]);
}

var is_initialized = false;
function initialize(){
    if (is_initialized)
        return;
    
    initializeAudio();

    is_initialized = true;
}