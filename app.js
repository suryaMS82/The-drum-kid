const playmusic = (path)=>{
    const audio = new Audio(path);
    audio.play() ;

}
document.addEventListener("keypress", (event) =>{
    const triggerkey = event.key ;
    makesounds(triggerkey)
})
const makesounds = (key) => {
    switch(key){
        case "w" :
            playmusic("/sounds/one.mp3");
            break ;
        
        case "a" :
            playmusic("/sounds/sounds_tom-2.mp3");
            break ;
        case "s" :
            playmusic("/sounds/sounds_tom-3.mp3");
            break ;
        case "d" :
            playmusic("/sounds/sounds_tom-4.mp3");
            break ;
        case "j" :
            playmusic("/sounds/sounds_snare.mp3");
            break ;
        case "k" :
            playmusic("/sounds/sounds_kick-bass.mp3");
            break ;
        case "l" :
            playmusic("/sounds/sounds_crash (1).mp3");
            break ;
        default:
            console.log("click wrong one");
    }

}

const ondrumclick = (event) =>{
    //console.log(event);
    var buttonclick = event.target.innerHTML ;
    makesounds(buttonclick)

}
var buttons= document.querySelectorAll(".button");
for (var i=0 ; i< buttons.length ; i++){
    buttons[i].addEventListener("click" ,ondrumclick) 
}



