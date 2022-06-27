const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const pontuacao = document.querySelector(".pontuacao");
const start = document.getElementsByClassName("start");

const jump = ()=> {
    mario.classList.add("jump");

    setTimeout(() => {
        mario.classList.remove("jump");
    }, 500);
}


    const loop = setInterval(() => {
        colision();
    
    }, 10);





const colision = () => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace("px",'');

    if(pipePosition <= 127 && pipePosition > 0 && marioPosition < 60){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`

        mario.src = "./img/game-over.png";
        mario.style.width="80px";
        mario.style.marginLeft = "50px";

        clearInterval(loop);
    }else{
        if(mario.classList.contains("jump") && marioPosition==0){
            let ponto = Number.parseInt(pontuacao.innerHTML);
            pontuacao.innerHTML = ponto+1;
        }
    }
}

document.addEventListener("keydown", jump);