//KeyPress
document.addEventListener("keydown", function(event) {
    const st = "ASDFGHJWETYU";
    let code = String(event.code).slice(3, 4);
    if(st.match(code)){
        console.log(code + " is pressed.");
        let path = "media/"+code+".mp3";
        let audio = new Audio(path);
        audio.play();
        let selector = "."+code;
        document.querySelector(selector).classList.add('active');
        document.addEventListener('keyup', e => {
            document.querySelector(selector).classList.remove('active');
        });
    }else{
        console.log("Press a valid Key!");
    }
});

//Click
const keys = document.querySelectorAll('.A, .S, .D, .F, .G, .H, .J, .W, .E, .T, .Y, .U ');
keys.forEach(key => {
    key.addEventListener('mousedown', e => {
        console.log(key.textContent + " is clicked.");
        let path = "media/"+key.textContent+".mp3";
        const audio = new Audio(path);
        audio.play();
        let selector = "."+key.textContent;
        document.querySelector(selector).classList.add('active');
        document.addEventListener('mouseup', e => {
            document.querySelector(selector).classList.remove('active');
        });
    })
});