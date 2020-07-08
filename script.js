document.addEventListener("keydown", function(event) {
    let audio;
    if(event.code == "KeyA"){
        audio = new Audio("media/A.mp3");
        audio.play();
    }else if(event.code == "KeyS"){
        audio = new Audio("media/S.mp3");
        audio.play();
    }else if(event.code == "KeyD") {
        audio = new Audio("media/D.mp3");
        audio.play();
    }else if(event.code == "KeyF"){
        audio = new Audio("media/F.mp3");
        audio.play();
    }else if(event.code == "KeyG"){
        audio = new Audio("media/G.mp3");
        audio.play();
    }else if(event.code == "KeyH"){
        audio = new Audio("media/H.mp3");
        audio.play();
    }else if(event.code == "KeyJ"){
        audio = new Audio("media/J.mp3");
        audio.play();
    }else if(event.code == "KeyW"){
        audio = new Audio("media/W.mp3");
        audio.play();
    }else if(event.code == "KeyE"){
        audio = new Audio("media/E.mp3");
        audio.play();
    }else if(event.code == "KeyT"){
        audio = new Audio("media/T.mp3");
        audio.play();
    }else if(event.code == "KeyY"){
        audio = new Audio("media/Y.mp3");
        audio.play();
    }else if(event.code == "KeyU"){
        audio = new Audio("media/U.mp3");
        audio.play();
    }
});