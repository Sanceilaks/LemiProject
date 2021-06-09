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
	@@ -160,9 +157,8 @@ function infinityTyper() {
function initializeElements() {
    let siteContent = `
    <div id="particles-js"></div>
    <header>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">LemiProject</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
	@@ -173,43 +169,40 @@ function initializeElements() {
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
    <div class="git-button">
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
