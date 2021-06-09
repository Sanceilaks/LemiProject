function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function initializeBackground() {
    VANTA.TOPOLOGY({
    el: "#particles-js",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x009966
    })
}
function initializeTitle(animation_speed) {
    let _original_title = document.title;
    var _rev, _id = 0;
    var remove_last = false;
    document.title = " ";
    setInterval(() => {
        if (remove_last){
            document.title = document.title.slice(0, 0) + document.title.slice(1);
            remove_last = false;
        }
        if (_id == -1) {
            _rev = 0;
            _id = 0;
        }
        if (_id == _original_title.length)
            _rev = 1;
        var current_title = document.title;
        var newtitle = _original_title;
        if (_rev == 0){
            newtitle = current_title + _original_title[_id];
            _id += 1;
        }
        else {
            newtitle = current_title.slice(0, _id) + current_title.slice(_id + 1);
            _id -= 1;
        }
        if (newtitle.length != 0) {
            document.title = newtitle;
        }
        else {
            document.title = _original_title[0];
            remove_last = true;
        }
    }, animation_speed);
}

let audioList = [
    "content/LIDA - Girl is snus.mp3",
    "content/Mayday Parade - Save Your Heart.mp3",
    "content/The Strumbellas - Spirits.mp3",
    "content/Theory of a Deadman - Time Machine.mp3"
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


function infinityTyper() {
    let typingContent = [
        "Made by people for people",
	@@ -147,9 +197,18 @@ function initializeElements() {
        <a href="https://github.com/Sanceilaks/LemiProject" class="btn fw-bold border-dark bg-dark text-white">Repo</a>
    </div>
    <div class="bottom-right">
        <h5 id="currentMusicLabel" class="text-white"></h5>
        <h5 class="text-white">Volume: <input class="form-range" type="range" min="0" max="100" id="musicVolume" oninput="audioVolumeChanged();" value="20"></h5>
        <div onclick="toggleAudio();" class="btn fw-bold border-dark bg-dark text-white" style="float: right;">
            <span id="pauseMusicButtonLabel" >Pause</span>
        </div>
        <div onclick="nextAudio();" class="btn fw-bold border-dark bg-dark text-white" style="float: right; margin-right: 10px;">
            <span>Next</span>
        </div>
    </div>
    `;
    var loadDivEl = document.getElementById("loadDiv");
    loadDivEl.parentNode.removeChild(document.getElementById("topDiv"));
    loadDivEl.parentNode.removeChild(loadDivEl);
    var newdiv = document.createElement("div");
    newdiv.innerHTML = siteContent;
    document.body.append(newdiv);
}
var is_initialized = false;
function initialize(){
    if (is_initialized)
        return;
    initializeElements();
    initializeAudio();
    initializeTitle(400);
    initializeBackground();
    infinityTyper();
    is_initialized = true;
}
