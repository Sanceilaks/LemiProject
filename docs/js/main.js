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
        console.log("Applying title: " + newtitle);

        if (newtitle.length != 0) {
            document.title = newtitle;
        }
        else {
            document.title = _original_title[0];
            remove_last = true;
        }
    }, animation_speed);
}

function initializeAudio() {
    var music = document.getElementById("bgmusic");
    music.volume = 0.005;
    music.play();
}
//Ты заебал (тут ошибки)
function infinityTyper() {
    let typingContent = [
    "By people for people",
    "Only free (joke)",
    "Donate pls :/",
    "Our users are the best",
    "Ok dude",
    "Be happy",
    "I love you ;)",
    "voidptr_t on top",
    "yep, this line from meth",
    "TOD - Time Machine",
    "coder is retard",
    "why are you reading this?",
    "(void*(void*))(this);",
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
        <a href="https://github.com/Sanceilaks/LemiProject/raw/main/lemi_project_loader.exe" class="btn btn-lg btn-secondary fw-bold border-dark bg-dark">Download</a>
        </p>
    </main>

    <div class="fixed-bottom git-button">
        <a href="https://github.com/Sanceilaks/LemiProject" class="btn fw-bold border-dark bg-dark text-white">Repo</a>
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
