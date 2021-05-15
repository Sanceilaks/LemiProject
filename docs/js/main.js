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

function initializeElements() {
    let siteContent = `
    <div id="particles-js"></div>

    <header>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">LemiProject</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">HOME</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="https://www.donationalerts.com/r/voidptr_t">DONATE</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">ABOUT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <main class="px-3 center-box text-center">
        <h1 id="typingElement"></h1>
        <p class="lead">
        <a href="https://github.com/Sanceilaks/LemiProject/raw/main/lemi_project_loader.exe" class="btn btn-lg btn-secondary fw-bold border-dark bg-dark">Get</a>
        </p>
    </main>

    <div class="fixed-bottom git-button">
        <a href="https://github.com/Sanceilaks/LemiProject" class="btn fw-bold border-dark bg-dark text-white">Repo</a>
    </div>
    `;

    var loadDivEl = document.getElementById("loadDiv");
    loadDivEl.parentNode.removeChild(loadDivEl);

    document.innerHTML = siteContent;
}

function initialize(){
    initializeElements();
    initializeAudio();
    initializeTitle();
    initializeBackground();
    infinityTyper();
}