console.log("hello")

function glowUp(elem){
    elem.classList.add('glowing')
}

function glowDown(elem){
    elem.classList.remove('glowing')
}

function pauseSpin(elem){
    elem.style.animationPlayState=='paused' ? elem.style.animationPlayState='running' : elem.style.animationPlayState='paused'
}