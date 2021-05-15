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

function initializeTitle() {
    var rev = "fwd";

    function titlebar(val) {
        var msg = "LemiProject";
        var res = " ";
        var speed = 1000;
        var pos = val;

        var le = msg.length;
        if (rev == "fwd") {
            if (pos < le) {
                pos = pos + 1;
                scroll = msg.substr(0, pos);
                document.title = scroll;
                timer = window.setTimeout("titlebar(" + pos + ")", speed);
            } else {
                rev = "bwd";
                timer = window.setTimeout("titlebar(" + pos + ")", speed);
            }
        } else {
            if (pos > 0) {
                pos = pos - 1;
                var ale = le - pos;
                scrol = msg.substr(ale, le);
                document.title = scrol;
                timer = window.setTimeout("titlebar(" + pos + ")", speed);
            } else {
                rev = "fwd";
                document.title = " ";
                timer = window.setTimeout("titlebar(" + pos + ")", speed);
            }
        }
    }
    titlebar(0);
}

function initializeAudio() {
    var music = document.getElementById("bgmusic");
    music.volume = 0.05;
    music.play();
}

function infinityTyper() {
    let typingContent = [
    "By people for people",
    "Only free (joke)",
    "Donate pls :/",
    "Our users is best",
    "Ok dude",
    "If you see this - be happy",
    "I love you ;)"
    ];
    var rand = getRandomInt(typingContent.length);
    var element = document.getElementById("typingElement");
    var typeWriter = new Typewriter(element, {loop: true});
    typeWriter.typeString(typingContent[rand]).pauseFor(6000).deleteAll().pauseFor(500).callFunction(() => {
        typeWriter.stop();
        infinityTyper();
    }).start();
}

function initialize(){
    initializeAudio();
    initializeTitle();
    initializeBackground();
    infinityTyper();
}

initialize();