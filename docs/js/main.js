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
